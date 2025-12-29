import express, { Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import crypto$1, { randomUUID } from 'crypto';
import argon2 from 'argon2';
import 'url';
import path from 'path';
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import debugModule from 'debug';
import { Resend } from 'resend';
import axios from 'axios';
import 'nanoid';
import jwt from 'jsonwebtoken';
import 'date-fns';
import Bottleneck from 'bottleneck';
import { Worker, Queue as Queue$1 } from 'bullmq';
import IORedis from 'ioredis';
import Joi from 'joi';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fs from 'fs';

// src/prisma/client.ts
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};
const prisma = new PrismaClient({
// log: ['query', 'error', 'warn'],
});

var forgotPassword$1 = (message) => {
    return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
      <style type="text/css" rel="stylesheet" media="all">
      /* Base ------------------------------ */
      
      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
      body {
        width: 100% !important;
        height: 100%;
        margin: 0;
        -webkit-text-size-adjust: none;
      }
      
      a {
        color: #3869D4;
      }
      
      a img {
        border: none;
      }
      
      td {
        word-break: break-word;
      }
      
      .preheader {
        display: none !important;
        visibility: hidden;
        mso-hide: all;
        font-size: 1px;
        line-height: 1px;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
      }
      /* Type ------------------------------ */
      
      body,
      td,
      th {
        font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      }
      
      h1 {
        margin-top: 0;
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        text-align: left;
      }
      
      h2 {
        margin-top: 0;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }
      
      h3 {
        margin-top: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }
      
      td,
      th {
        font-size: 16px;
      }
      
      p,
      ul,
      ol,
      blockquote {
        margin: .4em 0 1.1875em;
        font-size: 16px;
        line-height: 1.625;
      }
      
      p.sub {
        font-size: 13px;
      }
      /* Utilities ------------------------------ */
      
      .align-right {
        text-align: right;
      }
      
      .align-left {
        text-align: left;
      }
      
      .align-center {
        text-align: center;
      }
      /* Buttons ------------------------------ */
      
      .button {
        background-color: #3869D4;
        border-top: 10px solid #3869D4;
        border-right: 18px solid #3869D4;
        border-bottom: 10px solid #3869D4;
        border-left: 18px solid #3869D4;
        display: inline-block;
        color: #FFF;
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
        -webkit-text-size-adjust: none;
        box-sizing: border-box;
      }
      
      .button--green {
        background-color: #22BC66;
        border-top: 10px solid #22BC66;
        border-right: 18px solid #22BC66;
        border-bottom: 10px solid #22BC66;
        border-left: 18px solid #22BC66;
      }
      
      .button--red {
        background-color: #FF6136;
        border-top: 10px solid #FF6136;
        border-right: 18px solid #FF6136;
        border-bottom: 10px solid #FF6136;
        border-left: 18px solid #FF6136;
      }
      
      @media only screen and (max-width: 500px) {
        .button {
          width: 100% !important;
          text-align: center !important;
        }
      }
      /* Attribute list ------------------------------ */
      
      .attributes {
        margin: 0 0 21px;
      }
      
      .attributes_content {
        background-color: #F4F4F7;
        padding: 16px;
      }
      
      .attributes_item {
        padding: 0;
      }
      /* Related Items ------------------------------ */
      
      .related {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .related_item {
        padding: 10px 0;
        color: #CBCCCF;
        font-size: 15px;
        line-height: 18px;
      }
      
      .related_item-title {
        display: block;
        margin: .5em 0 0;
      }
      
      .related_item-thumb {
        display: block;
        padding-bottom: 10px;
      }
      
      .related_heading {
        border-top: 1px solid #CBCCCF;
        text-align: center;
        padding: 25px 0 10px;
      }
      /* Discount Code ------------------------------ */
      
      .discount {
        width: 100%;
        margin: 0;
        padding: 24px;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #F4F4F7;
        border: 2px dashed #CBCCCF;
      }
      
      .discount_heading {
        text-align: center;
      }
      
      .discount_body {
        text-align: center;
        font-size: 15px;
      }
      /* Social Icons ------------------------------ */
      
      .social {
        width: auto;
      }
      
      .social td {
        padding: 0;
        width: auto;
      }
      
      .social_icon {
        height: 20px;
        margin: 0 8px 10px 8px;
        padding: 0;
      }
      /* Data table ------------------------------ */
      
      .purchase {
        width: 100%;
        margin: 0;
        padding: 35px 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .purchase_content {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      
      .purchase_item {
        padding: 10px 0;
        color: #51545E;
        font-size: 15px;
        line-height: 18px;
      }
      
      .purchase_heading {
        padding-bottom: 8px;
        border-bottom: 1px solid #EAEAEC;
      }
      
      .purchase_heading p {
        margin: 0;
        color: #85878E;
        font-size: 12px;
      }
      
      .purchase_footer {
        padding-top: 15px;
        border-top: 1px solid #EAEAEC;
      }
      
      .purchase_total {
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: #333333;
      }
      
      .purchase_total--label {
        padding: 0 15px 0 0;
      }
      
      body {
        background-color: #F4F4F7;
        color: #51545E;
      }
      
      p {
        color: #51545E;
      }
      
      p.sub {
        color: #6B6E76;
      }
      
      .email-wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #F4F4F7;
      }
      
      .email-content {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      /* Masthead ----------------------- */
      
      .email-masthead {
        padding: 25px 0;
        text-align: center;
      }
      
      .email-masthead_logo {
        width: 94px;
      }
      
      .email-masthead_name {
        font-size: 16px;
        font-weight: bold;
        color: #A8AAAF;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
      }
      /* Body ------------------------------ */
      
      .email-body {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #FFFFFF;
      }
      
      .email-body_inner {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #FFFFFF;
      }
      
      .email-footer {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }
      
      .email-footer p {
        color: #6B6E76;
      }
      
      .body-action {
        width: 100%;
        margin: 30px auto;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }
      
      .body-sub {
        margin-top: 25px;
        padding-top: 25px;
        border-top: 1px solid #EAEAEC;
      }
      
      .content-cell {
        padding: 35px;
      }
      /*Media Queries ------------------------------ */
      
      @media only screen and (max-width: 600px) {
        .email-body_inner,
        .email-footer {
          width: 100% !important;
        }
      }
      
      @media (prefers-color-scheme: dark) {
        body,
        .email-body,
        .email-body_inner,
        .email-content,
        .email-wrapper,
        .email-masthead,
        .email-footer {
          background-color: #333333 !important;
          color: #FFF !important;
        }
        p,
        ul,
        ol,
        blockquote,
        h1,
        h2,
        h3 {
          color: #FFF !important;
        }
        .attributes_content,
        .discount {
          background-color: #222 !important;
        }
        .email-masthead_name {
          text-shadow: none !important;
        }
      }
      
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      </style>
      <!--[if mso]>
      <style type="text/css">
        .f-fallback  {
          font-family: Arial, sans-serif;
        }
      </style>
    <![endif]-->
    </head>
    <body>
      <span class="preheader">Use this link to reset your password. The link is only valid for 24 hours.</span>
      <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center">
            <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="email-masthead">
                  <a href="https://masteringbackend.com?source=forgot_password_email" class="f-fallback email-masthead_name">
                  <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                  <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell">
                        <div class="f-fallback">
                          <h1>Hi ${message.to_name},</h1>
                          <p>You recently requested to reset your password for your ${process.env.APP_NAME} account. Use the button below to reset it. <strong>This password reset is only valid for the next 60 minutes.</strong></p>
                          <!-- Action -->
                          <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center">
                                     <!-- <a href="${message.link}" class="f-fallback button button--green" target="_blank">Reset your password</a> -->
                                     <h3>${message.code}</h3>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p>For security, if you did not request a password reset, please ignore this email or <a href="mailto:support@profaili.com">contact support</a> if you have questions.</p>
                          <p>Talk soon,
                            <br>The ${process.env.APP_NAME} Team</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell" align="center">
                    <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                    <p class="f-fallback sub align-center">
                      ${process.env.APP_NAME}
                      <br>No. 100 Ogologo Street, Rumuigbo.
                      <br>Port Harcourt, Rivers, Nigeria
                    </p>
                  </td>
                </tr>
              </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

var passwordChanged = (message) => {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="color-scheme" content="light dark" />
            <meta name="supported-color-schemes" content="light dark" />
            <title></title>
            <style type="text/css" rel="stylesheet" media="all">
            /* Base ------------------------------ */
            
            @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
            body {
              width: 100% !important;
              height: 100%;
              margin: 0;
              -webkit-text-size-adjust: none;
            }
            
            a {
              color: #3869D4;
            }
            
            a img {
              border: none;
            }
            
            td {
              word-break: break-word;
            }
            
            .preheader {
              display: none !important;
              visibility: hidden;
              mso-hide: all;
              font-size: 1px;
              line-height: 1px;
              max-height: 0;
              max-width: 0;
              opacity: 0;
              overflow: hidden;
            }
            /* Type ------------------------------ */
            
            body,
            td,
            th {
              font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
            }
            
            h1 {
              margin-top: 0;
              color: #333333;
              font-size: 22px;
              font-weight: bold;
              text-align: left;
            }
            
            h2 {
              margin-top: 0;
              color: #333333;
              font-size: 16px;
              font-weight: bold;
              text-align: left;
            }
            
            h3 {
              margin-top: 0;
              color: #333333;
              font-size: 14px;
              font-weight: bold;
              text-align: left;
            }
            
            td,
            th {
              font-size: 16px;
            }
            
            p,
            ul,
            ol,
            blockquote {
              margin: .4em 0 1.1875em;
              font-size: 16px;
              line-height: 1.625;
            }
            
            p.sub {
              font-size: 13px;
            }
            /* Utilities ------------------------------ */
            
            .align-right {
              text-align: right;
            }
            
            .align-left {
              text-align: left;
            }
            
            .align-center {
              text-align: center;
            }
            /* Buttons ------------------------------ */
            
            .button {
              background-color: #3869D4;
              border-top: 10px solid #3869D4;
              border-right: 18px solid #3869D4;
              border-bottom: 10px solid #3869D4;
              border-left: 18px solid #3869D4;
              display: inline-block;
              color: #FFF;
              text-decoration: none;
              border-radius: 3px;
              box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
              -webkit-text-size-adjust: none;
              box-sizing: border-box;
            }
            
            .button--green {
              background-color: #22BC66;
              border-top: 10px solid #22BC66;
              border-right: 18px solid #22BC66;
              border-bottom: 10px solid #22BC66;
              border-left: 18px solid #22BC66;
            }
            
            .button--red {
              background-color: #FF6136;
              border-top: 10px solid #FF6136;
              border-right: 18px solid #FF6136;
              border-bottom: 10px solid #FF6136;
              border-left: 18px solid #FF6136;
            }
            
            @media only screen and (max-width: 500px) {
              .button {
                width: 100% !important;
                text-align: center !important;
              }
            }
            /* Attribute list ------------------------------ */
            
            .attributes {
              margin: 0 0 21px;
            }
            
            .attributes_content {
              background-color: #F4F4F7;
              padding: 16px;
            }
            
            .attributes_item {
              padding: 0;
            }
            /* Related Items ------------------------------ */
            
            .related {
              width: 100%;
              margin: 0;
              padding: 25px 0 0 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .related_item {
              padding: 10px 0;
              color: #CBCCCF;
              font-size: 15px;
              line-height: 18px;
            }
            
            .related_item-title {
              display: block;
              margin: .5em 0 0;
            }
            
            .related_item-thumb {
              display: block;
              padding-bottom: 10px;
            }
            
            .related_heading {
              border-top: 1px solid #CBCCCF;
              text-align: center;
              padding: 25px 0 10px;
            }
            /* Discount Code ------------------------------ */
            
            .discount {
              width: 100%;
              margin: 0;
              padding: 24px;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #F4F4F7;
              border: 2px dashed #CBCCCF;
            }
            
            .discount_heading {
              text-align: center;
            }
            
            .discount_body {
              text-align: center;
              font-size: 15px;
            }
            /* Social Icons ------------------------------ */
            
            .social {
              width: auto;
            }
            
            .social td {
              padding: 0;
              width: auto;
            }
            
            .social_icon {
              height: 20px;
              margin: 0 8px 10px 8px;
              padding: 0;
            }
            /* Data table ------------------------------ */
            
            .purchase {
              width: 100%;
              margin: 0;
              padding: 35px 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .purchase_content {
              width: 100%;
              margin: 0;
              padding: 25px 0 0 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            
            .purchase_item {
              padding: 10px 0;
              color: #51545E;
              font-size: 15px;
              line-height: 18px;
            }
            
            .purchase_heading {
              padding-bottom: 8px;
              border-bottom: 1px solid #EAEAEC;
            }
            
            .purchase_heading p {
              margin: 0;
              color: #85878E;
              font-size: 12px;
            }
            
            .purchase_footer {
              padding-top: 15px;
              border-top: 1px solid #EAEAEC;
            }
            
            .purchase_total {
              margin: 0;
              text-align: right;
              font-weight: bold;
              color: #333333;
            }
            
            .purchase_total--label {
              padding: 0 15px 0 0;
            }
            
            body {
              background-color: #F4F4F7;
              color: #51545E;
            }
            
            p {
              color: #51545E;
            }
            
            p.sub {
              color: #6B6E76;
            }
            
            .email-wrapper {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #F4F4F7;
            }
            
            .email-content {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
            }
            /* Masthead ----------------------- */
            
            .email-masthead {
              padding: 25px 0;
              text-align: center;
            }
            
            .email-masthead_logo {
              width: 94px;
            }
            
            .email-masthead_name {
              font-size: 16px;
              font-weight: bold;
              color: #A8AAAF;
              text-decoration: none;
              text-shadow: 0 1px 0 white;
            }
            /* Body ------------------------------ */
            
            .email-body {
              width: 100%;
              margin: 0;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #FFFFFF;
            }
            
            .email-body_inner {
              width: 570px;
              margin: 0 auto;
              padding: 0;
              -premailer-width: 570px;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              background-color: #FFFFFF;
            }
            
            .email-footer {
              width: 570px;
              margin: 0 auto;
              padding: 0;
              -premailer-width: 570px;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              text-align: center;
            }
            
            .email-footer p {
              color: #6B6E76;
            }
            
            .body-action {
              width: 100%;
              margin: 30px auto;
              padding: 0;
              -premailer-width: 100%;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              text-align: center;
            }
            
            .body-sub {
              margin-top: 25px;
              padding-top: 25px;
              border-top: 1px solid #EAEAEC;
            }
            
            .content-cell {
              padding: 35px;
            }
            /*Media Queries ------------------------------ */
            
            @media only screen and (max-width: 600px) {
              .email-body_inner,
              .email-footer {
                width: 100% !important;
              }
            }
            
            @media (prefers-color-scheme: dark) {
              body,
              .email-body,
              .email-body_inner,
              .email-content,
              .email-wrapper,
              .email-masthead,
              .email-footer {
                background-color: #333333 !important;
                color: #FFF !important;
              }
              p,
              ul,
              ol,
              blockquote,
              h1,
              h2,
              h3 {
                color: #FFF !important;
              }
              .attributes_content,
              .discount {
                background-color: #222 !important;
              }
              .email-masthead_name {
                text-shadow: none !important;
              }
            }
            
            :root {
              color-scheme: light dark;
              supported-color-schemes: light dark;
            }
            </style>
            <!--[if mso]>
            <style type="text/css">
              .f-fallback  {
                font-family: Arial, sans-serif;
              }
            </style>
          <![endif]-->
          </head>
          <body>
            <span class="preheader">You have successfully changed your password successfully.</span>
            <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center">
                  <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="email-masthead">
                        <a href="https://masteringbackend.com?source=password_changed_email" class="f-fallback email-masthead_name">
                        <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                      </a>
                      </td>
                    </tr>
                    <!-- Email Body -->
                    <tr>
                      <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                        <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                          <!-- Body content -->
                          <tr>
                            <td class="content-cell">
                              <div class="f-fallback">
                                <h1>Hi ${message.to_name},</h1>
                                <p>The password connected to your Masteringbackend account was changed. If you didn't request this change, talk to us to revert it.</p>
                                <p>If you have any questions, please <a href="mailto:support@masteringbackend.com">contact support</a> if you have questions. — we're always happy to help out.</p>
                                <p>Talk soon,
                                  <br>The ${process.env.APP_NAME} Team</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td class="content-cell" align="center">
                              <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                              <p class="f-fallback sub align-center">
                                ${process.env.APP_NAME}
                                <br>No. 100 Ogologo Street, Rumuigbo.
                                <br>Port Harcourt, Rivers, Nigeria
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>`;
};

var welcome = (message) => {
    return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
      <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
  
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          -webkit-text-size-adjust: none;
        }
  
        a {
          color: #3869d4;
        }
  
        a img {
          border: none;
        }
  
        td {
          word-break: break-word;
        }
  
        .preheader {
          display: none !important;
          visibility: hidden;
          mso-hide: all;
          font-size: 1px;
          line-height: 1px;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
        }
        /* Type ------------------------------ */
  
        body,
        td,
        th {
          font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
        }
  
        h1 {
          margin-top: 0;
          color: #333333;
          font-size: 22px;
          font-weight: bold;
          text-align: left;
        }
  
        h2 {
          margin-top: 0;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
  
        h3 {
          margin-top: 0;
          color: #333333;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
  
        td,
        th {
          font-size: 16px;
        }
  
        p,
        ul,
        ol,
        blockquote {
          margin: 0.4em 0 1.1875em;
          font-size: 16px;
          line-height: 1.625;
        }
  
        p.sub {
          font-size: 13px;
        }
        /* Utilities ------------------------------ */
  
        .align-right {
          text-align: right;
        }
  
        .align-left {
          text-align: left;
        }
  
        .align-center {
          text-align: center;
        }
        /* Buttons ------------------------------ */
  
        .button {
          background-color: #3869d4;
          border-top: 10px solid #3869d4;
          border-right: 18px solid #3869d4;
          border-bottom: 10px solid #3869d4;
          border-left: 18px solid #3869d4;
          display: inline-block;
          color: #fff;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          -webkit-text-size-adjust: none;
          box-sizing: border-box;
        }
  
        .button--green {
          background-color: #22bc66;
          border-top: 10px solid #22bc66;
          border-right: 18px solid #22bc66;
          border-bottom: 10px solid #22bc66;
          border-left: 18px solid #22bc66;
        }
  
        .button--red {
          background-color: #ff6136;
          border-top: 10px solid #ff6136;
          border-right: 18px solid #ff6136;
          border-bottom: 10px solid #ff6136;
          border-left: 18px solid #ff6136;
        }
  
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        /* Attribute list ------------------------------ */
  
        .attributes {
          margin: 0 0 21px;
        }
  
        .attributes_content {
          background-color: #f4f4f7;
          padding: 16px;
        }
  
        .attributes_item {
          padding: 0;
        }
        /* Related Items ------------------------------ */
  
        .related {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .related_item {
          padding: 10px 0;
          color: #cbcccf;
          font-size: 15px;
          line-height: 18px;
        }
  
        .related_item-title {
          display: block;
          margin: 0.5em 0 0;
        }
  
        .related_item-thumb {
          display: block;
          padding-bottom: 10px;
        }
  
        .related_heading {
          border-top: 1px solid #cbcccf;
          text-align: center;
          padding: 25px 0 10px;
        }
        /* Discount Code ------------------------------ */
  
        .discount {
          width: 100%;
          margin: 0;
          padding: 24px;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #f4f4f7;
          border: 2px dashed #cbcccf;
        }
  
        .discount_heading {
          text-align: center;
        }
  
        .discount_body {
          text-align: center;
          font-size: 15px;
        }
        /* Social Icons ------------------------------ */
  
        .social {
          width: auto;
        }
  
        .social td {
          padding: 0;
          width: auto;
        }
  
        .social_icon {
          height: 20px;
          margin: 0 8px 10px 8px;
          padding: 0;
        }
        /* Data table ------------------------------ */
  
        .purchase {
          width: 100%;
          margin: 0;
          padding: 35px 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .purchase_content {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
  
        .purchase_item {
          padding: 10px 0;
          color: #51545e;
          font-size: 15px;
          line-height: 18px;
        }
  
        .purchase_heading {
          padding-bottom: 8px;
          border-bottom: 1px solid #eaeaec;
        }
  
        .purchase_heading p {
          margin: 0;
          color: #85878e;
          font-size: 12px;
        }
  
        .purchase_footer {
          padding-top: 15px;
          border-top: 1px solid #eaeaec;
        }
  
        .purchase_total {
          margin: 0;
          text-align: right;
          font-weight: bold;
          color: #333333;
        }
  
        .purchase_total--label {
          padding: 0 15px 0 0;
        }
  
        body {
          background-color: #f4f4f7;
          color: #51545e;
        }
  
        p {
          color: #51545e;
        }
  
        p.sub {
          color: #6b6e76;
        }
  
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #f4f4f7;
        }
  
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        /* Masthead ----------------------- */
  
        .email-masthead {
          padding: 25px 0;
          text-align: center;
        }
  
        .email-masthead_logo {
          width: 94px;
        }
  
        .email-masthead_name {
          font-size: 16px;
          font-weight: bold;
          color: #a8aaaf;
          text-decoration: none;
          text-shadow: 0 1px 0 white;
        }
        /* Body ------------------------------ */
  
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #ffffff;
        }
  
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #ffffff;
        }
  
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
  
        .email-footer p {
          color: #6b6e76;
        }
  
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
  
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #eaeaec;
        }
  
        .content-cell {
          padding: 35px;
        }
        /*Media Queries ------------------------------ */
  
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
  
        @media (prefers-color-scheme: dark) {
          body,
          .email-body,
          .email-body_inner,
          .email-content,
          .email-wrapper,
          .email-masthead,
          .email-footer {
            background-color: #333333 !important;
            color: #fff !important;
          }
          p,
          ul,
          ol,
          blockquote,
          h1,
          h2,
          h3 {
            color: #fff !important;
          }
          .attributes_content,
          .discount {
            background-color: #222 !important;
          }
          .email-masthead_name {
            text-shadow: none !important;
          }
        }
  
        :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }
      </style>
      <!--[if mso]>
        <style type="text/css">
          .f-fallback {
            font-family: Arial, sans-serif;
          }
        </style>
      <![endif]-->
    </head>
    <body>
      <span class="preheader"
        >Welcome to Masteringbackend! I'm super excited to welcome you
        aboard.</span
      >
      <table
        class="email-wrapper"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tr>
          <td align="center">
            <table
              class="email-content"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td class="email-masthead">
                  <a
                    href="https://masteringbackend.com?source=welcome_email"
                    class="f-fallback email-masthead_name"
                  >
                  <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                  </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td
                  class="email-body"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <table
                    class="email-body_inner"
                    align="center"
                    width="570"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell">
                        <div class="f-fallback">
                          <h1>Hi ${message.to_name},</h1>
                          <p>
                            Welcome to Masteringbackend! I'm super excited to welcome you
                            aboard. My name is Solomon and I'll support you with
                            any questions you have.
                          </p>
                          <p>
                            Now that you're here, let me briefly recap the most
                            important features Masteringbackend can offer you:
                          </p>
                          <ul>
                            <li>Video and Text based Backend Engineering courses</li>
                            <li>
                              Personal Backend Portfolio to showcase your skills
                            </li>
                            <li>Learn to build from Thousands Real-world Projects</li>
                            <li>Track your learnings and set schedules</li>
                            <li>
                              Follow Expert Vetted roadmaps to learn backend engineering.
                            </li>
                              <li>
                              Map courses to Backend Projects to help you master your skills
                            </li>
                            <li>Online coding challenges by experts to improve your skills</li>
                            <li>Pick projects from different business domains to practice.</li>
                          </ul>
  
                          <p>Here are some of the features on the way:</p>
                          <ol>
                            <li>
                              <strong>Roadmaps => </strong>MB Roadmap enables structured-based learning approach for Backend engineers.
                            </li>
                            <li>
                              <strong>Project Land => </strong>MB Projects enables Backend engineers through a learn-by-building model. Build real-world backend projects without coding the frontend.
                            </li>
                            <li>
                              <strong>Backend Portfolio => </strong
                              >Create and manage your backend portfolio with tons of real world backend projects.
                            </li>
                            <li>
                              <strong>BackLand => </strong
                              >Learn backend engineering by solving challenges in a gamifying way.
                            </li>
                             
                          </ol>
                        </div>
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Arial', sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        If you have any questions, don't be shy and reach out to
                        our team on
                        <a
                          style="font-weight: bold;"
                          href="mailto:info@masteringbackend.com"
                          >info@masteringbackend.com</a
                        >.
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Arial', sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        To help you get started in no time, here's a link to our
                        <a style="font-weight: bold;" href="#"
                          >demo video</a
                        >
                        and
                        <a
                          style="font-weight: bold; color:"
                          href="https://masteringbackend.com/posts"
                          >blog</a
                        >.
                        <p style="padding: 20px 0 0 0">
                          Talk soon, <br />Solomon from ${process.env.APP_NAME}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td>
                  <table
                    class="email-footer"
                    align="center"
                    width="570"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td class="content-cell" align="center">
                        <p class="f-fallback sub align-center">
                          &copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.
                        </p>
                        <p class="f-fallback sub align-center">
                          ${process.env.APP_NAME}
                          <br />No. 100 Ogologo Street, Rumuigbo. <br />Port
                          Harcourt, Rivers, Nigeria
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  
  `;
};

var verificationEmail = (message) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title></title>
        <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
        
        @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          -webkit-text-size-adjust: none;
        }
        
        a {
          color: #3869D4;
        }
        
        a img {
          border: none;
        }
        
        td {
          word-break: break-word;
        }
        
        .preheader {
          display: none !important;
          visibility: hidden;
          mso-hide: all;
          font-size: 1px;
          line-height: 1px;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
        }
        /* Type ------------------------------ */
        
        body,
        td,
        th {
          font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
        }
        
        h1 {
          margin-top: 0;
          color: #333333;
          font-size: 22px;
          font-weight: bold;
          text-align: left;
        }
        
        h2 {
          margin-top: 0;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
        
        h3 {
          margin-top: 0;
          color: #333333;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        
        td,
        th {
          font-size: 16px;
        }
        
        p,
        ul,
        ol,
        blockquote {
          margin: .4em 0 1.1875em;
          font-size: 16px;
          line-height: 1.625;
        }
        
        p.sub {
          font-size: 13px;
        }
        /* Utilities ------------------------------ */
        
        .align-right {
          text-align: right;
        }
        
        .align-left {
          text-align: left;
        }
        
        .align-center {
          text-align: center;
        }
        /* Buttons ------------------------------ */
        
        .button {
          background-color: #3869D4;
          border-top: 10px solid #3869D4;
          border-right: 18px solid #3869D4;
          border-bottom: 10px solid #3869D4;
          border-left: 18px solid #3869D4;
          display: inline-block;
          color: #FFF;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          -webkit-text-size-adjust: none;
          box-sizing: border-box;
        }
        
        .button--green {
          background-color: #22BC66;
          border-top: 10px solid #22BC66;
          border-right: 18px solid #22BC66;
          border-bottom: 10px solid #22BC66;
          border-left: 18px solid #22BC66;
        }
        
        .button--red {
          background-color: #FF6136;
          border-top: 10px solid #FF6136;
          border-right: 18px solid #FF6136;
          border-bottom: 10px solid #FF6136;
          border-left: 18px solid #FF6136;
        }
        
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        /* Attribute list ------------------------------ */
        
        .attributes {
          margin: 0 0 21px;
        }
        
        .attributes_content {
          background-color: #F4F4F7;
          padding: 16px;
        }
        
        .attributes_item {
          padding: 0;
        }
        /* Related Items ------------------------------ */
        
        .related {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .related_item {
          padding: 10px 0;
          color: #CBCCCF;
          font-size: 15px;
          line-height: 18px;
        }
        
        .related_item-title {
          display: block;
          margin: .5em 0 0;
        }
        
        .related_item-thumb {
          display: block;
          padding-bottom: 10px;
        }
        
        .related_heading {
          border-top: 1px solid #CBCCCF;
          text-align: center;
          padding: 25px 0 10px;
        }
        /* Discount Code ------------------------------ */
        
        .discount {
          width: 100%;
          margin: 0;
          padding: 24px;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F4F4F7;
          border: 2px dashed #CBCCCF;
        }
        
        .discount_heading {
          text-align: center;
        }
        
        .discount_body {
          text-align: center;
          font-size: 15px;
        }
        /* Social Icons ------------------------------ */
        
        .social {
          width: auto;
        }
        
        .social td {
          padding: 0;
          width: auto;
        }
        
        .social_icon {
          height: 20px;
          margin: 0 8px 10px 8px;
          padding: 0;
        }
        /* Data table ------------------------------ */
        
        .purchase {
          width: 100%;
          margin: 0;
          padding: 35px 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_content {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_item {
          padding: 10px 0;
          color: #51545E;
          font-size: 15px;
          line-height: 18px;
        }
        
        .purchase_heading {
          padding-bottom: 8px;
          border-bottom: 1px solid #EAEAEC;
        }
        
        .purchase_heading p {
          margin: 0;
          color: #85878E;
          font-size: 12px;
        }
        
        .purchase_footer {
          padding-top: 15px;
          border-top: 1px solid #EAEAEC;
        }
        
        .purchase_total {
          margin: 0;
          text-align: right;
          font-weight: bold;
          color: #333333;
        }
        
        .purchase_total--label {
          padding: 0 15px 0 0;
        }
        
        body {
          background-color: #F4F4F7;
          color: #51545E;
        }
        
        p {
          color: #51545E;
        }
        
        p.sub {
          color: #6B6E76;
        }
        
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F4F4F7;
        }
        
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        /* Masthead ----------------------- */
        
        .email-masthead {
          padding: 25px 0;
          text-align: center;
        }
        
        .email-masthead_logo {
          width: 94px;
        }
        
        .email-masthead_name {
          font-size: 16px;
          font-weight: bold;
          color: #A8AAAF;
          text-decoration: none;
          text-shadow: 0 1px 0 white;
        }
        /* Body ------------------------------ */
        
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #FFFFFF;
        }
        
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #FFFFFF;
        }
        
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .email-footer p {
          color: #6B6E76;
        }
        
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #EAEAEC;
        }
        
        .content-cell {
          padding: 35px;
        }
        /*Media Queries ------------------------------ */
        
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          body,
          .email-body,
          .email-body_inner,
          .email-content,
          .email-wrapper,
          .email-masthead,
          .email-footer {
            background-color: #333333 !important;
            color: #FFF !important;
          }
          p,
          ul,
          ol,
          blockquote,
          h1,
          h2,
          h3 {
            color: #FFF !important;
          }
          .attributes_content,
          .discount {
            background-color: #222 !important;
          }
          .email-masthead_name {
            text-shadow: none !important;
          }
        }
        
        :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }
        </style>
        <!--[if mso]>
        <style type="text/css">
          .f-fallback  {
            font-family: Arial, sans-serif;
          }
        </style>
      <![endif]-->
      </head>
      <body>
        <span class="preheader">Use this code to verify your email address. The code is only valid for 24 hours.</span>
        <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center">
              <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="email-masthead">
                    <a href="https://masteringbackend.com?source=verification_email" class="f-fallback email-masthead_name">
                    <img width="200" height="auto" src="https://masteringbackend.com/_nuxt/img/logo.07779e2.png" alt="Masteringbackend">
                  </a>
                  </td>
                </tr>
                <!-- Email Body -->
                <tr>
                  <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                    <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <!-- Body content -->
                      <tr>
                        <td class="content-cell">
                          <div class="f-fallback">
                            <h1>Hi ${message.to_name},</h1>
                            <p>Thanks for signing up for ${process.env.APP_NAME}! This email verification step is required to make sure we have an accurate email address to communicate important account events to you.</p>
                            <p>To confirm your email address, please copy and paste the code below in your browser, back to the sign up workflow inside our app:</p>
                            <!-- Action -->
                            <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td align="center">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td align="center">
                                       <h1>${message.code}</h1>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <p>If you have any questions, please <a href="mailto:support@masteringbackend.com">contact support</a> if you have questions. — we're always happy to help out.</p>
                            <p>Talk soon,
                              <br>The ${process.env.APP_NAME} Team</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="content-cell" align="center">
                          <p class="f-fallback sub align-center">&copy; ${new Date().getFullYear()} ${process.env.APP_NAME}. All rights reserved.</p>
                          <p class="f-fallback sub align-center">
                            ${process.env.APP_NAME}
                            <br>No. 100 Ogologo Street, Rumuigbo.
                            <br>Port Harcourt, Rivers, Nigeria
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`;
};

const defaultPort = 3000;
const context = process.env.CONTEXT || 'LOCAL';
const environment = {
    context,
    port: process.env.PORT || defaultPort,
    appName: process.env.APP_NAME,
    domain: process.env.FE_URL,
    debug: process.env.DEBUG,
    password: {
        passwordResetsIn: Number(process.env.PASSWORD_RESET_EXPIRES_MIN),
    },
    database: {
        url: process.env.DATABASE_URL,
    },
    aws: {
        projectId: process.env.GCP_PROIECT_ID,
        bucket: process.env.GCP_BUCKET_NAME,
    },
    jwt: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        refreshDays: process.env.REFRESH_TOKEN_EXPIRES_DAYS,
        secret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        saltRounds: Number(process.env.AUTH_SALT_ROUNDS) || 10,
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT || '6379'),
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 2525,
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD,
        sender: process.env.MAIL_SENDER,
    },
    google: {
        projectId: process.env.GCP_PROJECT_ID,
        clientEmail: process.env.GCP_CLIENT_EMAIL,
        privateKey: process.env.GCP_PRIVATE_KEY,
        bucketName: process.env.GCP_BUCKET,
        bucketNameTemporary: process.env.GCP_BUCKET_TEMPORARY,
        asyncFunction: process.env.GCP_ASYNC_FUNCTION,
        taskQueue: process.env.GCP_ASYNC_TASK_QUEUE,
        taskQueueHandler: process.env.GCP_ASYNC_TASK_QUEUE_HANDLER,
        taskQueueLocation: process.env.GCP_ASYNC_TASK_QUEUE_LOCATION,
        oauthGoogleClientToken: process.env.OAUTH_GOOGLE_CLIENT_TOKEN,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
    },
    youverify: {
        url: process.env.YOUVERIFY_URL,
        key: process.env.YOUVERIFY_KEY,
    },
    embedly: {
        id: process.env.EMBEDLY_ID,
        key: process.env.EMBEDLY_KEY,
        url: process.env.EMBEDLY_URL,
        payoutURL: process.env.EMBEDLY_PAYOUT_URL,
        webhookURL: process.env.EMBEDLY_WEBHOOK_URL,
        orgAccount: Number(process.env.EMBEDLY_ORGANIZATION_ACCOUNT),
        orgName: process.env.EMBEDLY_ORGANIZATION_NAME,
    },
    cloudflare: {
        bucket: process.env.CLOUDFLARE_BUCKET_NAME,
        key: process.env.CLOUDFLARE_ACCESS_KEY_ID,
        secret: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
        url: process.env.CLOUDFLARE_BUCKET_URL,
    },
    qoreId: {
        url: process.env.QOREID_BASE_URL,
        client: process.env.QOREID_CLIENT,
        secret: process.env.QOREID_SECRET,
    },
    akuuk: {
        url: process.env.AKUUK_BASE_URL,
        id: process.env.AKUUK_ACCOUNT_ID,
        key: process.env.AKUUK_KEY,
        sender: process.env.AKUUK_SENDER,
    },
};

const debug = debugModule;
debug('api:info');
const logError = debug('api:error');
debug('api:field-resolver');
debug('api:query');
debug('api:mutation');
debug('api:helper');

var sendEmail = async ({ to, template, variables, templateId }) => {
    if (!template)
        throw new Error('No mail template specified');
    const { subject, template: temp } = await selectTemplate({
        template,
        variables,
    });
    if (['PRODUCTION', 'DEVELOP'].includes(environment.context)) {
        const resend = new Resend(process.env.RESEND_KEY);
        const { data, error } = await resend.emails.send({
            from: `"${process.env.APP_NAME}" <info@emails.masteringbackend.com>`,
            to: to,
            subject: subject,
            html: temp ?? '<h2>Check the subject </h2>',
        });
        if (error) {
            console.log(error);
            return;
        }
        return data;
    }
    new Promise((resolve, reject) => {
        // create message
        const mailOptions = {
            from: `"${process.env.APP_NAME}" <info@pressmoni.com>`,
            to,
            subject,
            html: temp ?? '<h2>Check the subject </h2>',
        };
        const mailConfig = {
            host: environment.mail?.host || 'smtp.mailtrap.io',
            port: environment.mail?.port,
            secure: true,
            auth: {
                user: environment.mail?.username || 'a3d1159bbbe3a6', //generated by Mailtrap
                pass: environment.mail?.password || '2b4668fe2d6a67', //generated by Mailtrap
            },
            connectionTimeout: 10000, // 10 seconds
            greetingTimeout: 10000,
            socketTimeout: 10000,
        };
        // console.log(mailOptions, mailConfig);
        if (environment.mail?.host?.includes('gmail'))
            mailConfig['service'] = environment.mail?.host;
        const transporter = nodemailer.createTransport(mailConfig);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                logError('sendEmail %o', { mailOptions, error });
                reject(new Error('try email again later'));
                return;
            }
            console.log(info);
            transporter.close();
            resolve(info);
        });
        return;
    });
};
const selectTemplate = async ({ template, variables }) => {
    let subject = ``;
    let _template = undefined;
    switch (template) {
        case 'forgot-password':
            subject += `Password Reset`;
            _template = forgotPassword$1(variables);
            break;
        case 'verification':
            subject += `Email Verification`;
            _template = verificationEmail(variables);
            break;
        case 'password-changed':
            subject += `Password Changed`;
            _template = passwordChanged(variables);
            break;
        case 'welcome':
            subject += `Welcome to Masteringbackend!`;
            _template = welcome(variables);
            break;
    }
    return { template: _template, subject };
};

class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

const countryCodes = [
    {
        name: 'Afghanistan',
        dial_code: '+93',
        code: 'AF',
    },
    {
        name: 'Aland Islands',
        dial_code: '+358',
        code: 'AX',
    },
    {
        name: 'Albania',
        dial_code: '+355',
        code: 'AL',
    },
    {
        name: 'Algeria',
        dial_code: '+213',
        code: 'DZ',
    },
    {
        name: 'AmericanSamoa',
        dial_code: '+1684',
        code: 'AS',
    },
    {
        name: 'Andorra',
        dial_code: '+376',
        code: 'AD',
    },
    {
        name: 'Angola',
        dial_code: '+244',
        code: 'AO',
    },
    {
        name: 'Anguilla',
        dial_code: '+1264',
        code: 'AI',
    },
    {
        name: 'Antarctica',
        dial_code: '+672',
        code: 'AQ',
    },
    {
        name: 'Antigua and Barbuda',
        dial_code: '+1268',
        code: 'AG',
    },
    {
        name: 'Argentina',
        dial_code: '+54',
        code: 'AR',
    },
    {
        name: 'Armenia',
        dial_code: '+374',
        code: 'AM',
    },
    {
        name: 'Aruba',
        dial_code: '+297',
        code: 'AW',
    },
    {
        name: 'Australia',
        dial_code: '+61',
        code: 'AU',
    },
    {
        name: 'Austria',
        dial_code: '+43',
        code: 'AT',
    },
    {
        name: 'Azerbaijan',
        dial_code: '+994',
        code: 'AZ',
    },
    {
        name: 'Bahamas',
        dial_code: '+1242',
        code: 'BS',
    },
    {
        name: 'Bahrain',
        dial_code: '+973',
        code: 'BH',
    },
    {
        name: 'Bangladesh',
        dial_code: '+880',
        code: 'BD',
    },
    {
        name: 'Barbados',
        dial_code: '+1246',
        code: 'BB',
    },
    {
        name: 'Belarus',
        dial_code: '+375',
        code: 'BY',
    },
    {
        name: 'Belgium',
        dial_code: '+32',
        code: 'BE',
    },
    {
        name: 'Belize',
        dial_code: '+501',
        code: 'BZ',
    },
    {
        name: 'Benin',
        dial_code: '+229',
        code: 'BJ',
    },
    {
        name: 'Bermuda',
        dial_code: '+1441',
        code: 'BM',
    },
    {
        name: 'Bhutan',
        dial_code: '+975',
        code: 'BT',
    },
    {
        name: 'Bolivia, Plurinational State of',
        dial_code: '+591',
        code: 'BO',
    },
    {
        name: 'Bosnia and Herzegovina',
        dial_code: '+387',
        code: 'BA',
    },
    {
        name: 'Botswana',
        dial_code: '+267',
        code: 'BW',
    },
    {
        name: 'Brazil',
        dial_code: '+55',
        code: 'BR',
    },
    {
        name: 'British Indian Ocean Territory',
        dial_code: '+246',
        code: 'IO',
    },
    {
        name: 'Brunei Darussalam',
        dial_code: '+673',
        code: 'BN',
    },
    {
        name: 'Bulgaria',
        dial_code: '+359',
        code: 'BG',
    },
    {
        name: 'Burkina Faso',
        dial_code: '+226',
        code: 'BF',
    },
    {
        name: 'Burundi',
        dial_code: '+257',
        code: 'BI',
    },
    {
        name: 'Cambodia',
        dial_code: '+855',
        code: 'KH',
    },
    {
        name: 'Cameroon',
        dial_code: '+237',
        code: 'CM',
    },
    {
        name: 'Canada',
        dial_code: '+1',
        code: 'CA',
    },
    {
        name: 'Cape Verde',
        dial_code: '+238',
        code: 'CV',
    },
    {
        name: 'Cayman Islands',
        dial_code: '+345',
        code: 'KY',
    },
    {
        name: 'Central African Republic',
        dial_code: '+236',
        code: 'CF',
    },
    {
        name: 'Chad',
        dial_code: '+235',
        code: 'TD',
    },
    {
        name: 'Chile',
        dial_code: '+56',
        code: 'CL',
    },
    {
        name: 'China',
        dial_code: '+86',
        code: 'CN',
    },
    {
        name: 'Christmas Island',
        dial_code: '+61',
        code: 'CX',
    },
    {
        name: 'Cocos (Keeling) Islands',
        dial_code: '+61',
        code: 'CC',
    },
    {
        name: 'Colombia',
        dial_code: '+57',
        code: 'CO',
    },
    {
        name: 'Comoros',
        dial_code: '+269',
        code: 'KM',
    },
    {
        name: 'Congo',
        dial_code: '+242',
        code: 'CG',
    },
    {
        name: 'Congo, The Democratic Republic of the Congo',
        dial_code: '+243',
        code: 'CD',
    },
    {
        name: 'Cook Islands',
        dial_code: '+682',
        code: 'CK',
    },
    {
        name: 'Costa Rica',
        dial_code: '+506',
        code: 'CR',
    },
    {
        name: "Cote d'Ivoire",
        dial_code: '+225',
        code: 'CI',
    },
    {
        name: 'Croatia',
        dial_code: '+385',
        code: 'HR',
    },
    {
        name: 'Cuba',
        dial_code: '+53',
        code: 'CU',
    },
    {
        name: 'Cyprus',
        dial_code: '+357',
        code: 'CY',
    },
    {
        name: 'Czech Republic',
        dial_code: '+420',
        code: 'CZ',
    },
    {
        name: 'Denmark',
        dial_code: '+45',
        code: 'DK',
    },
    {
        name: 'Djibouti',
        dial_code: '+253',
        code: 'DJ',
    },
    {
        name: 'Dominica',
        dial_code: '+1767',
        code: 'DM',
    },
    {
        name: 'Dominican Republic',
        dial_code: '+1849',
        code: 'DO',
    },
    {
        name: 'Ecuador',
        dial_code: '+593',
        code: 'EC',
    },
    {
        name: 'Egypt',
        dial_code: '+20',
        code: 'EG',
    },
    {
        name: 'El Salvador',
        dial_code: '+503',
        code: 'SV',
    },
    {
        name: 'Equatorial Guinea',
        dial_code: '+240',
        code: 'GQ',
    },
    {
        name: 'Eritrea',
        dial_code: '+291',
        code: 'ER',
    },
    {
        name: 'Estonia',
        dial_code: '+372',
        code: 'EE',
    },
    {
        name: 'Ethiopia',
        dial_code: '+251',
        code: 'ET',
    },
    {
        name: 'Falkland Islands (Malvinas)',
        dial_code: '+500',
        code: 'FK',
    },
    {
        name: 'Faroe Islands',
        dial_code: '+298',
        code: 'FO',
    },
    {
        name: 'Fiji',
        dial_code: '+679',
        code: 'FJ',
    },
    {
        name: 'Finland',
        dial_code: '+358',
        code: 'FI',
    },
    {
        name: 'France',
        dial_code: '+33',
        code: 'FR',
    },
    {
        name: 'French Guiana',
        dial_code: '+594',
        code: 'GF',
    },
    {
        name: 'French Polynesia',
        dial_code: '+689',
        code: 'PF',
    },
    {
        name: 'Gabon',
        dial_code: '+241',
        code: 'GA',
    },
    {
        name: 'Gambia',
        dial_code: '+220',
        code: 'GM',
    },
    {
        name: 'Georgia',
        dial_code: '+995',
        code: 'GE',
    },
    {
        name: 'Germany',
        dial_code: '+49',
        code: 'DE',
    },
    {
        name: 'Ghana',
        dial_code: '+233',
        code: 'GH',
    },
    {
        name: 'Gibraltar',
        dial_code: '+350',
        code: 'GI',
    },
    {
        name: 'Greece',
        dial_code: '+30',
        code: 'GR',
    },
    {
        name: 'Greenland',
        dial_code: '+299',
        code: 'GL',
    },
    {
        name: 'Grenada',
        dial_code: '+1473',
        code: 'GD',
    },
    {
        name: 'Guadeloupe',
        dial_code: '+590',
        code: 'GP',
    },
    {
        name: 'Guam',
        dial_code: '+1671',
        code: 'GU',
    },
    {
        name: 'Guatemala',
        dial_code: '+502',
        code: 'GT',
    },
    {
        name: 'Guernsey',
        dial_code: '+44',
        code: 'GG',
    },
    {
        name: 'Guinea',
        dial_code: '+224',
        code: 'GN',
    },
    {
        name: 'Guinea-Bissau',
        dial_code: '+245',
        code: 'GW',
    },
    {
        name: 'Guyana',
        dial_code: '+595',
        code: 'GY',
    },
    {
        name: 'Haiti',
        dial_code: '+509',
        code: 'HT',
    },
    {
        name: 'Holy See (Vatican City State)',
        dial_code: '+379',
        code: 'VA',
    },
    {
        name: 'Honduras',
        dial_code: '+504',
        code: 'HN',
    },
    {
        name: 'Hong Kong',
        dial_code: '+852',
        code: 'HK',
    },
    {
        name: 'Hungary',
        dial_code: '+36',
        code: 'HU',
    },
    {
        name: 'Iceland',
        dial_code: '+354',
        code: 'IS',
    },
    {
        name: 'India',
        dial_code: '+91',
        code: 'IN',
    },
    {
        name: 'Indonesia',
        dial_code: '+62',
        code: 'ID',
    },
    {
        name: 'Iran, Islamic Republic of Persian Gulf',
        dial_code: '+98',
        code: 'IR',
    },
    {
        name: 'Iraq',
        dial_code: '+964',
        code: 'IQ',
    },
    {
        name: 'Ireland',
        dial_code: '+353',
        code: 'IE',
    },
    {
        name: 'Isle of Man',
        dial_code: '+44',
        code: 'IM',
    },
    {
        name: 'Israel',
        dial_code: '+972',
        code: 'IL',
    },
    {
        name: 'Italy',
        dial_code: '+39',
        code: 'IT',
    },
    {
        name: 'Jamaica',
        dial_code: '+1876',
        code: 'JM',
    },
    {
        name: 'Japan',
        dial_code: '+81',
        code: 'JP',
    },
    {
        name: 'Jersey',
        dial_code: '+44',
        code: 'JE',
    },
    {
        name: 'Jordan',
        dial_code: '+962',
        code: 'JO',
    },
    {
        name: 'Kazakhstan',
        dial_code: '+77',
        code: 'KZ',
    },
    {
        name: 'Kenya',
        dial_code: '+254',
        code: 'KE',
    },
    {
        name: 'Kiribati',
        dial_code: '+686',
        code: 'KI',
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: '+850',
        code: 'KP',
    },
    {
        name: 'Korea, Republic of South Korea',
        dial_code: '+82',
        code: 'KR',
    },
    {
        name: 'Kuwait',
        dial_code: '+965',
        code: 'KW',
    },
    {
        name: 'Kyrgyzstan',
        dial_code: '+996',
        code: 'KG',
    },
    {
        name: 'Laos',
        dial_code: '+856',
        code: 'LA',
    },
    {
        name: 'Latvia',
        dial_code: '+371',
        code: 'LV',
    },
    {
        name: 'Lebanon',
        dial_code: '+961',
        code: 'LB',
    },
    {
        name: 'Lesotho',
        dial_code: '+266',
        code: 'LS',
    },
    {
        name: 'Liberia',
        dial_code: '+231',
        code: 'LR',
    },
    {
        name: 'Libyan Arab Jamahiriya',
        dial_code: '+218',
        code: 'LY',
    },
    {
        name: 'Liechtenstein',
        dial_code: '+423',
        code: 'LI',
    },
    {
        name: 'Lithuania',
        dial_code: '+370',
        code: 'LT',
    },
    {
        name: 'Luxembourg',
        dial_code: '+352',
        code: 'LU',
    },
    {
        name: 'Macao',
        dial_code: '+853',
        code: 'MO',
    },
    {
        name: 'Macedonia',
        dial_code: '+389',
        code: 'MK',
    },
    {
        name: 'Madagascar',
        dial_code: '+261',
        code: 'MG',
    },
    {
        name: 'Malawi',
        dial_code: '+265',
        code: 'MW',
    },
    {
        name: 'Malaysia',
        dial_code: '+60',
        code: 'MY',
    },
    {
        name: 'Maldives',
        dial_code: '+960',
        code: 'MV',
    },
    {
        name: 'Mali',
        dial_code: '+223',
        code: 'ML',
    },
    {
        name: 'Malta',
        dial_code: '+356',
        code: 'MT',
    },
    {
        name: 'Marshall Islands',
        dial_code: '+692',
        code: 'MH',
    },
    {
        name: 'Martinique',
        dial_code: '+596',
        code: 'MQ',
    },
    {
        name: 'Mauritania',
        dial_code: '+222',
        code: 'MR',
    },
    {
        name: 'Mauritius',
        dial_code: '+230',
        code: 'MU',
    },
    {
        name: 'Mayotte',
        dial_code: '+262',
        code: 'YT',
    },
    {
        name: 'Mexico',
        dial_code: '+52',
        code: 'MX',
    },
    {
        name: 'Micronesia, Federated States of Micronesia',
        dial_code: '+691',
        code: 'FM',
    },
    {
        name: 'Moldova',
        dial_code: '+373',
        code: 'MD',
    },
    {
        name: 'Monaco',
        dial_code: '+377',
        code: 'MC',
    },
    {
        name: 'Mongolia',
        dial_code: '+976',
        code: 'MN',
    },
    {
        name: 'Montenegro',
        dial_code: '+382',
        code: 'ME',
    },
    {
        name: 'Montserrat',
        dial_code: '+1664',
        code: 'MS',
    },
    {
        name: 'Morocco',
        dial_code: '+212',
        code: 'MA',
    },
    {
        name: 'Mozambique',
        dial_code: '+258',
        code: 'MZ',
    },
    {
        name: 'Myanmar',
        dial_code: '+95',
        code: 'MM',
    },
    {
        name: 'Namibia',
        dial_code: '+264',
        code: 'NA',
    },
    {
        name: 'Nauru',
        dial_code: '+674',
        code: 'NR',
    },
    {
        name: 'Nepal',
        dial_code: '+977',
        code: 'NP',
    },
    {
        name: 'Netherlands',
        dial_code: '+31',
        code: 'NL',
    },
    {
        name: 'Netherlands Antilles',
        dial_code: '+599',
        code: 'AN',
    },
    {
        name: 'New Caledonia',
        dial_code: '+687',
        code: 'NC',
    },
    {
        name: 'New Zealand',
        dial_code: '+64',
        code: 'NZ',
    },
    {
        name: 'Nicaragua',
        dial_code: '+505',
        code: 'NI',
    },
    {
        name: 'Niger',
        dial_code: '+227',
        code: 'NE',
    },
    {
        name: 'Nigeria',
        dial_code: '+234',
        code: 'NG',
    },
    {
        name: 'Niue',
        dial_code: '+683',
        code: 'NU',
    },
    {
        name: 'Norfolk Island',
        dial_code: '+672',
        code: 'NF',
    },
    {
        name: 'Northern Mariana Islands',
        dial_code: '+1670',
        code: 'MP',
    },
    {
        name: 'Norway',
        dial_code: '+47',
        code: 'NO',
    },
    {
        name: 'Oman',
        dial_code: '+968',
        code: 'OM',
    },
    {
        name: 'Pakistan',
        dial_code: '+92',
        code: 'PK',
    },
    {
        name: 'Palau',
        dial_code: '+680',
        code: 'PW',
    },
    {
        name: 'Palestinian Territory, Occupied',
        dial_code: '+970',
        code: 'PS',
    },
    {
        name: 'Panama',
        dial_code: '+507',
        code: 'PA',
    },
    {
        name: 'Papua New Guinea',
        dial_code: '+675',
        code: 'PG',
    },
    {
        name: 'Paraguay',
        dial_code: '+595',
        code: 'PY',
    },
    {
        name: 'Peru',
        dial_code: '+51',
        code: 'PE',
    },
    {
        name: 'Philippines',
        dial_code: '+63',
        code: 'PH',
    },
    {
        name: 'Pitcairn',
        dial_code: '+872',
        code: 'PN',
    },
    {
        name: 'Poland',
        dial_code: '+48',
        code: 'PL',
    },
    {
        name: 'Portugal',
        dial_code: '+351',
        code: 'PT',
    },
    {
        name: 'Puerto Rico',
        dial_code: '+1939',
        code: 'PR',
    },
    {
        name: 'Qatar',
        dial_code: '+974',
        code: 'QA',
    },
    {
        name: 'Romania',
        dial_code: '+40',
        code: 'RO',
    },
    {
        name: 'Russia',
        dial_code: '+7',
        code: 'RU',
    },
    {
        name: 'Rwanda',
        dial_code: '+250',
        code: 'RW',
    },
    {
        name: 'Reunion',
        dial_code: '+262',
        code: 'RE',
    },
    {
        name: 'Saint Barthelemy',
        dial_code: '+590',
        code: 'BL',
    },
    {
        name: 'Saint Helena, Ascension and Tristan Da Cunha',
        dial_code: '+290',
        code: 'SH',
    },
    {
        name: 'Saint Kitts and Nevis',
        dial_code: '+1869',
        code: 'KN',
    },
    {
        name: 'Saint Lucia',
        dial_code: '+1758',
        code: 'LC',
    },
    {
        name: 'Saint Martin',
        dial_code: '+590',
        code: 'MF',
    },
    {
        name: 'Saint Pierre and Miquelon',
        dial_code: '+508',
        code: 'PM',
    },
    {
        name: 'Saint Vincent and the Grenadines',
        dial_code: '+1784',
        code: 'VC',
    },
    {
        name: 'Samoa',
        dial_code: '+685',
        code: 'WS',
    },
    {
        name: 'San Marino',
        dial_code: '+378',
        code: 'SM',
    },
    {
        name: 'Sao Tome and Principe',
        dial_code: '+239',
        code: 'ST',
    },
    {
        name: 'Saudi Arabia',
        dial_code: '+966',
        code: 'SA',
    },
    {
        name: 'Senegal',
        dial_code: '+221',
        code: 'SN',
    },
    {
        name: 'Serbia',
        dial_code: '+381',
        code: 'RS',
    },
    {
        name: 'Seychelles',
        dial_code: '+248',
        code: 'SC',
    },
    {
        name: 'Sierra Leone',
        dial_code: '+232',
        code: 'SL',
    },
    {
        name: 'Singapore',
        dial_code: '+65',
        code: 'SG',
    },
    {
        name: 'Slovakia',
        dial_code: '+421',
        code: 'SK',
    },
    {
        name: 'Slovenia',
        dial_code: '+386',
        code: 'SI',
    },
    {
        name: 'Solomon Islands',
        dial_code: '+677',
        code: 'SB',
    },
    {
        name: 'Somalia',
        dial_code: '+252',
        code: 'SO',
    },
    {
        name: 'South Africa',
        dial_code: '+27',
        code: 'ZA',
    },
    {
        name: 'South Sudan',
        dial_code: '+211',
        code: 'SS',
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        dial_code: '+500',
        code: 'GS',
    },
    {
        name: 'Spain',
        dial_code: '+34',
        code: 'ES',
    },
    {
        name: 'Sri Lanka',
        dial_code: '+94',
        code: 'LK',
    },
    {
        name: 'Sudan',
        dial_code: '+249',
        code: 'SD',
    },
    {
        name: 'Suriname',
        dial_code: '+597',
        code: 'SR',
    },
    {
        name: 'Svalbard and Jan Mayen',
        dial_code: '+47',
        code: 'SJ',
    },
    {
        name: 'Swaziland',
        dial_code: '+268',
        code: 'SZ',
    },
    {
        name: 'Sweden',
        dial_code: '+46',
        code: 'SE',
    },
    {
        name: 'Switzerland',
        dial_code: '+41',
        code: 'CH',
    },
    {
        name: 'Syrian Arab Republic',
        dial_code: '+963',
        code: 'SY',
    },
    {
        name: 'Taiwan',
        dial_code: '+886',
        code: 'TW',
    },
    {
        name: 'Tajikistan',
        dial_code: '+992',
        code: 'TJ',
    },
    {
        name: 'Tanzania, United Republic of Tanzania',
        dial_code: '+255',
        code: 'TZ',
    },
    {
        name: 'Thailand',
        dial_code: '+66',
        code: 'TH',
    },
    {
        name: 'Timor-Leste',
        dial_code: '+670',
        code: 'TL',
    },
    {
        name: 'Togo',
        dial_code: '+228',
        code: 'TG',
    },
    {
        name: 'Tokelau',
        dial_code: '+690',
        code: 'TK',
    },
    {
        name: 'Tonga',
        dial_code: '+676',
        code: 'TO',
    },
    {
        name: 'Trinidad and Tobago',
        dial_code: '+1868',
        code: 'TT',
    },
    {
        name: 'Tunisia',
        dial_code: '+216',
        code: 'TN',
    },
    {
        name: 'Turkey',
        dial_code: '+90',
        code: 'TR',
    },
    {
        name: 'Turkmenistan',
        dial_code: '+993',
        code: 'TM',
    },
    {
        name: 'Turks and Caicos Islands',
        dial_code: '+1649',
        code: 'TC',
    },
    {
        name: 'Tuvalu',
        dial_code: '+688',
        code: 'TV',
    },
    {
        name: 'Uganda',
        dial_code: '+256',
        code: 'UG',
    },
    {
        name: 'Ukraine',
        dial_code: '+380',
        code: 'UA',
    },
    {
        name: 'United Arab Emirates',
        dial_code: '+971',
        code: 'AE',
    },
    {
        name: 'United Kingdom',
        dial_code: '+44',
        code: 'GB',
    },
    {
        name: 'United States',
        dial_code: '+1',
        code: 'US',
    },
    {
        name: 'Uruguay',
        dial_code: '+598',
        code: 'UY',
    },
    {
        name: 'Uzbekistan',
        dial_code: '+998',
        code: 'UZ',
    },
    {
        name: 'Vanuatu',
        dial_code: '+678',
        code: 'VU',
    },
    {
        name: 'Venezuela, Bolivarian Republic of Venezuela',
        dial_code: '+58',
        code: 'VE',
    },
    {
        name: 'Vietnam',
        dial_code: '+84',
        code: 'VN',
    },
    {
        name: 'Virgin Islands, British',
        dial_code: '+1284',
        code: 'VG',
    },
    {
        name: 'Virgin Islands, U.S.',
        dial_code: '+1340',
        code: 'VI',
    },
    {
        name: 'Wallis and Futuna',
        dial_code: '+681',
        code: 'WF',
    },
    {
        name: 'Yemen',
        dial_code: '+967',
        code: 'YE',
    },
    {
        name: 'Zambia',
        dial_code: '+260',
        code: 'ZM',
    },
    {
        name: 'Zimbabwe',
        dial_code: '+263',
        code: 'ZW',
    },
];

const acc = btoa(`${environment.akuuk?.id}:${environment.akuuk?.key}`);
const Client$2 = axios.create({
    baseURL: environment.akuuk?.url,
    headers: {
        Authorization: `Basic ${acc}`,
    },
});
class Akuuk {
    static async sendSMS(payload) {
        const uuid = randomUUID();
        // Find country code
        const country = findItem(countryCodes, payload.country, 'code');
        // Format phone number
        const number = formatPhoneNumber(payload.number, country?.dial_code);
        if (!number)
            return;
        const res = await Client$2.post('/messaging/sms', {
            message: payload.message,
            mrcReference: uuid,
            sender: environment.akuuk.sender,
            type: 'text',
            countryCode: country?.dial_code,
            number,
        });
        const { data: result } = res;
        if (result.code !== 200)
            throw new CustomError(result.message, 500);
        return result;
    }
    static async airtime(payload) {
        const { amount, billing, country: code, number: phone } = payload;
        const uuid = randomUUID();
        // Find country code
        const country = findItem(countryCodes, code, 'code');
        // Format phone number
        const number = formatPhoneNumber(phone, country?.dial_code);
        console.log({
            mrcReference: uuid,
            countryCode: Number(country?.dial_code.split('+')[1]) + '',
            number: number + '',
            billing: billing,
            amount: parseFloat(amount).toFixed(2) + '',
        });
        const res = await Client$2.post('/payment/airtime', {
            mrcReference: uuid,
            countryCode: Number(country?.dial_code.split('+')[1]) + '',
            number: number + '',
            billing: billing,
            amount: parseFloat(amount).toFixed(2) + '',
        });
        const { data: result } = res;
        if (result.code !== 200)
            throw new CustomError(result.message, 500);
        return result;
    }
}

const useErrorParser = (err) => {
    console.log(err);
    return {
        message: err.message.includes('prisma')
            ? 'Internal Server Error'
            : (err?.message ?? 'Internal Server Error'),
        status: err?.status ?? 500,
        success: false,
    };
};
function generateRandomNumber(size) {
    if (size <= 0)
        throw new Error('Size must be greater than 0');
    const min = Math.pow(10, size - 1);
    const max = Math.pow(10, size) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isTestingBVN(bvn) {
    return (['DEVELOP', 'LOCAL'].includes(environment.context) &&
        ['22222222222', '95888168924'].includes(bvn));
}
function isDev() {
    return ['DEVELOP', 'LOCAL'].includes(environment.context);
}
const QUEUE_NAMES = {
    TRANSFER: 'transfer',
    AIRTIME: 'airtime',
    NOTIFICATION: 'notification',
    INTERNAL_TRANSFER: 'internal_transfer',
    CREATEWALLET: 'create_wallet',
};
async function sendOTP(user, type = 'PHONE') {
    const code = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    const verification = await prisma.verificationIntent.create({
        data: {
            refreshCode: code,
            userId: user.id,
            type: type === 'PHONE' ? 'PHONE' : 'EMAIL',
        },
    });
    if (!verification)
        throw new Error('OTP not saved');
    // Send SMS
    if (user.phone && type === 'PHONE')
        Akuuk.sendSMS({
            country: user?.country ?? 'NG',
            number: user.phone,
            message: `Your WePay verification code is: ${code}. Thanks you for choosing WePay`,
        }).catch((e) => console.log(e));
    if (user.email && type === 'EMAIL')
        sendEmail({
            to: user?.email,
            variables: {
                code: code,
                email: user.email,
                to_name: user.name,
            },
            template: 'verification',
        }).catch((e) => console.log(e));
}
function formatPhoneNumber(number, dailCode) {
    return number.toString().length > 11
        ? number
        : Number(`${dailCode.split('+')[1]}${number.toString().substring(1)}`);
}
const DAILY_LIMITS = {
    TIER_1: 200000n,
    TIER_2: 1000000n,
    TIER_3: 5000000n,
    TIER_4: 100000000000n,
};
/**
 * Converts any valid date string, timestamp, or Date object
 * to a standard ISO 8601 date string.
 *
 * @param {string | number | Date} input - The date input to convert.
 * @returns {string | null} The ISO date string or null if invalid.
 */
function toISODate(input) {
    try {
        // Handle empty or undefined input
        if (!input)
            return null;
        // Convert to Date object
        const date = new Date(input);
        // Check validity
        if (isNaN(date.getTime())) {
            return null; // Invalid date
        }
        // Return ISO string
        return date.toISOString();
    }
    catch (err) {
        return null;
    }
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 → 12 for 12 AM
    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}
function findItem(data, item, field) {
    return data.find((d) => d?.[field]?.toLowerCase()?.trim() === item?.toLowerCase()?.trim());
}
function amountInKobo(amount) {
    return BigInt(Math.round(amount * 100));
}
function amountInNaira(amount) {
    return Number(amount) / 100;
}
async function checkDailyLimit(fromWallet, fromUser, amt) {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const result = await prisma.ledger.aggregate({
        _sum: { change: true },
        where: {
            walletId: fromWallet.id,
            createdAt: { gte: todayStart },
            type: 'TRANSFER_DEBIT',
        },
    });
    const amount = amountInNaira(amt);
    const transferred = amountInNaira(result._sum.change ? -result._sum.change : 0n);
    const tier = fromUser.currentTier;
    const dailyLimit = DAILY_LIMITS[tier] || DAILY_LIMITS.TIER_1;
    return BigInt(transferred + amount) > dailyLimit;
}
function wrapText(text, max = 32) {
    if (!text)
        return;
    const words = text.split(' ');
    let lines = [];
    let current = '';
    for (const w of words) {
        if ((current + ' ' + w).trim().length > max) {
            lines.push(current.trim());
            current = w;
        }
        else {
            current += ' ' + w;
        }
    }
    if (current.trim().length > 0)
        lines.push(current.trim());
    return lines.join('\n');
}
function shortenDesc(desc, max = 30) {
    if (!desc)
        return desc;
    if (desc.length <= max)
        return desc;
    return desc.slice(0, max - 3) + '...';
}
function formatTransferSMS({ account, amount, desc, currency, balance, date, type, }) {
    return `
Acct: ******${account.slice(-4)}
Amt: ${currency}${formatCurrency(amountInNaira(amount))} ${type}
Desc: ${wrapText(shortenDesc(desc))}
Avail Bal: ${currency}${formatCurrency(amountInNaira(balance))}
Date: ${formatDate(date)}
Thanks for using WePay`;
}
function generateUserSafeId() {
    const input = `${Date.now() - Math.random()}`;
    const hash = crypto$1.createHash('sha256').update(input).digest('hex');
    return hash.substring(0, 8).toUpperCase();
}

// src/utils/hash.ts
async function hashPassword(plain) {
    // default options for argon2 are fine; tune in prod if needed
    return bcrypt.hash(plain, 10);
}
function hashToken(token) {
    if (!token)
        return;
    if (isTestingBVN(token)) {
        return crypto$1
            .createHash('sha256')
            .update(token + new Date().getTime().toString().slice(6))
            .digest('hex');
    }
    return crypto$1.createHash('sha256').update(token).digest('hex');
}
async function hashPin(pin) {
    return await argon2.hash(pin, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16, // 64 MB
        timeCost: 3,
        parallelism: 1,
    });
}
async function verifyPin(hashedPin, inputPin) {
    return await argon2.verify(hashedPin, inputPin);
}

// src/utils/jwt.ts
function signAccessToken(payload) {
    return jwt.sign(payload, environment.jwt.secret, {
        expiresIn: `${environment.jwt?.expiresIn}h`,
    });
}
function verifyAccessToken(token) {
    return jwt.verify(token, environment.jwt.secret);
}

const limiter$1 = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
async function register(data) {
    const bvnHash = hashToken(data.bvn);
    const existingUnverifiedUser = await prisma.user.findFirst({
        where: {
            phone: data.phone,
            emailVerified: false,
            OR: [
                { bvn: bvnHash },
                { bvn: data.bvn },
            ],
        },
    });
    if (existingUnverifiedUser) {
        limiter$1.schedule(() => sendOTP(existingUnverifiedUser));
        return existingUnverifiedUser;
    }
    const record = {
        ...data.extra,
    };
    if (data.role === 'AGENT')
        record.agent = { create: {} };
    if (data.role === 'MERCHANT' || data.role === 'INSTITUTION') {
        record.merchant = { create: {} };
    }
    if (data.email !== undefined) {
        record.email = data.email;
    }
    const uniqueId = generateUserSafeId();
    try {
        const user = await prisma.$transaction(async (tx) => {
            const _user = await tx.user.create({
                data: {
                    bvn: data.bvn,
                    phone: data.phone,
                    ...record,
                    uniqueID: uniqueId,
                },
                include: { address: true },
            });
            await tx.auditLog.create({
                data: {
                    userId: _user.id,
                    action: 'REGISTER',
                    ip: null,
                },
            });
            return _user;
        });
        limiter$1.schedule(() => sendOTP(user));
        return user;
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                const target = error.meta?.target;
                if (target?.includes('phone')) {
                    throw new CustomError('Phone number and BVN already in use', 409);
                }
                if (target?.includes('email')) {
                    throw new CustomError('Email already in use', 409);
                }
            }
        }
        throw error;
    }
}
async function forgotPin(payload) {
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
    if (!user)
        return false;
    limiter$1.schedule(() => sendOTP(user));
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'FORGOT_PIN_CODE' },
    });
    return true;
}
async function login(data) {
    const { email, phone, pin } = data;
    if (!pin)
        throw new CustomError('PIN is required', 422);
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
    if (!user)
        throw new CustomError('Invalid credentials', 401);
    if (!user.pin)
        throw new CustomError('User has no pin set', 400);
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
async function loginWithFinger(data) {
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
async function forgotPassword(data) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user)
        return false;
    limiter$1.schedule(() => sendOTP(user));
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'FORGOT_PASSWORD_CODE', ip: data.ip },
    });
    return true;
}
async function resetPassword(data) {
    const { token, newPassword, ip } = data;
    const verificationIntent = await prisma.verificationIntent.findFirst({
        where: { refreshCode: token },
    });
    if (!verificationIntent)
        throw new Error('Invalid or expired token');
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
async function resetPin(user, data) {
    await prisma.user.update({
        where: { id: user.id },
        data: {
            pin: data.pin,
        },
    });
    // revoke all refresh tokens (safety)
    await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
    await prisma.auditLog.create({
        data: { userId: user.id, action: 'RESET_PIN' },
    });
    return user;
}
async function resendOTP(userId, data) {
    const user = await prisma.user.findFirst({
        where: { id: userId },
    });
    if (!user)
        throw new CustomError('User not found', 500);
    if (data.email && data.type === 'EMAIL') {
        const _user = await prisma.user.findFirst({
            where: {
                email: data.email,
            },
        });
        if (_user)
            throw new CustomError('User exist. Click on forgot pin', 409);
        limiter$1.schedule(() => sendOTP({
            ...user,
            email: data.email,
            name: data?.name ?? '',
        }, data.type));
        return;
    }
    limiter$1.schedule(() => sendOTP(user));
    return true;
}

const getUser = async (user) => {
    if (!user)
        throw new CustomError('User not found', 404);
    const _user = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
            merchant: true,
            agent: true,
            wallets: true,
            address: true,
        },
    });
    const { ...authUser } = _user;
    return {
        ...authUser,
        wallets: authUser.wallets.map((w) => {
            return {
                ...w,
                availableBalance: amountInNaira(w.availableBalance),
                reservedBalance: amountInNaira(w.reservedBalance),
                ledgerBalance: amountInNaira(w.ledgerBalance),
            };
        }),
    };
};

const types = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '0ed8b99b-8097-4e49-bd4c-ff0410c57d27',
            name: 'Corporate',
        },
        {
            id: 'f671da57-e281-4b40-965f-a96f4205405e',
            name: 'Individual',
        },
    ]
    : [
        {
            id: '46e68cf6-f355-4536-ae96-adf24682809f',
            name: 'Corporate',
        },
        {
            id: 'c92d5158-a4c5-4418-83f7-a813d3989a85',
            name: 'Individual',
        },
    ];
const countries = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '08dd5d6c-a9b4-452d-8872-4ada3d46b506',
            name: 'United States',
            countryCodeTwo: 'US',
            countryCodeThree: 'USA',
        },
        {
            id: '08dd7754-454d-4ab0-8ed1-5eed930ad067',
            name: 'Ghana',
            countryCodeTwo: 'GH',
            countryCodeThree: 'GHA',
        },
        {
            id: '08dd7764-e2ab-455e-8359-84809550f17c',
            name: 'Togo',
            countryCodeTwo: 'TG',
            countryCodeThree: 'TGO',
        },
        {
            id: '08dd782b-134c-4e7c-8726-4524b8e41fa8',
            name: 'Brazil',
            countryCodeTwo: 'BR',
            countryCodeThree: 'BRA',
        },
        {
            id: 'c15ad9ae-c4d7-4342-b70f-de5508627e3b',
            name: 'Nigeria',
            countryCodeTwo: 'NG',
            countryCodeThree: 'NGA',
        },
    ]
    : [
        {
            id: '4aa9d59e-04e7-4984-9794-85a55489d433',
            name: 'Nigeria',
            countryCodeTwo: 'NG',
            countryCodeThree: 'NGA',
        },
    ];
const currencies = ['LOCAL', 'DEVELOP'].includes(environment.context)
    ? [
        {
            id: '6eeb54c8-24d7-11f0-a818-6045bd97b81d',
            name: 'Canadian Dollars4',
            shortName: 'CD4',
        },
        {
            id: '82647b29-1302-11f0-a8a9-6045bd97b81d',
            name: 'RAND',
            shortName: 'ZAR',
        },
        {
            id: '98d64583-fb7e-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars',
            shortName: 'CAD',
        },
        {
            id: 'af8c9168-fdc5-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars3',
            shortName: 'CD3',
        },
        {
            id: 'c8fe419f-fb7e-11ef-a8a9-6045bd97b81d',
            name: 'Canadian Dollars2',
            shortName: 'CD2',
        },
        {
            id: 'd98ba5ab-fb78-11ef-a8a9-6045bd97b81d',
            name: 'Tanzania Shillings',
            shortName: 'TZS',
        },
        {
            id: 'fd5e474d-bb42-4db1-ab74-e8d2a01047e9',
            name: 'Nigeria Naira',
            shortName: 'NGN',
        },
    ]
    : [
        {
            id: '45852f0c-84fa-410c-b66c-1ffec56e5cd8',
            name: 'Nigeria Naira',
            shortName: 'NGN',
        },
    ];
const banks = [
    {
        bankName: 'Access Bank',
        bankCode: '000014',
    },
    {
        bankName: 'Citi Bank',
        bankCode: '000009',
    },
    {
        bankName: 'Ecobank Bank',
        bankCode: '000010',
    },
    {
        bankName: 'Fidelity Bank',
        bankCode: '000007',
    },
    {
        bankName: 'First Bank of Nigeria',
        bankCode: '000016',
    },
    {
        bankName: 'First City Monument Bank',
        bankCode: '000003',
    },
    {
        bankName: 'GTBank Plc',
        bankCode: '000013',
    },
    {
        bankName: 'Heritage',
        bankCode: '000020',
    },
    {
        bankName: 'JAIZ Bank',
        bankCode: '000006',
    },
    {
        bankName: 'Keystone Bank',
        bankCode: '000002',
    },
    {
        bankName: 'Kuda Bank',
        bankCode: '090267',
    },
    {
        bankName: 'Paycom(OPAY)',
        bankCode: '100004',
    },
    {
        bankName: 'Providus Bank',
        bankCode: '000023',
    },
    {
        bankName: 'Rand Merchant Bank',
        bankCode: '000024',
    },
    {
        bankName: 'Polaris Bank',
        bankCode: '000008',
    },
    {
        bankName: 'StanbicIBTC Bank',
        bankCode: '000012',
    },
    {
        bankName: 'Standard Chartered Bank',
        bankCode: '000021',
    },
    {
        bankName: 'Sterling Bank',
        bankCode: '000001',
    },
    {
        bankName: 'SUNTRUST BANK',
        bankCode: '000022',
    },
    {
        bankName: 'Union Bank',
        bankCode: '000018',
    },
    {
        bankName: 'United Bank for Africa',
        bankCode: '000004',
    },
    {
        bankName: 'Unity Bank',
        bankCode: '000011',
    },
    {
        bankName: 'Wema/ALAT',
        bankCode: '000017',
    },
    {
        bankName: 'ZENITH BANK PLC',
        bankCode: '000015',
    },
    {
        bankName: 'VFD Microfinance Bank',
        bankCode: '090110',
    },
    {
        bankName: 'Tangerine Money',
        bankCode: '090426',
    },
    {
        bankName: 'Taj Bank',
        bankCode: '000026',
    },
    {
        bankName: 'Sparkle',
        bankCode: '090325',
    },
    {
        bankName: 'Hope PSBank',
        bankCode: '120002',
    },
    {
        bankName: 'Parralex Microfinance Bank',
        bankCode: '090004',
    },
    {
        bankName: 'Eyowo',
        bankCode: '090328',
    },
    {
        bankName: '9Payment Service Bank',
        bankCode: '120001',
    },
    {
        bankName: 'Nova Merchant Bank',
        bankCode: '060003',
    },
    {
        bankName: 'Titan Trust Bank',
        bankCode: '000025',
    },
    {
        bankName: 'Covenant MFB',
        bankCode: '070006',
    },
    {
        bankName: 'Page Financials',
        bankCode: '070008',
    },
    {
        bankName: 'Fortis Microfinance Bank',
        bankCode: '070002',
    },
    {
        bankName: 'FSDH Merchant Bank',
        bankCode: '400001',
    },
    {
        bankName: 'Globus Bank',
        bankCode: '000027',
    },
    {
        bankName: 'FBNQUEST Merchant Bank',
        bankCode: '060002',
    },
    {
        bankName: 'ASO Savings & Loans',
        bankCode: '090001',
    },
    {
        bankName: 'RenMoney Microfinance Bank',
        bankCode: '090198',
    },
    {
        bankName: 'Stanbic IBTC @ease wallet',
        bankCode: '100007',
    },
    {
        bankName: 'Futo Microfinance Bank',
        bankCode: '090158',
    },
    {
        bankName: 'Greenwich Merchant Bank',
        bankCode: '060004',
    },
    {
        bankName: 'Lapo Microfinance Bank',
        bankCode: '090177',
    },
    {
        bankName: 'NIRSAL Microfinance Bank',
        bankCode: '090194',
    },
    {
        bankName: 'ABU Microfinance Bank',
        bankCode: '090197',
    },
    {
        bankName: 'Accion Microfinance Bank',
        bankCode: '090134',
    },
    {
        bankName: 'Cellulant',
        bankCode: '100005',
    },
    {
        bankName: 'Bowen Microfinance Bank',
        bankCode: '090148',
    },
    {
        bankName: 'eTranzact',
        bankCode: '100006',
    },
    {
        bankName: 'Advans La Fayette  Microfinance Bank',
        bankCode: '090155',
    },
    {
        bankName: 'Carbon',
        bankCode: '100026',
    },
    {
        bankName: 'PalmPay Limited',
        bankCode: '100033',
    },
    {
        bankName: 'Moniepoint',
        bankCode: '090405',
    },
    {
        bankName: 'KONGAPAY',
        bankCode: '100025',
    },
    {
        bankName: 'Abbey Mortgage Bank',
        bankCode: '070010',
    },
    {
        bankName: 'Interswitch Limited',
        bankCode: '110003',
    },
    {
        bankName: 'Paystack Payments Limited',
        bankCode: '110006',
    },
    {
        bankName: 'Xpress Payments',
        bankCode: '090201',
    },
    {
        bankName: 'ACCELEREX NETWORK',
        bankCode: '090202',
    },
    {
        bankName: 'Arca Payments Company Limited',
        bankCode: '110011',
    },
    {
        bankName: 'UNIBADAN Microfinance Bank',
        bankCode: '090461',
    },
    {
        bankName: 'Premium Trust bank',
        bankCode: '000031',
    },
    {
        bankName: 'MoMo PSB',
        bankCode: '120003',
    },
    {
        bankName: 'SmartCash Payment Service Bank',
        bankCode: '120004',
    },
    {
        bankName: 'Money Master PSB',
        bankCode: '120005',
    },
    {
        bankName: 'FAIRMONEY MICROFINANCE BANK LTD',
        bankCode: '090551',
    },
    {
        bankName: 'SIGNATURE BANK',
        bankCode: '000034',
    },
    {
        bankName: 'OPTIMUS BANK',
        bankCode: '000036',
    },
    {
        bankName: 'Ampersand Microfinance Bank (Bankly)',
        bankCode: '090529',
    },
    {
        bankName: 'WAYA Microfinance Bank',
        bankCode: '090590',
    },
    {
        bankName: 'Paga',
        bankCode: '100002',
    },
    {
        bankName: 'AL-Barakah Microfinance Bank',
        bankCode: '090133',
    },
    {
        bankName: '3line Card Management Limited',
        bankCode: '110005',
    },
    {
        bankName: 'Above Only Microfinance Bank',
        bankCode: '090260',
    },
    {
        bankName: 'Access Yello',
        bankCode: '100052',
    },
    {
        bankName: 'AccessMobile',
        bankCode: '100013',
    },
    {
        bankName: 'Ada Microfinance Bank',
        bankCode: '090483',
    },
    {
        bankName: 'Addosser Microfinance Bank',
        bankCode: '090160',
    },
    {
        bankName: 'Adeyemi College Staff Microfinance Bank',
        bankCode: '090268',
    },
    {
        bankName: 'Afekhafe Microfinance Bank',
        bankCode: '090292',
    },
    {
        bankName: 'AG Mortgage Bank',
        bankCode: '100028',
    },
    {
        bankName: 'Alekun Microfinance Bank',
        bankCode: '090259',
    },
    {
        bankName: 'Alert Microfinance Bank',
        bankCode: '090297',
    },
    {
        bankName: 'Al-Hayat Microfinance Bank',
        bankCode: '090277',
    },
    {
        bankName: 'Allworkers Microfinance Bank',
        bankCode: '090131',
    },
    {
        bankName: 'Alpha Kapital Microfinance Bank',
        bankCode: '090169',
    },
    {
        bankName: 'Amac Microfinance Bank',
        bankCode: '090394',
    },
    {
        bankName: 'Amju Unique Microfinance Bank',
        bankCode: '090180',
    },
    {
        bankName: 'AMML MFB',
        bankCode: '090116',
    },
    {
        bankName: 'Anchorage Microfinance Bank',
        bankCode: '090476',
    },
    {
        bankName: 'Apeks Microfinance Bank',
        bankCode: '090143',
    },
    {
        bankName: 'Apple Microfinance Bank',
        bankCode: '090376',
    },
    {
        bankName: 'Arise Microfinance Bank',
        bankCode: '090282',
    },
    {
        bankName: 'AssetMatrix Microfinance Bank',
        bankCode: '090287',
    },
    {
        bankName: 'Assets Microfinance Bank',
        bankCode: '090473',
    },
    {
        bankName: 'Astrapolaris Microfinance Bank',
        bankCode: '090172',
    },
    {
        bankName: 'Auchi Microfinance Bank',
        bankCode: '090264',
    },
    {
        bankName: 'Baines Credit MFB',
        bankCode: '090188',
    },
    {
        bankName: 'Balogun Fulani Microfinance Bank',
        bankCode: '090181',
    },
    {
        bankName: 'Balogun Gambari Microfinance Bank',
        bankCode: '090326',
    },
    {
        bankName: 'BC Kash Microfinance Bank',
        bankCode: '090127',
    },
    {
        bankName: 'BIPC Microfinance Bank ',
        bankCode: '090336',
    },
    {
        bankName: 'Boctrust Microfinance Bank',
        bankCode: '090117',
    },
    {
        bankName: 'BOI Microfinance Bank',
        bankCode: '090444',
    },
    {
        bankName: 'Borgu  Microfinance Bank',
        bankCode: '090395',
    },
    {
        bankName: 'Bosak Microfinance Bank',
        bankCode: '090176',
    },
    {
        bankName: 'Brent Mortgage Bank',
        bankCode: '070015',
    },
    {
        bankName: 'Brethren Microfinance Bank',
        bankCode: '090293',
    },
    {
        bankName: 'Bridgeway Microfinance Bank',
        bankCode: '090393',
    },
    {
        bankName: 'Brightway Microfinance Bank',
        bankCode: '090308',
    },
    {
        bankName: 'Caretaker Microfinance Bank',
        bankCode: '090472',
    },
    {
        bankName: 'CashConnect Microfinance Bank',
        bankCode: '090360',
    },
    {
        bankName: 'CEMCS Microfinance Bank',
        bankCode: '090154',
    },
    {
        bankName: 'Changan RTS Microfinance Bank',
        bankCode: '090470',
    },
    {
        bankName: 'Chikum Microfinance Bank',
        bankCode: '090141',
    },
    {
        bankName: 'Chukwunenye MFB',
        bankCode: '090490',
    },
    {
        bankName: 'CIT Microfinance Bank',
        bankCode: '090144',
    },
    {
        bankName: 'Coalcamp Microfinance Bank',
        bankCode: '090254',
    },
    {
        bankName: 'Coastline Microfinance Bank',
        bankCode: '090374',
    },
    {
        bankName: 'Kredi MFB',
        bankCode: '090380',
    },
    {
        bankName: 'Consumer Microfinance Bank',
        bankCode: '090130',
    },
    {
        bankName: 'Contec Global Infotech Limited (NowNow)',
        bankCode: '100032',
    },
    {
        bankName: 'Coop Mortgage Bank',
        bankCode: '070021',
    },
    {
        bankName: 'Corestep Microfinance Bank',
        bankCode: '090365',
    },
    {
        bankName: 'Coronation Merchant Bank',
        bankCode: '060001',
    },
    {
        bankName: 'Credit Afrique Microfinance Bank',
        bankCode: '090159',
    },
    {
        bankName: 'Crowdforce',
        bankCode: '110017',
    },
    {
        bankName: 'Cyberspace Limited',
        bankCode: '110014',
    },
    {
        bankName: 'Davodani Microfinance Bank',
        bankCode: '090391',
    },
    {
        bankName: 'Daylight Microfinance Bank',
        bankCode: '090167',
    },
    {
        bankName: 'Eagle Flight Microfinance Bank',
        bankCode: '090294',
    },
    {
        bankName: 'Eartholeum',
        bankCode: '100021',
    },
    {
        bankName: 'e-Barcs Microfinance Bank',
        bankCode: '090156',
    },
    {
        bankName: 'Ecobank Xpress Account',
        bankCode: '100008',
    },
    {
        bankName: 'EcoMobile',
        bankCode: '100030',
    },
    {
        bankName: 'EdFin Microfinance Bank',
        bankCode: '090310',
    },
    {
        bankName: 'Ekondo MFB',
        bankCode: '090097',
    },
    {
        bankName: 'EK-Reliable Microfinance Bank',
        bankCode: '090389',
    },
    {
        bankName: 'Emeralds Microfinance Bank',
        bankCode: '090273',
    },
    {
        bankName: 'Empire trust MFB',
        bankCode: '090114',
    },
    {
        bankName: 'Enterprise Bank',
        bankCode: '000019',
    },
    {
        bankName: 'Esan Microfinance Bank',
        bankCode: '090189',
    },
    {
        bankName: 'Eso-E Microfinance Bank',
        bankCode: '090166',
    },
    {
        bankName: 'Evangel Microfinance Bank',
        bankCode: '090304',
    },
    {
        bankName: 'Evergreen Microfinance Bank',
        bankCode: '090332',
    },
    {
        bankName: 'FAST Microfinance Bank',
        bankCode: '090179',
    },
    {
        bankName: 'FBN Mortgages Limited',
        bankCode: '090107',
    },
    {
        bankName: 'FBNMobile',
        bankCode: '100014',
    },
    {
        bankName: 'FCMB Easy Account',
        bankCode: '100031',
    },
    {
        bankName: 'FCT Microfinance Bank',
        bankCode: '090290',
    },
    {
        bankName: 'Federal Polytechnic Nekede Microfinance Bank',
        bankCode: '090398',
    },
    {
        bankName: 'Federal University Dutse Microfinance Bank',
        bankCode: '090318',
    },
    {
        bankName: 'Fedeth Microfinance Bank',
        bankCode: '090482',
    },
    {
        bankName: 'FedPoly Nasarawa Microfinance Bank',
        bankCode: '090298',
    },
    {
        bankName: 'FET',
        bankCode: '100001',
    },
    {
        bankName: 'FFS Microfinance Bank',
        bankCode: '090153',
    },
    {
        bankName: 'Fidelity Mobile',
        bankCode: '100019',
    },
    {
        bankName: 'Fidfund Microfinance Bank',
        bankCode: '090126',
    },
    {
        bankName: 'FinaTrust Microfinance Bank',
        bankCode: '090111',
    },
    {
        bankName: 'Firmus Microfinance Bank',
        bankCode: '090366',
    },
    {
        bankName: 'First Apple Limited',
        bankCode: '110004',
    },
    {
        bankName: 'First Generation Mortgage Bank',
        bankCode: '070014',
    },
    {
        bankName: 'First Option Microfinance Bank',
        bankCode: '090285',
    },
    {
        bankName: 'First Royal Microfinance Bank',
        bankCode: '090164',
    },
    {
        bankName: 'Flutterwave Technology Solutions Limited',
        bankCode: '110002',
    },
    {
        bankName: 'FortisMobile',
        bankCode: '100016',
    },
    {
        bankName: 'Fullrange Microfinance Bank',
        bankCode: '090145',
    },
    {
        bankName: 'Gashua Microfinance Bank',
        bankCode: '090168',
    },
    {
        bankName: 'Gateway Mortgage Bank',
        bankCode: '0700009',
    },
    {
        bankName: 'Giant Stride Microfinance Bank',
        bankCode: '090475',
    },
    {
        bankName: 'Giginya Microfinance bank',
        bankCode: '090411',
    },
    {
        bankName: 'Girei Microfinance Bank',
        bankCode: '090186',
    },
    {
        bankName: 'Glory Microfinance Bank',
        bankCode: '090278',
    },
    {
        bankName: 'GMB Microfinance Bank',
        bankCode: '090408',
    },
    {
        bankName: 'Good Neigbours Microfinance Bank',
        bankCode: '090467',
    },
    {
        bankName: 'Gowans Microfinance Bank',
        bankCode: '090122',
    },
    {
        bankName: 'GreenBank Microfinance Bank',
        bankCode: '090178',
    },
    {
        bankName: 'Greenville Microfinance Bank',
        bankCode: '090269',
    },
    {
        bankName: 'Grooming Microfinance Bank',
        bankCode: '090195',
    },
    {
        bankName: 'GTI Microfinance Bank',
        bankCode: '090385',
    },
    {
        bankName: 'GTMobile',
        bankCode: '100009',
    },
    {
        bankName: 'Hackman Microfinance Bank',
        bankCode: '090147',
    },
    {
        bankName: 'Haggai Mortgage Bank Limited',
        bankCode: '070017',
    },
    {
        bankName: 'Hasal Microfinance Bank',
        bankCode: '090121',
    },
    {
        bankName: 'Headway Microfinance Bank',
        bankCode: '090363',
    },
    {
        bankName: 'Hedonmark',
        bankCode: '100017',
    },
    {
        bankName: 'IBILE Microfinance Bank',
        bankCode: '090118',
    },
    {
        bankName: 'Ikenne Microfinance Bank',
        bankCode: '090324',
    },
    {
        bankName: 'Ikire Microfinance Bank',
        bankCode: '090279',
    },
    {
        bankName: 'Ilisan Microfinance Bank',
        bankCode: '090370',
    },
    {
        bankName: 'Imo State Microfinance Bank',
        bankCode: '090258',
    },
    {
        bankName: 'Imperial Homes Mortgage Bank',
        bankCode: '100024',
    },
    {
        bankName: 'Infinity Microfinance Bank',
        bankCode: '090157',
    },
    {
        bankName: 'Infinity Trust Mortgage Bank',
        bankCode: '070016',
    },
    {
        bankName: 'Innovectives Kesh',
        bankCode: '100029',
    },
    {
        bankName: 'Intellifin',
        bankCode: '100027',
    },
    {
        bankName: 'Interland Microfinance Bank',
        bankCode: '090386',
    },
    {
        bankName: 'IRL Microfinance Bank',
        bankCode: '090149',
    },
    {
        bankName: 'Isaleoyo Microfinance Bank',
        bankCode: '090377',
    },
    {
        bankName: 'Jubilee-Life Mortgage Bank',
        bankCode: '090003',
    },
    {
        bankName: 'KadPoly Microfinance Bank',
        bankCode: '090320',
    },
    {
        bankName: 'KCMB Microfinance Bank',
        bankCode: '090191',
    },
    {
        bankName: 'Kegow',
        bankCode: '100015',
    },
    {
        bankName: 'Kontagora Microfinance Bank',
        bankCode: '090299',
    },
    {
        bankName: 'Lagos Building Investment Company',
        bankCode: '070012',
    },
    {
        bankName: 'Lavender Microfinance Bank',
        bankCode: '090271',
    },
    {
        bankName: 'Legend Microfinance Bank',
        bankCode: '090372',
    },
    {
        bankName: 'Light MFB',
        bankCode: '090477',
    },
    {
        bankName: 'Lovonus Microfinance Bank',
        bankCode: '090265',
    },
    {
        bankName: 'M36',
        bankCode: '100035',
    },
    {
        bankName: 'Mainland Microfinance Bank',
        bankCode: '090323',
    },
    {
        bankName: 'Mainstreet Microfinance Bank',
        bankCode: '090171',
    },
    {
        bankName: 'Maintrust Microfinance Bank',
        bankCode: '090465',
    },
    {
        bankName: 'Malachy Microfinance Bank',
        bankCode: '090174',
    },
    {
        bankName: 'Maritime Microfinance Bank',
        bankCode: '090410',
    },
    {
        bankName: 'MayFair Microfinance Bank',
        bankCode: '090321',
    },
    {
        bankName: 'MayFresh Mortgage Bank',
        bankCode: '070019',
    },
    {
        bankName: 'Megapraise Microfinance Bank',
        bankCode: '090280',
    },
    {
        bankName: 'Microcred Microfinance Bank',
        bankCode: '090136',
    },
    {
        bankName: 'Midland Microfinance Bank',
        bankCode: '090192',
    },
    {
        bankName: 'MintFinex Microfinance Bank',
        bankCode: '090281',
    },
    {
        bankName: 'Mkudi',
        bankCode: '100011',
    },
    {
        bankName: 'Molusi Microfinance Bank',
        bankCode: '090362',
    },
    {
        bankName: 'Money Trust Microfinance Bank',
        bankCode: '090129',
    },
    {
        bankName: 'MoneyBox',
        bankCode: '100020',
    },
    {
        bankName: 'Moyofade Microfinance Bank',
        bankCode: '090448',
    },
    {
        bankName: 'Mutual Benefits Microfinance Bank',
        bankCode: '090190',
    },
    {
        bankName: 'Mutual Trust Microfinance Bank',
        bankCode: '090151',
    },
    {
        bankName: 'Nagarta Microfinance Bank',
        bankCode: '090152',
    },
    {
        bankName: 'Navy Microfinance Bank',
        bankCode: '090263',
    },
    {
        bankName: 'Ndiorah Microfinance Bank',
        bankCode: '090128',
    },
    {
        bankName: 'Neptune Microfinance Bank',
        bankCode: '090329',
    },
    {
        bankName: 'New Dawn Microfinance Bank',
        bankCode: '090205',
    },
    {
        bankName: 'New Golden Pastures Microfinance Bank',
        bankCode: '090378',
    },
    {
        bankName: 'New Prudential Bank',
        bankCode: '090108',
    },
    {
        bankName: 'NIP Virtual Bank',
        bankCode: '999999',
    },
    {
        bankName: 'Nnew Women Microfinance Bank',
        bankCode: '090283',
    },
    {
        bankName: 'NPF MicroFinance Bank',
        bankCode: '70001',
    },
    {
        bankName: 'Nuture Microfinance Bank',
        bankCode: '090364',
    },
    {
        bankName: 'Nwannegadi Microfinance Bank',
        bankCode: '090399',
    },
    {
        bankName: 'Oche Microfinance Bank',
        bankCode: '090333',
    },
    {
        bankName: 'Ohafia Microfinance Bank',
        bankCode: '090119',
    },
    {
        bankName: 'Okpoga Microfinance Bank',
        bankCode: '090161',
    },
    {
        bankName: 'Olabisi Onabanjo University Microfinance Bank',
        bankCode: '090272',
    },
    {
        bankName: 'OLOFIN OWENA MICROFINANCE BANK ',
        bankCode: '090468',
    },
    {
        bankName: 'Oluchukwu Microfinance Bank',
        bankCode: '090471',
    },
    {
        bankName: 'Omiye Microfinance Bank',
        bankCode: '090295',
    },
    {
        bankName: 'Omoluabi savings and loans',
        bankCode: '070007',
    },
    {
        bankName: 'Oraukwu MFB',
        bankCode: '090492',
    },
    {
        bankName: 'Oscotech Microfinance Bank',
        bankCode: '090396',
    },
    {
        bankName: 'Parkway-ReadyCash',
        bankCode: '100003',
    },
    {
        bankName: 'PatrickGold Microfinance Bank',
        bankCode: '090317',
    },
    {
        bankName: 'PayAttitude Online',
        bankCode: '110001',
    },
    {
        bankName: 'PecanTrust Microfinance Bank',
        bankCode: '090137',
    },
    {
        bankName: 'Pennywise Microfinance Bank',
        bankCode: '090196',
    },
    {
        bankName: 'Personal Trust Microfinance Bank',
        bankCode: '090135',
    },
    {
        bankName: 'Petra Microfinance Bank',
        bankCode: '090165',
    },
    {
        bankName: 'Pillar Microfinance Bank',
        bankCode: '090289',
    },
    {
        bankName: 'Platinum Mortgage Bank',
        bankCode: '070013',
    },
    {
        bankName: 'Polyunwana Microfinance Bank',
        bankCode: '090296',
    },
    {
        bankName: 'Preeminent Microfinance Bank',
        bankCode: '090412',
    },
    {
        bankName: 'Prestige Microfinance Bank',
        bankCode: '090274',
    },
    {
        bankName: 'Purplemoney Microfinance Bank',
        bankCode: '090303',
    },
    {
        bankName: 'Pyramid Microfinance Bank',
        bankCode: '090657',
    },
    {
        bankName: 'Quickfund Microfinance Bank',
        bankCode: '090261',
    },
    {
        bankName: 'Refuge Mortgage Bank',
        bankCode: '070011',
    },
    {
        bankName: 'Regent Microfinance Bank',
        bankCode: '090125',
    },
    {
        bankName: 'Rehoboth Microfinance Bank',
        bankCode: '090463',
    },
    {
        bankName: 'Reliance Microfinance Bank',
        bankCode: '090173',
    },
    {
        bankName: 'Rephidim Microfinance Bank',
        bankCode: '090322',
    },
    {
        bankName: 'Richway Microfinance Bank',
        bankCode: '090132',
    },
    {
        bankName: 'Royal Exchange Microfinance Bank',
        bankCode: '090138',
    },
    {
        bankName: 'Safe Haven Microfinance Bank',
        bankCode: '090286',
    },
    {
        bankName: 'SafeTrust',
        bankCode: '090006',
    },
    {
        bankName: 'Sagamu Microfinance Bank',
        bankCode: '090140',
    },
    {
        bankName: 'Seed Capital Microfinance Bank',
        bankCode: '090112',
    },
    {
        bankName: 'Seedvest Microfinance Bank',
        bankCode: '090369',
    },
    {
        bankName: 'Stanford Microfinance Bak',
        bankCode: '090162',
    },
    {
        bankName: 'Stellas Microfinance Bank',
        bankCode: '090262',
    },
    {
        bankName: 'Sulspap Microfinance Bank',
        bankCode: '090305',
    },
    {
        bankName: 'TagPay',
        bankCode: '100023',
    },
    {
        bankName: 'TCF MFB',
        bankCode: '090115',
    },
    {
        bankName: 'TeasyMobile',
        bankCode: '100010',
    },
    {
        bankName: 'Think Finance Microfinance Bank',
        bankCode: '090373',
    },
    {
        bankName: 'Trident Microfinance Bank',
        bankCode: '090146',
    },
    {
        bankName: 'Trust Microfinance Bank',
        bankCode: '090327',
    },
    {
        bankName: 'Trustbond Mortgage Bank',
        bankCode: '090005',
    },
    {
        bankName: 'Trustfund Microfinance Bank',
        bankCode: '090276',
    },
    {
        bankName: 'U & C Microfinance Bank',
        bankCode: '090315',
    },
    {
        bankName: 'UNAAB Microfinance Bank',
        bankCode: '090331',
    },
    {
        bankName: 'Uniben Microfinance Bank',
        bankCode: '090266',
    },
    {
        bankName: 'Unical Microfinance Bank',
        bankCode: '090193',
    },
    {
        bankName: 'Unimaid Microfinance Bank',
        bankCode: '090464',
    },
    {
        bankName: 'UniUyo Microfinance Bank',
        bankCode: '090338',
    },
    {
        bankName: 'UNN MFB',
        bankCode: '090251',
    },
    {
        bankName: 'Vas2nets Limited',
        bankCode: '110015',
    },
    {
        bankName: 'Verdant Microfinance Bank',
        bankCode: '090474',
    },
    {
        bankName: 'Virtue Microfinance Bank',
        bankCode: '090150',
    },
    {
        bankName: 'Visa Microfinance Bank',
        bankCode: '090139',
    },
    {
        bankName: 'VTNetworks',
        bankCode: '100012',
    },
    {
        bankName: 'Xslnce Microfinance Bank',
        bankCode: '090124',
    },
    {
        bankName: 'YCT Microfinance Bank',
        bankCode: '090466',
    },
    {
        bankName: 'Yes Microfinance Bank',
        bankCode: '090142',
    },
    {
        bankName: 'Yobe Microfinance Bank',
        bankCode: '090252',
    },
    {
        bankName: 'Zenith Eazy Wallet',
        bankCode: '100034',
    },
    {
        bankName: 'ZenithMobile',
        bankCode: '100018',
    },
    {
        bankName: 'Titan-Paystack',
        bankCode: '100039',
    },
    {
        bankName: 'The Alternative Bank(AltBank)',
        bankCode: '000037',
    },
    {
        bankName: 'Mkobo Microfinance Bank',
        bankCode: '090455',
    },
    {
        bankName: 'Source Microfinance Bank',
        bankCode: '090641',
    },
    {
        bankName: 'BankIT MFB',
        bankCode: '090275',
    },
];
function sanitizeAddress(address) {
    if (!address)
        return '';
    const cleaned = address.replace(/[^a-zA-Z0-9\s,\-]/g, '');
    const normalized = cleaned.replace(/\s+/g, ' ').trim();
    return normalized;
}

const Client$1 = axios.create({
    baseURL: environment.embedly?.url ?? 'https://waas-staging.embedly.ng/api/v1',
    headers: {
        'x-api-key': environment.embedly?.key ?? '',
    },
});
Client$1.interceptors.request.use((config) => {
    const organizationId = environment.embedly.id;
    if (['post', 'put', 'patch'].includes(config.method || '')) {
        config.data = {
            ...config.data,
            organizationId,
        };
    }
    return config;
});
const PayoutClient = axios.create({
    baseURL: environment.embedly?.payoutURL ?? 'https://payout-staging.embedly.ng/api',
    headers: {
        'x-api-key': environment.embedly?.key ?? '',
    },
});
class Customer {
    static async personal(payload) {
        try {
            const customerType = findItem(types, 'Individual', 'name');
            const country = findItem(countries, payload.country, payload?.country?.length > 2 ? 'name' : 'countryCodeTwo');
            const { country: c, address, ...rest } = payload;
            const sanitizedAddress = sanitizeAddress(address);
            const data = {
                ...rest,
                customerTypeId: customerType?.id,
                countryId: country?.id,
                address: sanitizedAddress,
            };
            console.log(data, 'Embedly API Call');
            const res = await Client$1.post('/customers/add', data);
            const { data: result } = res;
            if (result.code !== '00')
                return;
            return result.data;
        }
        catch (error) {
            console.log(error, 'Error Embedly API Call');
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res?.message ?? res.title, res?.statusCode ?? res.status);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async get(id) {
        const res = await Client$1.get('/customers/get/id/' + id);
        const { data: result } = res;
        if (result?.code !== '00')
            throw new CustomError('Failed to retrieve Customer from Embedly', 404);
        return result.data;
    }
    static async corporate(payload) {
        try {
            const customerTypeId = findItem(types, payload.type, 'name')?.id;
            const eCountry = findItem(countries, payload.country, 'countryCodeTwo');
            const { country, type, ...rest } = payload;
            const data = {
                ...rest,
                customerTypeId,
                countryId: eCountry.id,
            };
            const res = await Client$1.post('/customers/add', data);
            const { data: result } = res;
            if (result.statuscode !== '00')
                throw new CustomError(result.message, 500);
            return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async verifyKYC(payload) {
        try {
            let bvn = payload.bvn;
            if (isTestingBVN(bvn))
                bvn = generateRandomNumber(11);
            const res = await Client$1.post('/customers/kyc/premium-kyc?verify=1', {
                ...payload,
                bvn,
            });
            const { data: result } = res;
            if (result.code !== '00')
                return;
            return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            const message = 'Customer has already completed BVN verification!';
            if (res && res.message.includes(message)) {
                return {
                    success: true,
                };
            }
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
}
class Validation {
    static async BVN() { }
    static async NIN() { }
    static async verifyWebhook(rawBody, signature) {
        const hmac = crypto$1.createHmac('sha512', environment.embedly.key);
        hmac.update(rawBody, 'utf8');
        const computedSignature = hmac.digest('hex');
        return computedSignature !== signature;
    }
}
class Wallet {
    static async create(wallet) {
        const currency = currencies.find((c) => c.shortName === wallet.currency);
        const { currency: c, userId, ...rest } = wallet;
        const res = await Client$1.post('/wallets/add', {
            ...rest,
            currencyId: currency?.id,
        });
        const { data: result } = res;
        if (result?.code !== '00')
            return;
        return result.data;
    }
    static async get(id) {
        const res = await Client$1.get('/wallets/get/wallet/' + id);
        const { data: result } = res;
        if (result?.code !== '00')
            return;
        return result.data;
    }
    static async getWalletByAccount(account) {
        const res = await Client$1.get('/wallets/get/account/' + account);
        const { data: result } = res;
        if (result?.code !== '200')
            throw new CustomError('Failed to retrieve Wallet from Embedly', 404);
        return result.data;
    }
    static async transfer(payload) {
        const res = await Client$1.put('/wallets/wallet/transaction/v2/wallet-to-wallet', payload);
        const { data: result } = res;
        return result.data;
    }
}
class Bank {
    static async getBanks() {
        const res = await Client$1.get('/banks');
        const { data: result } = res;
        if (result?.code !== '200')
            throw new CustomError('Failed to retrieve Wallet from Embedly', 404);
        return result.data;
    }
    static async transfer(payload) {
        const webhookUrl = environment.embedly.webhookURL;
        const organizationAccount = environment.embedly.orgAccount;
        const organizationName = environment.embedly.orgName;
        const currency = currencies.find((c) => c.shortName == payload.currency);
        const bank = banks.find((b) => b.bankName.toLowerCase().includes(payload.destinationBank.toLowerCase()));
        if (!bank)
            throw new CustomError('Bank not found', 404);
        const { currency: c, destinationBank, ...rest } = payload;
        const res = await PayoutClient.post('/inter-bank-transfer', {
            ...rest,
            webhookUrl,
            currencyId: currency?.id,
            destinationBankCode: bank?.bankCode,
            sourceAccountNumber: organizationAccount + '',
            sourceAccountName: organizationName,
        });
        const { data: result } = res;
        return result;
    }
}
class Embedly {
}
Embedly.customers = Customer;
Embedly.validations = Validation;
Embedly.wallets = Wallet;
Embedly.banks = Bank;

const Client = axios.create({
    baseURL: environment.youverify?.url ?? 'https://api.sandbox.youverify.co',
    headers: {
        token: environment.youverify?.key ?? '',
    },
});
class Youverify {
    static async verifyBVN(data) {
        try {
            // For testing purposes
            if (isTestingBVN(data.id))
                return {
                    firstName: 'Bunch',
                    lastName: 'Dillon',
                    dateOfBirth: '12-12-1994',
                    country: 'NG',
                    mobile: '080' + generateRandomNumber(8),
                    gender: 'Male',
                };
            const res = await Client.post('/v2/api/identity/ng/bvn', data);
            const { data: result } = res;
            if (result.data && result.data?.status?.includes('not_found'))
                throw new CustomError(result.data.reason, 404);
            if (result.data)
                return result.data;
        }
        catch (error) {
            const res = error?.response?.data;
            if (res && !res.success)
                throw new CustomError(res.message, res.statusCode);
            const e = useErrorParser(error);
            throw new CustomError(e?.message, e.status);
        }
    }
    static async verifyAddress(phone) {
        try {
            const res = await axios.post('https://address.svc.youverify.co/v2/api/digital-addresses/lookup', {
                consent: true,
                phone,
            }, {
                headers: {
                    token: environment.youverify?.key ?? '',
                },
            });
            const { data } = res;
            console.log(data);
        }
        catch (error) {
            console.log(error, 'ADDRESS Very');
        }
    }
}

const TXNFEE$1 = process.env.EXTERNAL_PERCENT ?? 15;
async function processTransferEvent(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    if (!event)
        throw new CustomError('Event not found', 404);
    const payload = event?.payload;
    try {
        const result = await Embedly.banks.transfer({
            amount: Number(payload.amount),
            currency: payload.currency,
            destinationBank: payload.destinationBank,
            destinationAccountNumber: payload.destinationAccountNumber,
            destinationAccountName: payload.destinationAccountName,
            remarks: payload.remarks,
        });
        if (!result.succeeded)
            throw new CustomError('Transfer not succeeded', 500);
        const amount = amountInKobo(Number(payload.amount));
        const transferRecord = await prisma.$transaction(async (tx) => {
            // Add this transaction to the Provider account
            const provider = await tx.provider.upsert({
                where: { provider: 'EMBEDLY' },
                create: { provider: 'EMBEDLY', balance: amount },
                update: {
                    balance: { increment: amount },
                    total: { increment: 1 },
                },
            });
            // 3.1 Create pending transfer
            const transfer = await tx.transfer.update({
                where: { id: eventId },
                data: {
                    status: 'PROCESSING',
                    transactionReference: result.data,
                    metadata: {
                        providerId: provider.id,
                    },
                },
            });
            // 3.2 Debit user wallet
            const fromWallet = await tx.wallet.findUnique({
                where: { id: payload.fromWalletId },
            });
            if (!fromWallet)
                throw new CustomError('From wallet not found', 404);
            const newBalance = BigInt(fromWallet?.availableBalance) - amount;
            const wallet = await tx.wallet.update({
                where: { id: fromWallet?.id },
                data: {
                    availableBalance: newBalance,
                },
            });
            // Debit for FEEs
            const feeRate = amountInKobo(Number(TXNFEE$1));
            const newBalAfterFee = BigInt(wallet?.availableBalance) - feeRate;
            await tx.wallet.update({
                where: { id: fromWallet?.id },
                data: {
                    availableBalance: newBalAfterFee,
                },
            });
            // ============TRANSFER============================
            // create JournalEntry
            const journal = await tx.journalEntry.create({
                data: {
                    reference: transfer.id,
                    transferId: transfer.id,
                    description: 'external transfer',
                    metadata: {
                        fromWalletId: fromWallet.id,
                        providerId: provider.id,
                    },
                },
            });
            // 3.3 Create ledger entry (DEBIT)
            await tx.ledger.create({
                data: {
                    walletId: fromWallet.id,
                    transferId: transfer.id,
                    journalId: journal.id,
                    change: -amount,
                    balanceAfter: newBalance,
                    type: 'TRANSFER_DEBIT',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // provider float ledger row (credit)
            await tx.ledger.create({
                data: {
                    providerId: provider.id,
                    journalId: journal.id,
                    change: amount,
                    balanceAfter: BigInt(provider.balance) + amount,
                    type: 'TRANSFER_CREDIT',
                    metadata: {
                        transferId: transfer.id,
                        provider: 'EMBEDLY',
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // 3.4 Create outbox for async publish
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer.id,
                    topic: 'transfer.external.embedly.processing',
                    payload: {
                        transferId: transfer.id,
                        userId: payload.initiatedBy,
                        amount: payload.amount,
                        currency: payload.currency,
                        toBankCode: payload.destinationBank,
                        toAccountNumber: payload.destinationAccountNumber,
                        toAccountName: payload.destinationAccountName,
                        journalId: journal.id,
                    },
                },
            });
            // Create a debit transaction
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'PROCESSING',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                    },
                },
            });
            // ============TRANSFER============================
            // ============FEE============================
            // create JournalEntry
            const feeJournal = await tx.journalEntry.create({
                data: {
                    reference: result.data,
                    transferId: transfer.id,
                    description: 'Commission on Nip',
                    metadata: {
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                    },
                },
            });
            // Create Debit Ledger
            await tx.ledger.create({
                data: {
                    walletId: fromWallet?.id,
                    journalId: feeJournal.id,
                    transferId: transfer.id,
                    change: -feeRate,
                    balanceAfter: newBalAfterFee,
                    type: 'FEE',
                    metadata: {
                        reason: 'Commission on Nip',
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                        providerId: provider.id,
                    },
                },
            });
            // Fee ledger
            const feeLedger = await tx.ledger.create({
                data: {
                    walletId: fromWallet?.id,
                    journalId: feeJournal.id,
                    transferId: transfer.id,
                    change: feeRate,
                    balanceAfter: newBalAfterFee,
                    type: 'FEE',
                    metadata: {
                        reason: 'Commission on Nip',
                        fromWalletId: fromWallet?.id,
                        toProvider: 'EMBEDLY',
                        providerId: provider.id,
                    },
                },
            });
            // Add Fee
            const fee = await tx.fee.create({
                data: {
                    amount: Number(feeRate), //In Kobo,
                    currency: transfer.currency,
                    rate: Number(feeRate), //In Kobo,
                    status: 'PROCESSING',
                    provider: provider.id,
                    transactionId: transfer.id,
                    ledgerId: feeLedger.id,
                    type: 'EXTERNAL',
                },
            });
            // Create processing transaction for Fee
            await tx.transaction.create({
                data: {
                    status: 'PROCESSING',
                    amount: Number(TXNFEE$1),
                    itemId: fee.id,
                    type: 'FEE',
                    userId: payload.initiatedBy,
                    metadata: {
                        currency: transfer.currency,
                        type: 'debit',
                        reason: 'Commission on Nip',
                    },
                },
            });
            // ============FEE============================
            return transfer;
        });
        return transferRecord;
    }
    catch (err) {
        await prisma.$transaction(async (tx) => {
            await tx.transfer.update({
                where: { id: eventId },
                data: {
                    status: 'FAILED',
                    reason: err?.response?.data?.message ?? err.message,
                },
            });
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'FAILED',
                    metadata: {
                        reason: payload.remarks,
                        toBankCode: payload.destinationBank,
                        toAccount: payload.destinationAccountNumber,
                        error: err?.response?.data?.message ?? err.message,
                    },
                },
            });
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.external.embedly.failed',
                payload: {
                    transferId: eventId,
                    userId: payload.initiatedBy,
                    amount: payload.amount,
                    currency: payload.currency,
                    toBankCode: payload.destinationBank,
                    toAccountNumber: payload.destinationAccountNumber,
                    toAccountName: payload.destinationAccountName,
                    error: err?.response?.data?.message ?? err.message,
                },
            },
        });
        throw new CustomError('External transfer failed', 500);
    }
}

async function processAirtimeEvent(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    if (!event)
        return;
    const payload = event?.payload;
    let response = null;
    try {
        response = await Akuuk.airtime({
            number: payload.phoneNumber,
            amount: payload.amount,
            country: payload?.country ?? 'NG',
            billing: 'prepaid',
        });
        await prisma.$transaction(async (tx) => {
            // mark tansaction completed
            // TODO:: Check this again, it can pull any ledgerRow
            const ledgerRow = await tx.ledger.findFirst({
                where: { walletId: payload.fromWalletId },
            });
            const rate = Number(process.env.AIRTIME_PERCENT) ?? 0.025;
            await tx.fee.create({
                data: {
                    transactionId: payload?.airtimeId,
                    provider: ledgerRow?.providerId,
                    type: 'AIRTIME',
                    rate,
                    amount: Number(payload.amount) * rate,
                    currency: 'NGN',
                    status: 'SUCCESS',
                },
            });
            await tx.airtime.update({
                where: { id: payload.airtimeId },
                data: {
                    status: 'SUCCESS',
                    reference: response?.details?.txnReference + '',
                    ledgerEntryId: ledgerRow?.id,
                    network: response?.details?.network,
                },
            });
            await tx.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'COMPLETED',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: eventId,
                    topic: 'airtime.purchase.completed',
                    published: true,
                    publishedAt: new Date().toISOString(),
                    payload: {
                        airtimeId: payload.airtimeId,
                        userId: payload.userId,
                        phoneNumber: payload.phoneNumber,
                        network: response?.details?.network,
                        fromWalletId: payload.fromWalletId,
                        amount: payload.amount,
                        currency: response?.details?.currency ?? 'NGN',
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                    },
                },
            });
        });
        const user = await prisma.user.findUnique({
            where: { id: payload.userId },
        });
        if (!user)
            return response;
        const message = formatTransferSMS({
            account: payload.accountNumber + '',
            amount: amountInKobo(Number(payload.amount)),
            desc: 'Airtime Purchase to ' + payload.phoneNumber,
            balance: amountInKobo(Number(payload.balance)),
            date: new Date(),
            currency: response?.details?.currency ?? 'NGN',
            type: 'DR',
        });
        await Queue.trigger(eventId, 'NOTIFICATION', {
            country: user?.country ?? 'NG',
            message,
            phone: user?.phone,
            type: 'SMS',
        });
        return response;
    }
    catch (err) {
        if (response?.code === 200) {
            await prisma.airtime.update({
                where: { id: payload.airtimeId },
                data: {
                    status: 'SUCCESS',
                    reference: response?.details?.txnReference + '',
                    network: response?.details?.network,
                },
            });
            await prisma.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'PROCESSING',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: eventId,
                    topic: 'airtime.purchase.akuuk.partial',
                    payload: {
                        airtimeId: payload.airtimeId,
                        userId: payload.userId,
                        error: err.message,
                    },
                },
            });
            throw new Error(err);
        }
        await prisma.$transaction(async (tx) => {
            await tx.airtime.update({
                where: { id: payload.airtimeId },
                data: { status: 'FAILED', error: err.message },
            });
            const wallet = await tx.wallet.findFirst({
                where: { id: payload.fromWalletId },
            });
            const newUserLedgerBalance = BigInt(wallet?.ledgerBalance) + amountInKobo(Number(payload.amount));
            const newAvailableBalance = BigInt(wallet?.availableBalance) +
                amountInKobo(Number(payload.amount));
            await tx.wallet.update({
                where: { id: payload.fromWalletId },
                data: {
                    availableBalance: newAvailableBalance,
                    ledgerBalance: newUserLedgerBalance,
                },
            });
            await prisma.transaction.update({
                where: { itemId: eventId },
                data: {
                    status: 'FAILED',
                    metadata: {
                        network: response?.details?.network,
                        competedAt: response?.details?.txnDate ?? new Date().toISOString(),
                        airtimeId: payload.airtimeId,
                    },
                },
            });
            const message = formatTransferSMS({
                account: payload.accountNumber + '',
                amount: amountInKobo(Number(payload.amount)),
                desc: 'Reversed: Airtime Purchase to ' + payload.phoneNumber,
                balance: newAvailableBalance,
                date: new Date(),
                currency: response?.details?.currency ?? 'NGN',
                type: 'CR',
            });
            const user = await prisma.user.findFirst({
                where: { id: payload.userId },
            });
            if (user) {
                await Queue.trigger(eventId, 'NOTIFICATION', {
                    country: user?.country ?? 'NG',
                    message,
                    phone: user?.phone,
                    type: 'SMS',
                });
            }
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'airtime.purchase.akuuk.failed',
                payload: {
                    airtimeId: payload.airtimeId,
                    userId: payload.userId,
                    error: err.message,
                },
            },
        });
        console.error('[AirtimeHandler] Airtime purchase failed:', err);
        throw new Error(err);
    }
}

async function processNotificationsEvent(eventId, data) {
    if (data.type === 'SMS') {
        return await sendSMSWithAkuuk(data);
    }
    if (data.type === 'EMAIL') {
        return await sendMail(data);
    }
    await sendSMSWithAkuuk(data);
    await sendMail(data);
    return true;
}
async function sendSMSWithAkuuk(data) {
    await Akuuk.sendSMS({
        country: data.country,
        message: data.message,
        number: data.phone,
    });
}
async function sendMail(data) {
    return await sendEmail({
        to: data.email,
        variables: {
            email: data.email,
            to_name: data.name,
            ...data.variables,
        },
        template: data.template,
    }).catch((e) => console.log(e));
}

async function processEmbedlyWallet(eventId) {
    const event = await prisma.outboxEvent.findFirst({
        where: { aggregateId: eventId },
    });
    console.log(event, 'GET EVENT');
    if (!event)
        return;
    const payload = event?.payload;
    try {
        if (!payload.email)
            throw new CustomError('User must provide email', 422);
        const data = {
            address: payload?.streetLine,
            city: payload?.city,
            country: payload?.country,
            dob: toISODate(payload?.dob),
            firstName: payload?.name?.split(' ')[0],
            lastName: payload?.name?.split(' ')[1],
            phone: payload?.phone,
            middleName: payload?.name?.split(' ')?.[2] ?? '',
        };
        console.log(data, 'GET PAYLOAD');
        const wallet = await createEmbedlyUser(eventId, {
            embedly: data,
            email: payload.email,
            bvn: payload?.bvn?.trim(),
        });
        console.log(wallet, 'CREATE EMBEDLY WALLET');
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'embedly.user.wallet.creation.completed',
                payload: {
                    userId: eventId,
                    name: payload.name,
                    email: payload.email,
                    walletId: wallet?.id,
                },
            },
        });
        return wallet;
    }
    catch (error) {
        console.log(error, 'ProcessEmbedlyUSer');
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'embedly.user.wallet.creation.failed',
                payload: {
                    userId: eventId,
                    name: payload.name,
                    email: payload.email,
                    error,
                },
            },
        });
    }
}

async function processInternalTransferEvent(eventId, data) {
    try {
        const result = await Embedly.wallets.transfer({
            amount: Number(data.amount),
            fromAccount: data.fromAccount,
            toAccount: data.toAccount,
            transactionReference: data.transactionReference,
            remarks: data.remarks,
        });
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.internal.organization.completed',
                published: true,
                publishedAt: new Date().toISOString(),
                payload: {
                    transferId: eventId,
                    fromAccount: data.fromAccount,
                    toAccount: data.toAccount,
                    remarks: data.remarks,
                    transactionReference: data.transactionReference,
                    amount: data.amount,
                    currency: 'NGN',
                    timestamp: new Date().toISOString(),
                },
            },
        });
        return result;
    }
    catch (err) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: eventId,
                topic: 'transfer.internal.organization.failed',
                payload: {
                    transferId: eventId,
                    fromAccount: data.fromAccount,
                    toAccount: data.toAccount,
                    remarks: data.remarks,
                    transactionReference: data.transactionReference,
                    amount: data.amount,
                    currency: 'NGN',
                    timestamp: new Date().toISOString(),
                },
            },
        });
        throw new CustomError('Internal transfer failed to organization wallet failed', 500);
    }
}

const redisClient$1 = new IORedis(environment.redis.url, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});
class Workers {
    static async transferWorker() {
        return new Worker(QUEUE_NAMES.TRANSFER, async (job) => {
            const { data } = job;
            try {
                if (job.attemptsMade === 0) {
                    const result = await processTransferEvent(data.id);
                    return result;
                }
                if (job.attemptsMade === 1) {
                    // Use SafeHaven
                }
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 2,
        });
    }
    static async internalTransferWorker() {
        return new Worker(QUEUE_NAMES.INTERNAL_TRANSFER, async (job) => {
            const { data } = job;
            try {
                const result = await processInternalTransferEvent(data.id, data.data);
                return result;
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 2,
        });
    }
    static async airtimeWorker() {
        return new Worker(QUEUE_NAMES.AIRTIME, async (job) => {
            const { data } = job;
            try {
                if (job.attemptsMade === 0) {
                    const result = await processAirtimeEvent(data.id);
                    return result;
                }
                if (job.attemptsMade === 1) {
                    // Use SafeHaven
                }
            }
            catch (error) {
                if (job.attemptsMade > 1)
                    await prisma.outboxEvent.create({
                        data: {
                            aggregateId: data.id,
                            topic: 'airtime.purchase.failed',
                            payload: {
                                error: error.message,
                            },
                        },
                    });
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 2,
        });
    }
    static async notificationWorker() {
        return new Worker(QUEUE_NAMES.NOTIFICATION, async (job) => {
            const { data } = job;
            try {
                const result = await processNotificationsEvent(data.id, data.data);
                return result;
            }
            catch (error) {
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 2,
        });
    }
    static async walletWorker() {
        return new Worker(QUEUE_NAMES.CREATEWALLET, async (job) => {
            const { data } = job;
            try {
                const result = await processEmbedlyWallet(data.id);
                return result;
            }
            catch (error) {
                console.log(error, 'WORKER');
                throw error;
            }
        }, {
            connection: redisClient$1,
            concurrency: 2,
        });
    }
}

const redisClient = new IORedis(environment.redis.url, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});
const defaultJobOptions = {
    attempts: 3,
    backoff: {
        type: 'exponential',
        delay: 2000,
    },
    removeOnComplete: {
        count: 1000,
        age: 24 * 3600,
    },
    removeOnFail: {
        count: 5000,
        age: 7 * 24 * 3600,
    },
};
const transferQueue = new Queue$1(QUEUE_NAMES.TRANSFER, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const internalTransferQueue = new Queue$1(QUEUE_NAMES.INTERNAL_TRANSFER, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const airtimeQueue = new Queue$1(QUEUE_NAMES.AIRTIME, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
const notificationQueue = new Queue$1(QUEUE_NAMES.NOTIFICATION, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        // attempts: 2,
    },
});
const embedlyWalletQueue = new Queue$1(QUEUE_NAMES.CREATEWALLET, {
    connection: redisClient,
    defaultJobOptions: {
        ...defaultJobOptions,
        attempts: 2,
    },
});
class Queue {
    static async trigger(id, type, data) {
        switch (type) {
            case 'AIRTIME':
                return this.triggerAirtime(id);
            case 'TRANSFER':
                return this.triggerTransfer(id);
            case 'NOTIFICATION':
                return this.triggerNotification(id, data);
            case 'CREATEWALLET':
                return this.triggerCreateEmbedlyWallet(id);
            case 'INTERNAL_TRANSFER':
                return this.triggerInternalTransfer(id, data);
            default:
                throw new Error(`Unknown queue type: ${type}`);
        }
    }
    static async triggerAirtime(id) {
        const job = await airtimeQueue.add('process-airtime', { id }, {
            jobId: `transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerTransfer(id) {
        const job = await transferQueue.add('process-transfer', { id }, {
            jobId: `transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerInternalTransfer(id, data) {
        const job = await internalTransferQueue.add('process-internal-transfer', { id, data }, {
            jobId: `internal-transfer-${id}`,
            priority: 2,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerNotification(id, data) {
        const job = await notificationQueue.add('process-notification', { id, data }, {
            jobId: `notification-${generateRandomNumber(6)}-${id}`,
            priority: 3,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
    static async triggerCreateEmbedlyWallet(id) {
        const job = await embedlyWalletQueue.add('process-create-embedly-wallet', { id }, {
            jobId: `wallet-${id}`,
            priority: 3,
        });
        return {
            jobId: job.id,
            status: 'queued',
        };
    }
}
Workers.airtimeWorker();
Workers.transferWorker();
Workers.notificationWorker();
Workers.walletWorker();
Workers.internalTransferWorker();

const MINIMUM_TRANSFER_AMOUNT = 100;
async function transferToExternalBank(payload) {
    const { idempotencyKey, initiatorUserId, senderName, destinationBank, destinationAccountNumber, destinationAccountName, amount, currency = 'NGN', reason = 'Funds Transfer', } = payload;
    const amt = amountInKobo(amount);
    if (!idempotencyKey)
        throw new CustomError('Missing idempotency key', 400);
    if (amt <= 0n)
        throw new CustomError('Invalid amount', 400);
    if (amount < MINIMUM_TRANSFER_AMOUNT)
        throw new Error(`Amount must be equal or greater than ${MINIMUM_TRANSFER_AMOUNT}`);
    // ------------------------------
    // 1️⃣ Check Idempotency Record
    // ------------------------------
    const existingTransfer = await prisma.transfer.findUnique({
        where: { idempotencyKey },
    });
    if (existingTransfer)
        return existingTransfer;
    // ------------------------------
    // 2️⃣ Resolve Wallet & Balance
    // ------------------------------
    const [fromWallet, fromUser] = await Promise.all([
        prisma.wallet.findFirst({
            where: { userId: initiatorUserId, currency },
        }),
        prisma.user.findFirst({ where: { id: initiatorUserId } }),
    ]);
    if (!fromUser)
        throw new CustomError('User not found', 404);
    if (!fromWallet)
        throw new CustomError('Wallet not found', 404);
    const feeRate = Number(process.env?.EXTERNAL_PERCENT ?? 15);
    const totalAmount = amountInKobo(amount + feeRate);
    if (Number(fromWallet.availableBalance) < totalAmount)
        throw new CustomError('Insufficient balance', 422);
    // Check for daily limit
    const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
    if (limitExceeded)
        throw new CustomError(`Daily limit exceeded.`, 403);
    const transferRecord = await prisma.$transaction(async (tx) => {
        const provider = await tx.provider.upsert({
            where: { provider: 'EMBEDLY' },
            update: {},
            create: {
                provider: 'EMBEDLY',
            },
        });
        const transfer = await tx.transfer.create({
            data: {
                idempotencyKey,
                fromWalletId: fromWallet.id,
                amount: amt,
                currency,
                initiatedBy: initiatorUserId,
                reason,
                kind: 'OUT',
                status: 'PENDING',
                shouldRefund: true,
                type: 'EXTERNAL',
                metadata: {
                    providerId: provider.id,
                },
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: -amount.toString(),
                itemId: transfer.id,
                type: 'TRANSFER',
                status: 'PENDING',
                userId: initiatorUserId,
                metadata: {
                    type: 'debit',
                    currency: 'NGN',
                    walletId: fromWallet.id,
                    providerId: provider.id,
                    recipient: `${destinationAccountName}-${destinationAccountNumber}`,
                },
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.external.initiated',
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    destinationBank,
                    destinationAccountNumber,
                    destinationAccountName,
                    sourceAccountNumber: fromWallet.accountNumber?.trim(),
                    sourceAccountName: senderName.trim(),
                    remarks: reason,
                    amount: amount,
                    currency,
                    providerId: provider.id,
                    initiatedBy: initiatorUserId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        return transfer;
    });
    await Queue.trigger(transferRecord.id, 'TRANSFER');
    return {
        ...transferRecord,
        amount: amountInNaira(transferRecord.amount),
    };
}
async function walletToWalletTransfer(payload) {
    const { idempotencyKey, initiatorUserId, sender, receiver, amount, currency = 'NGN', reason, } = payload;
    // TODO:: Check for user wallet amount before transfering
    const amt = amountInKobo(amount);
    if (amt <= 0n)
        throw new Error('Amount must be positive');
    if (amount < MINIMUM_TRANSFER_AMOUNT)
        throw new Error(`Amount must be equal or greater than ${MINIMUM_TRANSFER_AMOUNT}`);
    // Resolve sender and recipient
    const [fromWallet, toWallet] = await Promise.all([
        prisma.wallet.findFirst({
            where: { accountNumber: sender, currency },
            include: { user: true },
        }),
        prisma.wallet.findFirst({
            where: { accountNumber: receiver, currency },
            include: { user: true },
        }),
    ]);
    if (!fromWallet)
        throw new CustomError(`Sender wallet not found for currency ${currency}`, 404);
    if (!toWallet)
        throw new CustomError(`Recipient wallet not found for currency ${currency}`, 404);
    if (fromWallet.status !== 'ACTIVE')
        throw new CustomError('Sender wallet is not active. Please follow our instructions to activate your wallet', 403);
    if (toWallet.status !== 'ACTIVE')
        throw new CustomError('Recipient wallet is not active. Please follow our instructions to activate your wallet', 403);
    const fromUser = fromWallet.user;
    const toUser = toWallet.user;
    // Checks
    if (!toUser)
        throw new CustomError('Recipient not found', 404);
    if (!fromUser)
        throw new CustomError('Sender not found', 404);
    if (fromUser.status !== 'ACTIVE')
        throw new CustomError('Sender account is not active. Please follow our instructions to activate your account', 403);
    if (toUser.status !== 'ACTIVE')
        throw new CustomError('Recipient account is not active. Please follow our instructions to activate your wallet', 403);
    if (fromUser.id === toUser.id)
        throw new CustomError('Cannot transfer to self', 422);
    // canonical order to avoid deadlocks
    const ordered = [fromWallet.id, toWallet.id].sort();
    const transfer = await prisma.$transaction(async (tx) => {
        // idempotency guard
        const existing = await tx.transfer.findUnique({
            where: { idempotencyKey },
        });
        if (existing)
            return existing; // log here
        // lock wallets with FOR UPDATE
        const lockedRows = await tx.$queryRaw `SELECT id, "userId", currency, "ledgerBalance", "availableBalance", "reservedBalance", version, status FROM "Wallet" WHERE id IN (${ordered[0]}, ${ordered[1]}) FOR UPDATE`;
        if (lockedRows.length !== 2)
            throw new CustomError('Failed to lock wallets', 500);
        // map locked rows
        const lockedMap = new Map(lockedRows.map((r) => [r.id, r]));
        const lockedFrom = lockedMap.get(fromWallet.id);
        const lockedTo = lockedMap.get(toWallet.id);
        if (!lockedFrom || !lockedTo)
            throw new CustomError('Failed to lock wallets', 422);
        // check funds
        const available = BigInt(lockedFrom.availableBalance);
        // const reserved = BigInt((lockedFrom.reservedBalance as any) || 0);
        if (available < amt)
            throw new CustomError('Insufficient funds', 403);
        // Check for daily limit
        const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
        if (limitExceeded)
            throw new CustomError(`Daily limit exceeded.`, 403);
        // create Transfer record
        const operationId = `transfer_${payload.idempotencyKey}`;
        let transfer = await tx.transfer.create({
            data: {
                idempotencyKey,
                fromWalletId: fromWallet.id,
                toWalletId: toWallet.id,
                amount: amt,
                currency,
                kind: 'OUT',
                initiatedBy: initiatorUserId,
                reason,
                status: 'PENDING',
                metadata: {
                    operationId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.internal.initiated',
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    amount: amountInNaira(amt),
                    fromUserId: fromUser.id,
                    toUserId: toUser.id,
                    currency,
                    initiatedBy: initiatorUserId,
                    timestamp: new Date().toISOString(),
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: transfer.id,
                transferId: transfer.id,
                description: reason ?? 'internal transfer',
                metadata: {
                    operationId,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                },
            },
        });
        // compute new balances
        const newFromLedgerBal = BigInt(lockedFrom.ledgerBalance) - amt;
        const newFromAvailable = BigInt(lockedFrom.availableBalance) - amt;
        const newToLedgerBal = BigInt(lockedTo.ledgerBalance) + amt;
        const newToAvailable = BigInt(lockedTo.availableBalance) + amt;
        // create ledger rows (debit then credit), reference journal.id
        const debit = await tx.ledger.create({
            data: {
                walletId: fromWallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: -amt,
                balanceAfter: newFromLedgerBal,
                type: 'TRANSFER_DEBIT',
                metadata: {
                    reason,
                    operationId,
                    recipientWalletId: toWallet.id,
                },
            },
        });
        const credit = await tx.ledger.create({
            data: {
                walletId: toWallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: amt,
                balanceAfter: newToLedgerBal,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    reason,
                    operationId,
                    senderWalletId: fromWallet.id,
                },
            },
        });
        // Update sender wallet
        await tx.wallet.update({
            where: { id: fromWallet.id },
            data: {
                ledgerBalance: newFromLedgerBal,
                availableBalance: newFromAvailable,
                version: { increment: 1 },
            },
        });
        // Update recipient wallet
        await tx.wallet.update({
            where: { id: toWallet.id },
            data: {
                ledgerBalance: newToLedgerBal,
                availableBalance: newToAvailable,
                version: { increment: 1 },
            },
        });
        // mark transfer completed
        transfer = await tx.transfer.update({
            where: { id: transfer.id },
            data: {
                status: 'COMPLETED',
                completedAt: new Date(),
                shouldRefund: false,
            },
        });
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transfer.id,
                topic: 'transfer.completed',
                published: true,
                publishedAt: new Date().toISOString(),
                payload: {
                    transferId: transfer.id,
                    fromWalletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    amount: amountInNaira(amt),
                    currency,
                    fromUserId: fromUser.id,
                    toUserId: toUser.id,
                    journalId: journal.id,
                    debitLedgerId: debit.id,
                    creditLedgerId: credit.id,
                    completedAt: new Date().toISOString(),
                },
            },
        });
        // Create a debit transaction
        await tx.transaction.create({
            data: {
                amount: -amount.toString(),
                itemId: debit.id,
                type: 'TRANSFER',
                status: 'COMPLETED',
                userId: initiatorUserId,
                metadata: {
                    type: 'debit',
                    currency: 'NGN',
                    operationId,
                    walletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    recipient: toUser.name,
                    transferId: transfer.id,
                },
            },
        });
        // Create a credit transaction
        await tx.transaction.create({
            data: {
                amount: amount,
                itemId: credit.id,
                type: 'TRANSFER',
                status: 'COMPLETED',
                userId: toUser.id,
                metadata: {
                    type: 'credit',
                    currency: 'NGN',
                    operationId,
                    walletId: fromWallet.id,
                    toWalletId: toWallet.id,
                    recipient: toUser.name,
                    transferId: transfer.id,
                },
            },
        });
        // return structured result
        return {
            transfer: {
                ...transfer,
                amount: amountInNaira(amt),
            },
            journalId: journal.id,
            debitLedgerId: debit.id,
            creditLedgerId: credit.id,
            status: 'COMPLETED',
            id: transfer.id,
        };
    });
    const newFromAvailable = BigInt(fromWallet?.availableBalance) - amt;
    const newToAvailable = BigInt(toWallet?.availableBalance) + amt;
    // TODO: This not working
    const DRMessage = formatTransferSMS({
        account: fromWallet.accountNumber,
        amount: amt,
        currency,
        desc: reason?.toUpperCase(),
        balance: newFromAvailable,
        date: new Date(),
        type: 'DR',
    });
    await Queue.trigger(transfer.id, 'NOTIFICATION', {
        country: fromUser?.country ?? 'NG',
        message: DRMessage,
        phone: fromUser?.phone,
        type: 'SMS',
    });
    const message = formatTransferSMS({
        account: toWallet.accountNumber,
        amount: amt,
        desc: reason?.toUpperCase(),
        balance: newToAvailable,
        date: new Date(),
        currency,
        type: 'CR',
    });
    await Queue.trigger(transfer.id, 'NOTIFICATION', {
        country: toUser?.country ?? 'NG',
        message,
        phone: toUser?.phone,
        type: 'SMS',
    });
    return transfer;
}
async function create(payload) {
    // Create user wallet
    const userWallet = await prisma.wallet.create({
        data: {
            accountNumber: payload.accountNumber,
            bankCode: payload.bankCode,
            bankName: payload.bankName,
            walletId: payload?.id,
            availableBalance: 0,
            ledgerBalance: 0,
            userId: payload.userId,
            status: 'ACTIVE',
        },
    });
    return userWallet;
}

async function update(id, data) {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    if (!user)
        throw new CustomError('User not found', 200);
    return await prisma.$transaction(async (tx) => {
        // Base update
        const record = {};
        // TDOD: Remove password update from here
        if (data.email !== undefined)
            record.email = data.email;
        if (data.occupation !== undefined)
            record.occupation = data.occupation;
        if (data.education !== undefined)
            record.education = data.education;
        if (data.religion !== undefined)
            record.religion = data.religion;
        if (data.bvn !== undefined)
            record.bvn = data.bvn;
        if (data.embedlyCustomerId !== undefined)
            record.embedlyCustomerId = data.embedlyCustomerId;
        if (data.maritalStatus !== undefined)
            record.maritalStatus = data.maritalStatus;
        if (data.emailVerified !== undefined)
            record.emailVerified = data.emailVerified;
        const user = await tx.user.update({
            where: { id },
            data: {
                ...record,
            },
            include: { address: true, agent: { select: { id: true } } },
        });
        // Related updates
        if (data?.nextOfKin && user.agent?.id) {
            await tx.agent.update({
                where: { id: user.agent?.id },
                data: {
                    nextOfKin: {
                        create: { ...data.nextOfKin },
                    },
                },
            });
        }
        if (data?.bank) {
            await tx.bank.create({
                data: {
                    ...data.bank,
                    userId: user.id,
                    accountNumber: Number(data.bank.accountNumber),
                },
            });
        }
        if (data?.address) {
            await tx.user.update({
                where: { id: user.id },
                data: {
                    address: { create: { ...data.address } },
                },
            });
        }
        return user;
    });
}
async function validateBVN(bvn) {
    const bvnHash = hashToken(bvn);
    const existing = await prisma.user.findFirst({
        where: {
            emailVerified: true,
            OR: [
                { bvn: bvnHash },
                { bvn: bvn },
            ],
        },
    });
    return Boolean(existing);
}
async function getUserByPhone(phone) {
    if (!phone)
        throw new CustomError('Phone Number is required', 422);
    const user = await prisma.user.findFirst({
        where: { phone: phone },
        select: {
            id: true,
            email: true,
            role: true,
            name: true,
            isLocked: true,
            status: true,
        },
    });
    if (!user)
        throw new CustomError('User not found', 404);
    return user;
}
async function getUserByID(ID) {
    if (!ID)
        throw new CustomError('Wepay ID is required', 422);
    const user = await prisma.user.findFirst({
        where: { uniqueID: ID },
        select: {
            id: true,
            email: true,
            role: true,
            name: true,
            isLocked: true,
            status: true,
        },
    });
    if (!user)
        throw new CustomError('User not found', 404);
    return user;
}
async function addVerification$1(id, data) {
    if (!data.documents.length)
        throw new CustomError('Atleast one ocument required', 422);
    const verification = await prisma.verification.create({
        data: {
            userId: id,
            documents: {
                create: data.documents.map((doc) => ({
                    type: doc.type,
                    fileUrl: doc.fileUrl,
                })),
            },
        },
        include: { documents: true },
    });
    return verification;
}
async function createPin(id, payload) {
    const hashedPin = await hashPin(payload.pin);
    const user = await prisma.user.update({
        where: { id },
        data: {
            pin: hashedPin,
        },
        include: { address: true },
    });
    if (user.embedlyCustomerId)
        return user;
    // Trigger wallet creation
    await prisma.outboxEvent.create({
        data: {
            aggregateId: user.id,
            topic: 'embedly.user.wallet.creation.initiated',
            payload: {
                userId: user.id,
                streetLine: user?.address?.streetLine,
                city: user.address?.city,
                country: user.address?.country,
                dob: user.dob,
                name: user.name,
                phone: user.phone,
                email: user.email,
                bvn: user.bvn,
            },
        },
    });
    await Queue.trigger(user.id, 'CREATEWALLET');
    return user;
}
async function verifyUserPin(hashedPin, payload) {
    return await verifyPin(hashedPin, payload.pin);
}
async function createEmbedlyUser(userId, data) {
    let embedly = { id: data?.embedly?.id };
    if (!embedly.id) {
        embedly = await Embedly.customers.personal({
            address: data?.embedly?.address,
            city: data?.embedly?.city,
            country: data?.embedly?.country,
            dob: data?.embedly?.dob,
            firstName: data?.embedly?.firstName,
            lastName: data?.embedly?.lastName,
            mobileNumber: data?.embedly?.phone,
            middleName: data?.embedly?.middleName ?? data?.embedly?.lastName,
            emailAddress: data.email,
        });
        if (!embedly.id) {
            await prisma.outboxEvent.create({
                data: {
                    aggregateId: userId,
                    topic: 'embedly.user.wallet.creation.customer.failed',
                    payload: {
                        userId: userId,
                        data,
                        customerId: embedly.id,
                        error: 'Embedly personal account could be created',
                        embedly,
                    },
                },
            });
            throw new CustomError('Embedly personal account could be created', 500);
        }
        await update(userId, {
            embedlyCustomerId: embedly.id,
        });
    }
    const verified = await Embedly.customers.verifyKYC({
        bvn: data.bvn,
        customerId: embedly.id,
    });
    if (!verified) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: userId,
                topic: 'embedly.user.wallet.creation.kyc.failed',
                payload: {
                    userId: userId,
                    bvn: data.bvn,
                    customerId: embedly.id,
                    error: 'Embedly KYC could not be verified',
                    verified,
                },
            },
        });
        throw new CustomError('Embedly KYC could not be verified', 500);
    }
    const result = await Embedly.wallets.create({
        userId: userId,
        customerId: embedly.id,
        currency: data?.extra?.currency ?? 'NGN',
        name: `WePay-${userId}`,
    });
    if (!result) {
        await prisma.outboxEvent.create({
            data: {
                aggregateId: userId,
                topic: 'embedly.user.wallet.creation.wallet.failed',
                payload: {
                    userId: userId,
                    wallet: result,
                    customerId: embedly.id,
                    error: 'Wallet could not be created',
                },
            },
        });
        throw new CustomError('Wallet could not be created', 500);
    }
    const wallet = await create({
        userId: userId,
        accountNumber: result.virtualAccount?.accountNumber,
        bankName: result.virtualAccount?.bankName,
        bankCode: result.virtualAccount?.bankCode,
        id: result?.id,
    });
    const bvnHash = hashToken(data?.bvn);
    await update(userId, {
        bvn: bvnHash,
    });
    return wallet;
}
async function getBVNData(value) {
    const data = await Youverify.verifyBVN({
        id: value.bvn,
        isSubjectConsent: true,
        premiumBVN: true,
    });
    return {
        ...value,
        extra: {
            name: data?.firstName + ' ' + data?.lastName,
            dob: toISODate(data?.dateOfBirth),
            country: data?.country,
            gender: data?.gender,
            phone: data?.mobile,
        },
        embedly: {
            dob: toISODate(data?.dateOfBirth),
            country: data?.country,
            gender: data?.gender,
            phone: data?.mobile,
            address: data?.address?.addressLine,
            city: data?.address?.town,
            firstName: data?.firstName,
            lastName: data?.lastName,
            middleName: data?.middleName,
        },
    };
}
async function captureFingerPrint(id, payload) {
    // Optionally, hash the fingerprint before saving for security
    // const hashedFingerPrint = await hashPin(payload.fingerPrint);
    const user = await prisma.user.update({
        where: { id },
        data: {
            fingerPrint: payload.fingerPrint,
        },
        include: { address: true },
    });
    return user;
}

function ValidateRegister() {
    return Joi.object({
        bvn: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(11)
            .required(),
        email: Joi.string().email().optional(),
        role: Joi.string()
            .valid('USER', 'AGENT', 'ADMIN', 'INSTITUTION', 'MERCHANT')
            .optional(),
    });
}
function ValidateVerifyDOB() {
    return Joi.object({
        dob: Joi.string()
            .pattern(/^\d{4}-\d{2}-\d{2}$/)
            .required(),
        bvn: Joi.string().min(11).max(11).required(),
    });
}
function ValidateOTP$1() {
    return Joi.object({
        email: Joi.string().email().optional(),
        type: Joi.string().valid('PHONE', 'EMAIL').default('EMAIL'),
    });
}
function ValidateForgotPin() {
    return Joi.object({
        phone: Joi.string().optional(),
        email: Joi.string().optional(),
    }).or('phone', 'email');
}
function ValidateLogin() {
    return Joi.object({
        phone: Joi.string().optional(),
        email: Joi.string().email().optional(),
        pin: Joi.string().min(4).max(4).required(),
    });
}
function ValidateLoginWithFinger() {
    return Joi.object({
        fingerPrint: Joi.string().required(),
    });
}
function ValidateResetPassword() {
    return Joi.object({
        token: Joi.string().min(6).max(6).required(),
        newPassword: Joi.string().min(8).required(),
    });
}
function ValidateResetPin() {
    return Joi.object({
        pin: Joi.string().min(4).max(4).required(),
        otp: Joi.string().min(6).max(6).required(),
    });
}
function ValidateUpdatePin() {
    return Joi.object({
        pin: Joi.string().min(4).max(4).required()
    });
}
function ValidateForgotPassword() {
    return Joi.object({
        email: Joi.string().email().required(),
    });
}
function VerifyBVN() {
    return Joi.object({
        bvn: Joi.string().min(11).max(11).required(),
    });
}

const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
class AuthController {
    static async register(req, res) {
        try {
            const { error, value } = ValidateRegister().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const exist = await validateBVN(value.bvn);
            if (exist)
                throw new CustomError('BVN already in use', 403);
            const payload = await getBVNData(value);
            const user = await register(payload);
            return res.status(201).json({
                message: 'User created successfully',
                status: 201,
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            if (e.message.includes('`phone`'))
                return res.status(e.status).json({
                    message: 'Phone number already in use',
                });
            if (e.message.includes('`email`'))
                return res.status(e.status).json({
                    message: 'Email already in use',
                });
            return res.status(e.status).json(e);
        }
    }
    static async getBVNDetails(req, res) {
        try {
            const { error, value } = VerifyBVN().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const payload = await getBVNData(value);
            return res.status(200).json({
                message: 'BVN details retrieved successfully',
                data: payload,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async login(req, res) {
        try {
            const { error, value } = ValidateLogin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await login(value);
            const token = signAccessToken({ id: data.id });
            return res.status(200).json({
                message: 'Login successfully',
                success: true,
                data,
                token,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async loginWithFingerPrint(req, res) {
        try {
            const { error, value } = ValidateLoginWithFinger().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await loginWithFinger(value);
            const token = signAccessToken({ id: data.id });
            return res.status(200).json({
                message: 'Login successfully',
                success: true,
                data,
                token,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async forgotPassword(req, res) {
        try {
            const { error, value } = ValidateForgotPassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await forgotPassword(value);
            return res.status(200).json({
                message: 'OTP sent successfully',
                success: true,
                data: {
                    codeSent: data,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async forgotPin(req, res) {
        try {
            const { error, value } = ValidateForgotPin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await forgotPin(value);
            if (!data)
                throw new CustomError("Couldn't sent OTP", 500);
            return res.status(200).json({
                message: 'OTP sent successfully',
                success: true,
                data: {
                    codeSent: data,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async resetPassword(req, res) {
        try {
            const { error, value } = ValidateResetPassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await resetPassword(value);
            return res.status(200).json({
                message: 'Password reset successfully',
                success: true,
                data: data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyDOB(req, res) {
        try {
            const { error, value } = ValidateVerifyDOB().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const data = await getBVNData({
                ...value,
                role: 'USER',
            });
            if (!data)
                throw new CustomError("Couldn't verify BVN", 500);
            const dob = data?.extra?.dob;
            const isVerified = dob === value.dob;
            return res.status(200).json({
                message: 'Birthday verified successfully',
                success: true,
                data: {
                    isVerified,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async resetPin(req, res) {
        try {
            const { error, value } = ValidateResetPin().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const { pin, otp } = value;
            // 1️⃣ Ensure OTP was provided
            if (!otp) {
                throw new CustomError('OTP is required to reset PIN', 422);
            }
            // 2️⃣ Validate OTP
            const record = {};
            if (!isDev() && otp !== '222222')
                record.refreshCode = otp;
            const otpRecord = await prisma.verificationIntent.findFirst({
                where: { refreshCode: otp, ...record },
            });
            if (!otpRecord) {
                throw new CustomError('Invalid or expired OTP', 422);
            }
            const user = await prisma.user.findFirst({
                where: { id: otpRecord.userId },
            });
            if (!user)
                throw new CustomError('User not found', 404);
            // 3️⃣ Reset PIN
            const data = await resetPin(user, { pin });
            return res.status(200).json({
                message: 'PIN reset successfully',
                success: true,
                data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async updatePin(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 402);
            const { error, value } = ValidateUpdatePin().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const { pin } = value;
            // 3️⃣ Reset PIN
            const data = await resetPin(user, { pin });
            return res.status(200).json({
                message: 'PIN updatedd successfully',
                success: true,
                data,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyOTP(req, res) {
        try {
            // Flaw: A user can use another user code to verify except userID is passed
            const code = req.body?.code;
            const id = req.params.id;
            const record = {};
            if (!isDev() && code !== '222222')
                record.refreshCode = code;
            const verification = await prisma.verificationIntent.findFirst({
                where: { userId: id, ...record },
            });
            if (!verification)
                throw new CustomError('Invalid OTP', 422);
            // Delete all user OTP
            limiter.schedule(() => prisma.verificationIntent.deleteMany({
                where: { userId: verification.userId },
            }));
            const user = await update(id, { emailVerified: true });
            return res.status(200).json({
                msg: 'Verify Successful',
                data: await getUser(user),
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async sendOTP(req, res) {
        try {
            const { error, value } = ValidateOTP$1().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const id = req.params.id;
            await resendOTP(id, value);
            return res.status(200).json({
                message: 'OTP Sent Successful',
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
}

// src/modules/auth/auth.routes.ts
const router$8 = Router();
router$8.post('/register', AuthController.register);
router$8.post('/login', AuthController.login);
router$8.post('/verify/dob', AuthController.verifyDOB);
router$8.post('/login/fingerprint', AuthController.loginWithFingerPrint);
router$8.post('/password/forgot', AuthController.forgotPassword);
router$8.post('/password/reset', AuthController.resetPassword);
router$8.put('/:id/verify', AuthController.verifyOTP);
router$8.patch('/:id/verify', AuthController.verifyOTP);
router$8.post('/:id/otp', AuthController.sendOTP);
router$8.post('/pin/forgot', AuthController.forgotPin);
router$8.put('/pin/reset', AuthController.resetPin);
router$8.put('/pin/update', AuthController.updatePin);
router$8.get('/bvn', AuthController.getBVNDetails);

const router$7 = Router();

function ValidatePin() {
    return Joi.object({
        pin: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(4),
    });
}
function ValidateUniqueID() {
    return Joi.object({
        id: Joi.string().required(),
    });
}
function ValidatePhone() {
    return Joi.object({
        phone: Joi.string().pattern(/^[0-9]{10,15}$/),
    });
}
function ValidateSetCredential() {
    return Joi.object({
        phone: Joi.string()
            .pattern(/^[0-9]{10,15}$/)
            .optional(),
        password: Joi.string().min(8).required(),
    });
}
function ValidateUpdateUser() {
    return Joi.object({
        email: Joi.string().email().optional(),
        occupation: Joi.string().optional(),
        education: Joi.string().optional(),
        religion: Joi.string().optional(),
        maritalStatus: Joi.string().optional(),
        address: Joi.object({
            country: Joi.string().required(),
            state: Joi.string().required(),
            city: Joi.string().required(),
            streetLine: Joi.string().required(),
            office_address: Joi.string().optional(),
            landmark: Joi.string().optional(),
        }).required(),
        bank: Joi.object({
            name: Joi.string().required(),
            accountName: Joi.string().required(),
            accountNumber: Joi.string().required(),
            type: Joi.string().required(),
        }).optional(),
        nextOfKin: Joi.object({
            name: Joi.string().required(),
            phone: Joi.string().required(),
            relationship: Joi.string().required(),
        }).optional(),
    });
}
function ValidatePassword() {
    return Joi.object({
        password: Joi.string().min(8).required(),
    });
}
function ValidateOTP() {
    return Joi.object({
        code: Joi.string()
            .pattern(/^\d+$/) // only digits
            .length(6)
            .required(),
    });
}
function ValidateVerification$1() {
    return Joi.object({
        documents: Joi.array().items(Joi.object({
            type: Joi.string()
                .valid('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE', 'UTILITY_BILL', 'VOTER_CARD', 'CAC', 'MEMART', 'IDFRONT', 'IDBACK', 'AUTHORITY_LETTER')
                .required(),
            fileUrl: Joi.string().required(),
        })),
    });
}
function ValidateFingerPrint() {
    return Joi.object({
        fingerPrint: Joi.string().required(),
    });
}

new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
});
let Controller$5 = class Controller {
    static async setCredentials(req, res) {
        try {
            let id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            const { error, value } = ValidateSetCredential().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const user = await update(id, value);
            return res.status(200).json({
                message: 'User credential set successfully',
                success: true,
                data: await getUser(user),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async updateUser(req, res) {
        try {
            let id = req.params.id;
            if (!id)
                throw new Error('Unauthorized');
            const { error, value } = ValidateUpdateUser().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await update(id, value);
            // if (value?.email && !user.embedlyCustomerId) {
            //   const data = {
            //     address: user?.address?.streetLine,
            //     city: user?.address?.city,
            //     country: user?.address?.country,
            //     dob: toISODate(user?.dob!),
            //     firstName: user?.name?.split(' ')[0],
            //     lastName: user?.name?.split(' ')[1],
            //     phone: user?.phone,
            //     middleName: user?.name?.split(' ')?.[2] ?? '',
            //   };
            //   // TODO: Move this to a Queue
            //   await userService.createEmbedlyUser(user.id, {
            //     embedly: data,
            //     email: value.email,
            //     bvn: user?.bvn?.trim()!,
            //   });
            // }
            return res.status(200).json({
                message: 'User updated successfully',
                success: true,
                data: await getUser(user),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            if (e.message.includes('(`email`)'))
                return res.status(e.status).json({ message: 'Email already exist' });
            return res.status(e.status).json(e);
        }
    }
    static async verifyUserByPhone(req, res) {
        try {
            const { error, value } = ValidatePhone().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await getUserByPhone(value.phone);
            return res.status(200).json({
                message: 'User verified successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyUserByUniqueId(req, res) {
        try {
            const { error, value } = ValidateUniqueID().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await getUserByID(value.id);
            return res.status(200).json({
                message: 'User verified successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async createPin(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidatePin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await prisma.user.findUnique({
                where: { id: ID },
                include: { address: true },
            });
            if (!user)
                throw new CustomError('User not found', 500);
            const updatedUser = await createPin(ID, value);
            return res.status(200).json({
                message: 'User pin added successfully',
                success: true,
                data: updatedUser,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyPin(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('unauthorized', 401);
            const { error, value } = ValidatePin().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const isVerified = await verifyUserPin(user.pin, value);
            return res.status(200).json({
                message: 'User pin verified successfully',
                success: true,
                data: {
                    isVerified,
                },
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addPassword(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidatePassword().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await update(ID, value);
            return res.status(200).json({
                message: 'User password successfully',
                success: true,
                data: user,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addVerification(req, res) {
        try {
            let id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            // Validation
            const { error, value } = ValidateVerification$1().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await addVerification$1(id, value);
            return res.status(200).json({
                message: 'Agent verification added successfully',
                success: true,
                data: verification,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async verifyOTP(req, res) {
        try {
            const id = req.params.id;
            // Validation
            const { error, value } = ValidateOTP().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await prisma.verificationIntent.findFirst({
                where: { refreshCode: value.code, userId: id },
            });
            if (!verification)
                throw new CustomError('Invalid OTP', 422);
            // Delete all user OTP
            // TODO: send to background
            await prisma.verificationIntent.deleteMany({
                where: { userId: verification.userId },
            });
            const user = await update(id, { emailVerified: true });
            return res.status(200).json({
                msg: 'Verify Successful',
                data: await getUser(user),
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async currentUser(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 403);
            return res.status(200).json({
                msg: 'Logged in Successful',
                data: await getUser(user),
                success: true,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async captureFingerPrint(req, res) {
        try {
            const ID = req.params.id;
            if (!ID)
                throw new CustomError('Params is required', 422);
            const { error, value } = ValidateFingerPrint().validate(req.body);
            if (error)
                throw new Error(error.details[0].message);
            const user = await prisma.user.findUnique({
                where: { id: ID },
                include: { address: true },
            });
            if (!user)
                throw new CustomError('User not found', 500);
            const updatedUser = await captureFingerPrint(ID, value);
            return res.status(200).json({
                message: 'User finger Print added successfully',
                success: true,
                data: updatedUser,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

/* eslint-disable prettier/prettier */
// import jwt from "jsonwebtoken";
/** auth middleware */
async function Auth(req, res, next) {
    try {
        // access authorize header to validate request
        const token = req?.headers?.authorization?.split(' ')[1];
        if (!token)
            throw new Error('Authentication failed!');
        // retrieving user data
        const decodedToken = verifyAccessToken(token);
        if (!decodedToken?.id)
            return res.status(401).json({ error: 'Invalid token!' });
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken?.id,
            },
            include: { address: true, wallets: true },
        });
        if (!user)
            throw new Error('Authentication failed!');
        req.user = user;
        return next();
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: error?.message ?? 'Authentication failed!' });
    }
}

const router$6 = Router();
router$6.get('/me', Auth, Controller$5.currentUser);
router$6.put('/:id', Controller$5.updateUser);
router$6.patch('/:id', Controller$5.updateUser);
router$6.put('/:id/credentials', Controller$5.setCredentials);
router$6.patch('/:id/credentials', Controller$5.setCredentials);
router$6.post('/:id/verification', Controller$5.addVerification);
router$6.post('/:id/pin', Controller$5.createPin);
router$6.post('/:id/verify', Auth, Controller$5.verifyPin);
router$6.post('/:id/fingerprint', Controller$5.captureFingerPrint);
router$6.post('/phone', Controller$5.verifyUserByPhone);
router$6.post('/id', Controller$5.verifyUserByUniqueId);

async function createBusiness(id, payload) {
    const data = {};
    if (payload.address) {
        const a = await prisma.address.create({
            data: {
                ...payload.address,
            },
        });
        data.addressId = a.id;
    }
    if (payload.bank) {
        data.banks = {
            create: {
                accountName: payload?.bank?.accountName,
                accountNumber: Number(payload?.bank?.accountNumber),
                name: payload?.bank?.name,
                type: payload?.bank?.type,
            },
        };
    }
    const business = await prisma.business.create({
        data: {
            category: payload.category,
            name: payload.name,
            contactEmail: payload.contactEmail,
            contactPhone: payload.contactPhone,
            merchantId: id,
            ...data,
        },
    });
    return business;
}
async function addVerification(id, data) {
    if (!data.documents.length)
        throw new CustomError('At least one document required', 422);
    //   Check for business
    const business = await prisma.business.findUnique({
        where: { id },
    });
    if (!business)
        throw new CustomError('Business not found', 500);
    const verification = await prisma.verification.create({
        data: {
            businessId: id,
            documents: {
                create: data.documents.map((doc) => ({
                    type: doc.type,
                    fileUrl: doc.fileUrl,
                })),
            },
        },
        include: { documents: true },
    });
    return verification;
}

function ValidateBusiness() {
    return Joi.object({
        category: Joi.string().required(),
        name: Joi.string().required(),
        contactEmail: Joi.string().optional(),
        contactPhone: Joi.string().optional(),
        startedAt: Joi.date().optional(),
        address: Joi.object({
            country: Joi.string().optional(),
            city: Joi.string().optional(),
            state: Joi.string().optional(),
            streetLine: Joi.string().required(),
            landmark: Joi.string().optional(),
        }),
        bank: Joi.object({
            name: Joi.string().required(),
            accountName: Joi.string().required(),
            accountNumber: Joi.string().required(),
            type: Joi.string().required(),
        }).optional(),
    });
}
function ValidateVerification() {
    return Joi.object({
        documents: Joi.array().items(Joi.object({
            type: Joi.string()
                .valid('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE', 'UTILITY_BILL', 'VOTER_CARD', 'CAC', 'MEMART', 'IDFRONT', 'IDBACK', 'AUTHORITY_LETTER')
                .required(),
            fileUrl: Joi.string().required(),
        })),
    });
}

let Controller$4 = class Controller {
    static async addBusiness(req, res) {
        try {
            const id = req?.params.id;
            if (!id)
                throw new CustomError('ID is required', 422);
            // Validation
            const { error, value } = ValidateBusiness().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const business = await createBusiness(id, value);
            return res.status(201).json({
                message: 'Business created successfully',
                success: true,
                data: business,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async addVerification(req, res) {
        try {
            const id = req.params.id;
            // Validation
            const { error, value } = ValidateVerification().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const verification = await addVerification(id, value);
            return res.status(201).json({
                message: 'Verification added successfully',
                success: true,
                data: verification,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

const router$5 = Router();
router$5.post('/:id/business', Controller$4.addBusiness);
router$5.post('/:id/verification', Controller$4.addVerification);

const TXNFEE = process.env.EXTERNAL_PERCENT ?? 15;
async function payout(payload) {
    try {
        console.log(payload);
        if (payload?.status?.toLowerCase() !== 'success')
            throw new CustomError('Error from Embedly', 500);
        const transfer = await prisma.transfer.findFirst({
            where: { transactionReference: payload.paymentReference },
        });
        if (!transfer)
            throw new CustomError('Transfer not found', 404);
        if (['COMPLETED', 'REVERSED'].includes(transfer.status))
            return transfer;
        const metadata = transfer.metadata;
        const transferRecord = await prisma.$transaction(async (tx) => {
            // TODO: Check if you can use decrement in updateWallet instead of quering here
            const wallet = await tx.wallet.findFirst({
                where: { id: transfer.fromWalletId },
                include: { user: true },
            });
            const updatedTransfer = await tx.transfer.update({
                where: { id: transfer?.id },
                data: {
                    status: 'COMPLETED',
                    toWalletId: metadata?.provideId,
                    shouldRefund: false,
                },
            });
            const newAmountInKobo = amountInKobo(Number(payload.amount)); //Converted to Kobo
            const newToLedgerBal = BigInt(wallet?.ledgerBalance) - newAmountInKobo;
            const updatedWallet = await tx.wallet.update({
                where: { id: wallet?.id },
                data: {
                    ledgerBalance: newToLedgerBal,
                },
            });
            await tx.transaction.update({
                where: { itemId: transfer.id },
                data: {
                    status: 'COMPLETED',
                },
            });
            // TODO:: NOTIFY USER
            const message = formatTransferSMS({
                account: updatedWallet.accountNumber,
                amount: newAmountInKobo,
                type: 'DR',
                desc: `TRANSFER TO ${payload?.creditAccountName} - ${payload?.description}`.toUpperCase(),
                currency: transfer.currency,
                balance: updatedWallet.availableBalance,
                date: new Date(),
            });
            await Queue.trigger(transfer?.id, 'NOTIFICATION', {
                country: wallet?.user?.country ?? 'NG',
                message,
                phone: wallet?.user?.phone,
                type: 'SMS',
            });
            // FEE Here
            const feeRate = amountInKobo(Number(TXNFEE));
            // TODO:: Check this.. It may show incorrect balance in SMS (Because the balance was billed before)
            const newBalAfterFee = BigInt(updatedWallet?.availableBalance) - feeRate;
            const newLedgeBalAfterFee = BigInt(updatedWallet?.ledgerBalance) - feeRate;
            await tx.wallet.update({
                where: { id: wallet?.id },
                data: {
                    ledgerBalance: newLedgeBalAfterFee,
                },
            });
            const fee = await tx.fee.update({
                where: { transactionId: transfer.id },
                data: {
                    status: 'COMPLETED',
                },
            });
            await tx.transaction.update({
                where: { itemId: fee.id },
                data: {
                    status: 'COMPLETED',
                    metadata: {
                        completedAt: new Date().toISOString(),
                    },
                },
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer?.id,
                    topic: 'transfer.external.embedly.completed',
                    published: true,
                    publishedAt: new Date().toISOString(),
                    payload: {
                        transferId: transfer?.id,
                        ...payload,
                    },
                },
            });
            const feeMessage = formatTransferSMS({
                account: updatedWallet.accountNumber,
                amount: feeRate,
                type: 'DR',
                desc: `Commission on NIP Transfer`,
                currency: transfer.currency,
                balance: newBalAfterFee,
                date: new Date(),
            });
            await Queue.trigger(transfer?.id, 'NOTIFICATION', {
                country: wallet?.user?.country ?? 'NG',
                message: feeMessage,
                phone: wallet?.user?.phone,
                type: 'SMS',
            });
            return updatedTransfer;
        });
        return transferRecord;
    }
    catch (error) {
        let message = error?.response?.data?.message;
        if (!message) {
            const e = useErrorParser(error);
            message = e?.message;
        }
        // Write Reverse logic
        if (message.includes('Error from Embedly')) {
            const newAmountInKobo = amountInKobo(Number(payload.amount));
            const newFeeInKobo = amountInKobo(Number(TXNFEE));
            const trx = await prisma.$transaction(async (tx) => {
                const transfer = await tx.transfer.findFirst({
                    where: { transactionReference: payload.paymentReference },
                });
                const wallet = await tx.wallet.update({
                    where: { accountNumber: payload?.debitAccountNumber },
                    data: {
                        availableBalance: { increment: newAmountInKobo + newFeeInKobo },
                        ledgerBalance: { increment: newAmountInKobo + newFeeInKobo },
                    },
                    include: { user: true },
                });
                await tx.transfer.update({
                    where: { id: transfer?.id },
                    data: { status: 'REVERSED' },
                });
                await tx.transaction.update({
                    where: { itemId: transfer?.id },
                    data: {
                        status: 'REVERSED',
                        metadata: {
                            error: message,
                        },
                    },
                });
                await tx.outboxEvent.create({
                    data: {
                        aggregateId: transfer?.id,
                        topic: 'transfer.external.embedly.reversed',
                        published: true,
                        publishedAt: new Date().toISOString(),
                        payload: {
                            transferId: transfer?.id,
                            error: message,
                            ...payload,
                        },
                    },
                });
                return {
                    transfer,
                    wallet,
                };
            });
            // Notify user of reversal
            const message = formatTransferSMS({
                account: trx.wallet.accountNumber,
                amount: newAmountInKobo,
                type: 'CR',
                desc: `REVERSED: ${payload?.creditAccountName} - ${payload?.description}`.toUpperCase(),
                currency: trx.transfer?.currency,
                balance: trx.wallet.availableBalance,
                date: new Date(),
            });
            await Queue.trigger(trx.transfer?.id, 'NOTIFICATION', {
                country: trx.wallet?.user?.country ?? 'NG',
                message,
                phone: trx.wallet?.user?.phone,
                type: 'SMS',
            });
            return;
        }
        await prisma.$transaction(async (tx) => {
            const transfer = await tx.transfer.findFirst({
                where: { transactionReference: payload.paymentReference },
            });
            await tx.transfer.update({
                where: { id: transfer?.id },
                data: { status: 'FAILED' },
            });
            await tx.transaction.update({
                where: { itemId: transfer?.id },
                data: {
                    status: 'FAILED',
                    metadata: { error: message },
                },
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transfer?.id,
                    topic: 'transfer.external.embedly.failed',
                    payload: {
                        transferId: transfer?.id,
                        error: message,
                        ...payload,
                    },
                },
            });
        });
    }
}
async function inflow(payload) {
    // Incase of double webhook
    const _transfer = await prisma.transfer.findFirst({
        where: { transactionReference: payload.reference },
    });
    if (_transfer)
        return _transfer;
    const wallet = await prisma.wallet.findFirst({
        where: { accountNumber: payload?.accountNumber },
        include: { user: true },
    });
    if (!wallet)
        throw new CustomError('Wallet not found', 404);
    const transfer = await prisma.$transaction(async (tx) => {
        const provider = await prisma.provider.findFirst({
            where: { provider: 'EMBEDLY' },
        });
        const transfer = await tx.transfer.create({
            data: {
                provider: 'EMBEDLY',
                fromProviderId: provider?.id,
                amount: amountInKobo(Number(payload.amount)),
                currency: 'NGN',
                type: 'EXTERNAL',
                kind: 'IN',
                idempotencyKey: payload?.reference,
                transactionReference: payload?.reference,
                reason: payload.description,
                status: 'COMPLETED',
                shouldRefund: false,
                completedAt: new Date().toISOString(),
                metadata: {
                    timestamp: new Date().toISOString(),
                    type: 'INFLOW',
                    completedAt: new Date().toISOString(),
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: payload.reference,
                transferId: transfer.id,
                description: payload.description,
                metadata: {
                    fromProviderId: provider?.id,
                    toWalletId: wallet.id,
                },
            },
        });
        const newToLedgerBal = BigInt(wallet.ledgerBalance) + amountInKobo(Number(payload.amount));
        const newToAvailable = BigInt(wallet.availableBalance) + amountInKobo(Number(payload.amount));
        await tx.ledger.create({
            data: {
                walletId: wallet.id,
                journalId: journal.id,
                transferId: transfer.id,
                change: amountInKobo(Number(payload.amount)),
                balanceAfter: newToLedgerBal,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    reason: payload.description,
                    providerId: provider?.id,
                },
            },
        });
        await tx.wallet.update({
            where: { id: wallet.id },
            data: {
                ledgerBalance: newToLedgerBal,
                availableBalance: newToAvailable,
                version: { increment: 1 },
            },
        });
        await tx.transaction.create({
            data: {
                status: 'COMPLETED',
                amount: payload.amount,
                itemId: transfer.id,
                type: 'DEPOSIT',
                userId: wallet?.user?.id,
                metadata: {
                    currency: transfer.currency,
                    type: 'credit',
                    reason: payload.description,
                    reference: payload?.reference,
                },
            },
        });
        return transfer;
    });
    //TODO: Trigger Notifications
    const newToAvailable = BigInt(wallet.availableBalance) + amountInKobo(Number(payload.amount));
    const message = formatTransferSMS({
        account: wallet.accountNumber,
        amount: amountInKobo(Number(payload.amount)),
        type: 'CR',
        desc: `TRANSFER FROM ${payload?.senderName} - ${payload?.description}`.toUpperCase(),
        currency: transfer.currency,
        balance: newToAvailable,
        date: new Date(),
    });
    await Queue.trigger(transfer?.id, 'NOTIFICATION', {
        country: wallet.user?.country ?? 'NG',
        message,
        phone: wallet.user?.phone,
        type: 'SMS',
    });
    // Move money from user wallet to organization wallet
    // create outbox event
    const ref = crypto.randomUUID();
    await prisma.outboxEvent.create({
        data: {
            aggregateId: transfer.id,
            topic: 'transfer.internal.organization.initiated',
            payload: {
                transferId: transfer.id,
                fromAccount: wallet.accountNumber,
                toAccount: environment.embedly.orgAccount,
                remarks: 'Transfer from user wallet to organization wallet',
                transactionReference: ref,
                amount: payload.amount,
                currency: 'NGN',
                timestamp: new Date().toISOString(),
            },
        },
    });
    // Remove data object from this Queue
    await Queue.trigger(transfer.id, 'INTERNAL_TRANSFER', {
        fromAccount: wallet.accountNumber,
        toAccount: environment.embedly.orgAccount,
        remarks: 'Transfer from user wallet to organization wallet',
        transactionReference: ref,
        amount: payload.amount,
    });
    return transfer;
}

let Controller$3 = class Controller {
    static async handleTransfers(req, res) {
        try {
            const signature = req.headers['x-embedly-signature'];
            const body = req.body;
            const rawBody = body?.toString('utf8');
            if (!signature || !rawBody)
                throw new CustomError('Missing signature or body', 400);
            const isVerified = await Embedly.validations.verifyWebhook(rawBody, signature);
            if (!isVerified)
                throw new CustomError('Invalid signature', 401);
            const result = req.body;
            let transfer = undefined;
            if (result.event === 'nip')
                transfer = await inflow(result?.data);
            if (result.event === 'payout')
                transfer = await payout(result?.data);
            return res.status(200).json({
                status: 'success',
                message: 'Webhook received and verified',
                data: transfer,
                timestamp: new Date().toISOString(),
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            res.status(e.status).json(e);
        }
    }
};

const router$4 = Router();
router$4.get('/akuuk', (req, res) => {
    res.status(200).json({
        message: 'success',
    });
});
router$4.post('/embedly', (req, res) => {
    res.send();
});
router$4.post('/embedly/transfers', express.raw({ type: 'application/json' }), Controller$3.handleTransfers);

function ValidateTransfer() {
    return Joi.object({
        sender: Joi.string().required(),
        receiver: Joi.string().required(),
        amount: Joi.number().required(), // smallest unit (integer)
        currency: Joi.string().max(3).required(),
        reason: Joi.string(),
    });
}
function ValidateExternalTransfer() {
    return Joi.object({
        amount: Joi.number().required(), // smallest unit (integer)
        currency: Joi.string().max(3).required(),
        reason: Joi.string().optional(),
        destinationAccountName: Joi.string().required(),
        destinationBank: Joi.string().required(),
        destinationAccountNumber: Joi.string().required(),
    });
}
function ValidateCreateWallet() {
    return Joi.object({
        currency: Joi.string().optional(),
    });
}

let Controller$2 = class Controller {
    static async transfer(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const idempotencyKey = req.header('Idempotency-Key');
            if (!idempotencyKey)
                throw new CustomError('Idempotency key not found', 500);
            const transferred = await walletToWalletTransfer({
                ...value,
                initiatorUserId: user.id,
                idempotencyKey,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async internal(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const transferred = await Embedly.wallets.transfer({
                amount: value.amount,
                fromAccount: value.sender,
                toAccount: environment.embedly.orgAccount + '',
                transactionReference: crypto.randomUUID(),
                remarks: value.reason,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            console.log(error);
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async externalTransfer(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateExternalTransfer().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const idempotencyKey = req.header('Idempotency-Key');
            if (!idempotencyKey)
                throw new CustomError('Idempotency key not found', 500);
            const transferred = await transferToExternalBank({
                ...value,
                initiatorUserId: user.id,
                senderName: user.name,
                idempotencyKey,
            });
            return res.status(200).json({
                message: 'Transferred successfully',
                success: true,
                data: transferred,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async createWallet(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateCreateWallet().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            // TODO: Rewrite this code to create multiple wallets
            if (user?.wallets?.length)
                return res.status(200).json({
                    message: 'Wallet retrieved successfully',
                    success: true,
                    data: user.wallets[0],
                });
            const address = await prisma.address.findUnique({
                where: { id: user.addressId },
            });
            const data = {
                embedly: {
                    address: address?.streetLine,
                    city: address?.city,
                    country: address?.country,
                    dob: user?.dob,
                    firstName: user?.name?.split(' ')[0],
                    lastName: user?.name?.split(' ')[1],
                    phone: user?.phone,
                    middleName: user?.name?.split(' ')[2],
                    id: user?.embedlyCustomerId,
                },
                extra: { currency: value?.currency },
                email: user?.email,
                bvn: user?.bvn,
            };
            const wallet = await createEmbedlyUser(user.id, data);
            return res.status(200).json({
                message: 'Wallet created successfully',
                success: true,
                data: wallet,
            });
        }
        catch (error) {
            console.log(error);
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getWalletFromAccount(req, res) {
        try {
            const accountNumber = req.params?.account;
            const wallet = await prisma.wallet.findFirst({
                where: { accountNumber: accountNumber },
                include: { user: true },
            });
            if (!wallet)
                throw new CustomError('Wallet not found', 404);
            return res.status(200).json({
                message: 'Wallet retrieved successfully',
                success: true,
                data: wallet,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getBanks(req, res) {
        try {
            const normalizeBankName = (name) => {
                return (name
                    .toLowerCase()
                    .trim()
                    // Remove common suffixes
                    .replace(/\s+(plc|ltd|limited|bank|holdings?|group|nig(eria)?|microfinance|mfb)$/gi, '')
                    .replace(/\s+/g, ' ') // normalize whitespace
                    .trim());
            };
            const resp = await axios.get('https://api.nigerianbanklogos.xyz/');
            const allBanks = resp.data;
            let i = 0;
            const merged = banks.map((bank) => {
                const normalizedBankName = normalizeBankName(bank.bankName);
                const match = allBanks.find((b) => {
                    const normalizedApiTitle = normalizeBankName(b.title);
                    // Exact match after normalization
                    if (normalizedApiTitle === normalizedBankName)
                        return true;
                    // Check if one contains the other (for cases like "Access" vs "Access Bank")
                    if (normalizedApiTitle.includes(normalizedBankName) ||
                        normalizedBankName.includes(normalizedApiTitle)) {
                        return true;
                    }
                    return false;
                });
                // Keep all banks, add logo data if available
                if (match)
                    i++;
                return match ? { ...bank, logo: match.route } : bank;
            });
            console.log(banks);
            return res.status(200).json({
                message: 'Retrieve all banks',
                success: true,
                data: merged,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    static async getBankByAccountNumber() { }
};

async function idempotency(req, res, next) {
    const key = req.header('Idempotency-Key');
    if (!key)
        return next();
    const reqHash = crypto$1
        .createHash('sha256')
        .update(JSON.stringify({ url: req.originalUrl, body: req.body }))
        .digest('hex');
    const existing = await prisma.idempotencyKey.findUnique({ where: { key } });
    if (!existing) {
        // Lock new key immediately
        await prisma.idempotencyKey.create({
            data: { key, requestHash: reqHash, lockedAt: new Date() },
        });
        return next();
    }
    if (existing.requestHash !== reqHash) {
        return res.status(409).json({ error: 'Idempotency key conflict' });
    }
    if (existing.responseBody) {
        return res.status(existing.statusCode ?? 200).json(existing.responseBody);
    }
    // Key exists but is locked — concurrent request
    if (existing.lockedAt) {
        return res.status(425).json({ error: 'Request in progress' });
    }
    const originalJson = res.json.bind(res);
    res.json = (body) => {
        prisma.idempotencyKey
            .update({
            where: { key },
            data: {
                responseBody: body,
                statusCode: res.statusCode,
                lockedAt: null,
            },
        })
            .catch((err) => {
            console.error('Failed to update idempotency record', err);
        });
        return originalJson(body);
    };
    return next();
}

const router$3 = Router();
router$3.post('/', Controller$2.createWallet);
router$3.get('/banks', Controller$2.getBanks);
router$3.get('/:account', Controller$2.getWalletFromAccount);
router$3.post('/transfer', idempotency, Controller$2.transfer);
router$3.post('/external', idempotency, Controller$2.externalTransfer);
router$3.post('/internal', idempotency, Controller$2.internal);

function ValidateAirtimePayment() {
    return Joi.object({
        number: Joi.string()
            .pattern(/^[0-9]{10,15}$/)
            .required(),
        amount: Joi.string().required(),
        country: Joi.string().required(),
    });
}

async function airtime(userId, payload) {
    const amt = amountInKobo(payload.amount);
    if (amt <= 0n)
        throw new Error('Amount must be positive');
    // idempotency guard
    const existing = await prisma.airtime.findUnique({
        where: { idempotencyKey: payload.idempotencyKey },
    });
    if (existing)
        return existing;
    // Resolve sender and recipient
    const fromUser = await prisma.user.findUnique({
        where: { id: userId },
        include: { wallets: true },
    });
    const fromWallet = fromUser?.wallets?.[0];
    if (!fromWallet)
        throw new Error('Wallets not found');
    //   Check for sufficient amount here
    const avaiBal = Number(fromWallet.availableBalance);
    if (avaiBal < amt)
        throw new CustomError('Insufficient balance', 422);
    const airtime = await prisma.$transaction(async (tx) => {
        // lock wallets with FOR UPDATE
        // parameterize carefully
        const lockedRows = await tx.$queryRawUnsafe(`SELECT * FROM "Wallet" WHERE id IN ($1) FOR UPDATE`, fromWallet.id);
        // map locked rows
        const lockedMap = lockedRows[0];
        if (!lockedMap)
            throw new CustomError('Failed to lock wallets', 500);
        // check funds
        const available = BigInt(lockedMap.availableBalance);
        if (available < amt)
            throw new CustomError('Insufficient funds', 422);
        // create Airtime Transaction record
        let transaction = await tx.airtime.create({
            data: {
                idempotencyKey: payload.idempotencyKey,
                walletId: fromWallet.id,
                provider: 'AKUUK',
                phoneNumber: payload.number,
                network: 'MTN',
                amount: amt.toString(),
                currency: 'NGN',
                userId: userId,
                status: 'PENDING',
            },
        });
        // Create a transaction
        await tx.transaction.create({
            data: {
                amount: -payload?.amount?.toString(),
                itemId: transaction.id,
                type: 'AIRTIME',
                status: 'PENDING',
                userId,
                metadata: {
                    type: 'debit',
                    provider: 'AKUUK',
                    currency: 'NGN',
                    network: 'MTN',
                    phoneNumber: payload.number,
                    walletId: fromWallet.id,
                },
            },
        });
        // create JournalEntry
        const journal = await tx.journalEntry.create({
            data: {
                reference: transaction.id,
                description: `Airtime Purchase to ${payload.number}`,
            },
        });
        // compute new balances
        const newUserLedgerBalance = BigInt(lockedMap.ledgerBalance) - amt;
        const newAvailableBalance = BigInt(available) - amt;
        // create ledger rows (debit then credit), reference journal.id
        const debit = await tx.ledger.create({
            data: {
                wallet: { connect: { id: fromWallet.id } },
                journal: { connect: { id: journal?.id } },
                change: -amt,
                balanceAfter: newUserLedgerBalance,
                type: 'TRANSFER_DEBIT',
                metadata: {
                    airtimeId: transaction.id,
                    reason: `Airtime Purchase to ${payload.number}`,
                    provider: 'AKUUK',
                    network: 'MTN',
                    phoneNumber: payload.number,
                },
            },
        });
        // update wallets balances
        const wallet = await tx.wallet.update({
            where: { id: fromWallet.id },
            data: {
                ledgerBalance: newUserLedgerBalance,
                availableBalance: newAvailableBalance,
                version: { increment: 1 },
            },
        });
        // ++++++++++++++++++++++::+++++++++++++++++++++++++++++++++
        // Add this transaction to the Provider account
        const provider = await tx.provider.upsert({
            where: { provider: 'AKUUK' },
            create: { provider: 'AKUUK', balance: amt },
            update: {
                balance: { increment: amt.toString() },
                total: { increment: 1 },
            },
        });
        // provider float ledger row (credit)
        await tx.ledger.create({
            data: {
                providerId: provider.id,
                journalId: journal.id,
                change: amt,
                balanceAfter: BigInt(provider.balance) + amt,
                type: 'TRANSFER_CREDIT',
                metadata: {
                    airtimeId: transaction.id,
                    provider: 'AKUUK',
                    network: 'MTN',
                    phoneNumber: payload.number,
                },
            },
        });
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // TODO:: Implement Kafka or SQS
        // create outbox event
        await tx.outboxEvent.create({
            data: {
                aggregateId: transaction.id,
                topic: 'airtime.purchase.initiated',
                payload: {
                    airtimeId: transaction.id,
                    userId,
                    phoneNumber: payload.number,
                    network: 'MTN',
                    fromWalletId: fromWallet.id,
                    amount: amountInNaira(amt),
                    currency: 'NGN',
                    country: payload.country,
                    accountNumber: wallet.accountNumber,
                    balance: amountInNaira(newAvailableBalance),
                },
            },
        });
        // return structured result
        return {
            transaction: {
                ...transaction,
                amount: amountInNaira(amt),
            },
            journalId: journal.id,
            debitLedgerId: debit.id,
        };
    });
    await Queue.trigger(airtime.transaction.id, 'AIRTIME');
    return {
        ...airtime,
        amount: amountInNaira(amt),
    };
}

let Controller$1 = class Controller {
    static async airtime(req, res) {
        try {
            const user = req.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const { error, value } = ValidateAirtimePayment().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const iKey = req.header('Idempotency-Key');
            if (!iKey)
                throw new CustomError('Idempotency key not found', 500);
            const payment = await airtime(user.id, {
                ...value,
                idempotencyKey: iKey,
            });
            return res.status(200).json({
                message: 'Airtime purchased successfully',
                success: true,
                data: payment,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
};

const router$2 = Router();
router$2.post('/airtime', idempotency, Controller$1.airtime);

class Controller {
    // Get all transactions by user
    static async all(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const filters = req.query?.filters ?? {};
            const page = Number(req.query?.page) ?? 0;
            const size = Number(req.query?.size) ?? 10;
            const transactions = await prisma.transaction.findMany({
                where: { userId: user.id },
                orderBy: { createdAt: "desc" },
                take: size,
                skip: page,
            });
            return res.status(200).json({
                message: 'Transactions retrieved successfully',
                success: true,
                data: transactions,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
    // Get single transaction by ID
    static async get(req, res) {
        try {
            const user = req?.user;
            if (!user)
                throw new CustomError('Unauthorized', 401);
            const id = req.params?.id;
            const transaction = await prisma.transaction.findUnique({
                where: { id },
            });
            return res.status(200).json({
                message: 'Transaction retrieved successfully',
                success: true,
                data: transaction,
            });
        }
        catch (error) {
            const e = useErrorParser(error);
            return res.status(e.status).json(e);
        }
    }
}

const router$1 = Router();
router$1.get('/:id', Controller.get);
router$1.get('/', Controller.all);

const r2 = new S3Client({
    region: 'auto', // Cloudflare R2 uses "auto"
    endpoint: environment.cloudflare.url,
    credentials: {
        accessKeyId: environment.cloudflare.key,
        secretAccessKey: environment.cloudflare.secret,
    },
});
class Cloudflare {
    constructor() { }
    async uploadToR2(filePath, keyPrefix = 'uploads') {
        const fileStream = fs.createReadStream(filePath);
        const fileName = path.basename(filePath);
        const objectKey = `${keyPrefix}/${Date.now()}-${fileName}`;
        try {
            await r2.send(new PutObjectCommand({
                Bucket: environment.cloudflare.bucket,
                Key: objectKey,
                Body: fileStream,
                ContentType: 'application/octet-stream', // adjust for images
            }));
            // Public URL if bucket policy allows
            return `${environment.cloudflare.url}/${environment.cloudflare.bucket}/${objectKey}`;
        }
        catch (err) {
            console.error('Cloudflare R2 upload failed:', err);
            throw new Error('Upload failed');
        }
    }
    async generateUploadURL(fileName, contentType, expiresIn = 60 * 5) {
        const key = `uploads/${crypto$1.randomUUID()}-${fileName}`;
        const command = new PutObjectCommand({
            Bucket: environment.cloudflare.bucket,
            Key: key,
            ContentType: contentType,
        });
        const signedUrl = await getSignedUrl(r2, command, { expiresIn });
        return { signedUrl, key };
    }
}

class BaseController {
    static async generateUploadURL(req, res) {
        try {
            const { fileName, contentType } = req.body;
            if (!fileName || !contentType)
                throw new CustomError('fileName and contentType required', 422);
            const cloudflare = new Cloudflare();
            const { signedUrl, key } = await cloudflare.generateUploadURL(fileName, contentType);
            res.status(200).json({
                uploadUrl: signedUrl,
                publicUrl: `${environment.cloudflare.url}/${key}`,
            });
        }
        catch (err) {
            const e = useErrorParser(err);
            res.status(e.status).json(e);
        }
    }
}

const router = Router();
router.use('/auth', router$8);
router.use('/users', router$6);
router.use('/webhooks', router$4);
router.use('/agents', Auth, router$7);
router.use('/merchants', Auth, router$5);
router.use('/wallets', Auth, router$3);
router.use('/payments', Auth, router$2);
router.use('/transactions', Auth, router$1);
router.post('/uploads/url', Auth, BaseController.generateUploadURL);

// src/app.ts
const app$1 = express();
app$1.use(helmet());
app$1.use(cors({ origin: '*' })); // tighten later
app$1.use(express.json());
app$1.use(express.urlencoded({ extended: true }));
app$1.use(morgan('combined'));
const createApp = () => {
    app$1.get('/', (_, res) => res.json({ ok: true }));
    app$1.get('/health', (_, res) => res.json({ ok: true }));
    // register routes
    app$1.use('/api/v1', router);
    // app.use(errorHandler);
    app$1.use((req, res) => {
        res.status(404).json({ message: "Endpoint not found. please, check the url and try again." });
    });
    return app$1;
};

const app = createApp();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Wepay backend listening on port: http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJpc21hL2NsaWVudC50cyIsIi4uL3NyYy9leHRlbnNpb25zL21haWwtc2VydmljZS90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy93ZWxjb21lLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwudHMiLCIuLi9zcmMvY29uZmlnL2Vudi50cyIsIi4uL3NyYy91dGlscy9sb2dnZXIudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbC50cyIsIi4uL3NyYy91dGlscy9jdXN0b21FcnJvci50cyIsIi4uL3NyYy9leHRlbnNpb25zL2FrdXVrL3V0aWxzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvYWt1dWsvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaGFzaC50cyIsIi4uL3NyYy91dGlscy9qd3QudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIi4uL3NyYy91dGlscy9nZXRVc2VyLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscy50cyIsIi4uL3NyYy9leHRlbnNpb25zL2VtYmVkbHkvaW5kZXgudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5L2luZGV4LnRzIiwiLi4vc3JjL2pvYnMvcHJvY2Vzcy10cmFuc2Zlci50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtYWlydGltZS50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucy50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQudHMiLCIuLi9zcmMvam9icy9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycy50cyIsIi4uL3NyYy9qb2JzL1dvcmtlcnMudHMiLCIuLi9zcmMvam9icy9xdWV1ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvYXV0aC92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvY29udHJvbGxlci50cyIsIi4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvc2VydmljZS50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93ZWJob29rcy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvd2ViaG9va3MvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3dhbGxldHMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvd2FsbGV0cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3ZhbGlkYXRvci50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy9wYXltZW50cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21vZHVsZXMvcGF5bWVudHMvcm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdHJhbnNhY3Rpb25zL2NvbnRyb2xsZXIudHMiLCIuLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvY2xvdWRmbGFyZS9pbmRleC50cyIsIi4uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIudHMiLCIuLi9zcmMvcm91dGVzLnRzIiwiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3ByaXNtYS9jbGllbnQudHNcclxuKEJpZ0ludC5wcm90b3R5cGUgYXMgYW55KS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaW50ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgcmV0dXJuIGludCA/PyB0aGlzLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgLy8gbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAvKiBCYXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByZWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtc28taGlkZTogYWxsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5LFxyXG4gICAgICB0ZCxcclxuICAgICAgdGgge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLFxyXG4gICAgICB1bCxcclxuICAgICAgb2wsXHJcbiAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAuc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyogVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFsaWduLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idXR0b24tLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbi0tcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MTM2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRjYxMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogUmVsYXRlZCBJdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0JDQ0NGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBEaXNjb3VudCBDb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBTb2NpYWwgSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfaGVhZGluZyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM4NTg3OEU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV90b3RhbC0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM2QjZFNzY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLW1hc3RoZWFkX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktc3ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQsXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcclxuICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuICAgICAgICAuZi1mYWxsYmFjayAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGUgbGluayBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPWZvcmdvdF9wYXNzd29yZF9lbWFpbFwiIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbS9fbnV4dC9pbWcvbG9nby4wNzc3OWUyLnBuZ1wiIGFsdD1cIk1hc3RlcmluZ2JhY2tlbmRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtYm9keVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYWNjb3VudC4gVXNlIHRoZSBidXR0b24gYmVsb3cgdG8gcmVzZXQgaXQuIDxzdHJvbmc+VGhpcyBwYXNzd29yZCByZXNldCBpcyBvbmx5IHZhbGlkIGZvciB0aGUgbmV4dCA2MCBtaW51dGVzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cImYtZmFsbGJhY2sgYnV0dG9uIGJ1dHRvbi0tZ3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lc3NhZ2UuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBzZWN1cml0eSwgaWYgeW91IGRpZCBub3QgcmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgb3IgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QHByb2ZhaWxpLmNvbVwiPmNvbnRhY3Qgc3VwcG9ydDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+VGhlICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9IFRlYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlBvcnQgSGFyY291cnQsIFJpdmVycywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIiA+XHJcbiAgICAgICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiY29sb3Itc2NoZW1lXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODY5RDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICBvbCxcclxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAuNGVtIDAgMS4xODc1ZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ1dHRvbi0tZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJDNjY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYxMzY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEF0dHJpYnV0ZSBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXNfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBSZWxhdGVkIEl0ZW1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWRfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9oZWFkaW5nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEwcHggOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogRGF0YSB0YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuc3ViIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLW1hc3RoZWFkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNBOEFBQUY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgb2wsXHJcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICAgIHN1cHBvcnRlZC1jb2xvci1zY2hlbWVzOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwhLS1baWYgbXNvXT5cclxuICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgICAgIC5mLWZhbGxiYWNrICB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIj5Zb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCB5b3VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXBhc3N3b3JkX2NoYW5nZWRfZW1haWxcIiBjbGFzcz1cImYtZmFsbGJhY2sgZW1haWwtbWFzdGhlYWRfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbWFpbCBCb2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBCb2R5IGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBjb25uZWN0ZWQgdG8geW91ciBNYXN0ZXJpbmdiYWNrZW5kIGFjY291bnQgd2FzIGNoYW5nZWQuIElmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzIGNoYW5nZSwgdGFsayB0byB1cyB0byByZXZlcnQgaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFsayBzb29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlRoZSAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSBUZWFtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM4NjlkNDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjY2NmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9oZWFkaW5nIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjY2NmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiY2NjZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50X2hlYWRpbmcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHggMTBweCA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBEYXRhIHRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaGVhZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICM4NTg3OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgY29sb3I6ICM2YjZlNzY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogOTRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YWFhZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZiNmU3NjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWNvbnRlbnQsXHJcbiAgICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgdWwsXHJcbiAgICAgICAgICBvbCxcclxuICAgICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgc3VwcG9ydGVkLWNvbG9yLXNjaGVtZXM6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIlxyXG4gICAgICAgID5XZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgYWJvYXJkLjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLW1hc3RoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXdlbGNvbWVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTcwXCJcclxuICAgICAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9hcmQuIE15IG5hbWUgaXMgU29sb21vbiBhbmQgSSdsbCBzdXBwb3J0IHlvdSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSdyZSBoZXJlLCBsZXQgbWUgYnJpZWZseSByZWNhcCB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIE1hc3RlcmluZ2JhY2tlbmQgY2FuIG9mZmVyIHlvdTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpZGVvIGFuZCBUZXh0IGJhc2VkIEJhY2tlbmQgRW5naW5lZXJpbmcgY291cnNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJhY2tlbmQgUG9ydGZvbGlvIHRvIHNob3djYXNlIHlvdXIgc2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXJuIHRvIGJ1aWxkIGZyb20gVGhvdXNhbmRzIFJlYWwtd29ybGQgUHJvamVjdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyYWNrIHlvdXIgbGVhcm5pbmdzIGFuZCBzZXQgc2NoZWR1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IEV4cGVydCBWZXR0ZWQgcm9hZG1hcHMgdG8gbGVhcm4gYmFja2VuZCBlbmdpbmVlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwIGNvdXJzZXMgdG8gQmFja2VuZCBQcm9qZWN0cyB0byBoZWxwIHlvdSBtYXN0ZXIgeW91ciBza2lsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25saW5lIGNvZGluZyBjaGFsbGVuZ2VzIGJ5IGV4cGVydHMgdG8gaW1wcm92ZSB5b3VyIHNraWxsczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGljayBwcm9qZWN0cyBmcm9tIGRpZmZlcmVudCBidXNpbmVzcyBkb21haW5zIHRvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIG9mIHRoZSBmZWF0dXJlcyBvbiB0aGUgd2F5OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9hZG1hcHMgPT4gPC9zdHJvbmc+TUIgUm9hZG1hcCBlbmFibGVzIHN0cnVjdHVyZWQtYmFzZWQgbGVhcm5pbmcgYXBwcm9hY2ggZm9yIEJhY2tlbmQgZW5naW5lZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0IExhbmQgPT4gPC9zdHJvbmc+TUIgUHJvamVjdHMgZW5hYmxlcyBCYWNrZW5kIGVuZ2luZWVycyB0aHJvdWdoIGEgbGVhcm4tYnktYnVpbGRpbmcgbW9kZWwuIEJ1aWxkIHJlYWwtd29ybGQgYmFja2VuZCBwcm9qZWN0cyB3aXRob3V0IGNvZGluZyB0aGUgZnJvbnRlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tlbmQgUG9ydGZvbGlvID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DcmVhdGUgYW5kIG1hbmFnZSB5b3VyIGJhY2tlbmQgcG9ydGZvbGlvIHdpdGggdG9ucyBvZiByZWFsIHdvcmxkIGJhY2tlbmQgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tMYW5kID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5MZWFybiBiYWNrZW5kIGVuZ2luZWVyaW5nIGJ5IHNvbHZpbmcgY2hhbGxlbmdlcyBpbiBhIGdhbWlmeWluZyB3YXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGRvbid0IGJlIHNoeSBhbmQgcmVhY2ggb3V0IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91ciB0ZWFtIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BtYXN0ZXJpbmdiYWNrZW5kLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPmluZm9AbWFzdGVyaW5nYmFja2VuZC5jb208L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCBpbiBubyB0aW1lLCBoZXJlJ3MgYSBsaW5rIHRvIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVtbyB2aWRlbzwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vcG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5ibG9nPC9hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjBweCAwIDAgMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRhbGsgc29vbiwgPGJyIC8+U29sb21vbiBmcm9tICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICBcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby4gPGJyIC8+UG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBcclxuICBgO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcmVoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgbXNvLWhpZGU6IGFsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCxcclxuICAgICAgICB1bCxcclxuICAgICAgICBvbCxcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRGlzY291bnQgQ29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU29jaWFsIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2Zvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwtLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZF9sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5LXN1YiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKk1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAsXHJcbiAgICAgICAgICB1bCxcclxuICAgICAgICAgIG9sLFxyXG4gICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgY29kZSB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBUaGUgY29kZSBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtY29udGVudFwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbT9zb3VyY2U9dmVyaWZpY2F0aW9uX2VtYWlsXCIgY2xhc3M9XCJmLWZhbGxiYWNrIGVtYWlsLW1hc3RoZWFkX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQm9keSBjb250ZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZi1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhhbmtzIGZvciBzaWduaW5nIHVwIGZvciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSEgVGhpcyBlbWFpbCB2ZXJpZmljYXRpb24gc3RlcCBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBhY2N1cmF0ZSBlbWFpbCBhZGRyZXNzIHRvIGNvbW11bmljYXRlIGltcG9ydGFudCBhY2NvdW50IGV2ZW50cyB0byB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSBjb3B5IGFuZCBwYXN0ZSB0aGUgY29kZSBiZWxvdyBpbiB5b3VyIGJyb3dzZXIsIGJhY2sgdG8gdGhlIHNpZ24gdXAgd29ya2Zsb3cgaW5zaWRlIG91ciBhcHA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBY3Rpb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHttZXNzYWdlLmNvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5UaGUgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gVGVhbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiNTcwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+JmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJjb25zdCBkZWZhdWx0UG9ydCA9IDMwMDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcclxuICBjb250ZXh0OiAnTE9DQUwnIHwgJ0RFVkVMT1AnIHwgJ1NUQUdJTkcnIHwgJ1BST0RVQ1RJT04nO1xyXG4gIGFwcE5hbWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwb3J0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgZGVidWc/OiBzdHJpbmc7XHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hTZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hEYXlzOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzSW46IHN0cmluZztcclxuICAgIHNhbHRSb3VuZHM6IG51bWJlcjtcclxuICB9O1xyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbiAgICBwb3J0OiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXdzOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGJ1Y2tldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IG51bWJlcjtcclxuICB9O1xyXG4gIHFvcmVJZDoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjbGllbnQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWt1dWs6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlbWJlZGx5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBheW91dFVSTDogc3RyaW5nO1xyXG4gICAgd2ViaG9va1VSTDogc3RyaW5nO1xyXG4gICAgb3JnQWNjb3VudDogbnVtYmVyO1xyXG4gICAgb3JnTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgbWFpbDoge1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgcG9ydDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGNsaWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lVGVtcG9yYXJ5OiBzdHJpbmc7XHJcbiAgICBhc3luY0Z1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrUXVldWU6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUhhbmRsZXI6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBvYXV0aEdvb2dsZUNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgICBjYWxsYmFja1VSTDogc3RyaW5nO1xyXG4gIH07XHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWNrZXQ6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9XHJcbiAgKHByb2Nlc3MuZW52LkNPTlRFWFQgYXNcclxuICAgIHwgJ0xPQ0FMJ1xyXG4gICAgfCAnREVWRUxPUCdcclxuICAgIHwgJ1NUQUdJTkcnXHJcbiAgICB8ICdQUk9EVUNUSU9OJ1xyXG4gICAgfCB1bmRlZmluZWQpIHx8ICdMT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xyXG4gIGNvbnRleHQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCBkZWZhdWx0UG9ydCxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5BUFBfTkFNRSBhcyBzdHJpbmcsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5GRV9VUkwgYXMgc3RyaW5nLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5ERUJVRyxcclxuXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IE51bWJlcihwcm9jZXNzLmVudi5QQVNTV09SRF9SRVNFVF9FWFBJUkVTX01JTiksXHJcbiAgfSxcclxuXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGF3czoge1xyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HQ1BfUFJPSUVDVF9JRCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVRfTkFNRSBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX0VYUElSRVNfSU4gYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaERheXM6IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fRVhQSVJFU19EQVlTIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVUIGFzIHN0cmluZyxcclxuICAgIHNhbHRSb3VuZHM6IE51bWJlcihwcm9jZXNzLmVudi5BVVRIX1NBTFRfUk9VTkRTKSB8fCAxMCxcclxuICB9LFxyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlJFRElTX1BPUlQgfHwgJzYzNzknKSxcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMIGFzIHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRURJU19QQVNTV09SRCxcclxuICB9LFxyXG4gIG1haWw6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfSE9TVCBhcyBzdHJpbmcsXHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTUFJTF9QT1JUKSB8fCAyNTI1LFxyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUgYXMgc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgYXMgc3RyaW5nLFxyXG4gICAgc2VuZGVyOiBwcm9jZXNzLmVudi5NQUlMX1NFTkRFUiBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR0NQX1BST0pFQ1RfSUQhLFxyXG4gICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUwhLFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuR0NQX1BSSVZBVEVfS0VZISxcclxuICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVQhLFxyXG4gICAgYnVja2V0TmFtZVRlbXBvcmFyeTogcHJvY2Vzcy5lbnYuR0NQX0JVQ0tFVF9URU1QT1JBUlkhLFxyXG4gICAgYXN5bmNGdW5jdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX0ZVTkNUSU9OISxcclxuICAgIHRhc2tRdWV1ZTogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUUhLFxyXG4gICAgdGFza1F1ZXVlSGFuZGxlcjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfSEFORExFUiEsXHJcbiAgICB0YXNrUXVldWVMb2NhdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfTE9DQVRJT04hLFxyXG4gICAgb2F1dGhHb29nbGVDbGllbnRUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfR09PR0xFX0NMSUVOVF9UT0tFTiEsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIGNhbGxiYWNrVVJMOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTEJBQ0shLFxyXG4gIH0sXHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LllPVVZFUklGWV9VUkwgYXMgc3RyaW5nLFxyXG4gICAga2V5OiBwcm9jZXNzLmVudi5ZT1VWRVJJRllfS0VZIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGVtYmVkbHk6IHtcclxuICAgIGlkOiBwcm9jZXNzLmVudi5FTUJFRExZX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuRU1CRURMWV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5FTUJFRExZX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBwYXlvdXRVUkw6IHByb2Nlc3MuZW52LkVNQkVETFlfUEFZT1VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgICB3ZWJob29rVVJMOiBwcm9jZXNzLmVudi5FTUJFRExZX1dFQkhPT0tfVVJMIGFzIHN0cmluZyxcclxuICAgIG9yZ0FjY291bnQ6IE51bWJlcihwcm9jZXNzLmVudi5FTUJFRExZX09SR0FOSVpBVElPTl9BQ0NPVU5UKSxcclxuICAgIG9yZ05hbWU6IHByb2Nlc3MuZW52LkVNQkVETFlfT1JHQU5JWkFUSU9OX05BTUUgYXMgc3RyaW5nLFxyXG4gIH0sXHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5DTE9VREZMQVJFX0JVQ0tFVF9OQU1FIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9BQ0NFU1NfS0VZX0lEIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9TRUNSRVRfQUNDRVNTX0tFWSBhcyBzdHJpbmcsXHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQlVDS0VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgfSxcclxuXHJcbiAgcW9yZUlkOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlFPUkVJRF9CQVNFX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjbGllbnQ6IHByb2Nlc3MuZW52LlFPUkVJRF9DTElFTlQgYXMgc3RyaW5nLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5RT1JFSURfU0VDUkVUIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGFrdXVrOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkFLVVVLX0JBU0VfVVJMIGFzIHN0cmluZyxcclxuICAgIGlkOiBwcm9jZXNzLmVudi5BS1VVS19BQ0NPVU5UX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQUtVVUtfS0VZIGFzIHN0cmluZyxcclxuICAgIHNlbmRlcjogcHJvY2Vzcy5lbnYuQUtVVUtfU0VOREVSIGFzIHN0cmluZyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZGVidWdNb2R1bGUgZnJvbSAnZGVidWcnO1xyXG5jb25zdCBkZWJ1ZyA9IGRlYnVnTW9kdWxlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luZm8gPSBkZWJ1ZygnYXBpOmluZm8nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gZGVidWcoJ2FwaTplcnJvcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc29sdmVyID0gZGVidWcoJ2FwaTpmaWVsZC1yZXNvbHZlcicpO1xyXG5leHBvcnQgY29uc3QgbG9nUXVlcnkgPSBkZWJ1ZygnYXBpOnF1ZXJ5Jyk7XHJcbmV4cG9ydCBjb25zdCBsb2dNdXRhdGlvbiA9IGRlYnVnKCdhcGk6bXV0YXRpb24nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0hlbHBlciA9IGRlYnVnKCdhcGk6aGVscGVyJyk7XHJcbiIsImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHBhc3N3b3JkQ2hhbmdlZCBmcm9tICcuL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi90ZW1wbGF0ZXMvd2VsY29tZSc7XHJcbmltcG9ydCB2ZXJpZmljYXRpb25FbWFpbCBmcm9tICcuL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnQC91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xyXG5pbXBvcnQgeyBNYWlsT3B0aW9ucywgU2VsZWN0VGVtcGxhdGUsIFNlbmRFbWFpbCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgdG8sIHRlbXBsYXRlLCB2YXJpYWJsZXMsIHRlbXBsYXRlSWQgfTogU2VuZEVtYWlsKSA9PiB7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdObyBtYWlsIHRlbXBsYXRlIHNwZWNpZmllZCcpO1xyXG5cclxuICBjb25zdCB7IHN1YmplY3QsIHRlbXBsYXRlOiB0ZW1wIH0gPSBhd2FpdCBzZWxlY3RUZW1wbGF0ZSh7XHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKFsnUFJPRFVDVElPTicsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkpIHtcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0tFWSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQGVtYWlscy5tYXN0ZXJpbmdiYWNrZW5kLmNvbT5gLFxyXG4gICAgICB0bzogdG8sXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnM6IE1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQHByZXNzbW9uaS5jb20+YCxcclxuICAgICAgdG8sXHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haWxDb25maWc6IGFueSA9IHtcclxuICAgICAgaG9zdDogZW52aXJvbm1lbnQubWFpbD8uaG9zdCB8fCAnc210cC5tYWlsdHJhcC5pbycsXHJcbiAgICAgIHBvcnQ6IGVudmlyb25tZW50Lm1haWw/LnBvcnQgfHwgMjUyNSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogZW52aXJvbm1lbnQubWFpbD8udXNlcm5hbWUgfHwgJ2EzZDExNTliYmJlM2E2JywgLy9nZW5lcmF0ZWQgYnkgTWFpbHRyYXBcclxuICAgICAgICBwYXNzOiBlbnZpcm9ubWVudC5tYWlsPy5wYXNzd29yZCB8fCAnMmI0NjY4ZmUyZDZhNjcnLCAvL2dlbmVyYXRlZCBieSBNYWlsdHJhcFxyXG4gICAgICB9LFxyXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcclxuICAgICAgZ3JlZXRpbmdUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgc29ja2V0VGltZW91dDogMTAwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1haWxPcHRpb25zLCBtYWlsQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQubWFpbD8uaG9zdD8uaW5jbHVkZXMoJ2dtYWlsJykpXHJcbiAgICAgIG1haWxDb25maWdbJ3NlcnZpY2UnXSA9IGVudmlyb25tZW50Lm1haWw/Lmhvc3Q7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChtYWlsQ29uZmlnKTtcclxuXHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBsb2dFcnJvcignc2VuZEVtYWlsICVvJywgeyBtYWlsT3B0aW9ucywgZXJyb3IgfSk7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndHJ5IGVtYWlsIGFnYWluIGxhdGVyJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgdHJhbnNwb3J0ZXIuY2xvc2UoKTtcclxuICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0VGVtcGxhdGUgPSBhc3luYyAoeyB0ZW1wbGF0ZSwgdmFyaWFibGVzIH06IFNlbGVjdFRlbXBsYXRlKSA9PiB7XHJcbiAgbGV0IHN1YmplY3QgPSBgYDtcclxuICBsZXQgX3RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcclxuICAgIGNhc2UgJ2ZvcmdvdC1wYXNzd29yZCc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFBhc3N3b3JkIFJlc2V0YDtcclxuICAgICAgX3RlbXBsYXRlID0gZm9yZ290UGFzc3dvcmQodmFyaWFibGVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2ZXJpZmljYXRpb24nOlxyXG4gICAgICBzdWJqZWN0ICs9IGBFbWFpbCBWZXJpZmljYXRpb25gO1xyXG4gICAgICBfdGVtcGxhdGUgPSB2ZXJpZmljYXRpb25FbWFpbCh2YXJpYWJsZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Bhc3N3b3JkLWNoYW5nZWQnOlxyXG4gICAgICBzdWJqZWN0ICs9IGBQYXNzd29yZCBDaGFuZ2VkYDtcclxuICAgICAgX3RlbXBsYXRlID0gcGFzc3dvcmRDaGFuZ2VkKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnd2VsY29tZSc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFdlbGNvbWUgdG8gTWFzdGVyaW5nYmFja2VuZCFgO1xyXG4gICAgICBfdGVtcGxhdGUgPSB3ZWxjb21lKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiB7IHRlbXBsYXRlOiBfdGVtcGxhdGUsIHN1YmplY3QgfTtcclxufTtcclxuIiwiY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHVibGljIHN0YXR1cztcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnlDb2RlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkzJyxcclxuICAgIGNvZGU6ICdBRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxhbmQgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdBWCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU1JyxcclxuICAgIGNvZGU6ICdBTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjEzJyxcclxuICAgIGNvZGU6ICdEWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW1lcmljYW5TYW1vYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY4NCcsXHJcbiAgICBjb2RlOiAnQVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZG9ycmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NicsXHJcbiAgICBjb2RlOiAnQUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ0JyxcclxuICAgIGNvZGU6ICdBTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5ndWlsbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNjQnLFxyXG4gICAgY29kZTogJ0FJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzInLFxyXG4gICAgY29kZTogJ0FRJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAgIGRpYWxfY29kZTogJysxMjY4JyxcclxuICAgIGNvZGU6ICdBRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1NCcsXHJcbiAgICBjb2RlOiAnQVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FybWVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NCcsXHJcbiAgICBjb2RlOiAnQU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FydWJhJyxcclxuICAgIGRpYWxfY29kZTogJysyOTcnLFxyXG4gICAgY29kZTogJ0FXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzYxJyxcclxuICAgIGNvZGU6ICdBVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXVzdHJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDMnLFxyXG4gICAgY29kZTogJ0FUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBemVyYmFpamFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTQnLFxyXG4gICAgY29kZTogJ0FaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCYWhhbWFzJyxcclxuICAgIGRpYWxfY29kZTogJysxMjQyJyxcclxuICAgIGNvZGU6ICdCUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFocmFpbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTczJyxcclxuICAgIGNvZGU6ICdCSCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuZ2xhZGVzaCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrODgwJyxcclxuICAgIGNvZGU6ICdCRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNDYnLFxyXG4gICAgY29kZTogJ0JCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxhcnVzJyxcclxuICAgIGRpYWxfY29kZTogJyszNzUnLFxyXG4gICAgY29kZTogJ0JZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxnaXVtJyxcclxuICAgIGRpYWxfY29kZTogJyszMicsXHJcbiAgICBjb2RlOiAnQkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAxJyxcclxuICAgIGNvZGU6ICdCWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmVuaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyOScsXHJcbiAgICBjb2RlOiAnQkonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jlcm11ZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE0NDEnLFxyXG4gICAgY29kZTogJ0JNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3NScsXHJcbiAgICBjb2RlOiAnQlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MScsXHJcbiAgICBjb2RlOiAnQk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NycsXHJcbiAgICBjb2RlOiAnQkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgIGRpYWxfY29kZTogJysyNjcnLFxyXG4gICAgY29kZTogJ0JXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU1JyxcclxuICAgIGNvZGU6ICdCUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAgIGRpYWxfY29kZTogJysyNDYnLFxyXG4gICAgY29kZTogJ0lPJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjczJyxcclxuICAgIGNvZGU6ICdCTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1OScsXHJcbiAgICBjb2RlOiAnQkcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0J1cmtpbmEgRmFzbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI2JyxcclxuICAgIGNvZGU6ICdCRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVydW5kaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU3JyxcclxuICAgIGNvZGU6ICdCSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FtYm9kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1NScsXHJcbiAgICBjb2RlOiAnS0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgIGRpYWxfY29kZTogJysyMzcnLFxyXG4gICAgY29kZTogJ0NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYW5hZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ0NBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcclxuICAgIGRpYWxfY29kZTogJysyMzgnLFxyXG4gICAgY29kZTogJ0NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzQ1JyxcclxuICAgIGNvZGU6ICdLWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJysyMzYnLFxyXG4gICAgY29kZTogJ0NGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGFkJyxcclxuICAgIGRpYWxfY29kZTogJysyMzUnLFxyXG4gICAgY29kZTogJ1REJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGlsZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTYnLFxyXG4gICAgY29kZTogJ0NMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrODYnLFxyXG4gICAgY29kZTogJ0NOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ1gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ0MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgIGRpYWxfY29kZTogJys1NycsXHJcbiAgICBjb2RlOiAnQ08nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbW9yb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OScsXHJcbiAgICBjb2RlOiAnS00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDInLFxyXG4gICAgY29kZTogJ0NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDMnLFxyXG4gICAgY29kZTogJ0NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4MicsXHJcbiAgICBjb2RlOiAnQ0snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwNicsXHJcbiAgICBjb2RlOiAnQ1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI1JyxcclxuICAgIGNvZGU6ICdDSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3JvYXRpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg1JyxcclxuICAgIGNvZGU6ICdIUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTMnLFxyXG4gICAgY29kZTogJ0NVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDeXBydXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NycsXHJcbiAgICBjb2RlOiAnQ1knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0N6ZWNoIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJys0MjAnLFxyXG4gICAgY29kZTogJ0NaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZW5tYXJrJyxcclxuICAgIGRpYWxfY29kZTogJys0NScsXHJcbiAgICBjb2RlOiAnREsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RqaWJvdXRpJyxcclxuICAgIGRpYWxfY29kZTogJysyNTMnLFxyXG4gICAgY29kZTogJ0RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc2NycsXHJcbiAgICBjb2RlOiAnRE0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg0OScsXHJcbiAgICBjb2RlOiAnRE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VjdWFkb3InLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MycsXHJcbiAgICBjb2RlOiAnRUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VneXB0JyxcclxuICAgIGRpYWxfY29kZTogJysyMCcsXHJcbiAgICBjb2RlOiAnRUcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcclxuICAgIGRpYWxfY29kZTogJys1MDMnLFxyXG4gICAgY29kZTogJ1NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQwJyxcclxuICAgIGNvZGU6ICdHUScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjkxJyxcclxuICAgIGNvZGU6ICdFUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXN0b25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcyJyxcclxuICAgIGNvZGU6ICdFRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoaW9waWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1MScsXHJcbiAgICBjb2RlOiAnRVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdGSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk4JyxcclxuICAgIGNvZGU6ICdGTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlqaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc5JyxcclxuICAgIGNvZGU6ICdGSicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdGSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJhbmNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMycsXHJcbiAgICBjb2RlOiAnRlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NCcsXHJcbiAgICBjb2RlOiAnR0YnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OScsXHJcbiAgICBjb2RlOiAnUEYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhYm9uJyxcclxuICAgIGRpYWxfY29kZTogJysyNDEnLFxyXG4gICAgY29kZTogJ0dBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYW1iaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMCcsXHJcbiAgICBjb2RlOiAnR00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlb3JnaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk5NScsXHJcbiAgICBjb2RlOiAnR0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQ5JyxcclxuICAgIGNvZGU6ICdERScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2hhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMycsXHJcbiAgICBjb2RlOiAnR0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpYnJhbHRhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUwJyxcclxuICAgIGNvZGU6ICdHSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMCcsXHJcbiAgICBjb2RlOiAnR1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dyZWVubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk5JyxcclxuICAgIGNvZGU6ICdHTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlbmFkYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTQ3MycsXHJcbiAgICBjb2RlOiAnR0QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MCcsXHJcbiAgICBjb2RlOiAnR1AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NzEnLFxyXG4gICAgY29kZTogJ0dVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwMicsXHJcbiAgICBjb2RlOiAnR1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1ZXJuc2V5JyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI0JyxcclxuICAgIGNvZGU6ICdHTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3VpbmVhLUJpc3NhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ1JyxcclxuICAgIGNvZGU6ICdHVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3V5YW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1OTUnLFxyXG4gICAgY29kZTogJ0dZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTA5JyxcclxuICAgIGNvZGU6ICdIVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3OScsXHJcbiAgICBjb2RlOiAnVkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbmR1cmFzJyxcclxuICAgIGRpYWxfY29kZTogJys1MDQnLFxyXG4gICAgY29kZTogJ0hOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MicsXHJcbiAgICBjb2RlOiAnSEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0h1bmdhcnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM2JyxcclxuICAgIGNvZGU6ICdIVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSWNlbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU0JyxcclxuICAgIGNvZGU6ICdJUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkxJyxcclxuICAgIGNvZGU6ICdJTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kb25lc2lhJyxcclxuICAgIGRpYWxfY29kZTogJys2MicsXHJcbiAgICBjb2RlOiAnSUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YgUGVyc2lhbiBHdWxmJyxcclxuICAgIGRpYWxfY29kZTogJys5OCcsXHJcbiAgICBjb2RlOiAnSVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYXEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2NCcsXHJcbiAgICBjb2RlOiAnSVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyZWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1MycsXHJcbiAgICBjb2RlOiAnSUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzbGUgb2YgTWFuJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnSU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcyJyxcclxuICAgIGNvZGU6ICdJTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSXRhbHknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM5JyxcclxuICAgIGNvZGU6ICdJVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSmFtYWljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg3NicsXHJcbiAgICBjb2RlOiAnSk0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phcGFuJyxcclxuICAgIGRpYWxfY29kZTogJys4MScsXHJcbiAgICBjb2RlOiAnSlAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0plcnNleScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDQnLFxyXG4gICAgY29kZTogJ0pFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdKb3JkYW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MicsXHJcbiAgICBjb2RlOiAnSk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzc3JyxcclxuICAgIGNvZGU6ICdLWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS2VueWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1NCcsXHJcbiAgICBjb2RlOiAnS0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgIGRpYWxfY29kZTogJys2ODYnLFxyXG4gICAgY29kZTogJ0tJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcclxuICAgIGRpYWxfY29kZTogJys4NTAnLFxyXG4gICAgY29kZTogJ0tQJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzgyJyxcclxuICAgIGNvZGU6ICdLUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS3V3YWl0JyxcclxuICAgIGRpYWxfY29kZTogJys5NjUnLFxyXG4gICAgY29kZTogJ0tXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTYnLFxyXG4gICAgY29kZTogJ0tHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYW9zJyxcclxuICAgIGRpYWxfY29kZTogJys4NTYnLFxyXG4gICAgY29kZTogJ0xBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYXR2aWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3MScsXHJcbiAgICBjb2RlOiAnTFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlYmFub24nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MScsXHJcbiAgICBjb2RlOiAnTEInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2NicsXHJcbiAgICBjb2RlOiAnTFMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYmVyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMScsXHJcbiAgICBjb2RlOiAnTFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxOCcsXHJcbiAgICBjb2RlOiAnTFknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpZWNodGVuc3RlaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQyMycsXHJcbiAgICBjb2RlOiAnTEknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcwJyxcclxuICAgIGNvZGU6ICdMVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUyJyxcclxuICAgIGNvZGU6ICdMVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFjYW8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MycsXHJcbiAgICBjb2RlOiAnTU8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg5JyxcclxuICAgIGNvZGU6ICdNSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFkYWdhc2NhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYxJyxcclxuICAgIGNvZGU6ICdNRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsYXdpJyxcclxuICAgIGRpYWxfY29kZTogJysyNjUnLFxyXG4gICAgY29kZTogJ01XJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjAnLFxyXG4gICAgY29kZTogJ01ZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxkaXZlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYwJyxcclxuICAgIGNvZGU6ICdNVicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIzJyxcclxuICAgIGNvZGU6ICdNTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NicsXHJcbiAgICBjb2RlOiAnTVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY5MicsXHJcbiAgICBjb2RlOiAnTUgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRpbmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NicsXHJcbiAgICBjb2RlOiAnTVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMicsXHJcbiAgICBjb2RlOiAnTVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGl1cycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjMwJyxcclxuICAgIGNvZGU6ICdNVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWF5b3R0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdZVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgIGRpYWxfY29kZTogJys1MicsXHJcbiAgICBjb2RlOiAnTVgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkxJyxcclxuICAgIGNvZGU6ICdGTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzczJyxcclxuICAgIGNvZGU6ICdNRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9uYWNvJyxcclxuICAgIGRpYWxfY29kZTogJyszNzcnLFxyXG4gICAgY29kZTogJ01DJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNb25nb2xpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTc2JyxcclxuICAgIGNvZGU6ICdNTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgyJyxcclxuICAgIGNvZGU6ICdNRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY2NCcsXHJcbiAgICBjb2RlOiAnTVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vcm9jY28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxMicsXHJcbiAgICBjb2RlOiAnTUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1OCcsXHJcbiAgICBjb2RlOiAnTVonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ015YW5tYXInLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk1JyxcclxuICAgIGNvZGU6ICdNTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjY0JyxcclxuICAgIGNvZGU6ICdOQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmF1cnUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NCcsXHJcbiAgICBjb2RlOiAnTlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05lcGFsJyxcclxuICAgIGRpYWxfY29kZTogJys5NzcnLFxyXG4gICAgY29kZTogJ05QJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzEnLFxyXG4gICAgY29kZTogJ05MJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk5JyxcclxuICAgIGNvZGU6ICdBTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjg3JyxcclxuICAgIGNvZGU6ICdOQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY0JyxcclxuICAgIGNvZGU6ICdOWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmljYXJhZ3VhJyxcclxuICAgIGRpYWxfY29kZTogJys1MDUnLFxyXG4gICAgY29kZTogJ05JJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOaWdlcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI3JyxcclxuICAgIGNvZGU6ICdORScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjM0JyxcclxuICAgIGNvZGU6ICdORycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTml1ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgzJyxcclxuICAgIGNvZGU6ICdOVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3MicsXHJcbiAgICBjb2RlOiAnTkYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY3MCcsXHJcbiAgICBjb2RlOiAnTVAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcndheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ05PJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdPbWFuJyxcclxuICAgIGRpYWxfY29kZTogJys5NjgnLFxyXG4gICAgY29kZTogJ09NJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTInLFxyXG4gICAgY29kZTogJ1BLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgwJyxcclxuICAgIGNvZGU6ICdQVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcwJyxcclxuICAgIGNvZGU6ICdQUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFuYW1hJyxcclxuICAgIGRpYWxfY29kZTogJys1MDcnLFxyXG4gICAgY29kZTogJ1BBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzUnLFxyXG4gICAgY29kZTogJ1BHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk1JyxcclxuICAgIGNvZGU6ICdQWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGVydScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTEnLFxyXG4gICAgY29kZTogJ1BFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjMnLFxyXG4gICAgY29kZTogJ1BIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaXRjYWlybicsXHJcbiAgICBkaWFsX2NvZGU6ICcrODcyJyxcclxuICAgIGNvZGU6ICdQTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUG9sYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys0OCcsXHJcbiAgICBjb2RlOiAnUEwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BvcnR1Z2FsJyxcclxuICAgIGRpYWxfY29kZTogJyszNTEnLFxyXG4gICAgY29kZTogJ1BUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTkzOScsXHJcbiAgICBjb2RlOiAnUFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1FhdGFyJyxcclxuICAgIGRpYWxfY29kZTogJys5NzQnLFxyXG4gICAgY29kZTogJ1FBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb21hbmlhJyxcclxuICAgIGRpYWxfY29kZTogJys0MCcsXHJcbiAgICBjb2RlOiAnUk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J1c3NpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNycsXHJcbiAgICBjb2RlOiAnUlUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUwJyxcclxuICAgIGNvZGU6ICdSVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV1bmlvbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdSRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTkwJyxcclxuICAgIGNvZGU6ICdCTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI5MCcsXHJcbiAgICBjb2RlOiAnU0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg2OScsXHJcbiAgICBjb2RlOiAnS04nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEx1Y2lhJyxcclxuICAgIGRpYWxfY29kZTogJysxNzU4JyxcclxuICAgIGNvZGU6ICdMQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcclxuICAgIGRpYWxfY29kZTogJys1OTAnLFxyXG4gICAgY29kZTogJ01GJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgIGRpYWxfY29kZTogJys1MDgnLFxyXG4gICAgY29kZTogJ1BNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc4NCcsXHJcbiAgICBjb2RlOiAnVkMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhbW9hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODUnLFxyXG4gICAgY29kZTogJ1dTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW4gTWFyaW5vJyxcclxuICAgIGRpYWxfY29kZTogJyszNzgnLFxyXG4gICAgY29kZTogJ1NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzOScsXHJcbiAgICBjb2RlOiAnU1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY2JyxcclxuICAgIGNvZGU6ICdTQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VuZWdhbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIxJyxcclxuICAgIGNvZGU6ICdTTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgIGRpYWxfY29kZTogJyszODEnLFxyXG4gICAgY29kZTogJ1JTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcclxuICAgIGRpYWxfY29kZTogJysyNDgnLFxyXG4gICAgY29kZTogJ1NDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMicsXHJcbiAgICBjb2RlOiAnU0wnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjUnLFxyXG4gICAgY29kZTogJ1NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTbG92YWtpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDIxJyxcclxuICAgIGNvZGU6ICdTSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2xvdmVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NicsXHJcbiAgICBjb2RlOiAnU0knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc3JyxcclxuICAgIGNvZGU6ICdTQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU29tYWxpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUyJyxcclxuICAgIGNvZGU6ICdTTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcclxuICAgIGRpYWxfY29kZTogJysyNycsXHJcbiAgICBjb2RlOiAnWkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvdXRoIFN1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyMTEnLFxyXG4gICAgY29kZTogJ1NTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdHUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM0JyxcclxuICAgIGNvZGU6ICdFUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3JpIExhbmthJyxcclxuICAgIGRpYWxfY29kZTogJys5NCcsXHJcbiAgICBjb2RlOiAnTEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyNDknLFxyXG4gICAgY29kZTogJ1NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdXJpbmFtZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk3JyxcclxuICAgIGNvZGU6ICdTUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ1NKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2F6aWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OCcsXHJcbiAgICBjb2RlOiAnU1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N3ZWRlbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDYnLFxyXG4gICAgY29kZTogJ1NFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDEnLFxyXG4gICAgY29kZTogJ0NIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYzJyxcclxuICAgIGNvZGU6ICdTWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVGFpd2FuJyxcclxuICAgIGRpYWxfY29kZTogJys4ODYnLFxyXG4gICAgY29kZTogJ1RXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTInLFxyXG4gICAgY29kZTogJ1RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNTUnLFxyXG4gICAgY29kZTogJ1RaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaGFpbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjYnLFxyXG4gICAgY29kZTogJ1RIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjcwJyxcclxuICAgIGNvZGU6ICdUTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9nbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI4JyxcclxuICAgIGNvZGU6ICdURycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9rZWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkwJyxcclxuICAgIGNvZGU6ICdUSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9uZ2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NicsXHJcbiAgICBjb2RlOiAnVE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE4NjgnLFxyXG4gICAgY29kZTogJ1RUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5pc2lhJyxcclxuICAgIGRpYWxfY29kZTogJysyMTYnLFxyXG4gICAgY29kZTogJ1ROJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrZXknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkwJyxcclxuICAgIGNvZGU6ICdUUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTMnLFxyXG4gICAgY29kZTogJ1RNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NDknLFxyXG4gICAgY29kZTogJ1RDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXZhbHUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OCcsXHJcbiAgICBjb2RlOiAnVFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU2JyxcclxuICAgIGNvZGU6ICdVRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVWtyYWluZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgwJyxcclxuICAgIGNvZGU6ICdVQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3MScsXHJcbiAgICBjb2RlOiAnQUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ1VTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVcnVndWF5JyxcclxuICAgIGRpYWxfY29kZTogJys1OTgnLFxyXG4gICAgY29kZTogJ1VZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVemJla2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTgnLFxyXG4gICAgY29kZTogJ1VaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgIGRpYWxfY29kZTogJys2NzgnLFxyXG4gICAgY29kZTogJ1ZVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhJyxcclxuICAgIGRpYWxfY29kZTogJys1OCcsXHJcbiAgICBjb2RlOiAnVkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg0JyxcclxuICAgIGNvZGU6ICdWTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyODQnLFxyXG4gICAgY29kZTogJ1ZHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTM0MCcsXHJcbiAgICBjb2RlOiAnVkknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODEnLFxyXG4gICAgY29kZTogJ1dGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY3JyxcclxuICAgIGNvZGU6ICdZRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnWmFtYmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNjAnLFxyXG4gICAgY29kZTogJ1pNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdaaW1iYWJ3ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYzJyxcclxuICAgIGNvZGU6ICdaVycsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBjb3VudHJ5Q29kZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU01TSW5wdXQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgZmluZEl0ZW0sIGZvcm1hdFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5jb25zdCBhY2MgPSBidG9hKGAke2Vudmlyb25tZW50LmFrdXVrPy5pZH06JHtlbnZpcm9ubWVudC5ha3V1az8ua2V5fWApO1xyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmFrdXVrPy51cmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YWNjfWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQWt1dWsge1xyXG4gIHN0YXRpYyBhc3luYyBzZW5kU01TKHBheWxvYWQ6IFNNU0lucHV0KSB7XHJcbiAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpO1xyXG5cclxuICAgIC8vIEZpbmQgY291bnRyeSBjb2RlXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyeUNvZGVzLCBwYXlsb2FkLmNvdW50cnksICdjb2RlJyk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHBob25lIG51bWJlclxyXG4gICAgY29uc3QgbnVtYmVyID0gZm9ybWF0UGhvbmVOdW1iZXIocGF5bG9hZC5udW1iZXIsIGNvdW50cnk/LmRpYWxfY29kZSEpO1xyXG5cclxuICAgIGlmICghbnVtYmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9tZXNzYWdpbmcvc21zJywge1xyXG4gICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgc2VuZGVyOiBlbnZpcm9ubWVudC5ha3V1ay5zZW5kZXIsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY291bnRyeUNvZGU6IGNvdW50cnk/LmRpYWxfY29kZSxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBhbW91bnQsIGJpbGxpbmcsIGNvdW50cnk6IGNvZGUsIG51bWJlcjogcGhvbmUgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgY29uc3QgdXVpZCA9IHJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAvLyBGaW5kIGNvdW50cnkgY29kZVxyXG4gICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKGNvdW50cnlDb2RlcywgY29kZSwgJ2NvZGUnKTtcclxuXHJcbiAgICAvLyBGb3JtYXQgcGhvbmUgbnVtYmVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBmb3JtYXRQaG9uZU51bWJlcihwaG9uZSwgY291bnRyeT8uZGlhbF9jb2RlISk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBtcmNSZWZlcmVuY2U6IHV1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlOiBOdW1iZXIoY291bnRyeT8uZGlhbF9jb2RlLnNwbGl0KCcrJylbMV0pICsgJycsXHJcbiAgICAgIG51bWJlcjogbnVtYmVyICsgJycsXHJcbiAgICAgIGJpbGxpbmc6IGJpbGxpbmcsXHJcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMikgKyAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9wYXltZW50L2FpcnRpbWUnLCB7XHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgY291bnRyeUNvZGU6IE51bWJlcihjb3VudHJ5Py5kaWFsX2NvZGUuc3BsaXQoJysnKVsxXSkgKyAnJyxcclxuICAgICAgbnVtYmVyOiBudW1iZXIgKyAnJyxcclxuICAgICAgYmlsbGluZzogYmlsbGluZyxcclxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCkudG9GaXhlZCgyKSArICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsZURpck5hbWUobWV0YTogYW55KSB7XHJcbiAgY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgobWV0YS51cmwpO1xyXG5cclxuICBjb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5cclxuICByZXR1cm4geyBfX2Rpcm5hbWUsIF9fZmlsZW5hbWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUVycm9yUGFyc2VyID0gKGVycjogeyBtZXNzYWdlOiBzdHJpbmc7IHN0YXR1czogbnVtYmVyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZS5pbmNsdWRlcygncHJpc21hJylcclxuICAgICAgPyAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG4gICAgICA6IChlcnI/Lm1lc3NhZ2UgPz8gJ0ludGVybmFsIFNlcnZlciBFcnJvcicpLFxyXG4gICAgc3RhdHVzOiBlcnI/LnN0YXR1cyA/PyA1MDAsXHJcbiAgICBzdWNjZXNzOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKHNpemU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKHNpemUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKCdTaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcclxuICBjb25zdCBtaW4gPSBNYXRoLnBvdygxMCwgc2l6ZSAtIDEpO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgucG93KDEwLCBzaXplKSAtIDE7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rlc3RpbmdCVk4oYnZuOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKFxyXG4gICAgWydERVZFTE9QJywgJ0xPQ0FMJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkgJiZcclxuICAgIFsnMjIyMjIyMjIyMjInLCAnOTU4ODgxNjg5MjQnXS5pbmNsdWRlcyhidm4pXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIHJldHVybiBbJ0RFVkVMT1AnLCAnTE9DQUwnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFFVRVVFX05BTUVTID0ge1xyXG4gIFRSQU5TRkVSOiAndHJhbnNmZXInLFxyXG4gIEFJUlRJTUU6ICdhaXJ0aW1lJyxcclxuICBOT1RJRklDQVRJT046ICdub3RpZmljYXRpb24nLFxyXG4gIElOVEVSTkFMX1RSQU5TRkVSOiAnaW50ZXJuYWxfdHJhbnNmZXInLFxyXG4gIENSRUFURVdBTExFVDogJ2NyZWF0ZV93YWxsZXQnLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAodXNlcjogVXNlciwgdHlwZSA9ICdQSE9ORScpIHtcclxuICBjb25zdCBjb2RlID0gb3RwR2VuZXJhdG9yLmdlbmVyYXRlKDYsIHtcclxuICAgIGxvd2VyQ2FzZUFscGhhYmV0czogZmFsc2UsXHJcbiAgICB1cHBlckNhc2VBbHBoYWJldHM6IGZhbHNlLFxyXG4gICAgc3BlY2lhbENoYXJzOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICByZWZyZXNoQ29kZTogY29kZSxcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB0eXBlOiB0eXBlID09PSAnUEhPTkUnID8gJ1BIT05FJyA6ICdFTUFJTCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdPVFAgbm90IHNhdmVkJyk7XHJcblxyXG4gIC8vIFNlbmQgU01TXHJcbiAgaWYgKHVzZXIucGhvbmUgJiYgdHlwZSA9PT0gJ1BIT05FJylcclxuICAgIEFrdXVrLnNlbmRTTVMoe1xyXG4gICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIG51bWJlcjogdXNlci5waG9uZSxcclxuICAgICAgbWVzc2FnZTogYFlvdXIgV2VQYXkgdmVyaWZpY2F0aW9uIGNvZGUgaXM6ICR7Y29kZX0uIFRoYW5rcyB5b3UgZm9yIGNob29zaW5nIFdlUGF5YCxcclxuICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYWlsICYmIHR5cGUgPT09ICdFTUFJTCcpXHJcbiAgICBzZW5kRW1haWwoe1xyXG4gICAgICB0bzogdXNlcj8uZW1haWwhLFxyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHRvX25hbWU6IHVzZXIubmFtZSxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICd2ZXJpZmljYXRpb24nLFxyXG4gICAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBob25lTnVtYmVyKG51bWJlcjogc3RyaW5nIHwgbnVtYmVyLCBkYWlsQ29kZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLmxlbmd0aCA+IDExXHJcbiAgICA/IG51bWJlclxyXG4gICAgOiBOdW1iZXIoYCR7ZGFpbENvZGUuc3BsaXQoJysnKVsxXX0ke251bWJlci50b1N0cmluZygpLnN1YnN0cmluZygxKX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBSUxZX0xJTUlUUyA9IHtcclxuICBUSUVSXzE6IDIwMF8wMDBuLFxyXG4gIFRJRVJfMjogMV8wMDBfMDAwbixcclxuICBUSUVSXzM6IDVfMDAwXzAwMG4sXHJcbiAgVElFUl80OiAxMDBfMDAwXzAwMF8wMDBuLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFueSB2YWxpZCBkYXRlIHN0cmluZywgdGltZXN0YW1wLCBvciBEYXRlIG9iamVjdFxyXG4gKiB0byBhIHN0YW5kYXJkIElTTyA4NjAxIGRhdGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IERhdGV9IGlucHV0IC0gVGhlIGRhdGUgaW5wdXQgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9IFRoZSBJU08gZGF0ZSBzdHJpbmcgb3IgbnVsbCBpZiBpbnZhbGlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPRGF0ZShpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSk6IHN0cmluZyB8IG51bGwge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBIYW5kbGUgZW1wdHkgb3IgdW5kZWZpbmVkIGlucHV0XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQpO1xyXG5cclxuICAgIC8vIENoZWNrIHZhbGlkaXR5XHJcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGRhdGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gSVNPIHN0cmluZ1xyXG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KGFtb3VudDogYW55KSB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tTkcnLCB7XHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgfSkuZm9ybWF0KGFtb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUgfCBhbnkpIHtcclxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gbW9udGhzIGFyZSAwLWluZGV4ZWRcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICBob3VycyA9IGhvdXJzICUgMTIgfHwgMTI7IC8vIGNvbnZlcnQgMCDihpIgMTIgZm9yIDEyIEFNXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtKGRhdGE6IEFycmF5PGFueT4sIGl0ZW06IHN0cmluZywgZmllbGQ6IHN0cmluZykge1xyXG4gIHJldHVybiBkYXRhLmZpbmQoXHJcbiAgICAoZCkgPT4gZD8uW2ZpZWxkXT8udG9Mb3dlckNhc2UoKT8udHJpbSgpID09PSBpdGVtPy50b0xvd2VyQ2FzZSgpPy50cmltKCksXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFjcXVpcmUgcm93IGxvY2tzIGZvciB3YWxsZXRzIGluIGNhbm9uaWNhbCBvcmRlciBpbnNpZGUgYSB0cmFuc2FjdGlvbi5cclxuICogUmV0dXJucyB3YWxsZXQgcm93cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2NrV2FsbGV0c1R4KHR4OiBhbnksIHdhbGxldElkczogc3RyaW5nW10pIHtcclxuICAvLyBlbnN1cmUgY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbLi4ud2FsbGV0SWRzXS5zb3J0KCk7XHJcbiAgLy8gYnVpbGQgcGFyYW1ldGVyaXplZCBxdWVyeVxyXG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IG9yZGVyZWQubWFwKChfLCBpKSA9PiBgJCR7aSArIDF9YCkuam9pbignLCcpO1xyXG4gIC8vIE5PVEU6IHdlIGFzc3VtZSB0YWJsZSBuYW1lIFwiV2FsbGV0XCIgYW5kIGNvbHVtbiBcImlkXCJcclxuICBjb25zdCByb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtwbGFjZWhvbGRlcnN9KSBGT1IgVVBEQVRFYCxcclxuICAgIC4uLm9yZGVyZWQsXHJcbiAgKTtcclxuICAvLyByZXR1cm4gcm93cyBhcy1pc1xyXG4gIHJldHVybiByb3dzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5Lb2JvKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIEJpZ0ludChNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5OYWlyYShhbW91bnQ6IGFueSkge1xyXG4gIHJldHVybiBOdW1iZXIoYW1vdW50KSAvIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRGFpbHlMaW1pdChcclxuICBmcm9tV2FsbGV0OiBXYWxsZXQsXHJcbiAgZnJvbVVzZXI6IFVzZXIsXHJcbiAgYW10OiBiaWdpbnQsXHJcbikge1xyXG4gIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5sZWRnZXIuYWdncmVnYXRlKHtcclxuICAgIF9zdW06IHsgY2hhbmdlOiB0cnVlIH0sXHJcbiAgICB3aGVyZToge1xyXG4gICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgY3JlYXRlZEF0OiB7IGd0ZTogdG9kYXlTdGFydCB9LFxyXG4gICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYW1vdW50ID0gYW1vdW50SW5OYWlyYShhbXQpO1xyXG4gIGNvbnN0IHRyYW5zZmVycmVkID0gYW1vdW50SW5OYWlyYShcclxuICAgIHJlc3VsdC5fc3VtLmNoYW5nZSA/IC1yZXN1bHQuX3N1bS5jaGFuZ2UgOiAwbixcclxuICApO1xyXG5cclxuICBjb25zdCB0aWVyID0gZnJvbVVzZXIuY3VycmVudFRpZXIgYXMga2V5b2YgdHlwZW9mIERBSUxZX0xJTUlUUztcclxuICBjb25zdCBkYWlseUxpbWl0ID0gREFJTFlfTElNSVRTW3RpZXJdIHx8IERBSUxZX0xJTUlUUy5USUVSXzE7XHJcblxyXG4gIHJldHVybiBCaWdJbnQodHJhbnNmZXJyZWQgKyBhbW91bnQpID4gZGFpbHlMaW1pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcFRleHQodGV4dD86IHN0cmluZywgbWF4ID0gMzIpIHtcclxuICBpZiAoIXRleHQpIHJldHVybjtcclxuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcclxuICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XHJcbiAgbGV0IGN1cnJlbnQgPSAnJztcclxuXHJcbiAgZm9yIChjb25zdCB3IG9mIHdvcmRzKSB7XHJcbiAgICBpZiAoKGN1cnJlbnQgKyAnICcgKyB3KS50cmltKCkubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIGxpbmVzLnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICBjdXJyZW50ID0gdztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnQgKz0gJyAnICsgdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50LnRyaW0oKS5sZW5ndGggPiAwKSBsaW5lcy5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5EZXNjKGRlc2M/OiBzdHJpbmcsIG1heCA9IDMwKSB7XHJcbiAgaWYgKCFkZXNjKSByZXR1cm4gZGVzYztcclxuICBpZiAoZGVzYy5sZW5ndGggPD0gbWF4KSByZXR1cm4gZGVzYztcclxuICByZXR1cm4gZGVzYy5zbGljZSgwLCBtYXggLSAzKSArICcuLi4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gIGFjY291bnQsXHJcbiAgYW1vdW50LFxyXG4gIGRlc2MsXHJcbiAgY3VycmVuY3ksXHJcbiAgYmFsYW5jZSxcclxuICBkYXRlLFxyXG4gIHR5cGUsXHJcbn06IHtcclxuICBhY2NvdW50OiBzdHJpbmc7XHJcbiAgYW1vdW50OiBiaWdpbnQ7XHJcbiAgZGVzYz86IHN0cmluZztcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGJhbGFuY2U6IGJpZ2ludDtcclxufSkge1xyXG4gIHJldHVybiBgXHJcbkFjY3Q6ICoqKioqKiR7YWNjb3VudC5zbGljZSgtNCl9XHJcbkFtdDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYW1vdW50KSl9ICR7dHlwZX1cclxuRGVzYzogJHt3cmFwVGV4dChzaG9ydGVuRGVzYyhkZXNjKSl9XHJcbkF2YWlsIEJhbDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYmFsYW5jZSkpfVxyXG5EYXRlOiAke2Zvcm1hdERhdGUoZGF0ZSl9XHJcblRoYW5rcyBmb3IgdXNpbmcgV2VQYXlgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VyU2FmZUlkKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgaW5wdXQgPSBgJHtEYXRlLm5vdygpIC0gTWF0aC5yYW5kb20oKX1gO1xyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGlucHV0KS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiBoYXNoLnN1YnN0cmluZygwLCA4KS50b1VwcGVyQ2FzZSgpO1xyXG59XHJcbiIsIi8vIHNyYy91dGlscy9oYXNoLnRzXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBhcmdvbjIgZnJvbSAnYXJnb24yJztcclxuaW1wb3J0IHsgaXNUZXN0aW5nQlZOIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBsYWluOiBzdHJpbmcpIHtcclxuICAvLyBkZWZhdWx0IG9wdGlvbnMgZm9yIGFyZ29uMiBhcmUgZmluZTsgdHVuZSBpbiBwcm9kIGlmIG5lZWRlZFxyXG4gIHJldHVybiBiY3J5cHQuaGFzaChwbGFpbiwgMTApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQoaGFzaDogc3RyaW5nLCBwbGFpbjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKGhhc2gsIHBsYWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hUb2tlbih0b2tlbjogc3RyaW5nKSB7XHJcbiAgaWYgKCF0b2tlbikgcmV0dXJuO1xyXG4gIGlmIChpc1Rlc3RpbmdCVk4odG9rZW4pKSB7XHJcbiAgICByZXR1cm4gY3J5cHRvXHJcbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxyXG4gICAgICAudXBkYXRlKHRva2VuICsgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zbGljZSg2KSlcclxuICAgICAgLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHRva2VuKS5kaWdlc3QoJ2hleCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBpbihwaW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi5oYXNoKHBpbiwge1xyXG4gICAgdHlwZTogYXJnb24yLmFyZ29uMmlkLFxyXG4gICAgbWVtb3J5Q29zdDogMiAqKiAxNiwgLy8gNjQgTUJcclxuICAgIHRpbWVDb3N0OiAzLFxyXG4gICAgcGFyYWxsZWxpc206IDEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgaW5wdXRQaW46IHN0cmluZyxcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi52ZXJpZnkoaGFzaGVkUGluLCBpbnB1dFBpbik7XHJcbn1cclxuIiwiLy8gc3JjL3V0aWxzL2p3dC50c1xyXG5pbXBvcnQgand0LCB7IEp3dFBheWxvYWQsIFNpZ25PcHRpb25zIH0gZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEp3dFBheWxvYWQgZXh0ZW5kcyBKd3RQYXlsb2FkIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbkFjY2Vzc1Rva2VuKHBheWxvYWQ6IG9iamVjdCkge1xyXG4gIHJldHVybiBqd3Quc2lnbihcclxuICAgIHBheWxvYWQsXHJcbiAgICBlbnZpcm9ubWVudC5qd3Quc2VjcmV0IGFzIHN0cmluZyxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3Q/LmV4cGlyZXNJbn1oYCxcclxuICAgIH0gYXMgU2lnbk9wdGlvbnMsXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiBBdXRoSnd0UGF5bG9hZCB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIGVudmlyb25tZW50Lmp3dC5zZWNyZXQpIGFzIEF1dGhKd3RQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblJlZnJlc2hUb2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICAvLyBsb25nIGxpdmVkLCBidXQgd2Ugc3RpbGwgc3RvcmUgYSBoYXNoZWQgY29weSBzZXJ2ZXItc2lkZVxyXG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBlbnZpcm9ubWVudC5qd3QucmVmcmVzaFNlY3JldCwge1xyXG4gICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3QucmVmcmVzaERheXN9ZGAsXHJcbiAgfSBhcyBTaWduT3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlSZWZyZXNoVG9rZW4odG9rZW46IHN0cmluZyk6IEF1dGhKd3RQYXlsb2FkIHtcclxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgZW52aXJvbm1lbnQuand0LnNlY3JldCkgYXMgQXV0aEp3dFBheWxvYWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGhhc2hQYXNzd29yZCwgaGFzaFRva2VuLCB2ZXJpZnlQaW4gfSBmcm9tICcuLi8uLi91dGlscy9oYXNoJztcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9jb25maWcvZW52JztcclxuaW1wb3J0IHsgc2lnbkFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvand0JztcclxuaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgTG9naW4sIFJlZ2lzdGVyLCBSZXNldFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQm90dGxlbmVjayBmcm9tICdib3R0bGVuZWNrJztcclxuaW1wb3J0IHsgc2VuZE9UUCwgZ2VuZXJhdGVVc2VyU2FmZUlkLCBhbW91bnRJbk5haXJhIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKGRhdGE6IFJlZ2lzdGVyKSB7XHJcbiAgY29uc3QgYnZuSGFzaCA9IGhhc2hUb2tlbihkYXRhLmJ2bik7XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nVW52ZXJpZmllZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgcGhvbmU6IGRhdGEucGhvbmUsXHJcbiAgICAgIGVtYWlsVmVyaWZpZWQ6IGZhbHNlLFxyXG4gICAgICBPUjogW1xyXG4gICAgICAgIHsgYnZuOiBidm5IYXNoIH0sXHJcbiAgICAgICAgeyBidm46IGRhdGEuYnZuIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXhpc3RpbmdVbnZlcmlmaWVkVXNlcikge1xyXG4gICAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKGV4aXN0aW5nVW52ZXJpZmllZFVzZXIpKTtcclxuICAgIHJldHVybiBleGlzdGluZ1VudmVyaWZpZWRVc2VyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcclxuICAgIC4uLmRhdGEuZXh0cmEsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGEucm9sZSA9PT0gJ0FHRU5UJykgcmVjb3JkLmFnZW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgaWYgKGRhdGEucm9sZSA9PT0gJ01FUkNIQU5UJyB8fCBkYXRhLnJvbGUgPT09ICdJTlNUSVRVVElPTicpIHtcclxuICAgIHJlY29yZC5tZXJjaGFudCA9IHsgY3JlYXRlOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuaXF1ZUlkID0gZ2VuZXJhdGVVc2VyU2FmZUlkKCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgY29uc3QgX3VzZXIgPSBhd2FpdCB0eC51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lLFxyXG4gICAgICAgICAgLi4ucmVjb3JkLFxyXG4gICAgICAgICAgdW5pcXVlSUQ6IHVuaXF1ZUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHguYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IF91c2VyLmlkLFxyXG4gICAgICAgICAgYWN0aW9uOiAnUkVHSVNURVInLFxyXG4gICAgICAgICAgaXA6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gX3VzZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG4gICAgcmV0dXJuIHVzZXI7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDAyJykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGVycm9yLm1ldGE/LnRhcmdldCBhcyBzdHJpbmdbXTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldD8uaW5jbHVkZXMoJ3Bob25lJykpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignUGhvbmUgbnVtYmVyIGFuZCBCVk4gYWxyZWFkeSBpbiB1c2UnLCA0MDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldD8uaW5jbHVkZXMoJ2VtYWlsJykpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1haWwgYWxyZWFkeSBpbiB1c2UnLCA0MDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yZ290UGluKHBheWxvYWQ6IHtwaG9uZT86IHN0cmluZzsgZW1haWw/OiBzdHJpbmc7IH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIE9SOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGhvbmU6IHBheWxvYWQ/LnBob25lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQ/LmVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRk9SR09UX1BJTl9DT0RFJyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZGF0YTogTG9naW4pIHtcclxuICBjb25zdCB7IGVtYWlsLCBwaG9uZSwgcGluIH0gPSBkYXRhO1xyXG5cclxuICBpZiAoIXBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQSU4gaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG4gIGlmICghZW1haWwgJiYgIXBob25lKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIC8vIEZpbmQgdXNlciBieSBlbWFpbCBvciBwaG9uZVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFsuLi4oZW1haWwgPyBbeyBlbWFpbCB9XSA6IFtdKSwgLi4uKHBob25lID8gW3sgcGhvbmUgfV0gOiBbXSldLFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgd2FsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuXHJcbiAgaWYgKCF1c2VyLnBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGhhcyBubyBwaW4gc2V0JywgNDAwKTtcclxuXHJcbiAgY29uc3Qgb2sgPSBhd2FpdCB2ZXJpZnlQaW4odXNlci5waW4sIHBpbik7XHJcblxyXG4gIGlmICghb2spIHtcclxuICAgIC8vIE9wdGlvbmFsOiBpbmNyZW1lbnQgZmFpbGVkIGxvZ2luIGF0dGVtcHRzIGhlcmVcclxuICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRkFJTEVEX0xPR0lOJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuICB9XHJcblxyXG4gIC8vIFN1Y2Nlc3NmdWwgbG9naW4g4oaSIExvZyBpdFxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0xPR0lOJyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4udXNlcixcclxuICAgIHdhbGxldHM6IHVzZXIud2FsbGV0cy5tYXAoKHcpID0+ICh7XHJcbiAgICAgIC4uLncsXHJcbiAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IGFtb3VudEluTmFpcmEody5hdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgbGVkZ2VyQmFsYW5jZTogYW1vdW50SW5OYWlyYSh3LmxlZGdlckJhbGFuY2UpLFxyXG4gICAgICByZXNlcnZlZEJhbGFuY2U6IGFtb3VudEluTmFpcmEody5yZXNlcnZlZEJhbGFuY2UpLFxyXG4gICAgfSkpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbldpdGhGaW5nZXIoZGF0YTogeyBmaW5nZXJQcmludDogc3RyaW5nIH0pIHtcclxuICBjb25zdCB7IGZpbmdlclByaW50IH0gPSBkYXRhO1xyXG5cclxuICBpZiAoIWZpbmdlclByaW50KSB7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZpbmdlciBpcyByZXF1aXJlZCBvciBpbnZhbGlkIGZpbmdlciBkYXRhJywgNDIyKTtcclxuICB9XHJcblxyXG4gIC8vIEZpbmQgdXNlciBkaXJlY3RseSBieSBmaW5nZXJwcmludFxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgZmluZ2VyUHJpbnQ6IGZpbmdlclByaW50IH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGZpbmdlcnByaW50JywgNDAxKTtcclxuICB9XHJcblxyXG4gIC8vIExvZyBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnTE9HSU4nIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yZ290UGFzc3dvcmQoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBpcD86IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogZGF0YS5lbWFpbCB9IH0pO1xyXG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGT1JHT1RfUEFTU1dPUkRfQ09ERScsIGlwOiBkYXRhLmlwIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQYXNzd29yZChkYXRhOiBSZXNldFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgeyB0b2tlbiwgbmV3UGFzc3dvcmQsIGlwIH0gPSBkYXRhO1xyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbkludGVudCA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiB0b2tlbiB9LFxyXG4gIH0pO1xyXG4gIGlmICghdmVyaWZpY2F0aW9uSW50ZW50KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3IgZXhwaXJlZCB0b2tlbicpO1xyXG5cclxuICBjb25zdCBuZXdIYXNoID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB2ZXJpZmljYXRpb25JbnRlbnQudXNlcklkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBhc3N3b3JkOiBuZXdIYXNoLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gcmV2b2tlIGFsbCByZWZyZXNoIHRva2VucyAoc2FmZXR5KVxyXG4gIGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZGVsZXRlTWFueSh7IHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9IH0pO1xyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ1JFU0VUX1BBU1NXT1JEJywgaXA6IGlwIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFBpbih1c2VyOiBVc2VyLCBkYXRhOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGluOiBkYXRhLnBpbixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldm9rZSBhbGwgcmVmcmVzaCB0b2tlbnMgKHNhZmV0eSlcclxuICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRVNFVF9QSU4nIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByb3RhdGVSZWZyZXNoVG9rZW4oXHJcbiAgb2xkVG9rZW5SYXc6IHN0cmluZyxcclxuICBpcD86IHN0cmluZyxcclxuICBkZXZpY2VJbmZvPzogc3RyaW5nLFxyXG4pIHtcclxuICBjb25zdCBvbGRIYXNoID0gaGFzaFRva2VuKG9sZFRva2VuUmF3KTtcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5yZWZyZXNoVG9rZW4uZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB0b2tlbkhhc2g6IG9sZEhhc2ggfSxcclxuICB9KTtcclxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLmV4cGlyZXNBdCA8IG5ldyBEYXRlKCkpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVmcmVzaCB0b2tlbicpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBleGlzdGluZy51c2VySWQgfSB9KTtcclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcclxuXHJcbiAgY29uc3QgbmV3UmF3ID0gbmFub2lkKDY0KTtcclxuICBjb25zdCBuZXdIYXNoID0gaGFzaFRva2VuKG5ld1Jhdyk7XHJcbiAgY29uc3QgbmV3RXhwaXJlcyA9IGFkZERheXMobmV3IERhdGUoKSwgTnVtYmVyKGVudmlyb25tZW50Lmp3dC5yZWZyZXNoRGF5cykpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKFtcclxuICAgIHByaXNtYS5yZWZyZXNoVG9rZW4uZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0gfSksXHJcbiAgICBwcmlzbWEucmVmcmVzaFRva2VuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgdG9rZW5IYXNoOiBuZXdIYXNoISxcclxuICAgICAgICBleHBpcmVzQXQ6IG5ld0V4cGlyZXMsXHJcbiAgICAgICAgZGV2aWNlSW5mbyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRUZSRVNIX1JPVEFURUQnLCBpcCB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgc3ViOiB1c2VyLmlkLCByb2xlOiB1c2VyLnJvbGUgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgcmVmcmVzaFRva2VuOiBuZXdSYXcsXHJcbiAgICB1c2VyOiB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZWZyZXNoVG9rZW5SYXc/OiBzdHJpbmcsIGlwPzogc3RyaW5nKSB7XHJcbiAgaWYgKCFyZWZyZXNoVG9rZW5SYXcpIHJldHVybjtcclxuICBjb25zdCBoYXNoID0gaGFzaFRva2VuKHJlZnJlc2hUb2tlblJhdyk7XHJcbiAgYXdhaXQgcHJpc21hLnJlZnJlc2hUb2tlbi5kZWxldGVNYW55KHsgd2hlcmU6IHsgdG9rZW5IYXNoOiBoYXNoIH0gfSk7XHJcbiAgLy8gYXVkaXQgbG9nIG9wdGlvbmFsXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNlbmRPVFAodXNlcklkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnR5cGUgPT09ICdFTUFJTCcpIHtcclxuICAgIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChfdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGV4aXN0LiBDbGljayBvbiBmb3Jnb3QgcGluJywgNDA5KTtcclxuXHJcbiAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgIHNlbmRPVFAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogZGF0YT8ubmFtZSA/PyAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEudHlwZSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbW91bnRJbk5haXJhIH0gZnJvbSAnLic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICcuL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXI6IGFueSkgPT4ge1xyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBtZXJjaGFudDogdHJ1ZSxcclxuICAgICAgYWdlbnQ6IHRydWUsXHJcbiAgICAgIHdhbGxldHM6IHRydWUsXHJcbiAgICAgIGFkZHJlc3M6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IC4uLmF1dGhVc2VyIH0gPSBfdXNlcjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmF1dGhVc2VyLFxyXG4gICAgd2FsbGV0czogYXV0aFVzZXIud2FsbGV0cy5tYXAoKHcpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi53LFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IGFtb3VudEluTmFpcmEody5hdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgICByZXNlcnZlZEJhbGFuY2U6IGFtb3VudEluTmFpcmEody5yZXNlcnZlZEJhbGFuY2UpLFxyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IGFtb3VudEluTmFpcmEody5sZWRnZXJCYWxhbmNlKSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzBlZDhiOTliLTgwOTctNGU0OS1iZDRjLWZmMDQxMGM1N2QyNycsXHJcbiAgICAgICAgbmFtZTogJ0NvcnBvcmF0ZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Y2NzFkYTU3LWUyODEtNGI0MC05NjVmLWE5NmY0MjA1NDA1ZScsXHJcbiAgICAgICAgbmFtZTogJ0luZGl2aWR1YWwnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0NmU2OGNmNi1mMzU1LTQ1MzYtYWU5Ni1hZGYyNDY4MjgwOWYnLFxyXG4gICAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdjOTJkNTE1OC1hNGM1LTQ0MTgtODNmNy1hODEzZDM5ODlhODUnLFxyXG4gICAgICAgIG5hbWU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRyaWVzID0gWydMT0NBTCcsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dClcclxuICA/IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDVkNmMtYTliNC00NTJkLTg4NzItNGFkYTNkNDZiNTA2JyxcclxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdVUycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1VTQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3NzU0LTQ1NGQtNGFiMC04ZWQxLTVlZWQ5MzBhZDA2NycsXHJcbiAgICAgICAgbmFtZTogJ0doYW5hJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ0dIJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnR0hBJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDc3NjQtZTJhYi00NTVlLTgzNTktODQ4MDk1NTBmMTdjJyxcclxuICAgICAgICBuYW1lOiAnVG9nbycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdURycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1RHTycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3ODJiLTEzNGMtNGU3Yy04NzI2LTQ1MjRiOGU0MWZhOCcsXHJcbiAgICAgICAgbmFtZTogJ0JyYXppbCcsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdCUicsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ0JSQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2MxNWFkOWFlLWM0ZDctNDM0Mi1iNzBmLWRlNTUwODYyN2UzYicsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnTkcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdOR0EnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0YWE5ZDU5ZS0wNGU3LTQ5ODQtOTc5NC04NWE1NTQ4OWQ0MzMnLFxyXG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ05HJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnTkdBJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVuY2llcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzZlZWI1NGM4LTI0ZDctMTFmMC1hODE4LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ0NhbmFkaWFuIERvbGxhcnM0JyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDRDQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc4MjY0N2IyOS0xMzAyLTExZjAtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdSQU5EJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdaQVInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc5OGQ2NDU4My1mYjdlLTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDQUQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdhZjhjOTE2OC1mZGM1LTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzMycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0QzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzhmZTQxOWYtZmI3ZS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFyczInLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ0NEMicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Q5OGJhNWFiLWZiNzgtMTFlZi1hOGE5LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ1RhbnphbmlhIFNoaWxsaW5ncycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnVFpTJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZmQ1ZTQ3NGQtYmI0Mi00ZGIxLWFiNzQtZThkMmEwMTA0N2U5JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNDU4NTJmMGMtODRmYS00MTBjLWI2NmMtMWZmZWM1NmU1Y2Q4JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgYmFua3MgPSBbXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NpdGkgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb2JhbmsgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBCYW5rIG9mIE5pZ2VyaWEnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBDaXR5IE1vbnVtZW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEJhbmsgUGxjJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDEzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVyaXRhZ2UnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdKQUlaIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZXlzdG9uZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS3VkYSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGF5Y29tKE9QQVkpJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJvdmlkdXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JhbmQgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbGFyaXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWNJQlRDIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuZGFyZCBDaGFydGVyZWQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0ZXJsaW5nIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTVU5UUlVTVCBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDIyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pb24gQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaXRlZCBCYW5rIGZvciBBZnJpY2EnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbml0eSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnV2VtYS9BTEFUJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWkVOSVRIIEJBTksgUExDJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVkZEIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFuZ2VyaW5lIE1vbmV5JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFqIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTcGFya2xlJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSG9wZSBQU0JhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXJyYWxleCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V5b3dvJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnOVBheW1lbnQgU2VydmljZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTm92YSBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4gVHJ1c3QgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvdmVuYW50IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BhZ2UgRmluYW5jaWFscycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZvcnRpcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZTREggTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzQwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb2J1cyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOUVVFU1QgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FTTyBTYXZpbmdzICYgTG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZW5Nb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWMgSUJUQyBAZWFzZSB3YWxsZXQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGdXRvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW53aWNoIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNjAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYXBvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklSU0FMIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUJVIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjaW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2VsbHVsYW50JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQm93ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlVHJhbnphY3QnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZHZhbnMgTGEgRmF5ZXR0ZSAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDYXJib24nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYWxtUGF5IExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25pZXBvaW50JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS09OR0FQQVknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBYmJleSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW50ZXJzd2l0Y2ggTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheXN0YWNrIFBheW1lbnRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYcHJlc3MgUGF5bWVudHMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBQ0NFTEVSRVggTkVUV09SSycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyY2EgUGF5bWVudHMgQ29tcGFueSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5JQkFEQU4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVtaXVtIFRydXN0IGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb01vIFBTQicsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NtYXJ0Q2FzaCBQYXltZW50IFNlcnZpY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IE1hc3RlciBQU0InLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQUlSTU9ORVkgTUlDUk9GSU5BTkNFIEJBTksgTFREJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTUxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU0lHTkFUVVJFIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPUFRJTVVTIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbXBlcnNhbmQgTWljcm9maW5hbmNlIEJhbmsgKEJhbmtseSknLFxyXG4gICAgYmFua0NvZGU6ICcwOTA1MjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdXQVlBIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFnYScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FMLUJhcmFrYWggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICczbGluZSBDYXJkIE1hbmFnZW1lbnQgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Fib3ZlIE9ubHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgWWVsbG8nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3NNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0ODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGRvc3NlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FkZXllbWkgQ29sbGVnZSBTdGFmZiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FmZWtoYWZlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUcgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZWt1biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZXJ0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWwtSGF5YXQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGx3b3JrZXJzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWxwaGEgS2FwaXRhbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FtYWMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbWp1IFVuaXF1ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FNTUwgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW5jaG9yYWdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXBla3MgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcHBsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyaXNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXNzZXRNYXRyaXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3NldHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3RyYXBvbGFyaXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBdWNoaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhaW5lcyBDcmVkaXQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTg4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFsb2d1biBGdWxhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCYWxvZ3VuIEdhbWJhcmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCQyBLYXNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQklQQyBNaWNyb2ZpbmFuY2UgQmFuayAnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb2N0cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JPSSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvcmd1ICBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvc2FrIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJlbnQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyZXRocmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZGdld2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZ2h0d2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FyZXRha2VyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FzaENvbm5lY3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDRU1DUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NoYW5nYW4gUlRTIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2hpa3VtIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2h1a3d1bmVueWUgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ0lUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29hbGNhbXAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb2FzdGxpbmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLcmVkaSBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb25zdW1lciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvbnRlYyBHbG9iYWwgSW5mb3RlY2ggTGltaXRlZCAoTm93Tm93KScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nvb3AgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvcmVzdGVwIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29yb25hdGlvbiBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3JlZGl0IEFmcmlxdWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDcm93ZGZvcmNlJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3liZXJzcGFjZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRGF2b2RhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdEYXlsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhZ2xlIEZsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhcnRob2xldW0nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlLUJhcmNzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWNvYmFuayBYcHJlc3MgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb01vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VkRmluIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWtvbmRvIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDA5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VLLVJlbGlhYmxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW1lcmFsZHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFbXBpcmUgdHJ1c3QgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW50ZXJwcmlzZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vzby1FIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXZhbmdlbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V2ZXJncmVlbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZBU1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk4gTW9ydGdhZ2VzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk5Nb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQ01CIEVhc3kgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZDVCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGVyYWwgUG9seXRlY2huaWMgTmVrZWRlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXJhbCBVbml2ZXJzaXR5IER1dHNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXRoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkUG9seSBOYXNhcmF3YSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZFVCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZGUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGZ1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaW5hVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJtdXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBBcHBsZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgR2VuZXJhdGlvbiBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgT3B0aW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgUm95YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGbHV0dGVyd2F2ZSBUZWNobm9sb2d5IFNvbHV0aW9ucyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRm9ydGlzTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRnVsbHJhbmdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2FzaHVhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2F0ZXdheSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpYW50IFN0cmlkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpZ2lueWEgTWljcm9maW5hbmNlIGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0MTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaXJlaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb3J5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR01CIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR29vZCBOZWlnYm91cnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHb3dhbnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbkJhbmsgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbnZpbGxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3Jvb21pbmcgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hhY2ttYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIYWdnYWkgTW9ydGdhZ2UgQmFuayBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGFzYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIZWFkd2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVkb25tYXJrJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSUJJTEUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2VubmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2lyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0lsaXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltbyBTdGF0ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltcGVyaWFsIEhvbWVzIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbmZpbml0eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0luZmluaXR5IFRydXN0IE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbm5vdmVjdGl2ZXMgS2VzaCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ludGVsbGlmaW4nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbnRlcmxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJUkwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJc2FsZW95byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0p1YmlsZWUtTGlmZSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2FkUG9seSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tDTUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZWdvdycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tvbnRhZ29yYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhZ29zIEJ1aWxkaW5nIEludmVzdG1lbnQgQ29tcGFueScsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhdmVuZGVyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGVnZW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGlnaHQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTG92b251cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ00zNicsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW5sYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzIzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWFpbnN0cmVldCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW50cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01hbGFjaHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXJpdGltZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01heUZhaXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXlGcmVzaCBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWVnYXByYWlzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pY3JvY3JlZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pZGxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaW50RmluZXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNa3VkaScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbHVzaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IFRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9uZXlCb3gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb3lvZmFkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBCZW5lZml0cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05hZ2FydGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOYXZ5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmRpb3JhaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05lcHR1bmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgRGF3biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05ldyBHb2xkZW4gUGFzdHVyZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgUHJ1ZGVudGlhbCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklQIFZpcnR1YWwgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzk5OTk5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05uZXcgV29tZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOUEYgTWljcm9GaW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc3MDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ051dHVyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ053YW5uZWdhZGkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPY2hlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2hhZmlhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2twb2dhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2xhYmlzaSBPbmFiYW5qbyBVbml2ZXJzaXR5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT0xPRklOIE9XRU5BIE1JQ1JPRklOQU5DRSBCQU5LICcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09sdWNodWt3dSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09taXllIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT21vbHVhYmkgc2F2aW5ncyBhbmQgbG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPcmF1a3d1IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ5MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09zY290ZWNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFya3dheS1SZWFkeUNhc2gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXRyaWNrR29sZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheUF0dGl0dWRlIE9ubGluZScsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BlY2FuVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZW5ueXdpc2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZXJzb25hbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BldHJhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGlsbGFyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGxhdGludW0gTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbHl1bndhbmEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVlbWluZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlc3RpZ2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQdXJwbGVtb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1B5cmFtaWQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA2NTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdRdWlja2Z1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWZ1Z2UgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlZ2VudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlaG9ib3RoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVsaWFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZXBoaWRpbSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JpY2h3YXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSb3lhbCBFeGNoYW5nZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NhZmUgSGF2ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWZlVHJ1c3QnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWdhbXUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkIENhcGl0YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkdmVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5mb3JkIE1pY3JvZmluYW5jZSBCYWsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGVsbGFzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3Vsc3BhcCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhZ1BheScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RDRiBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUZWFzeU1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RoaW5rIEZpbmFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcmlkZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcnVzdGJvbmQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RydXN0ZnVuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1UgJiBDIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5BQUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmliZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmljYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmltYWlkIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pVXlvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzM4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5OIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZhczJuZXRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWZXJkYW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlydHVlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTUwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlzYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZUTmV0d29ya3MnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYc2xuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZQ1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZb2JlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoIEVhenkgV2FsbGV0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4tUGF5c3RhY2snLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUaGUgQWx0ZXJuYXRpdmUgQmFuayhBbHRCYW5rKScsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAzNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01rb2JvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU291cmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNjQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFua0lUIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzczogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIWFkZHJlc3MpIHJldHVybiAnJztcclxuXHJcbiAgY29uc3QgY2xlYW5lZCA9IGFkZHJlc3MucmVwbGFjZSgvW15hLXpBLVowLTlcXHMsXFwtXS9nLCAnJyk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBjbGVhbmVkLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiBub3JtYWxpemVkO1xyXG59XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYW5rcywgY291bnRyaWVzLCBjdXJyZW5jaWVzLCBzYW5pdGl6ZUFkZHJlc3MsIHR5cGVzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgZmluZEl0ZW0sXHJcbiAgZ2VuZXJhdGVSYW5kb21OdW1iZXIsXHJcbiAgaXNUZXN0aW5nQlZOLFxyXG4gIHVzZUVycm9yUGFyc2VyLFxyXG59IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IENvcnBvcmF0ZSwgUGF5bWVudCwgUGVyc29uYWwsIFRyYW5zZmVyLCBpV2FsbGV0IH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmVtYmVkbHk/LnVybCA/PyAnaHR0cHM6Ly93YWFzLXN0YWdpbmcuZW1iZWRseS5uZy9hcGkvdjEnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICd4LWFwaS1rZXknOiBlbnZpcm9ubWVudC5lbWJlZGx5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5DbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuICBjb25zdCBvcmdhbml6YXRpb25JZCA9IGVudmlyb25tZW50LmVtYmVkbHkuaWQ7XHJcbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmNsdWRlcyhjb25maWcubWV0aG9kIHx8ICcnKSkge1xyXG4gICAgY29uZmlnLmRhdGEgPSB7XHJcbiAgICAgIC4uLmNvbmZpZy5kYXRhLFxyXG4gICAgICBvcmdhbml6YXRpb25JZCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuY29uc3QgUGF5b3V0Q2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOlxyXG4gICAgZW52aXJvbm1lbnQuZW1iZWRseT8ucGF5b3V0VVJMID8/ICdodHRwczovL3BheW91dC1zdGFnaW5nLmVtYmVkbHkubmcvYXBpJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAneC1hcGkta2V5JzogZW52aXJvbm1lbnQuZW1iZWRseT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY2xhc3MgQ3VzdG9tZXIge1xyXG4gIHN0YXRpYyBhc3luYyBwZXJzb25hbChwYXlsb2FkOiBQZXJzb25hbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VzdG9tZXJUeXBlID0gZmluZEl0ZW0odHlwZXMsICdJbmRpdmlkdWFsJywgJ25hbWUnKTtcclxuICAgICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKFxyXG4gICAgICAgIGNvdW50cmllcyxcclxuICAgICAgICBwYXlsb2FkLmNvdW50cnksXHJcbiAgICAgICAgcGF5bG9hZD8uY291bnRyeT8ubGVuZ3RoID4gMiA/ICduYW1lJyA6ICdjb3VudHJ5Q29kZVR3bycsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvdW50cnk6IGMsIGFkZHJlc3MsIC4uLnJlc3QgfSA9IHBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IHNhbml0aXplZEFkZHJlc3MgPSBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzcyk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQ6IGN1c3RvbWVyVHlwZT8uaWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBjb3VudHJ5Py5pZCxcclxuICAgICAgICBhZGRyZXNzOiBzYW5pdGl6ZWRBZGRyZXNzLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgJ0VtYmVkbHkgQVBJIENhbGwnKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0Vycm9yIEVtYmVkbHkgQVBJIENhbGwnKTtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICAgICByZXM/Lm1lc3NhZ2UgPz8gcmVzLnRpdGxlLFxyXG4gICAgICAgICAgcmVzPy5zdGF0dXNDb2RlID8/IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy9jdXN0b21lcnMvZ2V0L2lkLycgKyBpZCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIEN1c3RvbWVyIGZyb20gRW1iZWRseScsIDQwNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNvcnBvcmF0ZShwYXlsb2FkOiBDb3Jwb3JhdGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyVHlwZUlkID0gZmluZEl0ZW0odHlwZXMsIHBheWxvYWQudHlwZSwgJ25hbWUnKT8uaWQ7XHJcbiAgICAgIGNvbnN0IGVDb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyaWVzLCBwYXlsb2FkLmNvdW50cnksICdjb3VudHJ5Q29kZVR3bycpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb3VudHJ5LCB0eXBlLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBlQ291bnRyeS5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXNjb2RlICE9PSAnMDAnKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXN1bHQubWVzc2FnZSwgNTAwKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzLm1lc3NhZ2UsIHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5S1lDKHBheWxvYWQ6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGJ2biA9IHBheWxvYWQuYnZuO1xyXG4gICAgICBpZiAoaXNUZXN0aW5nQlZOKGJ2bikpIGJ2biA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKDExKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2t5Yy9wcmVtaXVtLWt5Yz92ZXJpZnk9MScsIHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIGJ2bixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgIT09ICcwMCcpIHJldHVybjtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0N1c3RvbWVyIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCBCVk4gdmVyaWZpY2F0aW9uISc7XHJcblxyXG4gICAgICBpZiAocmVzICYmIHJlcy5tZXNzYWdlLmluY2x1ZGVzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlcy5tZXNzYWdlLCByZXMuc3RhdHVzQ29kZSk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgc3RhdGljIGFzeW5jIEJWTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIE5JTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeVdlYmhvb2socmF3Qm9keTogYW55LCBzaWduYXR1cmU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgaG1hYyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBlbnZpcm9ubWVudC5lbWJlZGx5LmtleSk7XHJcbiAgICBobWFjLnVwZGF0ZShyYXdCb2R5LCAndXRmOCcpO1xyXG4gICAgY29uc3QgY29tcHV0ZWRTaWduYXR1cmUgPSBobWFjLmRpZ2VzdCgnaGV4Jyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXB1dGVkU2lnbmF0dXJlICE9PSBzaWduYXR1cmU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBXYWxsZXQge1xyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUod2FsbGV0OiBpV2FsbGV0KSB7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMuZmluZCgoYykgPT4gYy5zaG9ydE5hbWUgPT09IHdhbGxldC5jdXJyZW5jeSk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgdXNlcklkLCAuLi5yZXN0IH0gPSB3YWxsZXQ7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL3dhbGxldHMvYWRkJywge1xyXG4gICAgICAuLi5yZXN0LFxyXG4gICAgICBjdXJyZW5jeUlkOiBjdXJyZW5jeT8uaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXQoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL3dhbGxldHMvZ2V0L3dhbGxldC8nICsgaWQpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdhbGxldEJ5QWNjb3VudChhY2NvdW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy93YWxsZXRzL2dldC9hY2NvdW50LycgKyBhY2NvdW50KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzIwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIFdhbGxldCBmcm9tIEVtYmVkbHknLCA0MDQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcihwYXlsb2FkOiBUcmFuc2Zlcikge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnB1dChcclxuICAgICAgJy93YWxsZXRzL3dhbGxldC90cmFuc2FjdGlvbi92Mi93YWxsZXQtdG8td2FsbGV0JyxcclxuICAgICAgcGF5bG9hZCxcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQmFuayB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL2JhbmtzJyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcyMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBXYWxsZXQgZnJvbSBFbWJlZGx5JywgNDA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocGF5bG9hZDogUGF5bWVudCkge1xyXG4gICAgY29uc3Qgd2ViaG9va1VybCA9IGVudmlyb25tZW50LmVtYmVkbHkud2ViaG9va1VSTDtcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkFjY291bnQgPSBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQ7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25OYW1lID0gZW52aXJvbm1lbnQuZW1iZWRseS5vcmdOYW1lO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY2llcy5maW5kKChjKSA9PiBjLnNob3J0TmFtZSA9PSBwYXlsb2FkLmN1cnJlbmN5KTtcclxuICAgIGNvbnN0IGJhbmsgPSBiYW5rcy5maW5kKChiKSA9PlxyXG4gICAgICBiLmJhbmtOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGF5bG9hZC5kZXN0aW5hdGlvbkJhbmsudG9Mb3dlckNhc2UoKSksXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghYmFuaykgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCYW5rIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgZGVzdGluYXRpb25CYW5rLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFBheW91dENsaWVudC5wb3N0KCcvaW50ZXItYmFuay10cmFuc2ZlcicsIHtcclxuICAgICAgLi4ucmVzdCxcclxuICAgICAgd2ViaG9va1VybCxcclxuICAgICAgY3VycmVuY3lJZDogY3VycmVuY3k/LmlkLFxyXG4gICAgICBkZXN0aW5hdGlvbkJhbmtDb2RlOiBiYW5rPy5iYW5rQ29kZSxcclxuICAgICAgc291cmNlQWNjb3VudE51bWJlcjogb3JnYW5pemF0aW9uQWNjb3VudCArICcnLFxyXG4gICAgICBzb3VyY2VBY2NvdW50TmFtZTogb3JnYW5pemF0aW9uTmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYmVkbHkge1xyXG4gIHN0YXRpYyBjdXN0b21lcnMgPSBDdXN0b21lcjtcclxuICBzdGF0aWMgdmFsaWRhdGlvbnMgPSBWYWxpZGF0aW9uO1xyXG4gIHN0YXRpYyB3YWxsZXRzID0gV2FsbGV0O1xyXG4gIHN0YXRpYyBiYW5rcyA9IEJhbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBVVmVyaWZ5QlZOIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyLCBpc1Rlc3RpbmdCVk4sIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogZW52aXJvbm1lbnQueW91dmVyaWZ5Py51cmwgPz8gJ2h0dHBzOi8vYXBpLnNhbmRib3gueW91dmVyaWZ5LmNvJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICB0b2tlbjogZW52aXJvbm1lbnQueW91dmVyaWZ5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgWW91dmVyaWZ5IHtcclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5QlZOKGRhdGE6IFVWZXJpZnlCVk4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGlmIChpc1Rlc3RpbmdCVk4oZGF0YS5pZCkpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJ0J1bmNoJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnRGlsbG9uJyxcclxuICAgICAgICAgIGRhdGVPZkJpcnRoOiAnMTItMTItMTk5NCcsXHJcbiAgICAgICAgICBjb3VudHJ5OiAnTkcnLFxyXG4gICAgICAgICAgbW9iaWxlOiAnMDgwJyArIGdlbmVyYXRlUmFuZG9tTnVtYmVyKDgpLFxyXG4gICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvdjIvYXBpL2lkZW50aXR5L25nL2J2bicsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhPy5zdGF0dXM/LmluY2x1ZGVzKCdub3RfZm91bmQnKSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0LmRhdGEucmVhc29uLCA0MDQpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhKSByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZXMgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE7XHJcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXMubWVzc2FnZSwgcmVzLnN0YXR1c0NvZGUpO1xyXG5cclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGU/Lm1lc3NhZ2UsIGUuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlBZGRyZXNzKHBob25lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJ2h0dHBzOi8vYWRkcmVzcy5zdmMueW91dmVyaWZ5LmNvL3YyL2FwaS9kaWdpdGFsLWFkZHJlc3Nlcy9sb29rdXAnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNlbnQ6IHRydWUsXHJcbiAgICAgICAgICBwaG9uZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgdG9rZW46IGVudmlyb25tZW50LnlvdXZlcmlmeT8ua2V5ID8/ICcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0FERFJFU1MgVmVyeScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuY29uc3QgVFhORkVFID0gcHJvY2Vzcy5lbnYuRVhURVJOQUxfUEVSQ0VOVCA/PyAxNTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVHJhbnNmZXJFdmVudChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFldmVudCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFdmVudCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25CYW5rOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICByZW1hcmtzOiBzdHJpbmc7XHJcbiAgICBmcm9tV2FsbGV0SWQ6IHN0cmluZztcclxuICAgIGluaXRpYXRlZEJ5OiBzdHJpbmc7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS5iYW5rcy50cmFuc2Zlcih7XHJcbiAgICAgIGFtb3VudDogTnVtYmVyKHBheWxvYWQuYW1vdW50KSxcclxuICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgIGRlc3RpbmF0aW9uQmFuazogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgcmVtYXJrczogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBzdWNjZWVkZWQnLCA1MDApO1xyXG5cclxuICAgIGNvbnN0IGFtb3VudCA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlclJlY29yZCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEFkZCB0aGlzIHRyYW5zYWN0aW9uIHRvIHRoZSBQcm92aWRlciBhY2NvdW50XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0VNQkVETFknIH0sXHJcbiAgICAgICAgY3JlYXRlOiB7IHByb3ZpZGVyOiAnRU1CRURMWScsIGJhbGFuY2U6IGFtb3VudCB9LFxyXG4gICAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgICAgYmFsYW5jZTogeyBpbmNyZW1lbnQ6IGFtb3VudCB9LFxyXG4gICAgICAgICAgdG90YWw6IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjEgQ3JlYXRlIHBlbmRpbmcgdHJhbnNmZXJcclxuICAgICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjIgRGViaXQgdXNlciB3YWxsZXRcclxuICAgICAgY29uc3QgZnJvbVdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGcm9tIHdhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgY29uc3QgbmV3QmFsYW5jZSA9IEJpZ0ludChmcm9tV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGFtb3VudDtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0Py5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0JhbGFuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBEZWJpdCBmb3IgRkVFc1xyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuICAgICAgY29uc3QgbmV3QmFsQWZ0ZXJGZWUgPSBCaWdJbnQod2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdCYWxBZnRlckZlZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PVRSQU5TRkVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdleHRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuMyBDcmVhdGUgbGVkZ2VyIGVudHJ5IChERUJJVClcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWFtb3VudCxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsYW5jZSxcclxuICAgICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcHJvdmlkZXIgZmxvYXQgbGVkZ2VyIHJvdyAoY3JlZGl0KVxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogYW1vdW50LFxyXG4gICAgICAgICAgYmFsYW5jZUFmdGVyOiBCaWdJbnQocHJvdmlkZXIuYmFsYW5jZSBhcyBhbnkpICsgYW1vdW50LFxyXG4gICAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuNCBDcmVhdGUgb3V0Ym94IGZvciBhc3luYyBwdWJsaXNoXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LnByb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcGF5bG9hZC5jdXJyZW5jeSxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGRlYml0IHRyYW5zYWN0aW9uXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT1UUkFOU0ZFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PUZFRT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBmZWVKb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgICB0b1Byb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIERlYml0IExlZGdlclxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWZlZVJhdGUsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICAgIHRvUHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRmVlIGxlZGdlclxyXG4gICAgICBjb25zdCBmZWVMZWRnZXIgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogZmVlUmF0ZSxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgICB0eXBlOiAnRkVFJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogJ0NvbW1pc3Npb24gb24gTmlwJyxcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0Py5pZCxcclxuICAgICAgICAgICAgdG9Qcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBZGQgRmVlXHJcbiAgICAgIGNvbnN0IGZlZSA9IGF3YWl0IHR4LmZlZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKGZlZVJhdGUpLCAvL0luIEtvYm8sXHJcbiAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICByYXRlOiBOdW1iZXIoZmVlUmF0ZSksIC8vSW4gS29ibyxcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBsZWRnZXJJZDogZmVlTGVkZ2VyLmlkLFxyXG4gICAgICAgICAgdHlwZTogJ0VYVEVSTkFMJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uIGZvciBGZWVcclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKFRYTkZFRSksXHJcbiAgICAgICAgICBpdGVtSWQ6IGZlZS5pZCxcclxuICAgICAgICAgIHR5cGU6ICdGRUUnLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT1GRUU9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICByZXR1cm4gdHJhbnNmZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNmZXJSZWNvcmQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIHJlYXNvbjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSA/PyBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgICAgdG9BY2NvdW50OiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgICAgZXJyb3I6IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQuaW5pdGlhdGVkQnksXHJcbiAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgIHRvQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB0b0FjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSA/PyBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFeHRlcm5hbCB0cmFuc2ZlciBmYWlsZWQnLCA1MDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBBa3V1ayB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9ha3V1ayc7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8sIGZvcm1hdFRyYW5zZmVyU01TIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0FpcnRpbWVFdmVudChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFldmVudCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgYWlydGltZUlkOiBzdHJpbmc7XHJcbiAgICBwaG9uZU51bWJlcj86IHN0cmluZztcclxuICAgIGFtb3VudD86IHN0cmluZztcclxuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gICAgdXNlcklkPzogc3RyaW5nO1xyXG4gICAgZnJvbVdhbGxldElkPzogc3RyaW5nO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGJhbGFuY2U6IG51bWJlcjtcclxuICAgIGFjY291bnROdW1iZXI6IG51bWJlcjtcclxuICB9O1xyXG5cclxuICBsZXQgcmVzcG9uc2U6IGFueSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IGF3YWl0IEFrdXVrLmFpcnRpbWUoe1xyXG4gICAgICBudW1iZXI6IHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgIGNvdW50cnk6IHBheWxvYWQ/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgYmlsbGluZzogJ3ByZXBhaWQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gbWFyayB0YW5zYWN0aW9uIGNvbXBsZXRlZFxyXG5cclxuICAgICAgLy8gVE9ETzo6IENoZWNrIHRoaXMgYWdhaW4sIGl0IGNhbiBwdWxsIGFueSBsZWRnZXJSb3dcclxuICAgICAgY29uc3QgbGVkZ2VyUm93ID0gYXdhaXQgdHgubGVkZ2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgd2FsbGV0SWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmF0ZSA9IE51bWJlcihwcm9jZXNzLmVudi5BSVJUSU1FX1BFUkNFTlQpID8/IDAuMDI1O1xyXG4gICAgICBhd2FpdCB0eC5mZWUuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0cmFuc2FjdGlvbklkOiBwYXlsb2FkPy5haXJ0aW1lSWQsXHJcbiAgICAgICAgICBwcm92aWRlcjogbGVkZ2VyUm93Py5wcm92aWRlcklkLFxyXG4gICAgICAgICAgdHlwZTogJ0FJUlRJTUUnIGFzIGFueSxcclxuICAgICAgICAgIHJhdGUsXHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihwYXlsb2FkLmFtb3VudCkgKiByYXRlLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgc3RhdHVzOiAnU1VDQ0VTUycgYXMgYW55LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHguYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzcG9uc2U/LmRldGFpbHM/LnR4blJlZmVyZW5jZSArICcnLFxyXG4gICAgICAgICAgbGVkZ2VyRW50cnlJZDogbGVkZ2VyUm93Py5pZCxcclxuICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgICAgIGNvbXBldGVkQXQ6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5EYXRlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IHBheWxvYWQuZnJvbVdhbGxldElkLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC51c2VySWQgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgIGFjY291bnQ6IHBheWxvYWQuYWNjb3VudE51bWJlciArICcnLFxyXG4gICAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgZGVzYzogJ0FpcnRpbWUgUHVyY2hhc2UgdG8gJyArIHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgIGJhbGFuY2U6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5iYWxhbmNlKSksXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGN1cnJlbmN5OiByZXNwb25zZT8uZGV0YWlscz8uY3VycmVuY3kgPz8gJ05HTicsXHJcbiAgICAgIHR5cGU6ICdEUicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKGV2ZW50SWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgIGNvdW50cnk6IHVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgcGhvbmU6IHVzZXI/LnBob25lISxcclxuICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBpZiAocmVzcG9uc2U/LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzcG9uc2U/LmRldGFpbHM/LnR4blJlZmVyZW5jZSArICcnLFxyXG4gICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuYWt1dWsucGFydGlhbCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5haXJ0aW1lLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuYWlydGltZUlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnLCBlcnJvcjogKGVyciBhcyBFcnJvcikubWVzc2FnZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXJMZWRnZXJCYWxhbmNlID1cclxuICAgICAgICBCaWdJbnQod2FsbGV0Py5sZWRnZXJCYWxhbmNlISkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZUJhbGFuY2UgPVxyXG4gICAgICAgIEJpZ0ludCh3YWxsZXQ/LmF2YWlsYWJsZUJhbGFuY2UhKSArXHJcbiAgICAgICAgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld1VzZXJMZWRnZXJCYWxhbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgICBhY2NvdW50OiBwYXlsb2FkLmFjY291bnROdW1iZXIgKyAnJyxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgICBkZXNjOiAnUmV2ZXJzZWQ6IEFpcnRpbWUgUHVyY2hhc2UgdG8gJyArIHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgYmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiByZXNwb25zZT8uZGV0YWlscz8uY3VycmVuY3kgPz8gJ05HTicsXHJcbiAgICAgICAgdHlwZTogJ0NSJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC51c2VySWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcihldmVudElkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgICAgY291bnRyeTogdXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHBob25lOiB1c2VyPy5waG9uZSEsXHJcbiAgICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuYWt1dWsuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbQWlydGltZUhhbmRsZXJdIEFpcnRpbWUgcHVyY2hhc2UgZmFpbGVkOicsIGVycik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWt1dWsgfSBmcm9tICdAL2V4dGVuc2lvbnMvYWt1dWsnO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudChcclxuICBldmVudElkOiBhbnksXHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbikge1xyXG4gIGlmIChkYXRhLnR5cGUgPT09ICdTTVMnKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgc2VuZFNNU1dpdGhBa3V1ayhkYXRhKTtcclxuICB9XHJcbiAgaWYgKGRhdGEudHlwZSA9PT0gJ0VNQUlMJykge1xyXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRNYWlsKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgc2VuZFNNU1dpdGhBa3V1ayhkYXRhKTtcclxuICBhd2FpdCBzZW5kTWFpbChkYXRhKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZFNNU1dpdGhBa3V1ayhkYXRhOiBhbnkpIHtcclxuICBhd2FpdCBBa3V1ay5zZW5kU01TKHtcclxuICAgIGNvdW50cnk6IGRhdGEuY291bnRyeSxcclxuICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgIG51bWJlcjogZGF0YS5waG9uZSxcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZE1haWwoZGF0YTogYW55KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHNlbmRFbWFpbCh7XHJcbiAgICB0bzogZGF0YS5lbWFpbCEsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgIHRvX25hbWU6IGRhdGEubmFtZSxcclxuICAgICAgLi4uZGF0YS52YXJpYWJsZXMsXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGRhdGEudGVtcGxhdGUsXHJcbiAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbWJlZGx5VXNlciB9IGZyb20gJy4uL21vZHVsZXMvdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IHRvSVNPRGF0ZSB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0VtYmVkbHlXYWxsZXQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50LCAnR0VUIEVWRU5UJyk7XHJcblxyXG4gIGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgc3RyZWV0TGluZTogc3RyaW5nO1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gICAgZG9iOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGJ2bjogc3RyaW5nO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcGF5bG9hZC5lbWFpbCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG11c3QgcHJvdmlkZSBlbWFpbCcsIDQyMik7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgYWRkcmVzczogcGF5bG9hZD8uc3RyZWV0TGluZSxcclxuICAgICAgY2l0eTogcGF5bG9hZD8uY2l0eSxcclxuICAgICAgY291bnRyeTogcGF5bG9hZD8uY291bnRyeSxcclxuICAgICAgZG9iOiB0b0lTT0RhdGUocGF5bG9hZD8uZG9iISksXHJcbiAgICAgIGZpcnN0TmFtZTogcGF5bG9hZD8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgbGFzdE5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJylbMV0sXHJcbiAgICAgIHBob25lOiBwYXlsb2FkPy5waG9uZSxcclxuICAgICAgbWlkZGxlTmFtZTogcGF5bG9hZD8ubmFtZT8uc3BsaXQoJyAnKT8uWzJdID8/ICcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnR0VUIFBBWUxPQUQnKTtcclxuXHJcbiAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBjcmVhdGVFbWJlZGx5VXNlcihldmVudElkLCB7XHJcbiAgICAgIGVtYmVkbHk6IGRhdGEsXHJcbiAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICBidm46IHBheWxvYWQ/LmJ2bj8udHJpbSgpISxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHdhbGxldCwgJ0NSRUFURSBFTUJFRExZIFdBTExFVCcpO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB3YWxsZXRJZDogd2FsbGV0Py5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHdhbGxldDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IsICdQcm9jZXNzRW1iZWRseVVTZXInKTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudChcclxuICBldmVudElkOiBhbnksXHJcbiAgZGF0YTogVHJhbnNmZXIsXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBFbWJlZGx5LndhbGxldHMudHJhbnNmZXIoe1xyXG4gICAgICBhbW91bnQ6IE51bWJlcihkYXRhLmFtb3VudCksXHJcbiAgICAgIGZyb21BY2NvdW50OiBkYXRhLmZyb21BY2NvdW50LFxyXG4gICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogZGF0YS50cmFuc2FjdGlvblJlZmVyZW5jZSxcclxuICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLm9yZ2FuaXphdGlvbi5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBmcm9tQWNjb3VudDogZGF0YS5mcm9tQWNjb3VudCxcclxuICAgICAgICAgIHRvQWNjb3VudDogZGF0YS50b0FjY291bnQsXHJcbiAgICAgICAgICByZW1hcmtzOiBkYXRhLnJlbWFya3MsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogZGF0YS50cmFuc2FjdGlvblJlZmVyZW5jZSxcclxuICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5pbnRlcm5hbC5vcmdhbml6YXRpb24uZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgZnJvbUFjY291bnQ6IGRhdGEuZnJvbUFjY291bnQsXHJcbiAgICAgICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ0ludGVybmFsIHRyYW5zZmVyIGZhaWxlZCB0byBvcmdhbml6YXRpb24gd2FsbGV0IGZhaWxlZCcsXHJcbiAgICAgIDUwMCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFFVRVVFX05BTUVTIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IFdvcmtlciB9IGZyb20gJ2J1bGxtcSc7XHJcbmltcG9ydCB7IHByb2Nlc3NUcmFuc2ZlckV2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLXRyYW5zZmVyJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgcHJvY2Vzc0FpcnRpbWVFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1haXJ0aW1lJztcclxuaW1wb3J0IHsgcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgSU9SZWRpcyBmcm9tICdpb3JlZGlzJztcclxuaW1wb3J0IHsgcHJvY2Vzc0VtYmVkbHlXYWxsZXQgfSBmcm9tICcuL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQnO1xyXG5pbXBvcnQgeyBwcm9jZXNzSW50ZXJuYWxUcmFuc2ZlckV2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycyc7XHJcblxyXG5jb25zdCByZWRpc0NsaWVudCA9IG5ldyBJT1JlZGlzKGVudmlyb25tZW50LnJlZGlzLnVybCwge1xyXG4gIG1heFJldHJpZXNQZXJSZXF1ZXN0OiBudWxsLFxyXG4gIGVuYWJsZVJlYWR5Q2hlY2s6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7XHJcbiAgaG9zdDogZW52aXJvbm1lbnQucmVkaXMuaG9zdCxcclxuICBwb3J0OiBlbnZpcm9ubWVudC5yZWRpcy5wb3J0LFxyXG4gIG1heFJldHJpZXNQZXJSZXF1ZXN0OiBudWxsLFxyXG4gIGVuYWJsZVJlYWR5Q2hlY2s6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtlcnMge1xyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcldvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5UUkFOU0ZFUixcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzVHJhbnNmZXJFdmVudChkYXRhLmlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBVc2UgU2FmZUhhdmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGludGVybmFsVHJhbnNmZXJXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuSU5URVJOQUxfVFJBTlNGRVIsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudChkYXRhLmlkLCBkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWlydGltZVdvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5BSVJUSU1FLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NBaXJ0aW1lRXZlbnQoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gVXNlIFNhZmVIYXZlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID4gMSlcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWdncmVnYXRlSWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuZmFpbGVkJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIG5vdGlmaWNhdGlvbldvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5OT1RJRklDQVRJT04sXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudChkYXRhLmlkLCBkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgd2FsbGV0V29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLkNSRUFURVdBTExFVCxcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzRW1iZWRseVdhbGxldChkYXRhLmlkKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsICdXT1JLRVInKTtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVldWUgYXMgQnVsbFF1ZXVlIH0gZnJvbSAnYnVsbG1xJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21OdW1iZXIsIFFVRVVFX05BTUVTIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgV29ya2VycyB9IGZyb20gJy4vV29ya2Vycyc7XHJcbmltcG9ydCBJT1JlZGlzIGZyb20gJ2lvcmVkaXMnO1xyXG5cclxuY29uc3QgcmVkaXNDbGllbnQgPSBuZXcgSU9SZWRpcyhlbnZpcm9ubWVudC5yZWRpcy51cmwsIHtcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBkZWZhdWx0Sm9iT3B0aW9ucyA9IHtcclxuICBhdHRlbXB0czogMyxcclxuICBiYWNrb2ZmOiB7XHJcbiAgICB0eXBlOiAnZXhwb25lbnRpYWwnIGFzIGNvbnN0LFxyXG4gICAgZGVsYXk6IDIwMDAsXHJcbiAgfSxcclxuICByZW1vdmVPbkNvbXBsZXRlOiB7XHJcbiAgICBjb3VudDogMTAwMCxcclxuICAgIGFnZTogMjQgKiAzNjAwLFxyXG4gIH0sXHJcbiAgcmVtb3ZlT25GYWlsOiB7XHJcbiAgICBjb3VudDogNTAwMCxcclxuICAgIGFnZTogNyAqIDI0ICogMzYwMCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zZmVyUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLlRSQU5TRkVSLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxUcmFuc2ZlclF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShcclxuICBRVUVVRV9OQU1FUy5JTlRFUk5BTF9UUkFOU0ZFUixcclxuICB7XHJcbiAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgICBhdHRlbXB0czogMixcclxuICAgIH0sXHJcbiAgfSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhaXJ0aW1lUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLkFJUlRJTUUsIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25RdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuTk9USUZJQ0FUSU9OLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgLy8gYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZW1iZWRseVdhbGxldFF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5DUkVBVEVXQUxMRVQsIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWV1ZSB7XHJcbiAgc3RhdGljIGFzeW5jIHRyaWdnZXIoXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgdHlwZToga2V5b2YgdHlwZW9mIFFVRVVFX05BTUVTLFxyXG4gICAgZGF0YT86IGFueSxcclxuICApOiBQcm9taXNlPHsgam9iSWQ6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ0FJUlRJTUUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJBaXJ0aW1lKGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ1RSQU5TRkVSJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyVHJhbnNmZXIoaWQpO1xyXG5cclxuICAgICAgY2FzZSAnTk9USUZJQ0FUSU9OJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyTm90aWZpY2F0aW9uKGlkLCBkYXRhKTtcclxuXHJcbiAgICAgIGNhc2UgJ0NSRUFURVdBTExFVCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlckNyZWF0ZUVtYmVkbHlXYWxsZXQoaWQpO1xyXG5cclxuICAgICAgY2FzZSAnSU5URVJOQUxfVFJBTlNGRVInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJJbnRlcm5hbFRyYW5zZmVyKGlkLCBkYXRhKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcXVldWUgdHlwZTogJHt0eXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlckFpcnRpbWUoXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8eyBqb2JJZDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBhaXJ0aW1lUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1haXJ0aW1lJyxcclxuICAgICAgeyBpZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGB0cmFuc2Zlci0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJUcmFuc2ZlcihpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCB0cmFuc2ZlclF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtdHJhbnNmZXInLFxyXG4gICAgICB7IGlkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYHRyYW5zZmVyLSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlckludGVybmFsVHJhbnNmZXIoaWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBpbnRlcm5hbFRyYW5zZmVyUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1pbnRlcm5hbC10cmFuc2ZlcicsXHJcbiAgICAgIHsgaWQsIGRhdGEgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgaW50ZXJuYWwtdHJhbnNmZXItJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyTm90aWZpY2F0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgbm90aWZpY2F0aW9uUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1ub3RpZmljYXRpb24nLFxyXG4gICAgICB7IGlkLCBkYXRhIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYG5vdGlmaWNhdGlvbi0ke2dlbmVyYXRlUmFuZG9tTnVtYmVyKDYpfS0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDMsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJDcmVhdGVFbWJlZGx5V2FsbGV0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IGVtYmVkbHlXYWxsZXRRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLWNyZWF0ZS1lbWJlZGx5LXdhbGxldCcsXHJcbiAgICAgIHsgaWQgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgd2FsbGV0LSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMyxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuV29ya2Vycy5haXJ0aW1lV29ya2VyKCk7XHJcbldvcmtlcnMudHJhbnNmZXJXb3JrZXIoKTtcclxuV29ya2Vycy5ub3RpZmljYXRpb25Xb3JrZXIoKTtcclxuV29ya2Vycy53YWxsZXRXb3JrZXIoKTtcclxuV29ya2Vycy5pbnRlcm5hbFRyYW5zZmVyV29ya2VyKCk7XHJcbiIsImltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEV4dGVybmFsVHJhbnNmZXJJbnB1dCwgaVdhbGxldCwgVHJhbnNmZXJQYXlsb2FkIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgYW1vdW50SW5Lb2JvLFxyXG4gIGFtb3VudEluTmFpcmEsXHJcbiAgY2hlY2tEYWlseUxpbWl0LFxyXG4gIGZvcm1hdFRyYW5zZmVyU01TLFxyXG59IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmNvbnN0IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UID0gMTAwO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zZmVyVG9FeHRlcm5hbEJhbmsocGF5bG9hZDogRXh0ZXJuYWxUcmFuc2ZlcklucHV0KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICBpbml0aWF0b3JVc2VySWQsXHJcbiAgICBzZW5kZXJOYW1lLFxyXG4gICAgZGVzdGluYXRpb25CYW5rLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgIGFtb3VudCxcclxuICAgIGN1cnJlbmN5ID0gJ05HTicsXHJcbiAgICByZWFzb24gPSAnRnVuZHMgVHJhbnNmZXInLFxyXG4gIH0gPSBwYXlsb2FkO1xyXG5cclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8oYW1vdW50KTtcclxuICBpZiAoIWlkZW1wb3RlbmN5S2V5KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ01pc3NpbmcgaWRlbXBvdGVuY3kga2V5JywgNDAwKTtcclxuICBpZiAoYW10IDw9IDBuKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgYW1vdW50JywgNDAwKTtcclxuICBpZiAoYW1vdW50IDwgTUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBBbW91bnQgbXVzdCBiZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gJHtNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVH1gLFxyXG4gICAgKTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyAx77iP4oOjIENoZWNrIElkZW1wb3RlbmN5IFJlY29yZFxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGV4aXN0aW5nVHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEudHJhbnNmZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleSB9LFxyXG4gIH0pO1xyXG4gIGlmIChleGlzdGluZ1RyYW5zZmVyKSByZXR1cm4gZXhpc3RpbmdUcmFuc2ZlcjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gMu+4j+KDoyBSZXNvbHZlIFdhbGxldCAmIEJhbGFuY2VcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBbZnJvbVdhbGxldCwgZnJvbVVzZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB1c2VySWQ6IGluaXRpYXRvclVzZXJJZCwgY3VycmVuY3kgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLnVzZXIuZmluZEZpcnN0KHsgd2hlcmU6IHsgaWQ6IGluaXRpYXRvclVzZXJJZCB9IH0pLFxyXG4gIF0pO1xyXG5cclxuICBpZiAoIWZyb21Vc2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIGNvbnN0IGZlZVJhdGUgPSBOdW1iZXIocHJvY2Vzcy5lbnY/LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTUpO1xyXG4gIGNvbnN0IHRvdGFsQW1vdW50ID0gYW1vdW50SW5Lb2JvKGFtb3VudCArIGZlZVJhdGUpO1xyXG5cclxuICBpZiAoTnVtYmVyKGZyb21XYWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgPCB0b3RhbEFtb3VudClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGJhbGFuY2UnLCA0MjIpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgZGFpbHkgbGltaXRcclxuICBjb25zdCBsaW1pdEV4Y2VlZGVkID0gYXdhaXQgY2hlY2tEYWlseUxpbWl0KGZyb21XYWxsZXQsIGZyb21Vc2VyLCBhbXQpO1xyXG4gIGlmIChsaW1pdEV4Y2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoYERhaWx5IGxpbWl0IGV4Y2VlZGVkLmAsIDQwMyk7XHJcblxyXG4gIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgICB1cGRhdGU6IHt9LFxyXG4gICAgICBjcmVhdGU6IHtcclxuICAgICAgICBwcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgcmVhc29uLFxyXG4gICAgICAgIGtpbmQ6ICdPVVQnLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHNob3VsZFJlZnVuZDogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1hbW91bnQudG9TdHJpbmcoKSxcclxuICAgICAgICBpdGVtSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUicsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgICAgdXNlcklkOiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWJpdCcsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiBgJHtkZXN0aW5hdGlvbkFjY291bnROYW1lfS0ke2Rlc3RpbmF0aW9uQWNjb3VudE51bWJlcn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICBzb3VyY2VBY2NvdW50TnVtYmVyOiBmcm9tV2FsbGV0LmFjY291bnROdW1iZXI/LnRyaW0oKSxcclxuICAgICAgICAgIHNvdXJjZUFjY291bnROYW1lOiBzZW5kZXJOYW1lLnRyaW0oKSxcclxuICAgICAgICAgIHJlbWFya3M6IHJlYXNvbixcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyUmVjb3JkLmlkLCAnVFJBTlNGRVInKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnRyYW5zZmVyUmVjb3JkLFxyXG4gICAgYW1vdW50OiBhbW91bnRJbk5haXJhKHRyYW5zZmVyUmVjb3JkLmFtb3VudCksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhbGxldFRvV2FsbGV0VHJhbnNmZXIocGF5bG9hZDogVHJhbnNmZXJQYXlsb2FkKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICBpbml0aWF0b3JVc2VySWQsXHJcbiAgICBzZW5kZXIsXHJcbiAgICByZWNlaXZlcixcclxuICAgIGFtb3VudCxcclxuICAgIGN1cnJlbmN5ID0gJ05HTicsXHJcbiAgICByZWFzb24sXHJcbiAgfSA9IHBheWxvYWQ7XHJcblxyXG4gIC8vIFRPRE86OiBDaGVjayBmb3IgdXNlciB3YWxsZXQgYW1vdW50IGJlZm9yZSB0cmFuc2ZlcmluZ1xyXG5cclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8oYW1vdW50KTtcclxuICBpZiAoYW10IDw9IDBuKSB0aHJvdyBuZXcgRXJyb3IoJ0Ftb3VudCBtdXN0IGJlIHBvc2l0aXZlJyk7XHJcbiAgaWYgKGFtb3VudCA8IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgQW1vdW50IG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuICR7TUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlR9YCxcclxuICAgICk7XHJcblxyXG4gIC8vIFJlc29sdmUgc2VuZGVyIGFuZCByZWNpcGllbnRcclxuICBjb25zdCBbZnJvbVdhbGxldCwgdG9XYWxsZXRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBhY2NvdW50TnVtYmVyOiBzZW5kZXIsIGN1cnJlbmN5IH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHJlY2VpdmVyLCBjdXJyZW5jeSB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG5cclxuICBpZiAoIWZyb21XYWxsZXQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgIGBTZW5kZXIgd2FsbGV0IG5vdCBmb3VuZCBmb3IgY3VycmVuY3kgJHtjdXJyZW5jeX1gLFxyXG4gICAgICA0MDQsXHJcbiAgICApO1xyXG4gIGlmICghdG9XYWxsZXQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgIGBSZWNpcGllbnQgd2FsbGV0IG5vdCBmb3VuZCBmb3IgY3VycmVuY3kgJHtjdXJyZW5jeX1gLFxyXG4gICAgICA0MDQsXHJcbiAgICApO1xyXG5cclxuICBpZiAoZnJvbVdhbGxldC5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnU2VuZGVyIHdhbGxldCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciB3YWxsZXQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG4gIGlmICh0b1dhbGxldC5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnUmVjaXBpZW50IHdhbGxldCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciB3YWxsZXQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG5cclxuICBjb25zdCBmcm9tVXNlciA9IGZyb21XYWxsZXQudXNlcjtcclxuICBjb25zdCB0b1VzZXIgPSB0b1dhbGxldC51c2VyO1xyXG5cclxuICAvLyBDaGVja3NcclxuICBpZiAoIXRvVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdSZWNpcGllbnQgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoIWZyb21Vc2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1NlbmRlciBub3QgZm91bmQnLCA0MDQpO1xyXG4gIGlmIChmcm9tVXNlci5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnU2VuZGVyIGFjY291bnQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgYWNjb3VudCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcbiAgaWYgKHRvVXNlci5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnUmVjaXBpZW50IGFjY291bnQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuICBpZiAoZnJvbVVzZXIuaWQgPT09IHRvVXNlci5pZClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQ2Fubm90IHRyYW5zZmVyIHRvIHNlbGYnLCA0MjIpO1xyXG5cclxuICAvLyBjYW5vbmljYWwgb3JkZXIgdG8gYXZvaWQgZGVhZGxvY2tzXHJcbiAgY29uc3Qgb3JkZXJlZCA9IFtmcm9tV2FsbGV0LmlkLCB0b1dhbGxldC5pZF0uc29ydCgpO1xyXG5cclxuICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAvLyBpZGVtcG90ZW5jeSBndWFyZFxyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkZW1wb3RlbmN5S2V5IH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nOyAvLyBsb2cgaGVyZVxyXG5cclxuICAgIC8vIGxvY2sgd2FsbGV0cyB3aXRoIEZPUiBVUERBVEVcclxuICAgIGNvbnN0IGxvY2tlZFJvd3MgPSBhd2FpdCB0eC4kcXVlcnlSYXc8XHJcbiAgICAgIGFueVtdXHJcbiAgICA+YFNFTEVDVCBpZCwgXCJ1c2VySWRcIiwgY3VycmVuY3ksIFwibGVkZ2VyQmFsYW5jZVwiLCBcImF2YWlsYWJsZUJhbGFuY2VcIiwgXCJyZXNlcnZlZEJhbGFuY2VcIiwgdmVyc2lvbiwgc3RhdHVzIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtvcmRlcmVkWzBdfSwgJHtvcmRlcmVkWzFdfSkgRk9SIFVQREFURWA7XHJcbiAgICBpZiAobG9ja2VkUm93cy5sZW5ndGggIT09IDIpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDUwMCk7XHJcblxyXG4gICAgLy8gbWFwIGxvY2tlZCByb3dzXHJcbiAgICBjb25zdCBsb2NrZWRNYXAgPSBuZXcgTWFwKChsb2NrZWRSb3dzIGFzIGFueVtdKS5tYXAoKHIpID0+IFtyLmlkLCByXSkpO1xyXG4gICAgY29uc3QgbG9ja2VkRnJvbSA9IGxvY2tlZE1hcC5nZXQoZnJvbVdhbGxldC5pZCk7XHJcbiAgICBjb25zdCBsb2NrZWRUbyA9IGxvY2tlZE1hcC5nZXQodG9XYWxsZXQuaWQpO1xyXG5cclxuICAgIGlmICghbG9ja2VkRnJvbSB8fCAhbG9ja2VkVG8pXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDQyMik7XHJcblxyXG4gICAgLy8gY2hlY2sgZnVuZHNcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRGcm9tLmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KTtcclxuICAgIC8vIGNvbnN0IHJlc2VydmVkID0gQmlnSW50KChsb2NrZWRGcm9tLnJlc2VydmVkQmFsYW5jZSBhcyBhbnkpIHx8IDApO1xyXG4gICAgaWYgKGF2YWlsYWJsZSA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgZnVuZHMnLCA0MDMpO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBkYWlseSBsaW1pdFxyXG4gICAgY29uc3QgbGltaXRFeGNlZWRlZCA9IGF3YWl0IGNoZWNrRGFpbHlMaW1pdChmcm9tV2FsbGV0LCBmcm9tVXNlciwgYW10KTtcclxuICAgIGlmIChsaW1pdEV4Y2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoYERhaWx5IGxpbWl0IGV4Y2VlZGVkLmAsIDQwMyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIFRyYW5zZmVyIHJlY29yZFxyXG4gICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBgdHJhbnNmZXJfJHtwYXlsb2FkLmlkZW1wb3RlbmN5S2V5fWA7XHJcbiAgICBsZXQgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgIGtpbmQ6ICdPVVQnLFxyXG4gICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgcmVhc29uLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBmcm9tVXNlcklkOiBmcm9tVXNlci5pZCxcclxuICAgICAgICAgIHRvVXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcmVhc29uID8/ICdpbnRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGUgbmV3IGJhbGFuY2VzXHJcbiAgICBjb25zdCBuZXdGcm9tTGVkZ2VyQmFsID0gQmlnSW50KGxvY2tlZEZyb20ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gYW10O1xyXG4gICAgY29uc3QgbmV3RnJvbUF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRGcm9tLmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuXHJcbiAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9IEJpZ0ludChsb2NrZWRUby5sZWRnZXJCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcbiAgICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRUby5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxlZGdlciByb3dzIChkZWJpdCB0aGVuIGNyZWRpdCksIHJlZmVyZW5jZSBqb3VybmFsLmlkXHJcbiAgICBjb25zdCBkZWJpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGNoYW5nZTogLWFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0Zyb21MZWRnZXJCYWwsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0RFQklUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICByZWNpcGllbnRXYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNyZWRpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICByZWFzb24sXHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHNlbmRlcldhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc2VuZGVyIHdhbGxldFxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdGcm9tTGVkZ2VyQmFsLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0Zyb21BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZWNpcGllbnQgd2FsbGV0XHJcbiAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHRvV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFyayB0cmFuc2ZlciBjb21wbGV0ZWRcclxuICAgIHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnIGFzIGFueSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBmcm9tVXNlcklkOiBmcm9tVXNlci5pZCxcclxuICAgICAgICAgIHRvVXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBkZWJpdExlZGdlcklkOiBkZWJpdC5pZCxcclxuICAgICAgICAgIGNyZWRpdExlZGdlcklkOiBjcmVkaXQuaWQsXHJcbiAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkZWJpdCB0cmFuc2FjdGlvblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFtb3VudDogLWFtb3VudC50b1N0cmluZygpLFxyXG4gICAgICAgIGl0ZW1JZDogZGViaXQuaWQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSJyxcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHVzZXJJZDogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiB0b1VzZXIubmFtZSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICBpdGVtSWQ6IGNyZWRpdC5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgdXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdjcmVkaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiB0b1VzZXIubmFtZSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc3RydWN0dXJlZCByZXN1bHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zZmVyOiB7XHJcbiAgICAgICAgLi4udHJhbnNmZXIsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICAgIGNyZWRpdExlZGdlcklkOiBjcmVkaXQuaWQsXHJcbiAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgIGlkOiB0cmFuc2Zlci5pZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld0Zyb21BdmFpbGFibGUgPSBCaWdJbnQoZnJvbVdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpIC0gYW10O1xyXG4gIGNvbnN0IG5ld1RvQXZhaWxhYmxlID0gQmlnSW50KHRvV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gIC8vIFRPRE86IFRoaXMgbm90IHdvcmtpbmdcclxuICBjb25zdCBEUk1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiBmcm9tV2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICBhbW91bnQ6IGFtdCxcclxuICAgIGN1cnJlbmN5LFxyXG4gICAgZGVzYzogcmVhc29uPy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgYmFsYW5jZTogbmV3RnJvbUF2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICB0eXBlOiAnRFInLFxyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgY291bnRyeTogZnJvbVVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2U6IERSTWVzc2FnZSxcclxuICAgIHBob25lOiBmcm9tVXNlcj8ucGhvbmUhLFxyXG4gICAgdHlwZTogJ1NNUycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiB0b1dhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgYW1vdW50OiBhbXQsXHJcbiAgICBkZXNjOiByZWFzb24/LnRvVXBwZXJDYXNlKCksXHJcbiAgICBiYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBjdXJyZW5jeSxcclxuICAgIHR5cGU6ICdDUicsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXIuaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICBjb3VudHJ5OiB0b1VzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogdG9Vc2VyPy5waG9uZSEsXHJcbiAgICB0eXBlOiAnU01TJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZmVyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKHBheWxvYWQ6IHtcclxuICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgYmFua0NvZGU6IHN0cmluZztcclxuICBiYW5rTmFtZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbn0pIHtcclxuICAvLyBDcmVhdGUgdXNlciB3YWxsZXRcclxuICBjb25zdCB1c2VyV2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NvdW50TnVtYmVyOiBwYXlsb2FkLmFjY291bnROdW1iZXIsXHJcbiAgICAgIGJhbmtDb2RlOiBwYXlsb2FkLmJhbmtDb2RlLFxyXG4gICAgICBiYW5rTmFtZTogcGF5bG9hZC5iYW5rTmFtZSxcclxuICAgICAgd2FsbGV0SWQ6IHBheWxvYWQ/LmlkLFxyXG4gICAgICBhdmFpbGFibGVCYWxhbmNlOiAwLFxyXG4gICAgICBsZWRnZXJCYWxhbmNlOiAwLFxyXG4gICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICBzdGF0dXM6ICdBQ1RJVkUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXJXYWxsZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCBoYXNoUGluLCBoYXNoVG9rZW4sIHZlcmlmeVBpbiB9IGZyb20gJ0AvdXRpbHMvaGFzaCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFkZHJlc3MsXHJcbiAgQmFuayxcclxuICBCVk5JbnB1dCxcclxuICBFbWJlZGx5SW5wdXQsXHJcbiAgTmV4dE9mS2luLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgWW91dmVyaWZ5IH0gZnJvbSAnQC9leHRlbnNpb25zL3lvdS12ZXJpZnknO1xyXG5pbXBvcnQgeyB0b0lTT0RhdGUgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0ICogYXMgV2FsbGV0U2VydmljZSBmcm9tICcuLi93YWxsZXRzL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShcclxuICBpZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5leHRPZktpbj86IE5leHRPZktpbjtcclxuICAgIGJhbms/OiBCYW5rO1xyXG4gICAgYnZuPzogc3RyaW5nO1xyXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XHJcbiAgICBlbWFpbFZlcmlmaWVkPzogYm9vbGVhbjtcclxuICAgIG9jY3VwYXRpb24/OiBzdHJpbmc7XHJcbiAgICBlZHVjYXRpb24/OiBzdHJpbmc7XHJcbiAgICByZWxpZ2lvbj86IHN0cmluZztcclxuICAgIG1hcml0YWxTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIGVtYmVkbHlDdXN0b21lcklkPzogc3RyaW5nO1xyXG4gIH0sXHJcbikge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDIwMCk7XHJcblxyXG4gIHJldHVybiBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gQmFzZSB1cGRhdGVcclxuICAgIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcclxuXHJcbiAgICAvLyBURE9EOiBSZW1vdmUgcGFzc3dvcmQgdXBkYXRlIGZyb20gaGVyZVxyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgIGlmIChkYXRhLm9jY3VwYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLm9jY3VwYXRpb24gPSBkYXRhLm9jY3VwYXRpb247XHJcbiAgICBpZiAoZGF0YS5lZHVjYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVkdWNhdGlvbiA9IGRhdGEuZWR1Y2F0aW9uO1xyXG4gICAgaWYgKGRhdGEucmVsaWdpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLnJlbGlnaW9uID0gZGF0YS5yZWxpZ2lvbjtcclxuICAgIGlmIChkYXRhLmJ2biAhPT0gdW5kZWZpbmVkKSByZWNvcmQuYnZuID0gZGF0YS5idm47XHJcbiAgICBpZiAoZGF0YS5lbWJlZGx5Q3VzdG9tZXJJZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQuZW1iZWRseUN1c3RvbWVySWQgPSBkYXRhLmVtYmVkbHlDdXN0b21lcklkO1xyXG4gICAgaWYgKGRhdGEubWFyaXRhbFN0YXR1cyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQubWFyaXRhbFN0YXR1cyA9IGRhdGEubWFyaXRhbFN0YXR1cztcclxuICAgIGlmIChkYXRhLmVtYWlsVmVyaWZpZWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgcmVjb3JkLmVtYWlsVmVyaWZpZWQgPSBkYXRhLmVtYWlsVmVyaWZpZWQ7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlLCBhZ2VudDogeyBzZWxlY3Q6IHsgaWQ6IHRydWUgfSB9IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWxhdGVkIHVwZGF0ZXNcclxuICAgIGlmIChkYXRhPy5uZXh0T2ZLaW4gJiYgdXNlci5hZ2VudD8uaWQpIHtcclxuICAgICAgYXdhaXQgdHguYWdlbnQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5hZ2VudD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuZXh0T2ZLaW46IHtcclxuICAgICAgICAgICAgY3JlYXRlOiB7IC4uLmRhdGEubmV4dE9mS2luIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5iYW5rKSB7XHJcbiAgICAgIGF3YWl0IHR4LmJhbmsuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5kYXRhLmJhbmssXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIoZGF0YS5iYW5rLmFjY291bnROdW1iZXIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5hZGRyZXNzKSB7XHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IHsgY3JlYXRlOiB7IC4uLmRhdGEuYWRkcmVzcyB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUJWTihidm46IHN0cmluZykge1xyXG4gIGNvbnN0IGJ2bkhhc2ggPSBoYXNoVG9rZW4oYnZuKTtcclxuXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgZW1haWxWZXJpZmllZDogdHJ1ZSxcclxuICAgICAgT1I6IFtcclxuICAgICAgICB7IGJ2bjogYnZuSGFzaCB9LFxyXG4gICAgICAgIHsgYnZuOiBidm4gfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBCb29sZWFuKGV4aXN0aW5nKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlQaG9uZShwaG9uZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFwaG9uZSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHBob25lOiBwaG9uZSB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SUQoSUQ6IHN0cmluZykge1xyXG4gIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2VwYXkgSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHVuaXF1ZUlEOiBJRCB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUGFzc3dvcmQoaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGlmIChwYXNzd29yZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXNzd29yZCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXdhaXQgZ2V0VXNlcih1c2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBpZiAoIWRhdGEuZG9jdW1lbnRzLmxlbmd0aClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQXRsZWFzdCBvbmUgb2N1bWVudCByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcklkOiBpZCxcclxuICAgICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgY3JlYXRlOiBkYXRhLmRvY3VtZW50cy5tYXAoKGRvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgdHlwZTogZG9jLnR5cGUsXHJcbiAgICAgICAgICBmaWxlVXJsOiBkb2MuZmlsZVVybCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBkb2N1bWVudHM6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZlcmlmaWNhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBpbihpZDogc3RyaW5nLCBwYXlsb2FkOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBjb25zdCBoYXNoZWRQaW4gPSBhd2FpdCBoYXNoUGluKHBheWxvYWQucGluKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwaW46IGhhc2hlZFBpbixcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKHVzZXIuZW1iZWRseUN1c3RvbWVySWQpIHJldHVybiB1c2VyO1xyXG5cclxuICAvLyBUcmlnZ2VyIHdhbGxldCBjcmVhdGlvblxyXG4gIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhZ2dyZWdhdGVJZDogdXNlci5pZCxcclxuICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmluaXRpYXRlZCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc3RyZWV0TGluZTogdXNlcj8uYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgICBjaXR5OiB1c2VyLmFkZHJlc3M/LmNpdHksXHJcbiAgICAgICAgY291bnRyeTogdXNlci5hZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAgIGRvYjogdXNlci5kb2IsXHJcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIGJ2bjogdXNlci5idm4sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodXNlci5pZCwgJ0NSRUFURVdBTExFVCcpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVVzZXJQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgcGF5bG9hZDogeyBwaW46IHN0cmluZyB9LFxyXG4pIHtcclxuICByZXR1cm4gYXdhaXQgdmVyaWZ5UGluKGhhc2hlZFBpbiwgcGF5bG9hZC5waW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1iZWRseVVzZXIodXNlcklkOiBzdHJpbmcsIGRhdGE6IEVtYmVkbHlJbnB1dCkge1xyXG4gIGxldCBlbWJlZGx5ID0geyBpZDogZGF0YT8uZW1iZWRseT8uaWQgfTtcclxuXHJcbiAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICBlbWJlZGx5ID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMucGVyc29uYWwoe1xyXG4gICAgICBhZGRyZXNzOiBkYXRhPy5lbWJlZGx5Py5hZGRyZXNzLFxyXG4gICAgICBjaXR5OiBkYXRhPy5lbWJlZGx5Py5jaXR5LFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5lbWJlZGx5Py5jb3VudHJ5LFxyXG4gICAgICBkb2I6IGRhdGE/LmVtYmVkbHk/LmRvYixcclxuICAgICAgZmlyc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgbW9iaWxlTnVtYmVyOiBkYXRhPy5lbWJlZGx5Py5waG9uZSxcclxuICAgICAgbWlkZGxlTmFtZTogZGF0YT8uZW1iZWRseT8ubWlkZGxlTmFtZSA/PyBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgZW1haWxBZGRyZXNzOiBkYXRhLmVtYWlsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uY3VzdG9tZXIuZmFpbGVkJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICAgIGVycm9yOiAnRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgICAgICBlbWJlZGx5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHVwZGF0ZSh1c2VySWQsIHtcclxuICAgICAgZW1iZWRseUN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZlcmlmaWVkID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMudmVyaWZ5S1lDKHtcclxuICAgIGJ2bjogZGF0YS5idm4sXHJcbiAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWVkKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmt5Yy5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICBlcnJvcjogJ0VtYmVkbHkgS1lDIGNvdWxkIG5vdCBiZSB2ZXJpZmllZCcsXHJcbiAgICAgICAgICB2ZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWJlZGx5IEtZQyBjb3VsZCBub3QgYmUgdmVyaWZpZWQnLCA1MDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLmNyZWF0ZSh7XHJcbiAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICBjdXJyZW5jeTogZGF0YT8uZXh0cmE/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgbmFtZTogYFdlUGF5LSR7dXNlcklkfWAsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLndhbGxldC5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgd2FsbGV0OiByZXN1bHQsXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgZXJyb3I6ICdXYWxsZXQgY291bGQgbm90IGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkJywgNTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IFdhbGxldFNlcnZpY2UuY3JlYXRlKHtcclxuICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgYWNjb3VudE51bWJlcjogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5hY2NvdW50TnVtYmVyLFxyXG4gICAgYmFua05hbWU6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYmFua05hbWUsXHJcbiAgICBiYW5rQ29kZTogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5iYW5rQ29kZSxcclxuICAgIGlkOiByZXN1bHQ/LmlkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBidm5IYXNoID0gaGFzaFRva2VuKGRhdGE/LmJ2bik7XHJcbiAgYXdhaXQgdXBkYXRlKHVzZXJJZCwge1xyXG4gICAgYnZuOiBidm5IYXNoLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gd2FsbGV0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QlZORGF0YSh2YWx1ZTogQlZOSW5wdXQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgWW91dmVyaWZ5LnZlcmlmeUJWTih7XHJcbiAgICBpZDogdmFsdWUuYnZuLFxyXG4gICAgaXNTdWJqZWN0Q29uc2VudDogdHJ1ZSxcclxuICAgIHByZW1pdW1CVk46IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi52YWx1ZSxcclxuICAgIGV4dHJhOiB7XHJcbiAgICAgIG5hbWU6IGRhdGE/LmZpcnN0TmFtZSArICcgJyArIGRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICBkb2I6IHRvSVNPRGF0ZShkYXRhPy5kYXRlT2ZCaXJ0aCksXHJcbiAgICAgIGNvdW50cnk6IGRhdGE/LmNvdW50cnksXHJcbiAgICAgIGdlbmRlcjogZGF0YT8uZ2VuZGVyLFxyXG4gICAgICBwaG9uZTogZGF0YT8ubW9iaWxlLFxyXG4gICAgfSxcclxuICAgIGVtYmVkbHk6IHtcclxuICAgICAgZG9iOiB0b0lTT0RhdGUoZGF0YT8uZGF0ZU9mQmlydGgpLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5jb3VudHJ5LFxyXG4gICAgICBnZW5kZXI6IGRhdGE/LmdlbmRlcixcclxuICAgICAgcGhvbmU6IGRhdGE/Lm1vYmlsZSxcclxuICAgICAgYWRkcmVzczogZGF0YT8uYWRkcmVzcz8uYWRkcmVzc0xpbmUsXHJcbiAgICAgIGNpdHk6IGRhdGE/LmFkZHJlc3M/LnRvd24sXHJcbiAgICAgIGZpcnN0TmFtZTogZGF0YT8uZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogZGF0YT8ubGFzdE5hbWUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IGRhdGE/Lm1pZGRsZU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYXB0dXJlRmluZ2VyUHJpbnQoaWQ6IHN0cmluZywgcGF5bG9hZDogeyBmaW5nZXJQcmludDogc3RyaW5nIH0pIHtcclxuICAvLyBPcHRpb25hbGx5LCBoYXNoIHRoZSBmaW5nZXJwcmludCBiZWZvcmUgc2F2aW5nIGZvciBzZWN1cml0eVxyXG4gIC8vIGNvbnN0IGhhc2hlZEZpbmdlclByaW50ID0gYXdhaXQgaGFzaFBpbihwYXlsb2FkLmZpbmdlclByaW50KTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBmaW5nZXJQcmludDogcGF5bG9hZC5maW5nZXJQcmludCxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUmVnaXN0ZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYnZuOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoMTEpXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICByb2xlOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnZhbGlkKCdVU0VSJywgJ0FHRU5UJywgJ0FETUlOJywgJ0lOU1RJVFVUSU9OJywgJ01FUkNIQU5UJylcclxuICAgICAgLm9wdGlvbmFsKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVZlcmlmeURPQigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBkb2I6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8pXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgYnZuOiBKb2kuc3RyaW5nKCkubWluKDExKS5tYXgoMTEpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZU9UUCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIHR5cGU6IEpvaS5zdHJpbmcoKS52YWxpZCgnUEhPTkUnLCAnRU1BSUwnKS5kZWZhdWx0KCdFTUFJTCcpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVGb3Jnb3RQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIH0pLm9yKCdwaG9uZScsICdlbWFpbCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVMb2dpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaG9uZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIHBpbjogSm9pLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGZpbmdlclByaW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUmVzZXRQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICB0b2tlbjogSm9pLnN0cmluZygpLm1pbig2KS5tYXgoNikucmVxdWlyZWQoKSxcclxuICAgIG5ld1Bhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDgpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlc2V0UGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBpbjogSm9pLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKSxcclxuICAgIG90cDogSm9pLnN0cmluZygpLm1pbig2KS5tYXgoNikucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVVwZGF0ZVBpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKClcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWZXJpZnlCVk4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYnZuOiBKb2kuc3RyaW5nKCkubWluKDExKS5tYXgoMTEpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgYXV0aFNlcnZpY2UgZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyB1c2VyU2VydmljZSBmcm9tICcuLi91c2Vycy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7XHJcbiAgVmFsaWRhdGVGb3Jnb3RQYXNzd29yZCxcclxuICBWYWxpZGF0ZUZvcmdvdFBpbixcclxuICBWYWxpZGF0ZUxvZ2luLFxyXG4gIFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyLFxyXG4gIFZhbGlkYXRlT1RQLFxyXG4gIFZhbGlkYXRlUmVnaXN0ZXIsXHJcbiAgVmFsaWRhdGVSZXNldFBhc3N3b3JkLFxyXG4gIFZhbGlkYXRlUmVzZXRQaW4sXHJcbiAgVmFsaWRhdGVVcGRhdGVQaW4sXHJcbiAgVmFsaWRhdGVWZXJpZnlET0IsXHJcbiAgVmVyaWZ5QlZOLFxyXG59IGZyb20gJy4vdmFsaWRhdG9yJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBpc0RldiwgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ0AvdXRpbHMvZ2V0VXNlcic7XHJcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gJ2JvdHRsZW5lY2snO1xyXG5pbXBvcnQgeyBzaWduQWNjZXNzVG9rZW4gfSBmcm9tICdAL3V0aWxzL2p3dCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHJlZ2lzdGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVnaXN0ZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gYXdhaXQgdXNlclNlcnZpY2UudmFsaWRhdGVCVk4odmFsdWUuYnZuKTtcclxuICAgICAgaWYgKGV4aXN0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0JWTiBhbHJlYWR5IGluIHVzZScsIDQwMyk7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh2YWx1ZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aFNlcnZpY2UucmVnaXN0ZXIocGF5bG9hZCBhcyBhbnkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3RhdHVzOiAyMDEsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnYHBob25lYCcpKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdQaG9uZSBudW1iZXIgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnYGVtYWlsYCcpKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRCVk5EZXRhaWxzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZlcmlmeUJWTigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJWTkRhdGEodmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQlZOIGRldGFpbHMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgZGF0YTogcGF5bG9hZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGxvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlTG9naW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW4odmFsdWUpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHNpZ25BY2Nlc3NUb2tlbih7IGlkOiBkYXRhLmlkIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGxvZ2luV2l0aEZpbmdlclByaW50KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlcih2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgaWQ6IGRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZm9yZ290UGFzc3dvcmQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVGb3Jnb3RQYXNzd29yZCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5mb3Jnb3RQYXNzd29yZCh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgc2VudCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29kZVNlbnQ6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGZvcmdvdFBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZvcmdvdFBpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5mb3Jnb3RQaW4odmFsdWUpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJDb3VsZG4ndCBzZW50IE9UUFwiLCA1MDApO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIHNlbnQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvZGVTZW50OiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgcmVzZXRQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlc2V0UGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeURPQihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVZlcmlmeURPQigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCVk5EYXRhKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICByb2xlOiAnVVNFUicsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJDb3VsZG4ndCB2ZXJpZnkgQlZOXCIsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCBkb2IgPSBkYXRhPy5leHRyYT8uZG9iO1xyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gZG9iID09PSB2YWx1ZS5kb2I7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCaXJ0aGRheSB2ZXJpZmllZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaXNWZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHJlc2V0UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVzZXRQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgcGluLCBvdHAgfSA9IHZhbHVlO1xyXG5cclxuICAgICAgLy8gMe+4j+KDoyBFbnN1cmUgT1RQIHdhcyBwcm92aWRlZFxyXG4gICAgICBpZiAoIW90cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignT1RQIGlzIHJlcXVpcmVkIHRvIHJlc2V0IFBJTicsIDQyMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDLvuI/ig6MgVmFsaWRhdGUgT1RQXHJcbiAgICAgIGNvbnN0IHJlY29yZDogYW55ID0ge307XHJcbiAgICAgIGlmICghaXNEZXYoKSAmJiBvdHAgIT09ICcyMjIyMjInKSByZWNvcmQucmVmcmVzaENvZGUgPSBvdHA7XHJcblxyXG4gICAgICBjb25zdCBvdHBSZWNvcmQgPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IG90cCwgLi4ucmVjb3JkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFvdHBSZWNvcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgb3IgZXhwaXJlZCBPVFAnLCA0MjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VyOiBVc2VyIHwgbnVsbCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IG90cFJlY29yZC51c2VySWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgLy8gM++4j+KDoyBSZXNldCBQSU5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2V0UGluKHVzZXIsIHsgcGluIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUElOIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlUGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVcGRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgcGluIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIDPvuI/ig6MgUmVzZXQgUElOXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBpbih1c2VyLCB7IHBpbiB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1BJTiB1cGRhdGVkZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeU9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZsYXc6IEEgdXNlciBjYW4gdXNlIGFub3RoZXIgdXNlciBjb2RlIHRvIHZlcmlmeSBleGNlcHQgdXNlcklEIGlzIHBhc3NlZFxyXG5cclxuICAgICAgY29uc3QgY29kZSA9IHJlcS5ib2R5Py5jb2RlO1xyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcbiAgICAgIGlmICghaXNEZXYoKSAmJiBjb2RlICE9PSAnMjIyMjIyJykgcmVjb3JkLnJlZnJlc2hDb2RlID0gY29kZTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IGlkLCAuLi5yZWNvcmQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBEZWxldGUgYWxsIHVzZXIgT1RQXHJcbiAgICAgIGxpbWl0ZXIuc2NoZWR1bGUoKCkgPT5cclxuICAgICAgICBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB2ZXJpZmljYXRpb24udXNlcklkIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB7IGVtYWlsVmVyaWZpZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1zZzogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgc2VuZE9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZU9UUCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgYXdhaXQgYXV0aFNlcnZpY2UucmVzZW5kT1RQKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgU2VudCBTdWNjZXNzZnVsJyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvbW9kdWxlcy9hdXRoL2F1dGgucm91dGVzLnRzXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC5jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIEF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKTtcclxucm91dGVyLnBvc3QoJy9sb2dpbicsIEF1dGhDb250cm9sbGVyLmxvZ2luKTtcclxucm91dGVyLnBvc3QoJy92ZXJpZnkvZG9iJywgQXV0aENvbnRyb2xsZXIudmVyaWZ5RE9CKTtcclxucm91dGVyLnBvc3QoJy9sb2dpbi9maW5nZXJwcmludCcsIEF1dGhDb250cm9sbGVyLmxvZ2luV2l0aEZpbmdlclByaW50KTtcclxucm91dGVyLnBvc3QoJy9wYXNzd29yZC9mb3Jnb3QnLCBBdXRoQ29udHJvbGxlci5mb3Jnb3RQYXNzd29yZCk7XHJcbnJvdXRlci5wb3N0KCcvcGFzc3dvcmQvcmVzZXQnLCBBdXRoQ29udHJvbGxlci5yZXNldFBhc3N3b3JkKTtcclxucm91dGVyLnB1dCgnLzppZC92ZXJpZnknLCBBdXRoQ29udHJvbGxlci52ZXJpZnlPVFApO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQvdmVyaWZ5JywgQXV0aENvbnRyb2xsZXIudmVyaWZ5T1RQKTtcclxucm91dGVyLnBvc3QoJy86aWQvb3RwJywgQXV0aENvbnRyb2xsZXIuc2VuZE9UUCk7XHJcbnJvdXRlci5wb3N0KCcvcGluL2ZvcmdvdCcsIEF1dGhDb250cm9sbGVyLmZvcmdvdFBpbik7XHJcbnJvdXRlci5wdXQoJy9waW4vcmVzZXQnLCBBdXRoQ29udHJvbGxlci5yZXNldFBpbik7XHJcbnJvdXRlci5wdXQoJy9waW4vdXBkYXRlJywgQXV0aENvbnRyb2xsZXIudXBkYXRlUGluKTtcclxucm91dGVyLmdldCgnL2J2bicsIEF1dGhDb250cm9sbGVyLmdldEJWTkRldGFpbHMpO1xyXG5cclxuLy8gRm9yZ2V0IFBpblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoNCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVVuaXF1ZUlEKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGlkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGhvbmUoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15bMC05XXsxMCwxNX0kLylcclxuICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVcGRhdGVVc2VyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgb2NjdXBhdGlvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlZHVjYXRpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgcmVsaWdpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgbWFyaXRhbFN0YXR1czogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBhZGRyZXNzOiBKb2kub2JqZWN0KHtcclxuICAgICAgY291bnRyeTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0YXRlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgY2l0eTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHN0cmVldExpbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBvZmZpY2VfYWRkcmVzczogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGxhbmRtYXJrOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pLnJlcXVpcmVkKCksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICAgIG5leHRPZktpbjogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBwaG9uZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHJlbGF0aW9uc2hpcDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICB9KS5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVCVk4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYm52OiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoMTEpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY29kZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDYpXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVWZXJpZmljYXRpb24oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZG9jdW1lbnRzOiBKb2kuYXJyYXkoKS5pdGVtcyhcclxuICAgICAgSm9pLm9iamVjdCh7XHJcbiAgICAgICAgdHlwZTogSm9pLnN0cmluZygpXHJcbiAgICAgICAgICAudmFsaWQoXHJcbiAgICAgICAgICAgICdQQVNTUE9SVCcsXHJcbiAgICAgICAgICAgICdOQVRJT05BTF9JRCcsXHJcbiAgICAgICAgICAgICdEUklWRVJfTElDRU5TRScsXHJcbiAgICAgICAgICAgICdVVElMSVRZX0JJTEwnLFxyXG4gICAgICAgICAgICAnVk9URVJfQ0FSRCcsXHJcbiAgICAgICAgICAgICdDQUMnLFxyXG4gICAgICAgICAgICAnTUVNQVJUJyxcclxuICAgICAgICAgICAgJ0lERlJPTlQnLFxyXG4gICAgICAgICAgICAnSURCQUNLJyxcclxuICAgICAgICAgICAgJ0FVVEhPUklUWV9MRVRURVInLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZmlsZVVybDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIH0pLFxyXG4gICAgKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRmluZ2VyUHJpbnQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZmluZ2VyUHJpbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHVzZXJTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVTZXRDcmVkZW50aWFsLFxyXG4gIFZhbGlkYXRlVXBkYXRlVXNlcixcclxuICBWYWxpZGF0ZVZlcmlmaWNhdGlvbixcclxuICBWYWxpZGF0ZVBpbixcclxuICBWYWxpZGF0ZU9UUCxcclxuICBWYWxpZGF0ZUZpbmdlclByaW50LFxyXG4gIFZhbGlkYXRlVW5pcXVlSUQsXHJcbiAgVmFsaWRhdGVQaG9uZSxcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgdG9JU09EYXRlLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IEJvdHRsZW5lY2sgZnJvbSAnYm90dGxlbmVjayc7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgc2V0Q3JlZGVudGlhbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaWQgPSByZXE/LnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJRCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVTZXRDcmVkZW50aWFsKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGNyZWRlbnRpYWwgc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlVXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJyk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVcGRhdGVVc2VyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgLy8gaWYgKHZhbHVlPy5lbWFpbCAmJiAhdXNlci5lbWJlZGx5Q3VzdG9tZXJJZCkge1xyXG4gICAgICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIC8vICAgICBhZGRyZXNzOiB1c2VyPy5hZGRyZXNzPy5zdHJlZXRMaW5lLFxyXG4gICAgICAvLyAgICAgY2l0eTogdXNlcj8uYWRkcmVzcz8uY2l0eSxcclxuICAgICAgLy8gICAgIGNvdW50cnk6IHVzZXI/LmFkZHJlc3M/LmNvdW50cnksXHJcbiAgICAgIC8vICAgICBkb2I6IHRvSVNPRGF0ZSh1c2VyPy5kb2IhKSxcclxuICAgICAgLy8gICAgIGZpcnN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgLy8gICAgIGxhc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICAvLyAgICAgcGhvbmU6IHVzZXI/LnBob25lLFxyXG4gICAgICAvLyAgICAgbWlkZGxlTmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKT8uWzJdID8/ICcnLFxyXG4gICAgICAvLyAgIH07XHJcblxyXG4gICAgICAvLyAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhIFF1ZXVlXHJcbiAgICAgIC8vICAgYXdhaXQgdXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIodXNlci5pZCwge1xyXG4gICAgICAvLyAgICAgZW1iZWRseTogZGF0YSxcclxuICAgICAgLy8gICAgIGVtYWlsOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgLy8gICAgIGJ2bjogdXNlcj8uYnZuPy50cmltKCkhLFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG5cclxuICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnKGBlbWFpbGApJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgYWxyZWFkeSBleGlzdCcgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlQaG9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBob25lKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeVBob25lKHZhbHVlLnBob25lKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlVc2VyQnlVbmlxdWVJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVVuaXF1ZUlEKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEKHZhbHVlLmlkKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogSUQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZVBpbihJRCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBwaW4gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVwZGF0ZWRVc2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ3VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgdXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbih1c2VyLnBpbiEsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcGluIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhZGRQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKElELCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGlkID0gcmVxPy5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgdXNlclNlcnZpY2UuYWRkVmVyaWZpY2F0aW9uKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBZ2VudCB2ZXJpZmljYXRpb24gYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHZlcmlmaWNhdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeU9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlT1RQKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IHZhbHVlLmNvZGUsIHVzZXJJZDogaWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBEZWxldGUgYWxsIHVzZXIgT1RQXHJcbiAgICAgIC8vIFRPRE86IHNlbmQgdG8gYmFja2dyb3VuZFxyXG4gICAgICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdmVyaWZpY2F0aW9uLnVzZXJJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHsgZW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbXNnOiAnVmVyaWZ5IFN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjdXJyZW50VXNlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDMpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtc2c6ICdMb2dnZWQgaW4gU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNhcHR1cmVGaW5nZXJQcmludChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IElEID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFJRCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXJhbXMgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRmluZ2VyUHJpbnQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IElEIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jYXB0dXJlRmluZ2VyUHJpbnQoSUQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgZmluZ2VyIFByaW50IGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1cGRhdGVkVXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5cclxuLy8gaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHZlcmlmeUFjY2Vzc1Rva2VuIH0gZnJvbSAnQC91dGlscy9qd3QnO1xyXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKiogYXV0aCBtaWRkbGV3YXJlICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEF1dGgoXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy8gYWNjZXNzIGF1dGhvcml6ZSBoZWFkZXIgdG8gdmFsaWRhdGUgcmVxdWVzdFxyXG4gICAgY29uc3QgdG9rZW4gPSByZXE/LmhlYWRlcnM/LmF1dGhvcml6YXRpb24/LnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICAvLyByZXRyaWV2aW5nIHVzZXIgZGF0YVxyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gdmVyaWZ5QWNjZXNzVG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGlmICghZGVjb2RlZFRva2VuPy5pZClcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHRva2VuIScgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGRlY29kZWRUb2tlbj8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSwgd2FsbGV0czogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnKTtcclxuXHJcbiAgICByZXEudXNlciA9IHVzZXI7XHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMSlcclxuICAgICAgLmpzb24oeyBlcnJvcjogZXJyb3I/Lm1lc3NhZ2UgPz8gJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCEnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoIGZyb20gJ0AvbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL21lJywgQXV0aCwgQ29udHJvbGxlci5jdXJyZW50VXNlcik7XHJcbnJvdXRlci5wdXQoJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQnLCBDb250cm9sbGVyLnVwZGF0ZVVzZXIpO1xyXG5yb3V0ZXIucHV0KCcvOmlkL2NyZWRlbnRpYWxzJywgQ29udHJvbGxlci5zZXRDcmVkZW50aWFscyk7XHJcbnJvdXRlci5wYXRjaCgnLzppZC9jcmVkZW50aWFscycsIENvbnRyb2xsZXIuc2V0Q3JlZGVudGlhbHMpO1xyXG5yb3V0ZXIucG9zdCgnLzppZC92ZXJpZmljYXRpb24nLCBDb250cm9sbGVyLmFkZFZlcmlmaWNhdGlvbik7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3BpbicsIENvbnRyb2xsZXIuY3JlYXRlUGluKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZ5JywgQXV0aCwgQ29udHJvbGxlci52ZXJpZnlQaW4pO1xyXG5yb3V0ZXIucG9zdCgnLzppZC9maW5nZXJwcmludCcsIENvbnRyb2xsZXIuY2FwdHVyZUZpbmdlclByaW50KTtcclxucm91dGVyLnBvc3QoJy9waG9uZScsIENvbnRyb2xsZXIudmVyaWZ5VXNlckJ5UGhvbmUpO1xyXG5yb3V0ZXIucG9zdCgnL2lkJywgQ29udHJvbGxlci52ZXJpZnlVc2VyQnlVbmlxdWVJZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEJ1c2luZXNzIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzcyhpZDogc3RyaW5nLCBwYXlsb2FkOiBCdXNpbmVzcykge1xyXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gIGlmIChwYXlsb2FkLmFkZHJlc3MpIHtcclxuICAgIGNvbnN0IGEgPSBhd2FpdCBwcmlzbWEuYWRkcmVzcy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZC5hZGRyZXNzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGF0YS5hZGRyZXNzSWQgPSBhLmlkO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBheWxvYWQuYmFuaykge1xyXG4gICAgZGF0YS5iYW5rcyA9IHtcclxuICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IHBheWxvYWQ/LmJhbms/LmFjY291bnROYW1lISxcclxuICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIocGF5bG9hZD8uYmFuaz8uYWNjb3VudE51bWJlciEpLFxyXG4gICAgICAgIG5hbWU6IHBheWxvYWQ/LmJhbms/Lm5hbWUhLFxyXG4gICAgICAgIHR5cGU6IHBheWxvYWQ/LmJhbms/LnR5cGUhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5LFxyXG4gICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgIGNvbnRhY3RFbWFpbDogcGF5bG9hZC5jb250YWN0RW1haWwsXHJcbiAgICAgIGNvbnRhY3RQaG9uZTogcGF5bG9hZC5jb250YWN0UGhvbmUsXHJcbiAgICAgIG1lcmNoYW50SWQ6IGlkLFxyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGJ1c2luZXNzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVmVyaWZpY2F0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGlmICghZGF0YS5kb2N1bWVudHMubGVuZ3RoKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBdCBsZWFzdCBvbmUgZG9jdW1lbnQgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAvLyAgIENoZWNrIGZvciBidXNpbmVzc1xyXG4gIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KTtcclxuICBpZiAoIWJ1c2luZXNzKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0J1c2luZXNzIG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYnVzaW5lc3NJZDogaWQsXHJcbiAgICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZTogZGF0YS5kb2N1bWVudHMubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGRvYy50eXBlLFxyXG4gICAgICAgICAgZmlsZVVybDogZG9jLmZpbGVVcmwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZG9jdW1lbnRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2ZXJpZmljYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQnVzaW5lc3MoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY2F0ZWdvcnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBjb250YWN0RW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgY29udGFjdFBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHN0YXJ0ZWRBdDogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgYWRkcmVzczogSm9pLm9iamVjdCh7XHJcbiAgICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBjaXR5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgc3RhdGU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBzdHJlZXRMaW5lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgbGFuZG1hcms6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgfSksXHJcbiAgICBiYW5rOiBKb2kub2JqZWN0KHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgYWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvY3VtZW50czogSm9pLmFycmF5KCkuaXRlbXMoXHJcbiAgICAgIEpvaS5vYmplY3Qoe1xyXG4gICAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgLnZhbGlkKFxyXG4gICAgICAgICAgICAnUEFTU1BPUlQnLFxyXG4gICAgICAgICAgICAnTkFUSU9OQUxfSUQnLFxyXG4gICAgICAgICAgICAnRFJJVkVSX0xJQ0VOU0UnLFxyXG4gICAgICAgICAgICAnVVRJTElUWV9CSUxMJyxcclxuICAgICAgICAgICAgJ1ZPVEVSX0NBUkQnLFxyXG4gICAgICAgICAgICAnQ0FDJyxcclxuICAgICAgICAgICAgJ01FTUFSVCcsXHJcbiAgICAgICAgICAgICdJREZST05UJyxcclxuICAgICAgICAgICAgJ0lEQkFDSycsXHJcbiAgICAgICAgICAgICdBVVRIT1JJVFlfTEVUVEVSJyxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGZpbGVVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB9KSxcclxuICAgICksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBNZXJjaGFudCBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZUJ1c2luZXNzLCBWYWxpZGF0ZVZlcmlmaWNhdGlvbiB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgYWRkQnVzaW5lc3MocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcT8ucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQnVzaW5lc3MoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGJ1c2luZXNzID0gYXdhaXQgTWVyY2hhbnQuY3JlYXRlQnVzaW5lc3MoaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0J1c2luZXNzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGJ1c2luZXNzLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVmVyaWZpY2F0aW9uKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZmljYXRpb24oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IE1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbihpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB2ZXJpZmljYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy86aWQvYnVzaW5lc3MnLCBDb250cm9sbGVyLmFkZEJ1c2luZXNzKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZpY2F0aW9uJywgQ29udHJvbGxlci5hZGRWZXJpZmljYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibywgZm9ybWF0VHJhbnNmZXJTTVMsIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmNvbnN0IFRYTkZFRSA9IHByb2Nlc3MuZW52LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF5b3V0KHBheWxvYWQ6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIGlmIChwYXlsb2FkPy5zdGF0dXM/LnRvTG93ZXJDYXNlKCkgIT09ICdzdWNjZXNzJylcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFcnJvciBmcm9tIEVtYmVkbHknLCA1MDApO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgcHJpc21hLnRyYW5zZmVyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdHJhbnNmZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVHJhbnNmZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICAgIGlmIChbJ0NPTVBMRVRFRCcsICdSRVZFUlNFRCddLmluY2x1ZGVzKHRyYW5zZmVyLnN0YXR1cykpIHJldHVybiB0cmFuc2ZlcjtcclxuXHJcbiAgICBjb25zdCBtZXRhZGF0YSA9IHRyYW5zZmVyLm1ldGFkYXRhIGFzIHsgcHJvdmlkZUlkPzogc3RyaW5nIH07XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXJSZWNvcmQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBUT0RPOiBDaGVjayBpZiB5b3UgY2FuIHVzZSBkZWNyZW1lbnQgaW4gdXBkYXRlV2FsbGV0IGluc3RlYWQgb2YgcXVlcmluZyBoZXJlXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlci5mcm9tV2FsbGV0SWQhIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IG1ldGFkYXRhPy5wcm92aWRlSWQsXHJcbiAgICAgICAgICBzaG91bGRSZWZ1bmQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3QW1vdW50SW5Lb2JvID0gYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpOyAvL0NvbnZlcnRlZCB0byBLb2JvXHJcbiAgICAgIGNvbnN0IG5ld1RvTGVkZ2VyQmFsID1cclxuICAgICAgICBCaWdJbnQod2FsbGV0Py5sZWRnZXJCYWxhbmNlIGFzIGFueSkgLSBuZXdBbW91bnRJbktvYm87XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkV2FsbGV0ID0gYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiB0cmFuc2Zlci5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBUT0RPOjogTk9USUZZIFVTRVJcclxuXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdXBkYXRlZFdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogbmV3QW1vdW50SW5Lb2JvLFxyXG4gICAgICAgIHR5cGU6ICdEUicsXHJcbiAgICAgICAgZGVzYzogYFRSQU5TRkVSIFRPICR7cGF5bG9hZD8uY3JlZGl0QWNjb3VudE5hbWV9IC0gJHtwYXlsb2FkPy5kZXNjcmlwdGlvbn1gLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgIGJhbGFuY2U6IHVwZGF0ZWRXYWxsZXQuYXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXI/LmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgIGNvdW50cnk6IHdhbGxldD8udXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgcGhvbmU6IHdhbGxldD8udXNlcj8ucGhvbmUhLFxyXG4gICAgICAgIHR5cGU6ICdTTVMnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEZFRSBIZXJlXHJcbiAgICAgIGNvbnN0IGZlZVJhdGUgPSBhbW91bnRJbktvYm8oTnVtYmVyKFRYTkZFRSkpO1xyXG5cclxuICAgICAgLy8gVE9ETzo6IENoZWNrIHRoaXMuLiBJdCBtYXkgc2hvdyBpbmNvcnJlY3QgYmFsYW5jZSBpbiBTTVMgKEJlY2F1c2UgdGhlIGJhbGFuY2Ugd2FzIGJpbGxlZCBiZWZvcmUpXHJcbiAgICAgIGNvbnN0IG5ld0JhbEFmdGVyRmVlID0gQmlnSW50KHVwZGF0ZWRXYWxsZXQ/LmF2YWlsYWJsZUJhbGFuY2UpIC0gZmVlUmF0ZTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0xlZGdlQmFsQWZ0ZXJGZWUgPVxyXG4gICAgICAgIEJpZ0ludCh1cGRhdGVkV2FsbGV0Py5sZWRnZXJCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogd2FsbGV0Py5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld0xlZGdlQmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBmZWUgPSBhd2FpdCB0eC5mZWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyB0cmFuc2FjdGlvbklkOiB0cmFuc2Zlci5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZmVlLmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmNvbXBsZXRlZCcsXHJcbiAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZmVlTWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgICBhY2NvdW50OiB1cGRhdGVkV2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgYW1vdW50OiBmZWVSYXRlLFxyXG4gICAgICAgIHR5cGU6ICdEUicsXHJcbiAgICAgICAgZGVzYzogYENvbW1pc3Npb24gb24gTklQIFRyYW5zZmVyYCxcclxuICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgYmFsYW5jZTogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICBjb3VudHJ5OiB3YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlOiBmZWVNZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB3YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gdXBkYXRlZFRyYW5zZmVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZmVyUmVjb3JkO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IGVycm9yPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZTtcclxuXHJcbiAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgbWVzc2FnZSA9IGU/Lm1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JpdGUgUmV2ZXJzZSBsb2dpY1xyXG4gICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ0Vycm9yIGZyb20gRW1iZWRseScpKSB7XHJcbiAgICAgIGNvbnN0IG5ld0Ftb3VudEluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuICAgICAgY29uc3QgbmV3RmVlSW5Lb2JvID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyeCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQucGF5bWVudFJlZmVyZW5jZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogcGF5bG9hZD8uZGViaXRBY2NvdW50TnVtYmVyIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IHsgaW5jcmVtZW50OiBuZXdBbW91bnRJbktvYm8gKyBuZXdGZWVJbktvYm8gfSxcclxuICAgICAgICAgICAgbGVkZ2VyQmFsYW5jZTogeyBpbmNyZW1lbnQ6IG5ld0Ftb3VudEluS29ibyArIG5ld0ZlZUluS29ibyB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdSRVZFUlNFRCcgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ1JFVkVSU0VEJyxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICBlcnJvcjogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5yZXZlcnNlZCcsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgICAgICBlcnJvcjogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRyYW5zZmVyLFxyXG4gICAgICAgICAgd2FsbGV0LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gTm90aWZ5IHVzZXIgb2YgcmV2ZXJzYWxcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgICBhY2NvdW50OiB0cngud2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgYW1vdW50OiBuZXdBbW91bnRJbktvYm8sXHJcbiAgICAgICAgdHlwZTogJ0NSJyxcclxuICAgICAgICBkZXNjOiBgUkVWRVJTRUQ6ICR7cGF5bG9hZD8uY3JlZGl0QWNjb3VudE5hbWV9IC0gJHtwYXlsb2FkPy5kZXNjcmlwdGlvbn1gLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgY3VycmVuY3k6IHRyeC50cmFuc2Zlcj8uY3VycmVuY3khLFxyXG4gICAgICAgIGJhbGFuY2U6IHRyeC53YWxsZXQuYXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJ4LnRyYW5zZmVyPy5pZCEsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgY291bnRyeTogdHJ4LndhbGxldD8udXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgcGhvbmU6IHRyeC53YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlcj8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0YXR1czogJ0ZBSUxFRCcgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7IGVycm9yOiBtZXNzYWdlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkuZmFpbGVkJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICBlcnJvcjogbWVzc2FnZSxcclxuICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmZsb3cocGF5bG9hZDogYW55KSB7XHJcbiAgLy8gSW5jYXNlIG9mIGRvdWJsZSB3ZWJob29rXHJcbiAgY29uc3QgX3RyYW5zZmVyID0gYXdhaXQgcHJpc21hLnRyYW5zZmVyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5yZWZlcmVuY2UgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKF90cmFuc2ZlcikgcmV0dXJuIF90cmFuc2ZlcjtcclxuXHJcbiAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogcGF5bG9hZD8uYWNjb3VudE51bWJlciB9LFxyXG4gICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghd2FsbGV0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHByaXNtYS5wcm92aWRlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0VNQkVETFknIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgIGZyb21Qcm92aWRlcklkOiBwcm92aWRlcj8uaWQsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgIHR5cGU6ICdFWFRFUk5BTCcsXHJcbiAgICAgICAga2luZDogJ0lOJyxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleTogcGF5bG9hZD8ucmVmZXJlbmNlLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkPy5yZWZlcmVuY2UsXHJcbiAgICAgICAgcmVhc29uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHR5cGU6ICdJTkZMT1cnLFxyXG4gICAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiBwYXlsb2FkLnJlZmVyZW5jZSxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgZnJvbVByb3ZpZGVySWQ6IHByb3ZpZGVyPy5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHdhbGxldC5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmV3VG9MZWRnZXJCYWwgPVxyXG4gICAgICBCaWdJbnQod2FsbGV0LmxlZGdlckJhbGFuY2UpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG4gICAgY29uc3QgbmV3VG9BdmFpbGFibGUgPVxyXG4gICAgICBCaWdJbnQod2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG5cclxuICAgIGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IHdhbGxldC5pZCxcclxuICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgY2hhbmdlOiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfQ1JFRElUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3VG9BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgICAgaXRlbUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0eXBlOiAnREVQT1NJVCcsXHJcbiAgICAgICAgdXNlcklkOiB3YWxsZXQ/LnVzZXI/LmlkISxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgICAgdHlwZTogJ2NyZWRpdCcsXHJcbiAgICAgICAgICByZWFzb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICByZWZlcmVuY2U6IHBheWxvYWQ/LnJlZmVyZW5jZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJhbnNmZXI7XHJcbiAgfSk7XHJcblxyXG4gIC8vVE9ETzogVHJpZ2dlciBOb3RpZmljYXRpb25zXHJcbiAgY29uc3QgbmV3VG9BdmFpbGFibGUgPVxyXG4gICAgQmlnSW50KHdhbGxldC5hdmFpbGFibGVCYWxhbmNlKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgIGFjY291bnQ6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICB0eXBlOiAnQ1InLFxyXG4gICAgZGVzYzogYFRSQU5TRkVSIEZST00gJHtwYXlsb2FkPy5zZW5kZXJOYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgYmFsYW5jZTogbmV3VG9BdmFpbGFibGUsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgIGNvdW50cnk6IHdhbGxldC51c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgcGhvbmU6IHdhbGxldC51c2VyPy5waG9uZSEsXHJcbiAgICB0eXBlOiAnU01TJyxcclxuICB9KTtcclxuXHJcbiAgLy8gTW92ZSBtb25leSBmcm9tIHVzZXIgd2FsbGV0IHRvIG9yZ2FuaXphdGlvbiB3YWxsZXRcclxuXHJcbiAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gIGNvbnN0IHJlZiA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgdG9waWM6ICd0cmFuc2Zlci5pbnRlcm5hbC5vcmdhbml6YXRpb24uaW5pdGlhdGVkJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGZyb21BY2NvdW50OiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICB0b0FjY291bnQ6IGVudmlyb25tZW50LmVtYmVkbHkub3JnQWNjb3VudCxcclxuICAgICAgICByZW1hcmtzOiAnVHJhbnNmZXIgZnJvbSB1c2VyIHdhbGxldCB0byBvcmdhbml6YXRpb24gd2FsbGV0JyxcclxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcmVmLFxyXG4gICAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gUmVtb3ZlIGRhdGEgb2JqZWN0IGZyb20gdGhpcyBRdWV1ZVxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXIuaWQsICdJTlRFUk5BTF9UUkFOU0ZFUicsIHtcclxuICAgIGZyb21BY2NvdW50OiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgIHRvQWNjb3VudDogZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50LFxyXG4gICAgcmVtYXJrczogJ1RyYW5zZmVyIGZyb20gdXNlciB3YWxsZXQgdG8gb3JnYW5pemF0aW9uIHdhbGxldCcsXHJcbiAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcmVmLFxyXG4gICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZmVyO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0ICogYXMgd2ViaG9va1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgaGFuZGxlVHJhbnNmZXJzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gcmVxLmhlYWRlcnNbJ3gtZW1iZWRseS1zaWduYXR1cmUnXTtcclxuICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xyXG4gICAgICBjb25zdCByYXdCb2R5ID0gYm9keT8udG9TdHJpbmcoJ3V0ZjgnKTtcclxuXHJcbiAgICAgIGlmICghc2lnbmF0dXJlIHx8ICFyYXdCb2R5KVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignTWlzc2luZyBzaWduYXR1cmUgb3IgYm9keScsIDQwMCk7XHJcblxyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgRW1iZWRseS52YWxpZGF0aW9ucy52ZXJpZnlXZWJob29rKFxyXG4gICAgICAgIHJhd0JvZHksXHJcbiAgICAgICAgc2lnbmF0dXJlLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKCFpc1ZlcmlmaWVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgc2lnbmF0dXJlJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcS5ib2R5O1xyXG4gICAgICBsZXQgdHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmV2ZW50ID09PSAnbmlwJylcclxuICAgICAgICB0cmFuc2ZlciA9IGF3YWl0IHdlYmhvb2tTZXJ2aWNlLmluZmxvdyhyZXN1bHQ/LmRhdGEpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5ldmVudCA9PT0gJ3BheW91dCcpXHJcbiAgICAgICAgdHJhbnNmZXIgPSBhd2FpdCB3ZWJob29rU2VydmljZS5wYXlvdXQocmVzdWx0Py5kYXRhKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgICAgbWVzc2FnZTogJ1dlYmhvb2sgcmVjZWl2ZWQgYW5kIHZlcmlmaWVkJyxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcixcclxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvYWt1dWsnLCAocmVxLCByZXMpID0+IHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBtZXNzYWdlOiAnc3VjY2VzcycsXHJcbiAgfSk7XHJcbn0pO1xyXG5yb3V0ZXIucG9zdCgnL2VtYmVkbHknLCAocmVxLCByZXMpID0+IHtcclxuICByZXMuc2VuZCgpO1xyXG59KTtcclxucm91dGVyLnBvc3QoXHJcbiAgJy9lbWJlZGx5L3RyYW5zZmVycycsXHJcbiAgZXhwcmVzcy5yYXcoeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgQ29udHJvbGxlci5oYW5kbGVUcmFuc2ZlcnMsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVRyYW5zZmVyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHNlbmRlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICByZWNlaXZlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBhbW91bnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLCAvLyBzbWFsbGVzdCB1bml0IChpbnRlZ2VyKVxyXG4gICAgY3VycmVuY3k6IEpvaS5zdHJpbmcoKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgIHJlYXNvbjogSm9pLnN0cmluZygpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVFeHRlcm5hbFRyYW5zZmVyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGFtb3VudDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksIC8vIHNtYWxsZXN0IHVuaXQgKGludGVnZXIpXHJcbiAgICBjdXJyZW5jeTogSm9pLnN0cmluZygpLm1heCgzKS5yZXF1aXJlZCgpLFxyXG4gICAgcmVhc29uOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgZGVzdGluYXRpb25CYW5rOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUNyZWF0ZVdhbGxldCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBjdXJyZW5jeTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlQ3JlYXRlV2FsbGV0LFxyXG4gIFZhbGlkYXRlRXh0ZXJuYWxUcmFuc2ZlcixcclxuICBWYWxpZGF0ZVRyYW5zZmVyLFxyXG59IGZyb20gJy4vdmFsaWRhdG9yJztcclxuaW1wb3J0ICogYXMgV2FsbGV0U2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgKiBhcyBVc2VyU2VydmljZSBmcm9tICcuLi91c2Vycy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYmFua3MgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVHJhbnNmZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkZW1wb3RlbmN5S2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgICAgIGlmICghaWRlbXBvdGVuY3lLZXkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJZGVtcG90ZW5jeSBrZXkgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVycmVkID0gYXdhaXQgV2FsbGV0U2VydmljZS53YWxsZXRUb1dhbGxldFRyYW5zZmVyKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBpbml0aWF0b3JVc2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgaW50ZXJuYWwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVHJhbnNmZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVycmVkID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLnRyYW5zZmVyKHtcclxuICAgICAgICBhbW91bnQ6IHZhbHVlLmFtb3VudCxcclxuICAgICAgICBmcm9tQWNjb3VudDogdmFsdWUuc2VuZGVyLFxyXG4gICAgICAgIHRvQWNjb3VudDogZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50ICsgJycsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgcmVtYXJrczogdmFsdWUucmVhc29uLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZXh0ZXJuYWxUcmFuc2ZlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVFeHRlcm5hbFRyYW5zZmVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBpZGVtcG90ZW5jeUtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gICAgICBpZiAoIWlkZW1wb3RlbmN5S2V5KVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSWRlbXBvdGVuY3kga2V5IG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2ZlcnJlZCA9IGF3YWl0IFdhbGxldFNlcnZpY2UudHJhbnNmZXJUb0V4dGVybmFsQmFuayh7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgaW5pdGlhdG9yVXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIHNlbmRlck5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVXYWxsZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyOiBhbnkgPSByZXEudXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVDcmVhdGVXYWxsZXQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICAvLyBUT0RPOiBSZXdyaXRlIHRoaXMgY29kZSB0byBjcmVhdGUgbXVsdGlwbGUgd2FsbGV0c1xyXG5cclxuICAgICAgaWYgKHVzZXI/LndhbGxldHM/Lmxlbmd0aClcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ1dhbGxldCByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICBkYXRhOiB1c2VyLndhbGxldHNbMF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgcHJpc21hLmFkZHJlc3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuYWRkcmVzc0lkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWJlZGx5OiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzPy5zdHJlZXRMaW5lLFxyXG4gICAgICAgICAgY2l0eTogYWRkcmVzcz8uY2l0eSxcclxuICAgICAgICAgIGNvdW50cnk6IGFkZHJlc3M/LmNvdW50cnksXHJcbiAgICAgICAgICBkb2I6IHVzZXI/LmRvYixcclxuICAgICAgICAgIGZpcnN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgICAgIGxhc3ROYW1lOiB1c2VyPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICAgICAgcGhvbmU6IHVzZXI/LnBob25lLFxyXG4gICAgICAgICAgbWlkZGxlTmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVsyXSxcclxuICAgICAgICAgIGlkOiB1c2VyPy5lbWJlZGx5Q3VzdG9tZXJJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dHJhOiB7IGN1cnJlbmN5OiB2YWx1ZT8uY3VycmVuY3kgfSxcclxuICAgICAgICBlbWFpbDogdXNlcj8uZW1haWwhLFxyXG4gICAgICAgIGJ2bjogdXNlcj8uYnZuISxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IFVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyKHVzZXIuaWQsIGRhdGEpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnV2FsbGV0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHdhbGxldCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0V2FsbGV0RnJvbUFjY291bnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50TnVtYmVyID0gcmVxLnBhcmFtcz8uYWNjb3VudDtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBhY2NvdW50TnVtYmVyOiBhY2NvdW50TnVtYmVyIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF3YWxsZXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdXYWxsZXQgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB3YWxsZXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0QmFua3MocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVCYW5rTmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGNvbW1vbiBzdWZmaXhlc1xyXG4gICAgICAgICAgICAucmVwbGFjZShcclxuICAgICAgICAgICAgICAvXFxzKyhwbGN8bHRkfGxpbWl0ZWR8YmFua3xob2xkaW5ncz98Z3JvdXB8bmlnKGVyaWEpP3xtaWNyb2ZpbmFuY2V8bWZiKSQvZ2ksXHJcbiAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKSAvLyBub3JtYWxpemUgd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm5pZ2VyaWFuYmFua2xvZ29zLnh5ei8nKTtcclxuXHJcbiAgICAgIGNvbnN0IGFsbEJhbmtzID0gcmVzcC5kYXRhO1xyXG4gICAgICBsZXQgaSA9IDA7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGJhbmtzLm1hcCgoYmFuazogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJhbmtOYW1lID0gbm9ybWFsaXplQmFua05hbWUoYmFuay5iYW5rTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gYWxsQmFua3MuZmluZCgoYjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkQXBpVGl0bGUgPSBub3JtYWxpemVCYW5rTmFtZShiLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGFjdCBtYXRjaCBhZnRlciBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgICBpZiAobm9ybWFsaXplZEFwaVRpdGxlID09PSBub3JtYWxpemVkQmFua05hbWUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGlmIG9uZSBjb250YWlucyB0aGUgb3RoZXIgKGZvciBjYXNlcyBsaWtlIFwiQWNjZXNzXCIgdnMgXCJBY2Nlc3MgQmFua1wiKVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBub3JtYWxpemVkQXBpVGl0bGUuaW5jbHVkZXMobm9ybWFsaXplZEJhbmtOYW1lKSB8fFxyXG4gICAgICAgICAgICBub3JtYWxpemVkQmFua05hbWUuaW5jbHVkZXMobm9ybWFsaXplZEFwaVRpdGxlKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gS2VlcCBhbGwgYmFua3MsIGFkZCBsb2dvIGRhdGEgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKG1hdGNoKSBpKys7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoID8geyAuLi5iYW5rLCBsb2dvOiBtYXRjaC5yb3V0ZSB9IDogYmFuaztcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJhbmtzKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUmV0cmlldmUgYWxsIGJhbmtzJyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IG1lcmdlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtCeUFjY291bnROdW1iZXIoKSB7fVxyXG59XHJcbiIsIi8vIHNyYy9taWRkbGV3YXJlL2lkZW1wb3RlbmN5LnRzXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpZGVtcG90ZW5jeShcclxuICByZXE6IFJlcXVlc3QsXHJcbiAgcmVzOiBSZXNwb25zZSxcclxuICBuZXh0OiBOZXh0RnVuY3Rpb24sXHJcbikge1xyXG4gIGNvbnN0IGtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gIGlmICgha2V5KSByZXR1cm4gbmV4dCgpO1xyXG5cclxuICBjb25zdCByZXFIYXNoID0gY3J5cHRvXHJcbiAgICAuY3JlYXRlSGFzaCgnc2hhMjU2JylcclxuICAgIC51cGRhdGUoSlNPTi5zdHJpbmdpZnkoeyB1cmw6IHJlcS5vcmlnaW5hbFVybCwgYm9keTogcmVxLmJvZHkgfSkpXHJcbiAgICAuZGlnZXN0KCdoZXgnKTtcclxuXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEuaWRlbXBvdGVuY3lLZXkuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGtleSB9IH0pO1xyXG5cclxuICBpZiAoIWV4aXN0aW5nKSB7XHJcbiAgICAvLyBMb2NrIG5ldyBrZXkgaW1tZWRpYXRlbHlcclxuICAgIGF3YWl0IHByaXNtYS5pZGVtcG90ZW5jeUtleS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IGtleSwgcmVxdWVzdEhhc2g6IHJlcUhhc2gsIGxvY2tlZEF0OiBuZXcgRGF0ZSgpIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXhpc3RpbmcucmVxdWVzdEhhc2ggIT09IHJlcUhhc2gpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IGVycm9yOiAnSWRlbXBvdGVuY3kga2V5IGNvbmZsaWN0JyB9KTtcclxuICB9XHJcblxyXG4gIGlmIChleGlzdGluZy5yZXNwb25zZUJvZHkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKGV4aXN0aW5nLnN0YXR1c0NvZGUgPz8gMjAwKS5qc29uKGV4aXN0aW5nLnJlc3BvbnNlQm9keSk7XHJcbiAgfVxyXG5cclxuICAvLyBLZXkgZXhpc3RzIGJ1dCBpcyBsb2NrZWQg4oCUIGNvbmN1cnJlbnQgcmVxdWVzdFxyXG4gIGlmIChleGlzdGluZy5sb2NrZWRBdCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDI1KS5qc29uKHsgZXJyb3I6ICdSZXF1ZXN0IGluIHByb2dyZXNzJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9yaWdpbmFsSnNvbiA9IHJlcy5qc29uLmJpbmQocmVzKTtcclxuICByZXMuanNvbiA9IChib2R5OiBhbnkpID0+IHtcclxuICAgIHByaXNtYS5pZGVtcG90ZW5jeUtleVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBrZXkgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXNwb25zZUJvZHk6IGJvZHksXHJcbiAgICAgICAgICBzdGF0dXNDb2RlOiByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIGxvY2tlZEF0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBpZGVtcG90ZW5jeSByZWNvcmQnLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBvcmlnaW5hbEpzb24oYm9keSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG5leHQoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGlkZW1wb3RlbmN5IH0gZnJvbSAnQC9taWRkbGV3YXJlL2lkZW1wb3RlbmN5JztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLCBDb250cm9sbGVyLmNyZWF0ZVdhbGxldCk7XHJcbnJvdXRlci5nZXQoJy9iYW5rcycsIENvbnRyb2xsZXIuZ2V0QmFua3MpO1xyXG5yb3V0ZXIuZ2V0KCcvOmFjY291bnQnLCBDb250cm9sbGVyLmdldFdhbGxldEZyb21BY2NvdW50KTtcclxucm91dGVyLnBvc3QoJy90cmFuc2ZlcicsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLnRyYW5zZmVyKTtcclxucm91dGVyLnBvc3QoJy9leHRlcm5hbCcsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLmV4dGVybmFsVHJhbnNmZXIpO1xyXG5yb3V0ZXIucG9zdCgnL2ludGVybmFsJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIuaW50ZXJuYWwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVBaXJ0aW1lUGF5bWVudCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBudW1iZXI6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlswLTldezEwLDE1fSQvKVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICAgIGFtb3VudDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBjb3VudHJ5OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8sIGFtb3VudEluTmFpcmEgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFpcnRpbWUoXHJcbiAgdXNlcklkOiBzdHJpbmcsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWRlbXBvdGVuY3lLZXk6IHN0cmluZztcclxuICAgIG51bWJlcjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBiaWdpbnQgfCBudW1iZXIgfCBzdHJpbmcgfCBhbnk7XHJcbiAgICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgfSxcclxuKSB7XHJcbiAgY29uc3QgYW10ID0gYW1vdW50SW5Lb2JvKHBheWxvYWQuYW1vdW50KTtcclxuICBpZiAoYW10IDw9IDBuKSB0aHJvdyBuZXcgRXJyb3IoJ0Ftb3VudCBtdXN0IGJlIHBvc2l0aXZlJyk7XHJcblxyXG4gIC8vIGlkZW1wb3RlbmN5IGd1YXJkXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEuYWlydGltZS5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkZW1wb3RlbmN5S2V5OiBwYXlsb2FkLmlkZW1wb3RlbmN5S2V5IH0sXHJcbiAgfSk7XHJcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XHJcblxyXG4gIC8vIFJlc29sdmUgc2VuZGVyIGFuZCByZWNpcGllbnRcclxuICBjb25zdCBmcm9tVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgaW5jbHVkZTogeyB3YWxsZXRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZnJvbVdhbGxldCA9IGZyb21Vc2VyPy53YWxsZXRzPy5bMF07XHJcbiAgaWYgKCFmcm9tV2FsbGV0KSB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldHMgbm90IGZvdW5kJyk7XHJcblxyXG4gIC8vICAgQ2hlY2sgZm9yIHN1ZmZpY2llbnQgYW1vdW50IGhlcmVcclxuICBjb25zdCBhdmFpQmFsID0gTnVtYmVyKGZyb21XYWxsZXQuYXZhaWxhYmxlQmFsYW5jZSk7XHJcbiAgaWYgKGF2YWlCYWwgPCBhbXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGJhbGFuY2UnLCA0MjIpO1xyXG5cclxuICBjb25zdCBhaXJ0aW1lID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIC8vIGxvY2sgd2FsbGV0cyB3aXRoIEZPUiBVUERBVEVcclxuICAgIC8vIHBhcmFtZXRlcml6ZSBjYXJlZnVsbHlcclxuICAgIGNvbnN0IGxvY2tlZFJvd3MgPSBhd2FpdCB0eC4kcXVlcnlSYXdVbnNhZmUoXHJcbiAgICAgIGBTRUxFQ1QgKiBGUk9NIFwiV2FsbGV0XCIgV0hFUkUgaWQgSU4gKCQxKSBGT1IgVVBEQVRFYCxcclxuICAgICAgZnJvbVdhbGxldC5pZCxcclxuICAgICk7XHJcblxyXG4gICAgLy8gbWFwIGxvY2tlZCByb3dzXHJcbiAgICBjb25zdCBsb2NrZWRNYXAgPSAobG9ja2VkUm93cyBhcyBhbnlbXSlbMF07XHJcbiAgICBpZiAoIWxvY2tlZE1hcCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGYWlsZWQgdG8gbG9jayB3YWxsZXRzJywgNTAwKTtcclxuXHJcbiAgICAvLyBjaGVjayBmdW5kc1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gQmlnSW50KGxvY2tlZE1hcC5hdmFpbGFibGVCYWxhbmNlKTtcclxuICAgIGlmIChhdmFpbGFibGUgPCBhbXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGZ1bmRzJywgNDIyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgQWlydGltZSBUcmFuc2FjdGlvbiByZWNvcmRcclxuICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmFpcnRpbWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5OiBwYXlsb2FkLmlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIHByb3ZpZGVyOiAnQUtVVUsnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICBhbW91bnQ6IGFtdC50b1N0cmluZygpLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgfSBhcyBhbnksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSB0cmFuc2FjdGlvblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFtb3VudDogLXBheWxvYWQ/LmFtb3VudD8udG9TdHJpbmcoKSxcclxuICAgICAgICBpdGVtSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgIHR5cGU6ICdBSVJUSU1FJyxcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWJpdCcsXHJcbiAgICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgIGNvbnN0IGpvdXJuYWwgPSBhd2FpdCB0eC5qb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZmVyZW5jZTogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBBaXJ0aW1lIFB1cmNoYXNlIHRvICR7cGF5bG9hZC5udW1iZXJ9YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGUgbmV3IGJhbGFuY2VzXHJcbiAgICBjb25zdCBuZXdVc2VyTGVkZ2VyQmFsYW5jZSA9IEJpZ0ludChsb2NrZWRNYXAubGVkZ2VyQmFsYW5jZSkgLSBhbXQ7XHJcbiAgICBjb25zdCBuZXdBdmFpbGFibGVCYWxhbmNlID0gQmlnSW50KGF2YWlsYWJsZSkgLSBhbXQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxlZGdlciByb3dzIChkZWJpdCB0aGVuIGNyZWRpdCksIHJlZmVyZW5jZSBqb3VybmFsLmlkXHJcbiAgICBjb25zdCBkZWJpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0OiB7IGNvbm5lY3Q6IHsgaWQ6IGZyb21XYWxsZXQuaWQgfSB9LFxyXG4gICAgICAgIGpvdXJuYWw6IHsgY29ubmVjdDogeyBpZDogam91cm5hbD8uaWQgfSB9LFxyXG4gICAgICAgIGNoYW5nZTogLWFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1VzZXJMZWRnZXJCYWxhbmNlLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgICByZWFzb246IGBBaXJ0aW1lIFB1cmNoYXNlIHRvICR7cGF5bG9hZC5udW1iZXJ9YCxcclxuICAgICAgICAgIHByb3ZpZGVyOiAnQUtVVUsnLFxyXG4gICAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB3YWxsZXRzIGJhbGFuY2VzXHJcbiAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGZyb21XYWxsZXQuaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld1VzZXJMZWRnZXJCYWxhbmNlLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0F2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICsrKysrKysrKysrKysrKysrKysrKys6OisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxuICAgIC8vIEFkZCB0aGlzIHRyYW5zYWN0aW9uIHRvIHRoZSBQcm92aWRlciBhY2NvdW50XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHR4LnByb3ZpZGVyLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IHByb3ZpZGVyOiAnQUtVVUsnIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBwcm92aWRlcjogJ0FLVVVLJywgYmFsYW5jZTogYW10IH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIGJhbGFuY2U6IHsgaW5jcmVtZW50OiBhbXQudG9TdHJpbmcoKSB9IGFzIGFueSxcclxuICAgICAgICB0b3RhbDogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHByb3ZpZGVyIGZsb2F0IGxlZGdlciByb3cgKGNyZWRpdClcclxuICAgIGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIGNoYW5nZTogYW10LFxyXG4gICAgICAgIGJhbGFuY2VBZnRlcjogQmlnSW50KHByb3ZpZGVyLmJhbGFuY2UgYXMgYW55KSArIGFtdCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfQ1JFRElUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgYWlydGltZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICAgIHByb3ZpZGVyOiAnQUtVVUsnLFxyXG4gICAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbiAgICAvLyBUT0RPOjogSW1wbGVtZW50IEthZmthIG9yIFNRU1xyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIGNvdW50cnk6IHBheWxvYWQuY291bnRyeSxcclxuICAgICAgICAgIGFjY291bnROdW1iZXI6IHdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgYmFsYW5jZTogYW1vdW50SW5OYWlyYShuZXdBdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHN0cnVjdHVyZWQgcmVzdWx0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0cmFuc2FjdGlvbjoge1xyXG4gICAgICAgIC4uLnRyYW5zYWN0aW9uLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICB9LFxyXG4gICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgIGRlYml0TGVkZ2VySWQ6IGRlYml0LmlkLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcihhaXJ0aW1lLnRyYW5zYWN0aW9uLmlkLCAnQUlSVElNRScpO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5haXJ0aW1lLFxyXG4gICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRlQWlydGltZVBheW1lbnQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCAqIGFzIFBheW1lbnRTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGFpcnRpbWUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQWlydGltZVBheW1lbnQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGlLZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICAgICAgaWYgKCFpS2V5KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lkZW1wb3RlbmN5IGtleSBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnRTZXJ2aWNlLmFpcnRpbWUodXNlci5pZCwge1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5OiBpS2V5LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0FpcnRpbWUgcHVyY2hhc2VkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBwYXltZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGlkZW1wb3RlbmN5IH0gZnJvbSAnQC9taWRkbGV3YXJlL2lkZW1wb3RlbmN5JztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy9haXJ0aW1lJywgaWRlbXBvdGVuY3ksIENvbnRyb2xsZXIuYWlydGltZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICAvLyBHZXQgYWxsIHRyYW5zYWN0aW9ucyBieSB1c2VyXHJcbiAgc3RhdGljIGFzeW5jIGFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgZmlsdGVycyA9IHJlcS5xdWVyeT8uZmlsdGVycyA/PyB7fTtcclxuICAgICAgY29uc3QgcGFnZSA9IE51bWJlcihyZXEucXVlcnk/LnBhZ2UpID8/IDA7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBOdW1iZXIocmVxLnF1ZXJ5Py5zaXplKSA/PyAxMDtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgICAgdGFrZTogc2l6ZSxcclxuICAgICAgICBza2lwOiBwYWdlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zYWN0aW9ucyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zYWN0aW9ucyxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdHJhbnNhY3Rpb24gYnkgSURcclxuICBzdGF0aWMgYXN5bmMgZ2V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXM/LmlkO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24uZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2FjdGlvbiByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zYWN0aW9uLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLCBDb250cm9sbGVyLmdldCk7XHJcbnJvdXRlci5nZXQoJy8nLCBDb250cm9sbGVyLmFsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgUzNDbGllbnQsIFB1dE9iamVjdENvbW1hbmQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xyXG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tICdAYXdzLXNkay9zMy1yZXF1ZXN0LXByZXNpZ25lcic7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmNvbnN0IHIyID0gbmV3IFMzQ2xpZW50KHtcclxuICByZWdpb246ICdhdXRvJywgLy8gQ2xvdWRmbGFyZSBSMiB1c2VzIFwiYXV0b1wiXHJcbiAgZW5kcG9pbnQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUudXJsLFxyXG4gIGNyZWRlbnRpYWxzOiB7XHJcbiAgICBhY2Nlc3NLZXlJZDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5rZXkhLFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLnNlY3JldCEsXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjbGFzcyBDbG91ZGZsYXJlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFzeW5jIHVwbG9hZFRvUjIoZmlsZVBhdGg6IHN0cmluZywga2V5UHJlZml4ID0gJ3VwbG9hZHMnKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGZpbGVTdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGVQYXRoKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCk7XHJcbiAgICBjb25zdCBvYmplY3RLZXkgPSBgJHtrZXlQcmVmaXh9LyR7RGF0ZS5ub3coKX0tJHtmaWxlTmFtZX1gO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHIyLnNlbmQoXHJcbiAgICAgICAgbmV3IFB1dE9iamVjdENvbW1hbmQoe1xyXG4gICAgICAgICAgQnVja2V0OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmJ1Y2tldCEsXHJcbiAgICAgICAgICBLZXk6IG9iamVjdEtleSxcclxuICAgICAgICAgIEJvZHk6IGZpbGVTdHJlYW0sXHJcbiAgICAgICAgICBDb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsIC8vIGFkanVzdCBmb3IgaW1hZ2VzXHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBQdWJsaWMgVVJMIGlmIGJ1Y2tldCBwb2xpY3kgYWxsb3dzXHJcbiAgICAgIHJldHVybiBgJHtlbnZpcm9ubWVudC5jbG91ZGZsYXJlLnVybH0vJHtlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmJ1Y2tldH0vJHtvYmplY3RLZXl9YDtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDbG91ZGZsYXJlIFIyIHVwbG9hZCBmYWlsZWQ6JywgZXJyKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcGxvYWQgZmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZW5lcmF0ZVVwbG9hZFVSTChcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBjb250ZW50VHlwZTogc3RyaW5nLFxyXG4gICAgZXhwaXJlc0luOiBudW1iZXIgPSA2MCAqIDUsIC8vIDUgbWluXHJcbiAgKSB7XHJcbiAgICBjb25zdCBrZXkgPSBgdXBsb2Fkcy8ke2NyeXB0by5yYW5kb21VVUlEKCl9LSR7ZmlsZU5hbWV9YDtcclxuXHJcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IFB1dE9iamVjdENvbW1hbmQoe1xyXG4gICAgICBCdWNrZXQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUuYnVja2V0LFxyXG4gICAgICBLZXk6IGtleSxcclxuICAgICAgQ29udGVudFR5cGU6IGNvbnRlbnRUeXBlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2lnbmVkVXJsID0gYXdhaXQgZ2V0U2lnbmVkVXJsKHIyLCBjb21tYW5kLCB7IGV4cGlyZXNJbiB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzaWduZWRVcmwsIGtleSB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDbG91ZGZsYXJlIH0gZnJvbSAnQC9leHRlbnNpb25zL2Nsb3VkZmxhcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGdlbmVyYXRlVXBsb2FkVVJMKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBmaWxlTmFtZSwgY29udGVudFR5cGUgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgaWYgKCFmaWxlTmFtZSB8fCAhY29udGVudFR5cGUpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdmaWxlTmFtZSBhbmQgY29udGVudFR5cGUgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgY2xvdWRmbGFyZSA9IG5ldyBDbG91ZGZsYXJlKCk7XHJcbiAgICAgIGNvbnN0IHsgc2lnbmVkVXJsLCBrZXkgfSA9IGF3YWl0IGNsb3VkZmxhcmUuZ2VuZXJhdGVVcGxvYWRVUkwoXHJcbiAgICAgICAgZmlsZU5hbWUsXHJcbiAgICAgICAgY29udGVudFR5cGUsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgdXBsb2FkVXJsOiBzaWduZWRVcmwsXHJcbiAgICAgICAgcHVibGljVXJsOiBgJHtlbnZpcm9ubWVudC5jbG91ZGZsYXJlLnVybH0vJHtrZXl9YCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyKTtcclxuICAgICAgcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBhdXRoUm91dGVzIGZyb20gJy4vbW9kdWxlcy9hdXRoL2F1dGgucm91dGVzJztcclxuaW1wb3J0IGFnZW50Um91dGVzIGZyb20gJy4vbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzJztcclxuaW1wb3J0IHVzZXJSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3VzZXJzL3JvdXRlcyc7XHJcbmltcG9ydCBtZXJjaGFudFJvdXRlcyBmcm9tICcuL21vZHVsZXMvbWVyY2hhbnRzL3JvdXRlcyc7XHJcbmltcG9ydCB3ZWJob29rUm91dGVzIGZyb20gJy4vbW9kdWxlcy93ZWJob29rcy9yb3V0ZXMnO1xyXG5pbXBvcnQgV2FsbGV0Um91dGVzIGZyb20gJy4vbW9kdWxlcy93YWxsZXRzL3JvdXRlcyc7XHJcbmltcG9ydCBQYXltZW50Um91dGVzIGZyb20gJy4vbW9kdWxlcy9wYXltZW50cy9yb3V0ZXMnO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25Sb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL3RyYW5zYWN0aW9ucy9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4vbW9kdWxlcy9Db250cm9sbGVyJztcclxuaW1wb3J0IEF1dGggZnJvbSAnLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIudXNlKCcvYXV0aCcsIGF1dGhSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyUm91dGVzKTtcclxucm91dGVyLnVzZSgnL3dlYmhvb2tzJywgd2ViaG9va1JvdXRlcyk7XHJcbnJvdXRlci51c2UoJy9hZ2VudHMnLCBBdXRoLCBhZ2VudFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy9tZXJjaGFudHMnLCBBdXRoLCBtZXJjaGFudFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy93YWxsZXRzJywgQXV0aCwgV2FsbGV0Um91dGVzKTtcclxucm91dGVyLnVzZSgnL3BheW1lbnRzJywgQXV0aCwgUGF5bWVudFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy90cmFuc2FjdGlvbnMnLCBBdXRoLCBUcmFuc2FjdGlvblJvdXRlcyk7XHJcbnJvdXRlci5wb3N0KCcvdXBsb2Fkcy91cmwnLCBBdXRoLCBCYXNlQ29udHJvbGxlci5nZW5lcmF0ZVVwbG9hZFVSTCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsIi8vIHNyYy9hcHAudHNcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9taWRkbGV3YXJlL2Vycm9ySGFuZGxlcic7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShoZWxtZXQoKSk7XHJcbmFwcC51c2UoY29ycyh7IG9yaWdpbjogJyonIH0pKTsgLy8gdGlnaHRlbiBsYXRlclxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbmFwcC51c2UobW9yZ2FuKCdjb21iaW5lZCcpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBcHAgPSAoKSA9PiB7XHJcbiAgYXBwLmdldCgnLycsIChfLCByZXMpID0+IHJlcy5qc29uKHsgb2s6IHRydWUgfSkpO1xyXG4gIGFwcC5nZXQoJy9oZWFsdGgnLCAoXywgcmVzKSA9PiByZXMuanNvbih7IG9rOiB0cnVlIH0pKTtcclxuXHJcbiAgLy8gcmVnaXN0ZXIgcm91dGVzXHJcbiAgYXBwLnVzZSgnL2FwaS92MScsIFJvdXRlcyk7XHJcbiAgLy8gYXBwLnVzZShlcnJvckhhbmRsZXIpO1xyXG5cclxuICBhcHAudXNlKChyZXEsIHJlcyk9PntcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiBcIkVuZHBvaW50IG5vdCBmb3VuZC4gcGxlYXNlLCBjaGVjayB0aGUgdXJsIGFuZCB0cnkgYWdhaW4uXCJ9KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBhcHA7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcCgpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYPCfmoAgV2VwYXkgYmFja2VuZCBsaXN0ZW5pbmcgb24gcG9ydDogaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZm9yZ290UGFzc3dvcmQiLCJDbGllbnQiLCJjcnlwdG8iLCJsaW1pdGVyIiwiVFhORkVFIiwicmVkaXNDbGllbnQiLCJCdWxsUXVldWUiLCJhZGRWZXJpZmljYXRpb24iLCJXYWxsZXRTZXJ2aWNlLmNyZWF0ZSIsIlZhbGlkYXRlT1RQIiwidXNlclNlcnZpY2UudmFsaWRhdGVCVk4iLCJ1c2VyU2VydmljZS5nZXRCVk5EYXRhIiwiYXV0aFNlcnZpY2UucmVnaXN0ZXIiLCJhdXRoU2VydmljZS5sb2dpbiIsImF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlciIsImF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkIiwiYXV0aFNlcnZpY2UuZm9yZ290UGluIiwiYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCIsImF1dGhTZXJ2aWNlLnJlc2V0UGluIiwidXNlclNlcnZpY2UudXBkYXRlIiwiYXV0aFNlcnZpY2UucmVzZW5kT1RQIiwicm91dGVyIiwiVmFsaWRhdGVWZXJpZmljYXRpb24iLCJ1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSIsInVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEIiwidXNlclNlcnZpY2UuY3JlYXRlUGluIiwidXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbiIsInVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbiIsInVzZXJTZXJ2aWNlLmNhcHR1cmVGaW5nZXJQcmludCIsIkNvbnRyb2xsZXIiLCJNZXJjaGFudC5jcmVhdGVCdXNpbmVzcyIsIk1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbiIsIndlYmhvb2tTZXJ2aWNlLmluZmxvdyIsIndlYmhvb2tTZXJ2aWNlLnBheW91dCIsIldhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2ZlciIsIldhbGxldFNlcnZpY2UudHJhbnNmZXJUb0V4dGVybmFsQmFuayIsIlVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyIiwiUGF5bWVudFNlcnZpY2UuYWlydGltZSIsImF1dGhSb3V0ZXMiLCJ1c2VyUm91dGVzIiwid2ViaG9va1JvdXRlcyIsImFnZW50Um91dGVzIiwibWVyY2hhbnRSb3V0ZXMiLCJXYWxsZXRSb3V0ZXMiLCJQYXltZW50Um91dGVzIiwiVHJhbnNhY3Rpb25Sb3V0ZXMiLCJhcHAiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQyxNQUFNLENBQUMsU0FBaUIsQ0FBQyxNQUFNLEdBQUcsWUFBQTtJQUNqQyxNQUFNLEdB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LEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx3QkFBd0I7QUFDOUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtB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
