import { prisma } from '../../prisma/client';
import { hashPassword, hashPin, hashToken, verifyPin } from '../../utils/hash';
import { nanoid } from 'nanoid';
import { environment } from '../../config/env';
import { signAccessToken } from '../../utils/jwt';
import { addDays } from 'date-fns';
import { Login, Register, ResetPassword } from '../../types/types';
import { User } from '@prisma/client';
import Bottleneck from 'bottleneck';
import { sendOTP, generateUserSafeId, amountInNaira } from '@/utils';
import CustomError from '@/utils/customError';
import { Prisma } from '@prisma/client';

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});


export async function register(data: Register) {
  const phone = data.phone || data.extra?.phone;

  if (!phone) {
    throw new CustomError("Phone number is required", 400);
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      phone,
      bvn: data.bvn,
    },
  });

  if (existingUser && !existingUser.emailVerified) {
    await limiter.schedule(() => sendOTP(existingUser));
    return existingUser;
  }

  if (existingUser && existingUser.emailVerified) {
    throw new CustomError("User already registered", 409);
  }

  const record: Record<string, unknown> = {
    ...data.extra,
  };

  if (data.role === "AGENT") record.agent = { create: {} };
  if (["MERCHANT", "INSTITUTION"].includes(data.role)) {
    record.merchant = { create: {} };
  }

  if (data.email) {
    record.email = data.email;
  }

  const uniqueId = generateUserSafeId();

  const user = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: {
        bvn: data.bvn,
        phone,
        uniqueID: uniqueId,
        ...record,
      },
    });

    await tx.auditLog.create({
      data: {
        userId: createdUser.id,
        action: "REGISTER",
        ip: null,
      },
    });

    return createdUser;
  });

  await limiter.schedule(() => sendOTP(user));

  return user;
}




export async function forgotPin(payload: {phone?: string; email?: string; }): Promise<boolean> {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          phone: payload?.phone,
        },
        {
          email: payload?.email,
        },
      ],
    },
  });

  if (!user) return false;

  limiter.schedule(() => sendOTP(user));

  await prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PIN_CODE' },
  });
  return true;
}


export async function getUserDetailByPhone(payload: { phone?: string; }) {
  try {
  const user = await prisma.user.findFirst({
    where: {
          phone: payload?.phone,        
    },
  });
  return { ...user };
  }catch (error: any) {
      if (error.code === 'P2025') {
        throw new CustomError('This account does not exist', 404);
      }
      throw error;
  }
}


export async function deleteUserAccount(userId: string) {
  try {
    const user = await prisma.user.delete({
      where: { id: userId },
    });
    return user;
  } catch (error: any) {
    if (error.code === 'P2025') {
      throw new CustomError('User not found', 404);
    }
    throw error;
  }
}


export async function login(data: Login) {
  const { email, phone, pin } = data;

  if (!pin) throw new CustomError('PIN is required', 422);
  if (!email && !phone)
    throw new CustomError('Email or phone is required', 422);

  // Find user by email or phone
  const user = await prisma.user.findFirst({
    where: {
      OR: [...(email ? [{ email }] : []), ...(phone ? [{ phone }] : [])],
    },
    include: {
      wallets: true,
    },
  });

  if (!user) throw new CustomError('Invalid credentials', 401);

  if (!user.pin) throw new CustomError('User has not its pin set yet', 400);

  const ok = await verifyPin(user.pin, pin);

  if (!ok) {
    // Optional: increment failed login attempts here
    await prisma.auditLog.create({
      data: { userId: user.id, action: 'FAILED_LOGIN' },
    });

    throw new CustomError('Invalid credentials', 401);
  }

  // Successful login → Log it
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'LOGIN' },
  });

  return {
    ...user,
    wallets: user.wallets.map((w) => ({
      ...w,
      availableBalance: amountInNaira(w.availableBalance),
      ledgerBalance: amountInNaira(w.ledgerBalance),
      reservedBalance: amountInNaira(w.reservedBalance),
    })),
  };
}

export async function loginWithFinger(data: { fingerPrint: string }) {
  const { fingerPrint } = data;

  if (!fingerPrint) {
    throw new CustomError('Finger is required or invalid finger data', 422);
  }

  // Find user directly by fingerprint
  const user = await prisma.user.findFirst({
    where: { fingerPrint: fingerPrint },
  });

  if (!user) {
    throw new CustomError('Invalid fingerprint', 401);
  }

  // Log successful login
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'LOGIN' },
  });

  return user;
}

export async function forgotPassword(data: { email: string; ip?: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) return false;

  limiter.schedule(() => sendOTP(user));

  await prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PASSWORD_CODE', ip: data.ip },
  });

  return true;
}

export async function resetPassword(data: ResetPassword) {
  const { token, newPassword, ip } = data;
  const verificationIntent = await prisma.verificationIntent.findFirst({
    where: { refreshCode: token },
  });
  if (!verificationIntent) throw new Error('Invalid or expired token');

  const newHash = await hashPassword(newPassword);
  const user = await prisma.user.update({
    where: { id: verificationIntent.userId },
    data: {
      password: newHash,
    },
  });

  // revoke all refresh tokens (safety)
  await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'RESET_PASSWORD', ip: ip },
  });
  return user;
}

export async function resetPin(user: User, data: { pin: string }) {
  const hashedPin = await hashPin(data.pin);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      pin: hashedPin,
    },
  });

  // revoke all refresh tokens (safety)
  await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'RESET_PIN' },
  });
  return user;
}

export async function rotateRefreshToken(
  oldTokenRaw: string,
  ip?: string,
  deviceInfo?: string,
) {
  const oldHash = hashToken(oldTokenRaw);
  const existing = await prisma.refreshToken.findUnique({
    where: { tokenHash: oldHash },
  });
  if (!existing || existing.expiresAt < new Date())
    throw new Error('Invalid refresh token');

  const user = await prisma.user.findUnique({ where: { id: existing.userId } });
  if (!user) throw new Error('User not found');

  const newRaw = nanoid(64);
  const newHash = hashToken(newRaw);
  const newExpires = addDays(new Date(), Number(environment.jwt.refreshDays));

  await prisma.$transaction([
    prisma.refreshToken.delete({ where: { id: existing.id } }),
    prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: newHash!,
        expiresAt: newExpires,
        deviceInfo,
      },
    }),
    prisma.auditLog.create({
      data: { userId: user.id, action: 'REFRESH_ROTATED', ip },
    }),
  ]);

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  return {
    accessToken,
    refreshToken: newRaw,
    user: { id: user.id, email: user.email, role: user.role },
  };
}

export async function logout(refreshTokenRaw?: string, ip?: string) {
  if (!refreshTokenRaw) return;
  const hash = hashToken(refreshTokenRaw);
  await prisma.refreshToken.deleteMany({ where: { tokenHash: hash } });
  // audit log optional
}

export async function resendOTP(userId: string, data: any) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) throw new CustomError('User not found', 500);

  if (data.email && data.type === 'EMAIL') {
    const _user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (_user) throw new CustomError('User exist. Click on forgot pin', 409);

    limiter.schedule(() =>
      sendOTP(
        {
          ...user,
          email: data.email,
          name: data?.name ?? '',
        },
        data.type,
      ),
    );
    return;
  }

  limiter.schedule(() => sendOTP(user));

  return true;
}
