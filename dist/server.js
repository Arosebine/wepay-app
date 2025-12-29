import express, { Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
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
        await limiter$1.schedule(() => sendOTP(existingUser));
        return existingUser;
    }
    if (existingUser && existingUser.emailVerified) {
        throw new CustomError("User already registered", 409);
    }
    const record = {
        ...data.extra,
    };
    if (data.role === "AGENT")
        record.agent = { create: {} };
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
    await limiter$1.schedule(() => sendOTP(user));
    return user;
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
async function getUserDetailByPhone(payload) {
    const user = await prisma.user.findFirst({
        where: {
            phone: payload?.phone,
        },
    });
    if (!user)
        throw new CustomError('User not found', 404);
    return { ...user };
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
            bvn: bvnHash,
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
    static async getUserDetails(req, res) {
        try {
            const { error, value } = ValidateForgotPin().validate(req.body);
            if (error)
                throw new CustomError(error.details[0].message, 422);
            const payload = await getUserDetailByPhone(value);
            return res.status(200).json({
                message: 'User details retrieved successfully',
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
router$8.get('/user-details', AuthController.getUserDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJpc21hL2NsaWVudC50cyIsIi4uL3NyYy9leHRlbnNpb25zL21haWwtc2VydmljZS90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy93ZWxjb21lLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwudHMiLCIuLi9zcmMvY29uZmlnL2Vudi50cyIsIi4uL3NyYy91dGlscy9sb2dnZXIudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbC50cyIsIi4uL3NyYy91dGlscy9jdXN0b21FcnJvci50cyIsIi4uL3NyYy9leHRlbnNpb25zL2FrdXVrL3V0aWxzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvYWt1dWsvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaGFzaC50cyIsIi4uL3NyYy91dGlscy9qd3QudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIi4uL3NyYy91dGlscy9nZXRVc2VyLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscy50cyIsIi4uL3NyYy9leHRlbnNpb25zL2VtYmVkbHkvaW5kZXgudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5L2luZGV4LnRzIiwiLi4vc3JjL2pvYnMvcHJvY2Vzcy10cmFuc2Zlci50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtYWlydGltZS50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucy50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQudHMiLCIuLi9zcmMvam9icy9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycy50cyIsIi4uL3NyYy9qb2JzL1dvcmtlcnMudHMiLCIuLi9zcmMvam9icy9xdWV1ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvYXV0aC92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvY29udHJvbGxlci50cyIsIi4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvc2VydmljZS50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93ZWJob29rcy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvd2ViaG9va3MvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3dhbGxldHMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvd2FsbGV0cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3ZhbGlkYXRvci50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy9wYXltZW50cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21vZHVsZXMvcGF5bWVudHMvcm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdHJhbnNhY3Rpb25zL2NvbnRyb2xsZXIudHMiLCIuLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvY2xvdWRmbGFyZS9pbmRleC50cyIsIi4uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIudHMiLCIuLi9zcmMvcm91dGVzLnRzIiwiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3ByaXNtYS9jbGllbnQudHNcclxuKEJpZ0ludC5wcm90b3R5cGUgYXMgYW55KS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaW50ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgcmV0dXJuIGludCA/PyB0aGlzLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgLy8gbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAvKiBCYXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByZWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtc28taGlkZTogYWxsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5LFxyXG4gICAgICB0ZCxcclxuICAgICAgdGgge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLFxyXG4gICAgICB1bCxcclxuICAgICAgb2wsXHJcbiAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAuc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyogVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFsaWduLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idXR0b24tLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbi0tcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MTM2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRjYxMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogUmVsYXRlZCBJdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0JDQ0NGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBEaXNjb3VudCBDb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBTb2NpYWwgSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfaGVhZGluZyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM4NTg3OEU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV90b3RhbC0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM2QjZFNzY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLW1hc3RoZWFkX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktc3ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQsXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcclxuICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuICAgICAgICAuZi1mYWxsYmFjayAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGUgbGluayBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPWZvcmdvdF9wYXNzd29yZF9lbWFpbFwiIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbS9fbnV4dC9pbWcvbG9nby4wNzc3OWUyLnBuZ1wiIGFsdD1cIk1hc3RlcmluZ2JhY2tlbmRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtYm9keVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYWNjb3VudC4gVXNlIHRoZSBidXR0b24gYmVsb3cgdG8gcmVzZXQgaXQuIDxzdHJvbmc+VGhpcyBwYXNzd29yZCByZXNldCBpcyBvbmx5IHZhbGlkIGZvciB0aGUgbmV4dCA2MCBtaW51dGVzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cImYtZmFsbGJhY2sgYnV0dG9uIGJ1dHRvbi0tZ3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lc3NhZ2UuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBzZWN1cml0eSwgaWYgeW91IGRpZCBub3QgcmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgb3IgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QHByb2ZhaWxpLmNvbVwiPmNvbnRhY3Qgc3VwcG9ydDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+VGhlICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9IFRlYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlBvcnQgSGFyY291cnQsIFJpdmVycywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIiA+XHJcbiAgICAgICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiY29sb3Itc2NoZW1lXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODY5RDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICBvbCxcclxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAuNGVtIDAgMS4xODc1ZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ1dHRvbi0tZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJDNjY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYxMzY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEF0dHJpYnV0ZSBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXNfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBSZWxhdGVkIEl0ZW1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWRfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9oZWFkaW5nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEwcHggOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogRGF0YSB0YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuc3ViIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLW1hc3RoZWFkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNBOEFBQUY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgb2wsXHJcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICAgIHN1cHBvcnRlZC1jb2xvci1zY2hlbWVzOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwhLS1baWYgbXNvXT5cclxuICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgICAgIC5mLWZhbGxiYWNrICB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIj5Zb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCB5b3VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXBhc3N3b3JkX2NoYW5nZWRfZW1haWxcIiBjbGFzcz1cImYtZmFsbGJhY2sgZW1haWwtbWFzdGhlYWRfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbWFpbCBCb2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBCb2R5IGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBjb25uZWN0ZWQgdG8geW91ciBNYXN0ZXJpbmdiYWNrZW5kIGFjY291bnQgd2FzIGNoYW5nZWQuIElmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzIGNoYW5nZSwgdGFsayB0byB1cyB0byByZXZlcnQgaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFsayBzb29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlRoZSAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSBUZWFtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM4NjlkNDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjY2NmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9oZWFkaW5nIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjY2NmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiY2NjZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50X2hlYWRpbmcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHggMTBweCA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBEYXRhIHRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaGVhZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICM4NTg3OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgY29sb3I6ICM2YjZlNzY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogOTRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YWFhZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZiNmU3NjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWNvbnRlbnQsXHJcbiAgICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgdWwsXHJcbiAgICAgICAgICBvbCxcclxuICAgICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgc3VwcG9ydGVkLWNvbG9yLXNjaGVtZXM6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIlxyXG4gICAgICAgID5XZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgYWJvYXJkLjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLW1hc3RoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXdlbGNvbWVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTcwXCJcclxuICAgICAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9hcmQuIE15IG5hbWUgaXMgU29sb21vbiBhbmQgSSdsbCBzdXBwb3J0IHlvdSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSdyZSBoZXJlLCBsZXQgbWUgYnJpZWZseSByZWNhcCB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIE1hc3RlcmluZ2JhY2tlbmQgY2FuIG9mZmVyIHlvdTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpZGVvIGFuZCBUZXh0IGJhc2VkIEJhY2tlbmQgRW5naW5lZXJpbmcgY291cnNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJhY2tlbmQgUG9ydGZvbGlvIHRvIHNob3djYXNlIHlvdXIgc2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXJuIHRvIGJ1aWxkIGZyb20gVGhvdXNhbmRzIFJlYWwtd29ybGQgUHJvamVjdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyYWNrIHlvdXIgbGVhcm5pbmdzIGFuZCBzZXQgc2NoZWR1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IEV4cGVydCBWZXR0ZWQgcm9hZG1hcHMgdG8gbGVhcm4gYmFja2VuZCBlbmdpbmVlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwIGNvdXJzZXMgdG8gQmFja2VuZCBQcm9qZWN0cyB0byBoZWxwIHlvdSBtYXN0ZXIgeW91ciBza2lsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25saW5lIGNvZGluZyBjaGFsbGVuZ2VzIGJ5IGV4cGVydHMgdG8gaW1wcm92ZSB5b3VyIHNraWxsczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGljayBwcm9qZWN0cyBmcm9tIGRpZmZlcmVudCBidXNpbmVzcyBkb21haW5zIHRvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIG9mIHRoZSBmZWF0dXJlcyBvbiB0aGUgd2F5OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9hZG1hcHMgPT4gPC9zdHJvbmc+TUIgUm9hZG1hcCBlbmFibGVzIHN0cnVjdHVyZWQtYmFzZWQgbGVhcm5pbmcgYXBwcm9hY2ggZm9yIEJhY2tlbmQgZW5naW5lZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0IExhbmQgPT4gPC9zdHJvbmc+TUIgUHJvamVjdHMgZW5hYmxlcyBCYWNrZW5kIGVuZ2luZWVycyB0aHJvdWdoIGEgbGVhcm4tYnktYnVpbGRpbmcgbW9kZWwuIEJ1aWxkIHJlYWwtd29ybGQgYmFja2VuZCBwcm9qZWN0cyB3aXRob3V0IGNvZGluZyB0aGUgZnJvbnRlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tlbmQgUG9ydGZvbGlvID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DcmVhdGUgYW5kIG1hbmFnZSB5b3VyIGJhY2tlbmQgcG9ydGZvbGlvIHdpdGggdG9ucyBvZiByZWFsIHdvcmxkIGJhY2tlbmQgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tMYW5kID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5MZWFybiBiYWNrZW5kIGVuZ2luZWVyaW5nIGJ5IHNvbHZpbmcgY2hhbGxlbmdlcyBpbiBhIGdhbWlmeWluZyB3YXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGRvbid0IGJlIHNoeSBhbmQgcmVhY2ggb3V0IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91ciB0ZWFtIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BtYXN0ZXJpbmdiYWNrZW5kLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPmluZm9AbWFzdGVyaW5nYmFja2VuZC5jb208L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCBpbiBubyB0aW1lLCBoZXJlJ3MgYSBsaW5rIHRvIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVtbyB2aWRlbzwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vcG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5ibG9nPC9hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjBweCAwIDAgMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRhbGsgc29vbiwgPGJyIC8+U29sb21vbiBmcm9tICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICBcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby4gPGJyIC8+UG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBcclxuICBgO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcmVoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgbXNvLWhpZGU6IGFsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCxcclxuICAgICAgICB1bCxcclxuICAgICAgICBvbCxcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRGlzY291bnQgQ29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU29jaWFsIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2Zvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwtLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZF9sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5LXN1YiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKk1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAsXHJcbiAgICAgICAgICB1bCxcclxuICAgICAgICAgIG9sLFxyXG4gICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgY29kZSB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBUaGUgY29kZSBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtY29udGVudFwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbT9zb3VyY2U9dmVyaWZpY2F0aW9uX2VtYWlsXCIgY2xhc3M9XCJmLWZhbGxiYWNrIGVtYWlsLW1hc3RoZWFkX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQm9keSBjb250ZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZi1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhhbmtzIGZvciBzaWduaW5nIHVwIGZvciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSEgVGhpcyBlbWFpbCB2ZXJpZmljYXRpb24gc3RlcCBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBhY2N1cmF0ZSBlbWFpbCBhZGRyZXNzIHRvIGNvbW11bmljYXRlIGltcG9ydGFudCBhY2NvdW50IGV2ZW50cyB0byB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSBjb3B5IGFuZCBwYXN0ZSB0aGUgY29kZSBiZWxvdyBpbiB5b3VyIGJyb3dzZXIsIGJhY2sgdG8gdGhlIHNpZ24gdXAgd29ya2Zsb3cgaW5zaWRlIG91ciBhcHA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBY3Rpb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHttZXNzYWdlLmNvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5UaGUgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gVGVhbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiNTcwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+JmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJjb25zdCBkZWZhdWx0UG9ydCA9IDMwMDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcclxuICBjb250ZXh0OiAnTE9DQUwnIHwgJ0RFVkVMT1AnIHwgJ1NUQUdJTkcnIHwgJ1BST0RVQ1RJT04nO1xyXG4gIGFwcE5hbWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwb3J0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgZGVidWc/OiBzdHJpbmc7XHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hTZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hEYXlzOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzSW46IHN0cmluZztcclxuICAgIHNhbHRSb3VuZHM6IG51bWJlcjtcclxuICB9O1xyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbiAgICBwb3J0OiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXdzOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGJ1Y2tldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IG51bWJlcjtcclxuICB9O1xyXG4gIHFvcmVJZDoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjbGllbnQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWt1dWs6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlbWJlZGx5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBheW91dFVSTDogc3RyaW5nO1xyXG4gICAgd2ViaG9va1VSTDogc3RyaW5nO1xyXG4gICAgb3JnQWNjb3VudDogbnVtYmVyO1xyXG4gICAgb3JnTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgbWFpbDoge1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgcG9ydDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGNsaWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lVGVtcG9yYXJ5OiBzdHJpbmc7XHJcbiAgICBhc3luY0Z1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrUXVldWU6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUhhbmRsZXI6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBvYXV0aEdvb2dsZUNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgICBjYWxsYmFja1VSTDogc3RyaW5nO1xyXG4gIH07XHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWNrZXQ6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9XHJcbiAgKHByb2Nlc3MuZW52LkNPTlRFWFQgYXNcclxuICAgIHwgJ0xPQ0FMJ1xyXG4gICAgfCAnREVWRUxPUCdcclxuICAgIHwgJ1NUQUdJTkcnXHJcbiAgICB8ICdQUk9EVUNUSU9OJ1xyXG4gICAgfCB1bmRlZmluZWQpIHx8ICdMT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xyXG4gIGNvbnRleHQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCBkZWZhdWx0UG9ydCxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5BUFBfTkFNRSBhcyBzdHJpbmcsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5GRV9VUkwgYXMgc3RyaW5nLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5ERUJVRyxcclxuXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IE51bWJlcihwcm9jZXNzLmVudi5QQVNTV09SRF9SRVNFVF9FWFBJUkVTX01JTiksXHJcbiAgfSxcclxuXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGF3czoge1xyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HQ1BfUFJPSUVDVF9JRCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVRfTkFNRSBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX0VYUElSRVNfSU4gYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaERheXM6IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fRVhQSVJFU19EQVlTIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVUIGFzIHN0cmluZyxcclxuICAgIHNhbHRSb3VuZHM6IE51bWJlcihwcm9jZXNzLmVudi5BVVRIX1NBTFRfUk9VTkRTKSB8fCAxMCxcclxuICB9LFxyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlJFRElTX1BPUlQgfHwgJzYzNzknKSxcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMIGFzIHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRURJU19QQVNTV09SRCxcclxuICB9LFxyXG4gIG1haWw6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfSE9TVCBhcyBzdHJpbmcsXHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTUFJTF9QT1JUKSB8fCAyNTI1LFxyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUgYXMgc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgYXMgc3RyaW5nLFxyXG4gICAgc2VuZGVyOiBwcm9jZXNzLmVudi5NQUlMX1NFTkRFUiBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR0NQX1BST0pFQ1RfSUQhLFxyXG4gICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUwhLFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuR0NQX1BSSVZBVEVfS0VZISxcclxuICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVQhLFxyXG4gICAgYnVja2V0TmFtZVRlbXBvcmFyeTogcHJvY2Vzcy5lbnYuR0NQX0JVQ0tFVF9URU1QT1JBUlkhLFxyXG4gICAgYXN5bmNGdW5jdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX0ZVTkNUSU9OISxcclxuICAgIHRhc2tRdWV1ZTogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUUhLFxyXG4gICAgdGFza1F1ZXVlSGFuZGxlcjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfSEFORExFUiEsXHJcbiAgICB0YXNrUXVldWVMb2NhdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfTE9DQVRJT04hLFxyXG4gICAgb2F1dGhHb29nbGVDbGllbnRUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfR09PR0xFX0NMSUVOVF9UT0tFTiEsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIGNhbGxiYWNrVVJMOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTEJBQ0shLFxyXG4gIH0sXHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LllPVVZFUklGWV9VUkwgYXMgc3RyaW5nLFxyXG4gICAga2V5OiBwcm9jZXNzLmVudi5ZT1VWRVJJRllfS0VZIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGVtYmVkbHk6IHtcclxuICAgIGlkOiBwcm9jZXNzLmVudi5FTUJFRExZX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuRU1CRURMWV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5FTUJFRExZX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBwYXlvdXRVUkw6IHByb2Nlc3MuZW52LkVNQkVETFlfUEFZT1VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgICB3ZWJob29rVVJMOiBwcm9jZXNzLmVudi5FTUJFRExZX1dFQkhPT0tfVVJMIGFzIHN0cmluZyxcclxuICAgIG9yZ0FjY291bnQ6IE51bWJlcihwcm9jZXNzLmVudi5FTUJFRExZX09SR0FOSVpBVElPTl9BQ0NPVU5UKSxcclxuICAgIG9yZ05hbWU6IHByb2Nlc3MuZW52LkVNQkVETFlfT1JHQU5JWkFUSU9OX05BTUUgYXMgc3RyaW5nLFxyXG4gIH0sXHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5DTE9VREZMQVJFX0JVQ0tFVF9OQU1FIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9BQ0NFU1NfS0VZX0lEIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9TRUNSRVRfQUNDRVNTX0tFWSBhcyBzdHJpbmcsXHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQlVDS0VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgfSxcclxuXHJcbiAgcW9yZUlkOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlFPUkVJRF9CQVNFX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjbGllbnQ6IHByb2Nlc3MuZW52LlFPUkVJRF9DTElFTlQgYXMgc3RyaW5nLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5RT1JFSURfU0VDUkVUIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGFrdXVrOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkFLVVVLX0JBU0VfVVJMIGFzIHN0cmluZyxcclxuICAgIGlkOiBwcm9jZXNzLmVudi5BS1VVS19BQ0NPVU5UX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQUtVVUtfS0VZIGFzIHN0cmluZyxcclxuICAgIHNlbmRlcjogcHJvY2Vzcy5lbnYuQUtVVUtfU0VOREVSIGFzIHN0cmluZyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZGVidWdNb2R1bGUgZnJvbSAnZGVidWcnO1xyXG5jb25zdCBkZWJ1ZyA9IGRlYnVnTW9kdWxlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luZm8gPSBkZWJ1ZygnYXBpOmluZm8nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gZGVidWcoJ2FwaTplcnJvcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc29sdmVyID0gZGVidWcoJ2FwaTpmaWVsZC1yZXNvbHZlcicpO1xyXG5leHBvcnQgY29uc3QgbG9nUXVlcnkgPSBkZWJ1ZygnYXBpOnF1ZXJ5Jyk7XHJcbmV4cG9ydCBjb25zdCBsb2dNdXRhdGlvbiA9IGRlYnVnKCdhcGk6bXV0YXRpb24nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0hlbHBlciA9IGRlYnVnKCdhcGk6aGVscGVyJyk7XHJcbiIsImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHBhc3N3b3JkQ2hhbmdlZCBmcm9tICcuL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi90ZW1wbGF0ZXMvd2VsY29tZSc7XHJcbmltcG9ydCB2ZXJpZmljYXRpb25FbWFpbCBmcm9tICcuL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnQC91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xyXG5pbXBvcnQgeyBNYWlsT3B0aW9ucywgU2VsZWN0VGVtcGxhdGUsIFNlbmRFbWFpbCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgdG8sIHRlbXBsYXRlLCB2YXJpYWJsZXMsIHRlbXBsYXRlSWQgfTogU2VuZEVtYWlsKSA9PiB7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdObyBtYWlsIHRlbXBsYXRlIHNwZWNpZmllZCcpO1xyXG5cclxuICBjb25zdCB7IHN1YmplY3QsIHRlbXBsYXRlOiB0ZW1wIH0gPSBhd2FpdCBzZWxlY3RUZW1wbGF0ZSh7XHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKFsnUFJPRFVDVElPTicsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkpIHtcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0tFWSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQGVtYWlscy5tYXN0ZXJpbmdiYWNrZW5kLmNvbT5gLFxyXG4gICAgICB0bzogdG8sXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnM6IE1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQHByZXNzbW9uaS5jb20+YCxcclxuICAgICAgdG8sXHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haWxDb25maWc6IGFueSA9IHtcclxuICAgICAgaG9zdDogZW52aXJvbm1lbnQubWFpbD8uaG9zdCB8fCAnc210cC5tYWlsdHJhcC5pbycsXHJcbiAgICAgIHBvcnQ6IGVudmlyb25tZW50Lm1haWw/LnBvcnQgfHwgMjUyNSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogZW52aXJvbm1lbnQubWFpbD8udXNlcm5hbWUgfHwgJ2EzZDExNTliYmJlM2E2JywgLy9nZW5lcmF0ZWQgYnkgTWFpbHRyYXBcclxuICAgICAgICBwYXNzOiBlbnZpcm9ubWVudC5tYWlsPy5wYXNzd29yZCB8fCAnMmI0NjY4ZmUyZDZhNjcnLCAvL2dlbmVyYXRlZCBieSBNYWlsdHJhcFxyXG4gICAgICB9LFxyXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcclxuICAgICAgZ3JlZXRpbmdUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgc29ja2V0VGltZW91dDogMTAwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1haWxPcHRpb25zLCBtYWlsQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQubWFpbD8uaG9zdD8uaW5jbHVkZXMoJ2dtYWlsJykpXHJcbiAgICAgIG1haWxDb25maWdbJ3NlcnZpY2UnXSA9IGVudmlyb25tZW50Lm1haWw/Lmhvc3Q7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChtYWlsQ29uZmlnKTtcclxuXHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBsb2dFcnJvcignc2VuZEVtYWlsICVvJywgeyBtYWlsT3B0aW9ucywgZXJyb3IgfSk7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndHJ5IGVtYWlsIGFnYWluIGxhdGVyJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgdHJhbnNwb3J0ZXIuY2xvc2UoKTtcclxuICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0VGVtcGxhdGUgPSBhc3luYyAoeyB0ZW1wbGF0ZSwgdmFyaWFibGVzIH06IFNlbGVjdFRlbXBsYXRlKSA9PiB7XHJcbiAgbGV0IHN1YmplY3QgPSBgYDtcclxuICBsZXQgX3RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcclxuICAgIGNhc2UgJ2ZvcmdvdC1wYXNzd29yZCc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFBhc3N3b3JkIFJlc2V0YDtcclxuICAgICAgX3RlbXBsYXRlID0gZm9yZ290UGFzc3dvcmQodmFyaWFibGVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2ZXJpZmljYXRpb24nOlxyXG4gICAgICBzdWJqZWN0ICs9IGBFbWFpbCBWZXJpZmljYXRpb25gO1xyXG4gICAgICBfdGVtcGxhdGUgPSB2ZXJpZmljYXRpb25FbWFpbCh2YXJpYWJsZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Bhc3N3b3JkLWNoYW5nZWQnOlxyXG4gICAgICBzdWJqZWN0ICs9IGBQYXNzd29yZCBDaGFuZ2VkYDtcclxuICAgICAgX3RlbXBsYXRlID0gcGFzc3dvcmRDaGFuZ2VkKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnd2VsY29tZSc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFdlbGNvbWUgdG8gTWFzdGVyaW5nYmFja2VuZCFgO1xyXG4gICAgICBfdGVtcGxhdGUgPSB3ZWxjb21lKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiB7IHRlbXBsYXRlOiBfdGVtcGxhdGUsIHN1YmplY3QgfTtcclxufTtcclxuIiwiY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHVibGljIHN0YXR1cztcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnlDb2RlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkzJyxcclxuICAgIGNvZGU6ICdBRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxhbmQgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdBWCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU1JyxcclxuICAgIGNvZGU6ICdBTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjEzJyxcclxuICAgIGNvZGU6ICdEWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW1lcmljYW5TYW1vYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY4NCcsXHJcbiAgICBjb2RlOiAnQVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZG9ycmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NicsXHJcbiAgICBjb2RlOiAnQUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ0JyxcclxuICAgIGNvZGU6ICdBTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5ndWlsbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNjQnLFxyXG4gICAgY29kZTogJ0FJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzInLFxyXG4gICAgY29kZTogJ0FRJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAgIGRpYWxfY29kZTogJysxMjY4JyxcclxuICAgIGNvZGU6ICdBRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1NCcsXHJcbiAgICBjb2RlOiAnQVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FybWVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NCcsXHJcbiAgICBjb2RlOiAnQU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FydWJhJyxcclxuICAgIGRpYWxfY29kZTogJysyOTcnLFxyXG4gICAgY29kZTogJ0FXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzYxJyxcclxuICAgIGNvZGU6ICdBVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXVzdHJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDMnLFxyXG4gICAgY29kZTogJ0FUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBemVyYmFpamFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTQnLFxyXG4gICAgY29kZTogJ0FaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCYWhhbWFzJyxcclxuICAgIGRpYWxfY29kZTogJysxMjQyJyxcclxuICAgIGNvZGU6ICdCUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFocmFpbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTczJyxcclxuICAgIGNvZGU6ICdCSCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuZ2xhZGVzaCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrODgwJyxcclxuICAgIGNvZGU6ICdCRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNDYnLFxyXG4gICAgY29kZTogJ0JCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxhcnVzJyxcclxuICAgIGRpYWxfY29kZTogJyszNzUnLFxyXG4gICAgY29kZTogJ0JZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxnaXVtJyxcclxuICAgIGRpYWxfY29kZTogJyszMicsXHJcbiAgICBjb2RlOiAnQkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAxJyxcclxuICAgIGNvZGU6ICdCWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmVuaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyOScsXHJcbiAgICBjb2RlOiAnQkonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jlcm11ZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE0NDEnLFxyXG4gICAgY29kZTogJ0JNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3NScsXHJcbiAgICBjb2RlOiAnQlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MScsXHJcbiAgICBjb2RlOiAnQk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NycsXHJcbiAgICBjb2RlOiAnQkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgIGRpYWxfY29kZTogJysyNjcnLFxyXG4gICAgY29kZTogJ0JXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU1JyxcclxuICAgIGNvZGU6ICdCUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAgIGRpYWxfY29kZTogJysyNDYnLFxyXG4gICAgY29kZTogJ0lPJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjczJyxcclxuICAgIGNvZGU6ICdCTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1OScsXHJcbiAgICBjb2RlOiAnQkcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0J1cmtpbmEgRmFzbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI2JyxcclxuICAgIGNvZGU6ICdCRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVydW5kaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU3JyxcclxuICAgIGNvZGU6ICdCSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FtYm9kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1NScsXHJcbiAgICBjb2RlOiAnS0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgIGRpYWxfY29kZTogJysyMzcnLFxyXG4gICAgY29kZTogJ0NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYW5hZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ0NBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcclxuICAgIGRpYWxfY29kZTogJysyMzgnLFxyXG4gICAgY29kZTogJ0NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzQ1JyxcclxuICAgIGNvZGU6ICdLWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJysyMzYnLFxyXG4gICAgY29kZTogJ0NGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGFkJyxcclxuICAgIGRpYWxfY29kZTogJysyMzUnLFxyXG4gICAgY29kZTogJ1REJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGlsZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTYnLFxyXG4gICAgY29kZTogJ0NMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrODYnLFxyXG4gICAgY29kZTogJ0NOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ1gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ0MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgIGRpYWxfY29kZTogJys1NycsXHJcbiAgICBjb2RlOiAnQ08nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbW9yb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OScsXHJcbiAgICBjb2RlOiAnS00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDInLFxyXG4gICAgY29kZTogJ0NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDMnLFxyXG4gICAgY29kZTogJ0NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4MicsXHJcbiAgICBjb2RlOiAnQ0snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwNicsXHJcbiAgICBjb2RlOiAnQ1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI1JyxcclxuICAgIGNvZGU6ICdDSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3JvYXRpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg1JyxcclxuICAgIGNvZGU6ICdIUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTMnLFxyXG4gICAgY29kZTogJ0NVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDeXBydXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NycsXHJcbiAgICBjb2RlOiAnQ1knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0N6ZWNoIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJys0MjAnLFxyXG4gICAgY29kZTogJ0NaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZW5tYXJrJyxcclxuICAgIGRpYWxfY29kZTogJys0NScsXHJcbiAgICBjb2RlOiAnREsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RqaWJvdXRpJyxcclxuICAgIGRpYWxfY29kZTogJysyNTMnLFxyXG4gICAgY29kZTogJ0RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc2NycsXHJcbiAgICBjb2RlOiAnRE0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg0OScsXHJcbiAgICBjb2RlOiAnRE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VjdWFkb3InLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MycsXHJcbiAgICBjb2RlOiAnRUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VneXB0JyxcclxuICAgIGRpYWxfY29kZTogJysyMCcsXHJcbiAgICBjb2RlOiAnRUcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcclxuICAgIGRpYWxfY29kZTogJys1MDMnLFxyXG4gICAgY29kZTogJ1NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQwJyxcclxuICAgIGNvZGU6ICdHUScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjkxJyxcclxuICAgIGNvZGU6ICdFUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXN0b25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcyJyxcclxuICAgIGNvZGU6ICdFRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoaW9waWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1MScsXHJcbiAgICBjb2RlOiAnRVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdGSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk4JyxcclxuICAgIGNvZGU6ICdGTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlqaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc5JyxcclxuICAgIGNvZGU6ICdGSicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdGSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJhbmNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMycsXHJcbiAgICBjb2RlOiAnRlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NCcsXHJcbiAgICBjb2RlOiAnR0YnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OScsXHJcbiAgICBjb2RlOiAnUEYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhYm9uJyxcclxuICAgIGRpYWxfY29kZTogJysyNDEnLFxyXG4gICAgY29kZTogJ0dBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYW1iaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMCcsXHJcbiAgICBjb2RlOiAnR00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlb3JnaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk5NScsXHJcbiAgICBjb2RlOiAnR0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQ5JyxcclxuICAgIGNvZGU6ICdERScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2hhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMycsXHJcbiAgICBjb2RlOiAnR0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpYnJhbHRhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUwJyxcclxuICAgIGNvZGU6ICdHSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMCcsXHJcbiAgICBjb2RlOiAnR1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dyZWVubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk5JyxcclxuICAgIGNvZGU6ICdHTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlbmFkYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTQ3MycsXHJcbiAgICBjb2RlOiAnR0QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MCcsXHJcbiAgICBjb2RlOiAnR1AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NzEnLFxyXG4gICAgY29kZTogJ0dVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwMicsXHJcbiAgICBjb2RlOiAnR1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1ZXJuc2V5JyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI0JyxcclxuICAgIGNvZGU6ICdHTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3VpbmVhLUJpc3NhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ1JyxcclxuICAgIGNvZGU6ICdHVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3V5YW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1OTUnLFxyXG4gICAgY29kZTogJ0dZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTA5JyxcclxuICAgIGNvZGU6ICdIVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3OScsXHJcbiAgICBjb2RlOiAnVkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbmR1cmFzJyxcclxuICAgIGRpYWxfY29kZTogJys1MDQnLFxyXG4gICAgY29kZTogJ0hOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MicsXHJcbiAgICBjb2RlOiAnSEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0h1bmdhcnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM2JyxcclxuICAgIGNvZGU6ICdIVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSWNlbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU0JyxcclxuICAgIGNvZGU6ICdJUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkxJyxcclxuICAgIGNvZGU6ICdJTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kb25lc2lhJyxcclxuICAgIGRpYWxfY29kZTogJys2MicsXHJcbiAgICBjb2RlOiAnSUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YgUGVyc2lhbiBHdWxmJyxcclxuICAgIGRpYWxfY29kZTogJys5OCcsXHJcbiAgICBjb2RlOiAnSVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYXEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2NCcsXHJcbiAgICBjb2RlOiAnSVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyZWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1MycsXHJcbiAgICBjb2RlOiAnSUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzbGUgb2YgTWFuJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnSU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcyJyxcclxuICAgIGNvZGU6ICdJTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSXRhbHknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM5JyxcclxuICAgIGNvZGU6ICdJVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSmFtYWljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg3NicsXHJcbiAgICBjb2RlOiAnSk0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phcGFuJyxcclxuICAgIGRpYWxfY29kZTogJys4MScsXHJcbiAgICBjb2RlOiAnSlAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0plcnNleScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDQnLFxyXG4gICAgY29kZTogJ0pFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdKb3JkYW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MicsXHJcbiAgICBjb2RlOiAnSk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzc3JyxcclxuICAgIGNvZGU6ICdLWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS2VueWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1NCcsXHJcbiAgICBjb2RlOiAnS0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgIGRpYWxfY29kZTogJys2ODYnLFxyXG4gICAgY29kZTogJ0tJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcclxuICAgIGRpYWxfY29kZTogJys4NTAnLFxyXG4gICAgY29kZTogJ0tQJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzgyJyxcclxuICAgIGNvZGU6ICdLUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS3V3YWl0JyxcclxuICAgIGRpYWxfY29kZTogJys5NjUnLFxyXG4gICAgY29kZTogJ0tXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTYnLFxyXG4gICAgY29kZTogJ0tHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYW9zJyxcclxuICAgIGRpYWxfY29kZTogJys4NTYnLFxyXG4gICAgY29kZTogJ0xBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYXR2aWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3MScsXHJcbiAgICBjb2RlOiAnTFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlYmFub24nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MScsXHJcbiAgICBjb2RlOiAnTEInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2NicsXHJcbiAgICBjb2RlOiAnTFMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYmVyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMScsXHJcbiAgICBjb2RlOiAnTFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxOCcsXHJcbiAgICBjb2RlOiAnTFknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpZWNodGVuc3RlaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQyMycsXHJcbiAgICBjb2RlOiAnTEknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcwJyxcclxuICAgIGNvZGU6ICdMVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUyJyxcclxuICAgIGNvZGU6ICdMVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFjYW8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MycsXHJcbiAgICBjb2RlOiAnTU8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg5JyxcclxuICAgIGNvZGU6ICdNSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFkYWdhc2NhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYxJyxcclxuICAgIGNvZGU6ICdNRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsYXdpJyxcclxuICAgIGRpYWxfY29kZTogJysyNjUnLFxyXG4gICAgY29kZTogJ01XJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjAnLFxyXG4gICAgY29kZTogJ01ZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxkaXZlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYwJyxcclxuICAgIGNvZGU6ICdNVicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIzJyxcclxuICAgIGNvZGU6ICdNTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NicsXHJcbiAgICBjb2RlOiAnTVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY5MicsXHJcbiAgICBjb2RlOiAnTUgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRpbmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NicsXHJcbiAgICBjb2RlOiAnTVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMicsXHJcbiAgICBjb2RlOiAnTVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGl1cycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjMwJyxcclxuICAgIGNvZGU6ICdNVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWF5b3R0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdZVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgIGRpYWxfY29kZTogJys1MicsXHJcbiAgICBjb2RlOiAnTVgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkxJyxcclxuICAgIGNvZGU6ICdGTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzczJyxcclxuICAgIGNvZGU6ICdNRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9uYWNvJyxcclxuICAgIGRpYWxfY29kZTogJyszNzcnLFxyXG4gICAgY29kZTogJ01DJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNb25nb2xpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTc2JyxcclxuICAgIGNvZGU6ICdNTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgyJyxcclxuICAgIGNvZGU6ICdNRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY2NCcsXHJcbiAgICBjb2RlOiAnTVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vcm9jY28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxMicsXHJcbiAgICBjb2RlOiAnTUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1OCcsXHJcbiAgICBjb2RlOiAnTVonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ015YW5tYXInLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk1JyxcclxuICAgIGNvZGU6ICdNTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjY0JyxcclxuICAgIGNvZGU6ICdOQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmF1cnUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NCcsXHJcbiAgICBjb2RlOiAnTlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05lcGFsJyxcclxuICAgIGRpYWxfY29kZTogJys5NzcnLFxyXG4gICAgY29kZTogJ05QJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzEnLFxyXG4gICAgY29kZTogJ05MJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk5JyxcclxuICAgIGNvZGU6ICdBTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjg3JyxcclxuICAgIGNvZGU6ICdOQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY0JyxcclxuICAgIGNvZGU6ICdOWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmljYXJhZ3VhJyxcclxuICAgIGRpYWxfY29kZTogJys1MDUnLFxyXG4gICAgY29kZTogJ05JJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOaWdlcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI3JyxcclxuICAgIGNvZGU6ICdORScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjM0JyxcclxuICAgIGNvZGU6ICdORycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTml1ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgzJyxcclxuICAgIGNvZGU6ICdOVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3MicsXHJcbiAgICBjb2RlOiAnTkYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY3MCcsXHJcbiAgICBjb2RlOiAnTVAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcndheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ05PJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdPbWFuJyxcclxuICAgIGRpYWxfY29kZTogJys5NjgnLFxyXG4gICAgY29kZTogJ09NJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTInLFxyXG4gICAgY29kZTogJ1BLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgwJyxcclxuICAgIGNvZGU6ICdQVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcwJyxcclxuICAgIGNvZGU6ICdQUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFuYW1hJyxcclxuICAgIGRpYWxfY29kZTogJys1MDcnLFxyXG4gICAgY29kZTogJ1BBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzUnLFxyXG4gICAgY29kZTogJ1BHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk1JyxcclxuICAgIGNvZGU6ICdQWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGVydScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTEnLFxyXG4gICAgY29kZTogJ1BFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjMnLFxyXG4gICAgY29kZTogJ1BIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaXRjYWlybicsXHJcbiAgICBkaWFsX2NvZGU6ICcrODcyJyxcclxuICAgIGNvZGU6ICdQTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUG9sYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys0OCcsXHJcbiAgICBjb2RlOiAnUEwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BvcnR1Z2FsJyxcclxuICAgIGRpYWxfY29kZTogJyszNTEnLFxyXG4gICAgY29kZTogJ1BUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTkzOScsXHJcbiAgICBjb2RlOiAnUFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1FhdGFyJyxcclxuICAgIGRpYWxfY29kZTogJys5NzQnLFxyXG4gICAgY29kZTogJ1FBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb21hbmlhJyxcclxuICAgIGRpYWxfY29kZTogJys0MCcsXHJcbiAgICBjb2RlOiAnUk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J1c3NpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNycsXHJcbiAgICBjb2RlOiAnUlUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUwJyxcclxuICAgIGNvZGU6ICdSVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV1bmlvbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdSRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTkwJyxcclxuICAgIGNvZGU6ICdCTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI5MCcsXHJcbiAgICBjb2RlOiAnU0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg2OScsXHJcbiAgICBjb2RlOiAnS04nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEx1Y2lhJyxcclxuICAgIGRpYWxfY29kZTogJysxNzU4JyxcclxuICAgIGNvZGU6ICdMQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcclxuICAgIGRpYWxfY29kZTogJys1OTAnLFxyXG4gICAgY29kZTogJ01GJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgIGRpYWxfY29kZTogJys1MDgnLFxyXG4gICAgY29kZTogJ1BNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc4NCcsXHJcbiAgICBjb2RlOiAnVkMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhbW9hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODUnLFxyXG4gICAgY29kZTogJ1dTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW4gTWFyaW5vJyxcclxuICAgIGRpYWxfY29kZTogJyszNzgnLFxyXG4gICAgY29kZTogJ1NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzOScsXHJcbiAgICBjb2RlOiAnU1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY2JyxcclxuICAgIGNvZGU6ICdTQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VuZWdhbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIxJyxcclxuICAgIGNvZGU6ICdTTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgIGRpYWxfY29kZTogJyszODEnLFxyXG4gICAgY29kZTogJ1JTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcclxuICAgIGRpYWxfY29kZTogJysyNDgnLFxyXG4gICAgY29kZTogJ1NDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMicsXHJcbiAgICBjb2RlOiAnU0wnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjUnLFxyXG4gICAgY29kZTogJ1NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTbG92YWtpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDIxJyxcclxuICAgIGNvZGU6ICdTSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2xvdmVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NicsXHJcbiAgICBjb2RlOiAnU0knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc3JyxcclxuICAgIGNvZGU6ICdTQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU29tYWxpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUyJyxcclxuICAgIGNvZGU6ICdTTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcclxuICAgIGRpYWxfY29kZTogJysyNycsXHJcbiAgICBjb2RlOiAnWkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvdXRoIFN1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyMTEnLFxyXG4gICAgY29kZTogJ1NTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdHUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM0JyxcclxuICAgIGNvZGU6ICdFUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3JpIExhbmthJyxcclxuICAgIGRpYWxfY29kZTogJys5NCcsXHJcbiAgICBjb2RlOiAnTEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyNDknLFxyXG4gICAgY29kZTogJ1NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdXJpbmFtZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk3JyxcclxuICAgIGNvZGU6ICdTUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ1NKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2F6aWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OCcsXHJcbiAgICBjb2RlOiAnU1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N3ZWRlbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDYnLFxyXG4gICAgY29kZTogJ1NFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDEnLFxyXG4gICAgY29kZTogJ0NIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYzJyxcclxuICAgIGNvZGU6ICdTWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVGFpd2FuJyxcclxuICAgIGRpYWxfY29kZTogJys4ODYnLFxyXG4gICAgY29kZTogJ1RXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTInLFxyXG4gICAgY29kZTogJ1RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNTUnLFxyXG4gICAgY29kZTogJ1RaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaGFpbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjYnLFxyXG4gICAgY29kZTogJ1RIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjcwJyxcclxuICAgIGNvZGU6ICdUTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9nbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI4JyxcclxuICAgIGNvZGU6ICdURycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9rZWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkwJyxcclxuICAgIGNvZGU6ICdUSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9uZ2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NicsXHJcbiAgICBjb2RlOiAnVE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE4NjgnLFxyXG4gICAgY29kZTogJ1RUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5pc2lhJyxcclxuICAgIGRpYWxfY29kZTogJysyMTYnLFxyXG4gICAgY29kZTogJ1ROJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrZXknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkwJyxcclxuICAgIGNvZGU6ICdUUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTMnLFxyXG4gICAgY29kZTogJ1RNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NDknLFxyXG4gICAgY29kZTogJ1RDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXZhbHUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OCcsXHJcbiAgICBjb2RlOiAnVFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU2JyxcclxuICAgIGNvZGU6ICdVRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVWtyYWluZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgwJyxcclxuICAgIGNvZGU6ICdVQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3MScsXHJcbiAgICBjb2RlOiAnQUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ1VTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVcnVndWF5JyxcclxuICAgIGRpYWxfY29kZTogJys1OTgnLFxyXG4gICAgY29kZTogJ1VZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVemJla2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTgnLFxyXG4gICAgY29kZTogJ1VaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgIGRpYWxfY29kZTogJys2NzgnLFxyXG4gICAgY29kZTogJ1ZVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhJyxcclxuICAgIGRpYWxfY29kZTogJys1OCcsXHJcbiAgICBjb2RlOiAnVkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg0JyxcclxuICAgIGNvZGU6ICdWTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyODQnLFxyXG4gICAgY29kZTogJ1ZHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTM0MCcsXHJcbiAgICBjb2RlOiAnVkknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODEnLFxyXG4gICAgY29kZTogJ1dGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY3JyxcclxuICAgIGNvZGU6ICdZRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnWmFtYmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNjAnLFxyXG4gICAgY29kZTogJ1pNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdaaW1iYWJ3ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYzJyxcclxuICAgIGNvZGU6ICdaVycsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBjb3VudHJ5Q29kZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU01TSW5wdXQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgZmluZEl0ZW0sIGZvcm1hdFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5jb25zdCBhY2MgPSBidG9hKGAke2Vudmlyb25tZW50LmFrdXVrPy5pZH06JHtlbnZpcm9ubWVudC5ha3V1az8ua2V5fWApO1xyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmFrdXVrPy51cmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YWNjfWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQWt1dWsge1xyXG4gIHN0YXRpYyBhc3luYyBzZW5kU01TKHBheWxvYWQ6IFNNU0lucHV0KSB7XHJcbiAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpO1xyXG5cclxuICAgIC8vIEZpbmQgY291bnRyeSBjb2RlXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyeUNvZGVzLCBwYXlsb2FkLmNvdW50cnksICdjb2RlJyk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHBob25lIG51bWJlclxyXG4gICAgY29uc3QgbnVtYmVyID0gZm9ybWF0UGhvbmVOdW1iZXIocGF5bG9hZC5udW1iZXIsIGNvdW50cnk/LmRpYWxfY29kZSEpO1xyXG5cclxuICAgIGlmICghbnVtYmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9tZXNzYWdpbmcvc21zJywge1xyXG4gICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgc2VuZGVyOiBlbnZpcm9ubWVudC5ha3V1ay5zZW5kZXIsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY291bnRyeUNvZGU6IGNvdW50cnk/LmRpYWxfY29kZSxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBhbW91bnQsIGJpbGxpbmcsIGNvdW50cnk6IGNvZGUsIG51bWJlcjogcGhvbmUgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgY29uc3QgdXVpZCA9IHJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAvLyBGaW5kIGNvdW50cnkgY29kZVxyXG4gICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKGNvdW50cnlDb2RlcywgY29kZSwgJ2NvZGUnKTtcclxuXHJcbiAgICAvLyBGb3JtYXQgcGhvbmUgbnVtYmVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBmb3JtYXRQaG9uZU51bWJlcihwaG9uZSwgY291bnRyeT8uZGlhbF9jb2RlISk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBtcmNSZWZlcmVuY2U6IHV1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlOiBOdW1iZXIoY291bnRyeT8uZGlhbF9jb2RlLnNwbGl0KCcrJylbMV0pICsgJycsXHJcbiAgICAgIG51bWJlcjogbnVtYmVyICsgJycsXHJcbiAgICAgIGJpbGxpbmc6IGJpbGxpbmcsXHJcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMikgKyAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9wYXltZW50L2FpcnRpbWUnLCB7XHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgY291bnRyeUNvZGU6IE51bWJlcihjb3VudHJ5Py5kaWFsX2NvZGUuc3BsaXQoJysnKVsxXSkgKyAnJyxcclxuICAgICAgbnVtYmVyOiBudW1iZXIgKyAnJyxcclxuICAgICAgYmlsbGluZzogYmlsbGluZyxcclxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCkudG9GaXhlZCgyKSArICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsZURpck5hbWUobWV0YTogYW55KSB7XHJcbiAgY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgobWV0YS51cmwpO1xyXG5cclxuICBjb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5cclxuICByZXR1cm4geyBfX2Rpcm5hbWUsIF9fZmlsZW5hbWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUVycm9yUGFyc2VyID0gKGVycjogeyBtZXNzYWdlOiBzdHJpbmc7IHN0YXR1czogbnVtYmVyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZS5pbmNsdWRlcygncHJpc21hJylcclxuICAgICAgPyAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG4gICAgICA6IChlcnI/Lm1lc3NhZ2UgPz8gJ0ludGVybmFsIFNlcnZlciBFcnJvcicpLFxyXG4gICAgc3RhdHVzOiBlcnI/LnN0YXR1cyA/PyA1MDAsXHJcbiAgICBzdWNjZXNzOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKHNpemU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKHNpemUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKCdTaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcclxuICBjb25zdCBtaW4gPSBNYXRoLnBvdygxMCwgc2l6ZSAtIDEpO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgucG93KDEwLCBzaXplKSAtIDE7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rlc3RpbmdCVk4oYnZuOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKFxyXG4gICAgWydERVZFTE9QJywgJ0xPQ0FMJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkgJiZcclxuICAgIFsnMjIyMjIyMjIyMjInLCAnOTU4ODgxNjg5MjQnXS5pbmNsdWRlcyhidm4pXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIHJldHVybiBbJ0RFVkVMT1AnLCAnTE9DQUwnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFFVRVVFX05BTUVTID0ge1xyXG4gIFRSQU5TRkVSOiAndHJhbnNmZXInLFxyXG4gIEFJUlRJTUU6ICdhaXJ0aW1lJyxcclxuICBOT1RJRklDQVRJT046ICdub3RpZmljYXRpb24nLFxyXG4gIElOVEVSTkFMX1RSQU5TRkVSOiAnaW50ZXJuYWxfdHJhbnNmZXInLFxyXG4gIENSRUFURVdBTExFVDogJ2NyZWF0ZV93YWxsZXQnLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAodXNlcjogVXNlciwgdHlwZSA9ICdQSE9ORScpIHtcclxuICBjb25zdCBjb2RlID0gb3RwR2VuZXJhdG9yLmdlbmVyYXRlKDYsIHtcclxuICAgIGxvd2VyQ2FzZUFscGhhYmV0czogZmFsc2UsXHJcbiAgICB1cHBlckNhc2VBbHBoYWJldHM6IGZhbHNlLFxyXG4gICAgc3BlY2lhbENoYXJzOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICByZWZyZXNoQ29kZTogY29kZSxcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB0eXBlOiB0eXBlID09PSAnUEhPTkUnID8gJ1BIT05FJyA6ICdFTUFJTCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdPVFAgbm90IHNhdmVkJyk7XHJcblxyXG4gIC8vIFNlbmQgU01TXHJcbiAgaWYgKHVzZXIucGhvbmUgJiYgdHlwZSA9PT0gJ1BIT05FJylcclxuICAgIEFrdXVrLnNlbmRTTVMoe1xyXG4gICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIG51bWJlcjogdXNlci5waG9uZSxcclxuICAgICAgbWVzc2FnZTogYFlvdXIgV2VQYXkgdmVyaWZpY2F0aW9uIGNvZGUgaXM6ICR7Y29kZX0uIFRoYW5rcyB5b3UgZm9yIGNob29zaW5nIFdlUGF5YCxcclxuICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYWlsICYmIHR5cGUgPT09ICdFTUFJTCcpXHJcbiAgICBzZW5kRW1haWwoe1xyXG4gICAgICB0bzogdXNlcj8uZW1haWwhLFxyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHRvX25hbWU6IHVzZXIubmFtZSxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICd2ZXJpZmljYXRpb24nLFxyXG4gICAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBob25lTnVtYmVyKG51bWJlcjogc3RyaW5nIHwgbnVtYmVyLCBkYWlsQ29kZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLmxlbmd0aCA+IDExXHJcbiAgICA/IG51bWJlclxyXG4gICAgOiBOdW1iZXIoYCR7ZGFpbENvZGUuc3BsaXQoJysnKVsxXX0ke251bWJlci50b1N0cmluZygpLnN1YnN0cmluZygxKX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBSUxZX0xJTUlUUyA9IHtcclxuICBUSUVSXzE6IDIwMF8wMDBuLFxyXG4gIFRJRVJfMjogMV8wMDBfMDAwbixcclxuICBUSUVSXzM6IDVfMDAwXzAwMG4sXHJcbiAgVElFUl80OiAxMDBfMDAwXzAwMF8wMDBuLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFueSB2YWxpZCBkYXRlIHN0cmluZywgdGltZXN0YW1wLCBvciBEYXRlIG9iamVjdFxyXG4gKiB0byBhIHN0YW5kYXJkIElTTyA4NjAxIGRhdGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IERhdGV9IGlucHV0IC0gVGhlIGRhdGUgaW5wdXQgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9IFRoZSBJU08gZGF0ZSBzdHJpbmcgb3IgbnVsbCBpZiBpbnZhbGlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPRGF0ZShpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSk6IHN0cmluZyB8IG51bGwge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBIYW5kbGUgZW1wdHkgb3IgdW5kZWZpbmVkIGlucHV0XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQpO1xyXG5cclxuICAgIC8vIENoZWNrIHZhbGlkaXR5XHJcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGRhdGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gSVNPIHN0cmluZ1xyXG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KGFtb3VudDogYW55KSB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tTkcnLCB7XHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgfSkuZm9ybWF0KGFtb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUgfCBhbnkpIHtcclxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gbW9udGhzIGFyZSAwLWluZGV4ZWRcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICBob3VycyA9IGhvdXJzICUgMTIgfHwgMTI7IC8vIGNvbnZlcnQgMCDihpIgMTIgZm9yIDEyIEFNXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtKGRhdGE6IEFycmF5PGFueT4sIGl0ZW06IHN0cmluZywgZmllbGQ6IHN0cmluZykge1xyXG4gIHJldHVybiBkYXRhLmZpbmQoXHJcbiAgICAoZCkgPT4gZD8uW2ZpZWxkXT8udG9Mb3dlckNhc2UoKT8udHJpbSgpID09PSBpdGVtPy50b0xvd2VyQ2FzZSgpPy50cmltKCksXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFjcXVpcmUgcm93IGxvY2tzIGZvciB3YWxsZXRzIGluIGNhbm9uaWNhbCBvcmRlciBpbnNpZGUgYSB0cmFuc2FjdGlvbi5cclxuICogUmV0dXJucyB3YWxsZXQgcm93cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2NrV2FsbGV0c1R4KHR4OiBhbnksIHdhbGxldElkczogc3RyaW5nW10pIHtcclxuICAvLyBlbnN1cmUgY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbLi4ud2FsbGV0SWRzXS5zb3J0KCk7XHJcbiAgLy8gYnVpbGQgcGFyYW1ldGVyaXplZCBxdWVyeVxyXG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IG9yZGVyZWQubWFwKChfLCBpKSA9PiBgJCR7aSArIDF9YCkuam9pbignLCcpO1xyXG4gIC8vIE5PVEU6IHdlIGFzc3VtZSB0YWJsZSBuYW1lIFwiV2FsbGV0XCIgYW5kIGNvbHVtbiBcImlkXCJcclxuICBjb25zdCByb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtwbGFjZWhvbGRlcnN9KSBGT1IgVVBEQVRFYCxcclxuICAgIC4uLm9yZGVyZWQsXHJcbiAgKTtcclxuICAvLyByZXR1cm4gcm93cyBhcy1pc1xyXG4gIHJldHVybiByb3dzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5Lb2JvKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIEJpZ0ludChNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5OYWlyYShhbW91bnQ6IGFueSkge1xyXG4gIHJldHVybiBOdW1iZXIoYW1vdW50KSAvIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRGFpbHlMaW1pdChcclxuICBmcm9tV2FsbGV0OiBXYWxsZXQsXHJcbiAgZnJvbVVzZXI6IFVzZXIsXHJcbiAgYW10OiBiaWdpbnQsXHJcbikge1xyXG4gIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5sZWRnZXIuYWdncmVnYXRlKHtcclxuICAgIF9zdW06IHsgY2hhbmdlOiB0cnVlIH0sXHJcbiAgICB3aGVyZToge1xyXG4gICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgY3JlYXRlZEF0OiB7IGd0ZTogdG9kYXlTdGFydCB9LFxyXG4gICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYW1vdW50ID0gYW1vdW50SW5OYWlyYShhbXQpO1xyXG4gIGNvbnN0IHRyYW5zZmVycmVkID0gYW1vdW50SW5OYWlyYShcclxuICAgIHJlc3VsdC5fc3VtLmNoYW5nZSA/IC1yZXN1bHQuX3N1bS5jaGFuZ2UgOiAwbixcclxuICApO1xyXG5cclxuICBjb25zdCB0aWVyID0gZnJvbVVzZXIuY3VycmVudFRpZXIgYXMga2V5b2YgdHlwZW9mIERBSUxZX0xJTUlUUztcclxuICBjb25zdCBkYWlseUxpbWl0ID0gREFJTFlfTElNSVRTW3RpZXJdIHx8IERBSUxZX0xJTUlUUy5USUVSXzE7XHJcblxyXG4gIHJldHVybiBCaWdJbnQodHJhbnNmZXJyZWQgKyBhbW91bnQpID4gZGFpbHlMaW1pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcFRleHQodGV4dD86IHN0cmluZywgbWF4ID0gMzIpIHtcclxuICBpZiAoIXRleHQpIHJldHVybjtcclxuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcclxuICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XHJcbiAgbGV0IGN1cnJlbnQgPSAnJztcclxuXHJcbiAgZm9yIChjb25zdCB3IG9mIHdvcmRzKSB7XHJcbiAgICBpZiAoKGN1cnJlbnQgKyAnICcgKyB3KS50cmltKCkubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIGxpbmVzLnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICBjdXJyZW50ID0gdztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnQgKz0gJyAnICsgdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50LnRyaW0oKS5sZW5ndGggPiAwKSBsaW5lcy5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5EZXNjKGRlc2M/OiBzdHJpbmcsIG1heCA9IDMwKSB7XHJcbiAgaWYgKCFkZXNjKSByZXR1cm4gZGVzYztcclxuICBpZiAoZGVzYy5sZW5ndGggPD0gbWF4KSByZXR1cm4gZGVzYztcclxuICByZXR1cm4gZGVzYy5zbGljZSgwLCBtYXggLSAzKSArICcuLi4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gIGFjY291bnQsXHJcbiAgYW1vdW50LFxyXG4gIGRlc2MsXHJcbiAgY3VycmVuY3ksXHJcbiAgYmFsYW5jZSxcclxuICBkYXRlLFxyXG4gIHR5cGUsXHJcbn06IHtcclxuICBhY2NvdW50OiBzdHJpbmc7XHJcbiAgYW1vdW50OiBiaWdpbnQ7XHJcbiAgZGVzYz86IHN0cmluZztcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGJhbGFuY2U6IGJpZ2ludDtcclxufSkge1xyXG4gIHJldHVybiBgXHJcbkFjY3Q6ICoqKioqKiR7YWNjb3VudC5zbGljZSgtNCl9XHJcbkFtdDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYW1vdW50KSl9ICR7dHlwZX1cclxuRGVzYzogJHt3cmFwVGV4dChzaG9ydGVuRGVzYyhkZXNjKSl9XHJcbkF2YWlsIEJhbDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYmFsYW5jZSkpfVxyXG5EYXRlOiAke2Zvcm1hdERhdGUoZGF0ZSl9XHJcblRoYW5rcyBmb3IgdXNpbmcgV2VQYXlgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VyU2FmZUlkKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgaW5wdXQgPSBgJHtEYXRlLm5vdygpIC0gTWF0aC5yYW5kb20oKX1gO1xyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGlucHV0KS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiBoYXNoLnN1YnN0cmluZygwLCA4KS50b1VwcGVyQ2FzZSgpO1xyXG59XHJcbiIsIi8vIHNyYy91dGlscy9oYXNoLnRzXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBhcmdvbjIgZnJvbSAnYXJnb24yJztcclxuaW1wb3J0IHsgaXNUZXN0aW5nQlZOIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBsYWluOiBzdHJpbmcpIHtcclxuICAvLyBkZWZhdWx0IG9wdGlvbnMgZm9yIGFyZ29uMiBhcmUgZmluZTsgdHVuZSBpbiBwcm9kIGlmIG5lZWRlZFxyXG4gIHJldHVybiBiY3J5cHQuaGFzaChwbGFpbiwgMTApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQoaGFzaDogc3RyaW5nLCBwbGFpbjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKGhhc2gsIHBsYWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hUb2tlbih0b2tlbjogc3RyaW5nKSB7XHJcbiAgaWYgKCF0b2tlbikgcmV0dXJuO1xyXG4gIGlmIChpc1Rlc3RpbmdCVk4odG9rZW4pKSB7XHJcbiAgICByZXR1cm4gY3J5cHRvXHJcbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxyXG4gICAgICAudXBkYXRlKHRva2VuICsgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zbGljZSg2KSlcclxuICAgICAgLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHRva2VuKS5kaWdlc3QoJ2hleCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBpbihwaW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi5oYXNoKHBpbiwge1xyXG4gICAgdHlwZTogYXJnb24yLmFyZ29uMmlkLFxyXG4gICAgbWVtb3J5Q29zdDogMiAqKiAxNiwgLy8gNjQgTUJcclxuICAgIHRpbWVDb3N0OiAzLFxyXG4gICAgcGFyYWxsZWxpc206IDEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgaW5wdXRQaW46IHN0cmluZyxcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi52ZXJpZnkoaGFzaGVkUGluLCBpbnB1dFBpbik7XHJcbn1cclxuIiwiLy8gc3JjL3V0aWxzL2p3dC50c1xyXG5pbXBvcnQgand0LCB7IEp3dFBheWxvYWQsIFNpZ25PcHRpb25zIH0gZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEp3dFBheWxvYWQgZXh0ZW5kcyBKd3RQYXlsb2FkIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbkFjY2Vzc1Rva2VuKHBheWxvYWQ6IG9iamVjdCkge1xyXG4gIHJldHVybiBqd3Quc2lnbihcclxuICAgIHBheWxvYWQsXHJcbiAgICBlbnZpcm9ubWVudC5qd3Quc2VjcmV0IGFzIHN0cmluZyxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3Q/LmV4cGlyZXNJbn1oYCxcclxuICAgIH0gYXMgU2lnbk9wdGlvbnMsXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiBBdXRoSnd0UGF5bG9hZCB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIGVudmlyb25tZW50Lmp3dC5zZWNyZXQpIGFzIEF1dGhKd3RQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblJlZnJlc2hUb2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICAvLyBsb25nIGxpdmVkLCBidXQgd2Ugc3RpbGwgc3RvcmUgYSBoYXNoZWQgY29weSBzZXJ2ZXItc2lkZVxyXG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBlbnZpcm9ubWVudC5qd3QucmVmcmVzaFNlY3JldCwge1xyXG4gICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3QucmVmcmVzaERheXN9ZGAsXHJcbiAgfSBhcyBTaWduT3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlSZWZyZXNoVG9rZW4odG9rZW46IHN0cmluZyk6IEF1dGhKd3RQYXlsb2FkIHtcclxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgZW52aXJvbm1lbnQuand0LnNlY3JldCkgYXMgQXV0aEp3dFBheWxvYWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGhhc2hQYXNzd29yZCwgaGFzaFRva2VuLCB2ZXJpZnlQaW4gfSBmcm9tICcuLi8uLi91dGlscy9oYXNoJztcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9jb25maWcvZW52JztcclxuaW1wb3J0IHsgc2lnbkFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvand0JztcclxuaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgTG9naW4sIFJlZ2lzdGVyLCBSZXNldFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQm90dGxlbmVjayBmcm9tICdib3R0bGVuZWNrJztcclxuaW1wb3J0IHsgc2VuZE9UUCwgZ2VuZXJhdGVVc2VyU2FmZUlkLCBhbW91bnRJbk5haXJhIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKGRhdGE6IFJlZ2lzdGVyKSB7XHJcbiAgY29uc3QgcGhvbmUgPSBkYXRhLnBob25lIHx8IGRhdGEuZXh0cmE/LnBob25lO1xyXG5cclxuICBpZiAoIXBob25lKSB7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIiwgNDAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBwaG9uZSxcclxuICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChleGlzdGluZ1VzZXIgJiYgIWV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWVkKSB7XHJcbiAgICBhd2FpdCBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAoZXhpc3RpbmdVc2VyKSk7XHJcbiAgICByZXR1cm4gZXhpc3RpbmdVc2VyO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nVXNlciAmJiBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmllZCkge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiVXNlciBhbHJlYWR5IHJlZ2lzdGVyZWRcIiwgNDA5KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XHJcbiAgICAuLi5kYXRhLmV4dHJhLFxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJvbGUgPT09IFwiQUdFTlRcIikgcmVjb3JkLmFnZW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgaWYgKFtcIk1FUkNIQU5UXCIsIFwiSU5TVElUVVRJT05cIl0uaW5jbHVkZXMoZGF0YS5yb2xlKSkge1xyXG4gICAgcmVjb3JkLm1lcmNoYW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS5lbWFpbCkge1xyXG4gICAgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuaXF1ZUlkID0gZ2VuZXJhdGVVc2VyU2FmZUlkKCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCB0eC51c2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBidm46IGRhdGEuYnZuLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIHVuaXF1ZUlEOiB1bmlxdWVJZCxcclxuICAgICAgICAuLi5yZWNvcmQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0eC5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiBjcmVhdGVkVXNlci5pZCxcclxuICAgICAgICBhY3Rpb246IFwiUkVHSVNURVJcIixcclxuICAgICAgICBpcDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVkVXNlcjtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQaW4ocGF5bG9hZDoge3Bob25lPzogc3RyaW5nOyBlbWFpbD86IHN0cmluZzsgfSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwaG9uZTogcGF5bG9hZD8ucGhvbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZD8uZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGT1JHT1RfUElOX0NPREUnIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckRldGFpbEJ5UGhvbmUocGF5bG9hZDogeyBwaG9uZT86IHN0cmluZzsgfSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgICAgIHBob25lOiBwYXlsb2FkPy5waG9uZSwgICAgICAgIFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgcmV0dXJuIHsgLi4udXNlciB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZGF0YTogTG9naW4pIHtcclxuICBjb25zdCB7IGVtYWlsLCBwaG9uZSwgcGluIH0gPSBkYXRhO1xyXG5cclxuICBpZiAoIXBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQSU4gaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG4gIGlmICghZW1haWwgJiYgIXBob25lKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIC8vIEZpbmQgdXNlciBieSBlbWFpbCBvciBwaG9uZVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFsuLi4oZW1haWwgPyBbeyBlbWFpbCB9XSA6IFtdKSwgLi4uKHBob25lID8gW3sgcGhvbmUgfV0gOiBbXSldLFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgd2FsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuXHJcbiAgaWYgKCF1c2VyLnBpbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGhhcyBubyBwaW4gc2V0JywgNDAwKTtcclxuXHJcbiAgY29uc3Qgb2sgPSBhd2FpdCB2ZXJpZnlQaW4odXNlci5waW4sIHBpbik7XHJcblxyXG4gIGlmICghb2spIHtcclxuICAgIC8vIE9wdGlvbmFsOiBpbmNyZW1lbnQgZmFpbGVkIGxvZ2luIGF0dGVtcHRzIGhlcmVcclxuICAgIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRkFJTEVEX0xPR0lOJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJywgNDAxKTtcclxuICB9XHJcblxyXG4gIC8vIFN1Y2Nlc3NmdWwgbG9naW4g4oaSIExvZyBpdFxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0xPR0lOJyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4udXNlcixcclxuICAgIHdhbGxldHM6IHVzZXIud2FsbGV0cy5tYXAoKHcpID0+ICh7XHJcbiAgICAgIC4uLncsXHJcbiAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IGFtb3VudEluTmFpcmEody5hdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgbGVkZ2VyQmFsYW5jZTogYW1vdW50SW5OYWlyYSh3LmxlZGdlckJhbGFuY2UpLFxyXG4gICAgICByZXNlcnZlZEJhbGFuY2U6IGFtb3VudEluTmFpcmEody5yZXNlcnZlZEJhbGFuY2UpLFxyXG4gICAgfSkpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbldpdGhGaW5nZXIoZGF0YTogeyBmaW5nZXJQcmludDogc3RyaW5nIH0pIHtcclxuICBjb25zdCB7IGZpbmdlclByaW50IH0gPSBkYXRhO1xyXG5cclxuICBpZiAoIWZpbmdlclByaW50KSB7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZpbmdlciBpcyByZXF1aXJlZCBvciBpbnZhbGlkIGZpbmdlciBkYXRhJywgNDIyKTtcclxuICB9XHJcblxyXG4gIC8vIEZpbmQgdXNlciBkaXJlY3RseSBieSBmaW5nZXJwcmludFxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgZmluZ2VyUHJpbnQ6IGZpbmdlclByaW50IH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGZpbmdlcnByaW50JywgNDAxKTtcclxuICB9XHJcblxyXG4gIC8vIExvZyBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnTE9HSU4nIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZm9yZ290UGFzc3dvcmQoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBpcD86IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogZGF0YS5lbWFpbCB9IH0pO1xyXG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGT1JHT1RfUEFTU1dPUkRfQ09ERScsIGlwOiBkYXRhLmlwIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQYXNzd29yZChkYXRhOiBSZXNldFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgeyB0b2tlbiwgbmV3UGFzc3dvcmQsIGlwIH0gPSBkYXRhO1xyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbkludGVudCA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiB0b2tlbiB9LFxyXG4gIH0pO1xyXG4gIGlmICghdmVyaWZpY2F0aW9uSW50ZW50KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3IgZXhwaXJlZCB0b2tlbicpO1xyXG5cclxuICBjb25zdCBuZXdIYXNoID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB2ZXJpZmljYXRpb25JbnRlbnQudXNlcklkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBhc3N3b3JkOiBuZXdIYXNoLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gcmV2b2tlIGFsbCByZWZyZXNoIHRva2VucyAoc2FmZXR5KVxyXG4gIGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZGVsZXRlTWFueSh7IHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9IH0pO1xyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ1JFU0VUX1BBU1NXT1JEJywgaXA6IGlwIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFBpbih1c2VyOiBVc2VyLCBkYXRhOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGluOiBkYXRhLnBpbixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldm9rZSBhbGwgcmVmcmVzaCB0b2tlbnMgKHNhZmV0eSlcclxuICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRVNFVF9QSU4nIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByb3RhdGVSZWZyZXNoVG9rZW4oXHJcbiAgb2xkVG9rZW5SYXc6IHN0cmluZyxcclxuICBpcD86IHN0cmluZyxcclxuICBkZXZpY2VJbmZvPzogc3RyaW5nLFxyXG4pIHtcclxuICBjb25zdCBvbGRIYXNoID0gaGFzaFRva2VuKG9sZFRva2VuUmF3KTtcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5yZWZyZXNoVG9rZW4uZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB0b2tlbkhhc2g6IG9sZEhhc2ggfSxcclxuICB9KTtcclxuICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLmV4cGlyZXNBdCA8IG5ldyBEYXRlKCkpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVmcmVzaCB0b2tlbicpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBleGlzdGluZy51c2VySWQgfSB9KTtcclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcclxuXHJcbiAgY29uc3QgbmV3UmF3ID0gbmFub2lkKDY0KTtcclxuICBjb25zdCBuZXdIYXNoID0gaGFzaFRva2VuKG5ld1Jhdyk7XHJcbiAgY29uc3QgbmV3RXhwaXJlcyA9IGFkZERheXMobmV3IERhdGUoKSwgTnVtYmVyKGVudmlyb25tZW50Lmp3dC5yZWZyZXNoRGF5cykpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKFtcclxuICAgIHByaXNtYS5yZWZyZXNoVG9rZW4uZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0gfSksXHJcbiAgICBwcmlzbWEucmVmcmVzaFRva2VuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgdG9rZW5IYXNoOiBuZXdIYXNoISxcclxuICAgICAgICBleHBpcmVzQXQ6IG5ld0V4cGlyZXMsXHJcbiAgICAgICAgZGV2aWNlSW5mbyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRUZSRVNIX1JPVEFURUQnLCBpcCB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgc3ViOiB1c2VyLmlkLCByb2xlOiB1c2VyLnJvbGUgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgcmVmcmVzaFRva2VuOiBuZXdSYXcsXHJcbiAgICB1c2VyOiB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZWZyZXNoVG9rZW5SYXc/OiBzdHJpbmcsIGlwPzogc3RyaW5nKSB7XHJcbiAgaWYgKCFyZWZyZXNoVG9rZW5SYXcpIHJldHVybjtcclxuICBjb25zdCBoYXNoID0gaGFzaFRva2VuKHJlZnJlc2hUb2tlblJhdyk7XHJcbiAgYXdhaXQgcHJpc21hLnJlZnJlc2hUb2tlbi5kZWxldGVNYW55KHsgd2hlcmU6IHsgdG9rZW5IYXNoOiBoYXNoIH0gfSk7XHJcbiAgLy8gYXVkaXQgbG9nIG9wdGlvbmFsXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNlbmRPVFAodXNlcklkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnR5cGUgPT09ICdFTUFJTCcpIHtcclxuICAgIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChfdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIGV4aXN0LiBDbGljayBvbiBmb3Jnb3QgcGluJywgNDA5KTtcclxuXHJcbiAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgIHNlbmRPVFAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4udXNlcixcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogZGF0YT8ubmFtZSA/PyAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEudHlwZSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbW91bnRJbk5haXJhIH0gZnJvbSAnLic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICcuL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXI6IGFueSkgPT4ge1xyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIGNvbnN0IF91c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBtZXJjaGFudDogdHJ1ZSxcclxuICAgICAgYWdlbnQ6IHRydWUsXHJcbiAgICAgIHdhbGxldHM6IHRydWUsXHJcbiAgICAgIGFkZHJlc3M6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IC4uLmF1dGhVc2VyIH0gPSBfdXNlcjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmF1dGhVc2VyLFxyXG4gICAgd2FsbGV0czogYXV0aFVzZXIud2FsbGV0cy5tYXAoKHcpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi53LFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IGFtb3VudEluTmFpcmEody5hdmFpbGFibGVCYWxhbmNlKSxcclxuICAgICAgICByZXNlcnZlZEJhbGFuY2U6IGFtb3VudEluTmFpcmEody5yZXNlcnZlZEJhbGFuY2UpLFxyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IGFtb3VudEluTmFpcmEody5sZWRnZXJCYWxhbmNlKSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzBlZDhiOTliLTgwOTctNGU0OS1iZDRjLWZmMDQxMGM1N2QyNycsXHJcbiAgICAgICAgbmFtZTogJ0NvcnBvcmF0ZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Y2NzFkYTU3LWUyODEtNGI0MC05NjVmLWE5NmY0MjA1NDA1ZScsXHJcbiAgICAgICAgbmFtZTogJ0luZGl2aWR1YWwnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0NmU2OGNmNi1mMzU1LTQ1MzYtYWU5Ni1hZGYyNDY4MjgwOWYnLFxyXG4gICAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdjOTJkNTE1OC1hNGM1LTQ0MTgtODNmNy1hODEzZDM5ODlhODUnLFxyXG4gICAgICAgIG5hbWU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRyaWVzID0gWydMT0NBTCcsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dClcclxuICA/IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDVkNmMtYTliNC00NTJkLTg4NzItNGFkYTNkNDZiNTA2JyxcclxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdVUycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1VTQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3NzU0LTQ1NGQtNGFiMC04ZWQxLTVlZWQ5MzBhZDA2NycsXHJcbiAgICAgICAgbmFtZTogJ0doYW5hJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ0dIJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnR0hBJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMDhkZDc3NjQtZTJhYi00NTVlLTgzNTktODQ4MDk1NTBmMTdjJyxcclxuICAgICAgICBuYW1lOiAnVG9nbycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdURycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ1RHTycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3ODJiLTEzNGMtNGU3Yy04NzI2LTQ1MjRiOGU0MWZhOCcsXHJcbiAgICAgICAgbmFtZTogJ0JyYXppbCcsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdCUicsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ0JSQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2MxNWFkOWFlLWM0ZDctNDM0Mi1iNzBmLWRlNTUwODYyN2UzYicsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnTkcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdOR0EnLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc0YWE5ZDU5ZS0wNGU3LTQ5ODQtOTc5NC04NWE1NTQ4OWQ0MzMnLFxyXG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ05HJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnTkdBJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVuY2llcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzZlZWI1NGM4LTI0ZDctMTFmMC1hODE4LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ0NhbmFkaWFuIERvbGxhcnM0JyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDRDQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc4MjY0N2IyOS0xMzAyLTExZjAtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdSQU5EJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdaQVInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc5OGQ2NDU4My1mYjdlLTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDQUQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdhZjhjOTE2OC1mZGM1LTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzMycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0QzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzhmZTQxOWYtZmI3ZS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFyczInLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ0NEMicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Q5OGJhNWFiLWZiNzgtMTFlZi1hOGE5LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ1RhbnphbmlhIFNoaWxsaW5ncycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnVFpTJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZmQ1ZTQ3NGQtYmI0Mi00ZGIxLWFiNzQtZThkMmEwMTA0N2U5JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNDU4NTJmMGMtODRmYS00MTBjLWI2NmMtMWZmZWM1NmU1Y2Q4JyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYSBOYWlyYScsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnTkdOJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG5leHBvcnQgY29uc3QgYmFua3MgPSBbXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NpdGkgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb2JhbmsgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBCYW5rIG9mIE5pZ2VyaWEnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBDaXR5IE1vbnVtZW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEJhbmsgUGxjJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDEzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVyaXRhZ2UnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdKQUlaIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZXlzdG9uZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS3VkYSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGF5Y29tKE9QQVkpJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJvdmlkdXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JhbmQgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbGFyaXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWNJQlRDIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuZGFyZCBDaGFydGVyZWQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0ZXJsaW5nIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTVU5UUlVTVCBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDIyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pb24gQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaXRlZCBCYW5rIGZvciBBZnJpY2EnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbml0eSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnV2VtYS9BTEFUJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWkVOSVRIIEJBTksgUExDJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVkZEIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFuZ2VyaW5lIE1vbmV5JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGFqIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTcGFya2xlJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSG9wZSBQU0JhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXJyYWxleCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V5b3dvJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnOVBheW1lbnQgU2VydmljZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTm92YSBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4gVHJ1c3QgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvdmVuYW50IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BhZ2UgRmluYW5jaWFscycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZvcnRpcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZTREggTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzQwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb2J1cyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOUVVFU1QgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FTTyBTYXZpbmdzICYgTG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZW5Nb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5iaWMgSUJUQyBAZWFzZSB3YWxsZXQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGdXRvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW53aWNoIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNjAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYXBvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklSU0FMIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUJVIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjaW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2VsbHVsYW50JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQm93ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlVHJhbnphY3QnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZHZhbnMgTGEgRmF5ZXR0ZSAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDYXJib24nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYWxtUGF5IExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25pZXBvaW50JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS09OR0FQQVknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBYmJleSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW50ZXJzd2l0Y2ggTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheXN0YWNrIFBheW1lbnRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYcHJlc3MgUGF5bWVudHMnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBQ0NFTEVSRVggTkVUV09SSycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyY2EgUGF5bWVudHMgQ29tcGFueSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5JQkFEQU4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVtaXVtIFRydXN0IGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb01vIFBTQicsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NtYXJ0Q2FzaCBQYXltZW50IFNlcnZpY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IE1hc3RlciBQU0InLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQUlSTU9ORVkgTUlDUk9GSU5BTkNFIEJBTksgTFREJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTUxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU0lHTkFUVVJFIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPUFRJTVVTIEJBTksnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbXBlcnNhbmQgTWljcm9maW5hbmNlIEJhbmsgKEJhbmtseSknLFxyXG4gICAgYmFua0NvZGU6ICcwOTA1MjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdXQVlBIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFnYScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FMLUJhcmFrYWggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICczbGluZSBDYXJkIE1hbmFnZW1lbnQgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Fib3ZlIE9ubHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3MgWWVsbG8nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBY2Nlc3NNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0ODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGRvc3NlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FkZXllbWkgQ29sbGVnZSBTdGFmZiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FmZWtoYWZlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUcgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZWt1biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsZXJ0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWwtSGF5YXQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGx3b3JrZXJzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWxwaGEgS2FwaXRhbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FtYWMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbWp1IFVuaXF1ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FNTUwgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW5jaG9yYWdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXBla3MgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcHBsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FyaXNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXNzZXRNYXRyaXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3NldHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBc3RyYXBvbGFyaXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBdWNoaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhaW5lcyBDcmVkaXQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTg4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFsb2d1biBGdWxhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCYWxvZ3VuIEdhbWJhcmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCQyBLYXNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQklQQyBNaWNyb2ZpbmFuY2UgQmFuayAnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb2N0cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JPSSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvcmd1ICBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvc2FrIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJlbnQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyZXRocmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZGdld2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQnJpZ2h0d2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FyZXRha2VyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FzaENvbm5lY3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDRU1DUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NoYW5nYW4gUlRTIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDcwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2hpa3VtIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2h1a3d1bmVueWUgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDkwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ0lUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29hbGNhbXAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb2FzdGxpbmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLcmVkaSBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb25zdW1lciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvbnRlYyBHbG9iYWwgSW5mb3RlY2ggTGltaXRlZCAoTm93Tm93KScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nvb3AgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAyMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvcmVzdGVwIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29yb25hdGlvbiBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3JlZGl0IEFmcmlxdWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDcm93ZGZvcmNlJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3liZXJzcGFjZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRGF2b2RhbmkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdEYXlsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhZ2xlIEZsaWdodCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VhcnRob2xldW0nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdlLUJhcmNzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWNvYmFuayBYcHJlc3MgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb01vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VkRmluIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzEwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRWtvbmRvIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDA5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VLLVJlbGlhYmxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW1lcmFsZHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFbXBpcmUgdHJ1c3QgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW50ZXJwcmlzZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vzby1FIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRXZhbmdlbCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V2ZXJncmVlbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZBU1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk4gTW9ydGdhZ2VzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQk5Nb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQ01CIEVhc3kgQWNjb3VudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZDVCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGVyYWwgUG9seXRlY2huaWMgTmVrZWRlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXJhbCBVbml2ZXJzaXR5IER1dHNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkZXRoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDgyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmVkUG9seSBOYXNhcmF3YSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZFVCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZGUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGVsaXR5IE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpZGZ1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaW5hVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJtdXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaXJzdCBBcHBsZSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgR2VuZXJhdGlvbiBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgT3B0aW9uIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgUm95YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGbHV0dGVyd2F2ZSBUZWNobm9sb2d5IFNvbHV0aW9ucyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRm9ydGlzTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRnVsbHJhbmdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2FzaHVhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2F0ZXdheSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpYW50IFN0cmlkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dpZ2lueWEgTWljcm9maW5hbmNlIGJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0MTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaXJlaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dsb3J5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR01CIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR29vZCBOZWlnYm91cnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHb3dhbnMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbkJhbmsgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHcmVlbnZpbGxlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3Jvb21pbmcgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVEkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHVE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hhY2ttYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIYWdnYWkgTW9ydGdhZ2UgQmFuayBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGFzYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIZWFkd2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVkb25tYXJrJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSUJJTEUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2VubmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJa2lyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0lsaXNhbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltbyBTdGF0ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ltcGVyaWFsIEhvbWVzIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbmZpbml0eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0luZmluaXR5IFRydXN0IE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbm5vdmVjdGl2ZXMgS2VzaCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ludGVsbGlmaW4nLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbnRlcmxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJUkwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJc2FsZW95byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0p1YmlsZWUtTGlmZSBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2FkUG9seSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tDTUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLZWdvdycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tvbnRhZ29yYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhZ29zIEJ1aWxkaW5nIEludmVzdG1lbnQgQ29tcGFueScsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xhdmVuZGVyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGVnZW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGlnaHQgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTG92b251cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ00zNicsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW5sYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzIzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWFpbnN0cmVldCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW50cnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01hbGFjaHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXJpdGltZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01heUZhaXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXlGcmVzaCBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWVnYXByYWlzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pY3JvY3JlZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01pZGxhbmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaW50RmluZXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNa3VkaScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbHVzaSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5IFRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9uZXlCb3gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb3lvZmFkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ0OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBCZW5lZml0cyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ011dHVhbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05hZ2FydGEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOYXZ5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmRpb3JhaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05lcHR1bmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgRGF3biBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDIwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05ldyBHb2xkZW4gUGFzdHVyZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgUHJ1ZGVudGlhbCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTA4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTklQIFZpcnR1YWwgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzk5OTk5OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05uZXcgV29tZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOUEYgTWljcm9GaW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc3MDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ051dHVyZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ053YW5uZWdhZGkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPY2hlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2hhZmlhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2twb2dhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2xhYmlzaSBPbmFiYW5qbyBVbml2ZXJzaXR5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT0xPRklOIE9XRU5BIE1JQ1JPRklOQU5DRSBCQU5LICcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09sdWNodWt3dSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09taXllIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT21vbHVhYmkgc2F2aW5ncyBhbmQgbG9hbnMnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPcmF1a3d1IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ5MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09zY290ZWNoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFya3dheS1SZWFkeUNhc2gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXRyaWNrR29sZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheUF0dGl0dWRlIE9ubGluZScsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BlY2FuVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZW5ueXdpc2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZXJzb25hbCBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BldHJhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGlsbGFyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGxhdGludW0gTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BvbHl1bndhbmEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQcmVlbWluZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlc3RpZ2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQdXJwbGVtb25leSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1B5cmFtaWQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA2NTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdRdWlja2Z1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWZ1Z2UgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlZ2VudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlaG9ib3RoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDYzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVsaWFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZXBoaWRpbSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JpY2h3YXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSb3lhbCBFeGNoYW5nZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NhZmUgSGF2ZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWZlVHJ1c3QnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWdhbXUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkIENhcGl0YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTZWVkdmVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N0YW5mb3JkIE1pY3JvZmluYW5jZSBCYWsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGVsbGFzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3Vsc3BhcCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhZ1BheScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RDRiBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUZWFzeU1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RoaW5rIEZpbmFuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcmlkZW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcnVzdGJvbmQgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RydXN0ZnVuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1UgJiBDIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5BQUIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmliZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmljYWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbmltYWlkIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pVXlvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzM4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVU5OIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZhczJuZXRzIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWZXJkYW50IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlydHVlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTUwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmlzYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZUTmV0d29ya3MnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdYc2xuY2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZQ1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZZXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdZb2JlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoIEVhenkgV2FsbGV0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWmVuaXRoTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGl0YW4tUGF5c3RhY2snLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUaGUgQWx0ZXJuYXRpdmUgQmFuayhBbHRCYW5rKScsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAzNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01rb2JvIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU291cmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNjQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFua0lUIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3NScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzczogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIWFkZHJlc3MpIHJldHVybiAnJztcclxuXHJcbiAgY29uc3QgY2xlYW5lZCA9IGFkZHJlc3MucmVwbGFjZSgvW15hLXpBLVowLTlcXHMsXFwtXS9nLCAnJyk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBjbGVhbmVkLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XHJcblxyXG4gIHJldHVybiBub3JtYWxpemVkO1xyXG59XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBiYW5rcywgY291bnRyaWVzLCBjdXJyZW5jaWVzLCBzYW5pdGl6ZUFkZHJlc3MsIHR5cGVzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgZmluZEl0ZW0sXHJcbiAgZ2VuZXJhdGVSYW5kb21OdW1iZXIsXHJcbiAgaXNUZXN0aW5nQlZOLFxyXG4gIHVzZUVycm9yUGFyc2VyLFxyXG59IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IENvcnBvcmF0ZSwgUGF5bWVudCwgUGVyc29uYWwsIFRyYW5zZmVyLCBpV2FsbGV0IH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmVtYmVkbHk/LnVybCA/PyAnaHR0cHM6Ly93YWFzLXN0YWdpbmcuZW1iZWRseS5uZy9hcGkvdjEnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICd4LWFwaS1rZXknOiBlbnZpcm9ubWVudC5lbWJlZGx5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5DbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuICBjb25zdCBvcmdhbml6YXRpb25JZCA9IGVudmlyb25tZW50LmVtYmVkbHkuaWQ7XHJcbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmNsdWRlcyhjb25maWcubWV0aG9kIHx8ICcnKSkge1xyXG4gICAgY29uZmlnLmRhdGEgPSB7XHJcbiAgICAgIC4uLmNvbmZpZy5kYXRhLFxyXG4gICAgICBvcmdhbml6YXRpb25JZCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuY29uc3QgUGF5b3V0Q2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOlxyXG4gICAgZW52aXJvbm1lbnQuZW1iZWRseT8ucGF5b3V0VVJMID8/ICdodHRwczovL3BheW91dC1zdGFnaW5nLmVtYmVkbHkubmcvYXBpJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAneC1hcGkta2V5JzogZW52aXJvbm1lbnQuZW1iZWRseT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY2xhc3MgQ3VzdG9tZXIge1xyXG4gIHN0YXRpYyBhc3luYyBwZXJzb25hbChwYXlsb2FkOiBQZXJzb25hbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VzdG9tZXJUeXBlID0gZmluZEl0ZW0odHlwZXMsICdJbmRpdmlkdWFsJywgJ25hbWUnKTtcclxuICAgICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKFxyXG4gICAgICAgIGNvdW50cmllcyxcclxuICAgICAgICBwYXlsb2FkLmNvdW50cnksXHJcbiAgICAgICAgcGF5bG9hZD8uY291bnRyeT8ubGVuZ3RoID4gMiA/ICduYW1lJyA6ICdjb3VudHJ5Q29kZVR3bycsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvdW50cnk6IGMsIGFkZHJlc3MsIC4uLnJlc3QgfSA9IHBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IHNhbml0aXplZEFkZHJlc3MgPSBzYW5pdGl6ZUFkZHJlc3MoYWRkcmVzcyk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQ6IGN1c3RvbWVyVHlwZT8uaWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBjb3VudHJ5Py5pZCxcclxuICAgICAgICBhZGRyZXNzOiBzYW5pdGl6ZWRBZGRyZXNzLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgJ0VtYmVkbHkgQVBJIENhbGwnKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0Vycm9yIEVtYmVkbHkgQVBJIENhbGwnKTtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICAgICByZXM/Lm1lc3NhZ2UgPz8gcmVzLnRpdGxlLFxyXG4gICAgICAgICAgcmVzPy5zdGF0dXNDb2RlID8/IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy9jdXN0b21lcnMvZ2V0L2lkLycgKyBpZCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIEN1c3RvbWVyIGZyb20gRW1iZWRseScsIDQwNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNvcnBvcmF0ZShwYXlsb2FkOiBDb3Jwb3JhdGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyVHlwZUlkID0gZmluZEl0ZW0odHlwZXMsIHBheWxvYWQudHlwZSwgJ25hbWUnKT8uaWQ7XHJcbiAgICAgIGNvbnN0IGVDb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyaWVzLCBwYXlsb2FkLmNvdW50cnksICdjb3VudHJ5Q29kZVR3bycpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb3VudHJ5LCB0eXBlLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgY3VzdG9tZXJUeXBlSWQsXHJcbiAgICAgICAgY291bnRyeUlkOiBlQ291bnRyeS5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2FkZCcsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXNjb2RlICE9PSAnMDAnKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXN1bHQubWVzc2FnZSwgNTAwKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzLm1lc3NhZ2UsIHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5S1lDKHBheWxvYWQ6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGJ2biA9IHBheWxvYWQuYnZuO1xyXG4gICAgICBpZiAoaXNUZXN0aW5nQlZOKGJ2bikpIGJ2biA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKDExKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvY3VzdG9tZXJzL2t5Yy9wcmVtaXVtLWt5Yz92ZXJpZnk9MScsIHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIGJ2bixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgIT09ICcwMCcpIHJldHVybjtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0N1c3RvbWVyIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCBCVk4gdmVyaWZpY2F0aW9uISc7XHJcblxyXG4gICAgICBpZiAocmVzICYmIHJlcy5tZXNzYWdlLmluY2x1ZGVzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlcy5tZXNzYWdlLCByZXMuc3RhdHVzQ29kZSk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgc3RhdGljIGFzeW5jIEJWTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIE5JTigpIHt9XHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeVdlYmhvb2socmF3Qm9keTogYW55LCBzaWduYXR1cmU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgaG1hYyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBlbnZpcm9ubWVudC5lbWJlZGx5LmtleSk7XHJcbiAgICBobWFjLnVwZGF0ZShyYXdCb2R5LCAndXRmOCcpO1xyXG4gICAgY29uc3QgY29tcHV0ZWRTaWduYXR1cmUgPSBobWFjLmRpZ2VzdCgnaGV4Jyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXB1dGVkU2lnbmF0dXJlICE9PSBzaWduYXR1cmU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBXYWxsZXQge1xyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUod2FsbGV0OiBpV2FsbGV0KSB7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMuZmluZCgoYykgPT4gYy5zaG9ydE5hbWUgPT09IHdhbGxldC5jdXJyZW5jeSk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgdXNlcklkLCAuLi5yZXN0IH0gPSB3YWxsZXQ7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL3dhbGxldHMvYWRkJywge1xyXG4gICAgICAuLi5yZXN0LFxyXG4gICAgICBjdXJyZW5jeUlkOiBjdXJyZW5jeT8uaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXQoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL3dhbGxldHMvZ2V0L3dhbGxldC8nICsgaWQpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdhbGxldEJ5QWNjb3VudChhY2NvdW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy93YWxsZXRzL2dldC9hY2NvdW50LycgKyBhY2NvdW50KTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzIwMCcpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIFdhbGxldCBmcm9tIEVtYmVkbHknLCA0MDQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcihwYXlsb2FkOiBUcmFuc2Zlcikge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnB1dChcclxuICAgICAgJy93YWxsZXRzL3dhbGxldC90cmFuc2FjdGlvbi92Mi93YWxsZXQtdG8td2FsbGV0JyxcclxuICAgICAgcGF5bG9hZCxcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQmFuayB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LmdldCgnL2JhbmtzJyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcyMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBXYWxsZXQgZnJvbSBFbWJlZGx5JywgNDA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocGF5bG9hZDogUGF5bWVudCkge1xyXG4gICAgY29uc3Qgd2ViaG9va1VybCA9IGVudmlyb25tZW50LmVtYmVkbHkud2ViaG9va1VSTDtcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkFjY291bnQgPSBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQ7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25OYW1lID0gZW52aXJvbm1lbnQuZW1iZWRseS5vcmdOYW1lO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbmN5ID0gY3VycmVuY2llcy5maW5kKChjKSA9PiBjLnNob3J0TmFtZSA9PSBwYXlsb2FkLmN1cnJlbmN5KTtcclxuICAgIGNvbnN0IGJhbmsgPSBiYW5rcy5maW5kKChiKSA9PlxyXG4gICAgICBiLmJhbmtOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGF5bG9hZC5kZXN0aW5hdGlvbkJhbmsudG9Mb3dlckNhc2UoKSksXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghYmFuaykgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCYW5rIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW5jeTogYywgZGVzdGluYXRpb25CYW5rLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFBheW91dENsaWVudC5wb3N0KCcvaW50ZXItYmFuay10cmFuc2ZlcicsIHtcclxuICAgICAgLi4ucmVzdCxcclxuICAgICAgd2ViaG9va1VybCxcclxuICAgICAgY3VycmVuY3lJZDogY3VycmVuY3k/LmlkLFxyXG4gICAgICBkZXN0aW5hdGlvbkJhbmtDb2RlOiBiYW5rPy5iYW5rQ29kZSxcclxuICAgICAgc291cmNlQWNjb3VudE51bWJlcjogb3JnYW5pemF0aW9uQWNjb3VudCArICcnLFxyXG4gICAgICBzb3VyY2VBY2NvdW50TmFtZTogb3JnYW5pemF0aW9uTmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYmVkbHkge1xyXG4gIHN0YXRpYyBjdXN0b21lcnMgPSBDdXN0b21lcjtcclxuICBzdGF0aWMgdmFsaWRhdGlvbnMgPSBWYWxpZGF0aW9uO1xyXG4gIHN0YXRpYyB3YWxsZXRzID0gV2FsbGV0O1xyXG4gIHN0YXRpYyBiYW5rcyA9IEJhbms7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBVVmVyaWZ5QlZOIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyLCBpc1Rlc3RpbmdCVk4sIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogZW52aXJvbm1lbnQueW91dmVyaWZ5Py51cmwgPz8gJ2h0dHBzOi8vYXBpLnNhbmRib3gueW91dmVyaWZ5LmNvJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICB0b2tlbjogZW52aXJvbm1lbnQueW91dmVyaWZ5Py5rZXkgPz8gJycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgWW91dmVyaWZ5IHtcclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5QlZOKGRhdGE6IFVWZXJpZnlCVk4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGlmIChpc1Rlc3RpbmdCVk4oZGF0YS5pZCkpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJ0J1bmNoJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnRGlsbG9uJyxcclxuICAgICAgICAgIGRhdGVPZkJpcnRoOiAnMTItMTItMTk5NCcsXHJcbiAgICAgICAgICBjb3VudHJ5OiAnTkcnLFxyXG4gICAgICAgICAgbW9iaWxlOiAnMDgwJyArIGdlbmVyYXRlUmFuZG9tTnVtYmVyKDgpLFxyXG4gICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wb3N0KCcvdjIvYXBpL2lkZW50aXR5L25nL2J2bicsIGRhdGEpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhPy5zdGF0dXM/LmluY2x1ZGVzKCdub3RfZm91bmQnKSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0LmRhdGEucmVhc29uLCA0MDQpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhKSByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZXMgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE7XHJcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXMubWVzc2FnZSwgcmVzLnN0YXR1c0NvZGUpO1xyXG5cclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGU/Lm1lc3NhZ2UsIGUuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlBZGRyZXNzKHBob25lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJ2h0dHBzOi8vYWRkcmVzcy5zdmMueW91dmVyaWZ5LmNvL3YyL2FwaS9kaWdpdGFsLWFkZHJlc3Nlcy9sb29rdXAnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNlbnQ6IHRydWUsXHJcbiAgICAgICAgICBwaG9uZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgdG9rZW46IGVudmlyb25tZW50LnlvdXZlcmlmeT8ua2V5ID8/ICcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0FERFJFU1MgVmVyeScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IGFtb3VudEluS29ibyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuY29uc3QgVFhORkVFID0gcHJvY2Vzcy5lbnYuRVhURVJOQUxfUEVSQ0VOVCA/PyAxNTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVHJhbnNmZXJFdmVudChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFldmVudCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFdmVudCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25CYW5rOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHNvdXJjZUFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICByZW1hcmtzOiBzdHJpbmc7XHJcbiAgICBmcm9tV2FsbGV0SWQ6IHN0cmluZztcclxuICAgIGluaXRpYXRlZEJ5OiBzdHJpbmc7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS5iYW5rcy50cmFuc2Zlcih7XHJcbiAgICAgIGFtb3VudDogTnVtYmVyKHBheWxvYWQuYW1vdW50KSxcclxuICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgIGRlc3RpbmF0aW9uQmFuazogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgcmVtYXJrczogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBzdWNjZWVkZWQnLCA1MDApO1xyXG5cclxuICAgIGNvbnN0IGFtb3VudCA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlclJlY29yZCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEFkZCB0aGlzIHRyYW5zYWN0aW9uIHRvIHRoZSBQcm92aWRlciBhY2NvdW50XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0VNQkVETFknIH0sXHJcbiAgICAgICAgY3JlYXRlOiB7IHByb3ZpZGVyOiAnRU1CRURMWScsIGJhbGFuY2U6IGFtb3VudCB9LFxyXG4gICAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgICAgYmFsYW5jZTogeyBpbmNyZW1lbnQ6IGFtb3VudCB9LFxyXG4gICAgICAgICAgdG90YWw6IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjEgQ3JlYXRlIHBlbmRpbmcgdHJhbnNmZXJcclxuICAgICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjIgRGViaXQgdXNlciB3YWxsZXRcclxuICAgICAgY29uc3QgZnJvbVdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGcm9tIHdhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgY29uc3QgbmV3QmFsYW5jZSA9IEJpZ0ludChmcm9tV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGFtb3VudDtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0Py5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0JhbGFuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBEZWJpdCBmb3IgRkVFc1xyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuICAgICAgY29uc3QgbmV3QmFsQWZ0ZXJGZWUgPSBCaWdJbnQod2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdCYWxBZnRlckZlZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PVRSQU5TRkVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdleHRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuMyBDcmVhdGUgbGVkZ2VyIGVudHJ5IChERUJJVClcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWFtb3VudCxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsYW5jZSxcclxuICAgICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcHJvdmlkZXIgZmxvYXQgbGVkZ2VyIHJvdyAoY3JlZGl0KVxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIGNoYW5nZTogYW1vdW50LFxyXG4gICAgICAgICAgYmFsYW5jZUFmdGVyOiBCaWdJbnQocHJvdmlkZXIuYmFsYW5jZSBhcyBhbnkpICsgYW1vdW50LFxyXG4gICAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuNCBDcmVhdGUgb3V0Ym94IGZvciBhc3luYyBwdWJsaXNoXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LnByb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcGF5bG9hZC5jdXJyZW5jeSxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICAgIHRvQWNjb3VudE5hbWU6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGRlYml0IHRyYW5zYWN0aW9uXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT1UUkFOU0ZFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PUZFRT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgICBjb25zdCBmZWVKb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVmZXJlbmNlOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgICB0b1Byb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIERlYml0IExlZGdlclxyXG4gICAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogLWZlZVJhdGUsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICAgIHRvUHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRmVlIGxlZGdlclxyXG4gICAgICBjb25zdCBmZWVMZWRnZXIgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGZlZUpvdXJuYWwuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGNoYW5nZTogZmVlUmF0ZSxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgICB0eXBlOiAnRkVFJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogJ0NvbW1pc3Npb24gb24gTmlwJyxcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0Py5pZCxcclxuICAgICAgICAgICAgdG9Qcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBZGQgRmVlXHJcbiAgICAgIGNvbnN0IGZlZSA9IGF3YWl0IHR4LmZlZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKGZlZVJhdGUpLCAvL0luIEtvYm8sXHJcbiAgICAgICAgICBjdXJyZW5jeTogdHJhbnNmZXIuY3VycmVuY3ksXHJcbiAgICAgICAgICByYXRlOiBOdW1iZXIoZmVlUmF0ZSksIC8vSW4gS29ibyxcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBsZWRnZXJJZDogZmVlTGVkZ2VyLmlkLFxyXG4gICAgICAgICAgdHlwZTogJ0VYVEVSTkFMJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uIGZvciBGZWVcclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIGFtb3VudDogTnVtYmVyKFRYTkZFRSksXHJcbiAgICAgICAgICBpdGVtSWQ6IGZlZS5pZCxcclxuICAgICAgICAgIHR5cGU6ICdGRUUnLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT1GRUU9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICByZXR1cm4gdHJhbnNmZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNmZXJSZWNvcmQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC50cmFuc2Zlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIHJlYXNvbjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSA/PyBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgICAgdG9BY2NvdW50OiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgICAgZXJyb3I6IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQuaW5pdGlhdGVkQnksXHJcbiAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgIHRvQWNjb3VudE51bWJlcjogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICB0b0FjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICBlcnJvcjogZXJyPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSA/PyBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFeHRlcm5hbCB0cmFuc2ZlciBmYWlsZWQnLCA1MDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBBa3V1ayB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9ha3V1ayc7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8sIGZvcm1hdFRyYW5zZmVyU01TIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0FpcnRpbWVFdmVudChldmVudElkOiBhbnkpIHtcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgYWdncmVnYXRlSWQ6IGV2ZW50SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFldmVudCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gZXZlbnQ/LnBheWxvYWQgYXMge1xyXG4gICAgYWlydGltZUlkOiBzdHJpbmc7XHJcbiAgICBwaG9uZU51bWJlcj86IHN0cmluZztcclxuICAgIGFtb3VudD86IHN0cmluZztcclxuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gICAgdXNlcklkPzogc3RyaW5nO1xyXG4gICAgZnJvbVdhbGxldElkPzogc3RyaW5nO1xyXG4gICAgY291bnRyeT86IHN0cmluZztcclxuICAgIGJhbGFuY2U6IG51bWJlcjtcclxuICAgIGFjY291bnROdW1iZXI6IG51bWJlcjtcclxuICB9O1xyXG5cclxuICBsZXQgcmVzcG9uc2U6IGFueSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IGF3YWl0IEFrdXVrLmFpcnRpbWUoe1xyXG4gICAgICBudW1iZXI6IHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgICAgIGNvdW50cnk6IHBheWxvYWQ/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgYmlsbGluZzogJ3ByZXBhaWQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gbWFyayB0YW5zYWN0aW9uIGNvbXBsZXRlZFxyXG5cclxuICAgICAgLy8gVE9ETzo6IENoZWNrIHRoaXMgYWdhaW4sIGl0IGNhbiBwdWxsIGFueSBsZWRnZXJSb3dcclxuICAgICAgY29uc3QgbGVkZ2VyUm93ID0gYXdhaXQgdHgubGVkZ2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgd2FsbGV0SWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmF0ZSA9IE51bWJlcihwcm9jZXNzLmVudi5BSVJUSU1FX1BFUkNFTlQpID8/IDAuMDI1O1xyXG4gICAgICBhd2FpdCB0eC5mZWUuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0cmFuc2FjdGlvbklkOiBwYXlsb2FkPy5haXJ0aW1lSWQsXHJcbiAgICAgICAgICBwcm92aWRlcjogbGVkZ2VyUm93Py5wcm92aWRlcklkLFxyXG4gICAgICAgICAgdHlwZTogJ0FJUlRJTUUnIGFzIGFueSxcclxuICAgICAgICAgIHJhdGUsXHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihwYXlsb2FkLmFtb3VudCkgKiByYXRlLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgc3RhdHVzOiAnU1VDQ0VTUycgYXMgYW55LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHguYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzcG9uc2U/LmRldGFpbHM/LnR4blJlZmVyZW5jZSArICcnLFxyXG4gICAgICAgICAgbGVkZ2VyRW50cnlJZDogbGVkZ2VyUm93Py5pZCxcclxuICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgICAgIGNvbXBldGVkQXQ6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5EYXRlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICAgIHRvcGljOiAnYWlydGltZS5wdXJjaGFzZS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IHBheWxvYWQuZnJvbVdhbGxldElkLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC51c2VySWQgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgIGFjY291bnQ6IHBheWxvYWQuYWNjb3VudE51bWJlciArICcnLFxyXG4gICAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgZGVzYzogJ0FpcnRpbWUgUHVyY2hhc2UgdG8gJyArIHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgIGJhbGFuY2U6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5iYWxhbmNlKSksXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGN1cnJlbmN5OiByZXNwb25zZT8uZGV0YWlscz8uY3VycmVuY3kgPz8gJ05HTicsXHJcbiAgICAgIHR5cGU6ICdEUicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKGV2ZW50SWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgIGNvdW50cnk6IHVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgcGhvbmU6IHVzZXI/LnBob25lISxcclxuICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBpZiAocmVzcG9uc2U/LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzcG9uc2U/LmRldGFpbHM/LnR4blJlZmVyZW5jZSArICcnLFxyXG4gICAgICAgICAgbmV0d29yazogcmVzcG9uc2U/LmRldGFpbHM/Lm5ldHdvcmssXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGV2ZW50SWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuYWt1dWsucGFydGlhbCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5haXJ0aW1lLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuYWlydGltZUlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnLCBlcnJvcjogKGVyciBhcyBFcnJvcikubWVzc2FnZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHdhbGxldCA9IGF3YWl0IHR4LndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXJMZWRnZXJCYWxhbmNlID1cclxuICAgICAgICBCaWdJbnQod2FsbGV0Py5sZWRnZXJCYWxhbmNlISkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZUJhbGFuY2UgPVxyXG4gICAgICAgIEJpZ0ludCh3YWxsZXQ/LmF2YWlsYWJsZUJhbGFuY2UhKSArXHJcbiAgICAgICAgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld1VzZXJMZWRnZXJCYWxhbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnRkFJTEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGZvcm1hdFRyYW5zZmVyU01TKHtcclxuICAgICAgICBhY2NvdW50OiBwYXlsb2FkLmFjY291bnROdW1iZXIgKyAnJyxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKSxcclxuICAgICAgICBkZXNjOiAnUmV2ZXJzZWQ6IEFpcnRpbWUgUHVyY2hhc2UgdG8gJyArIHBheWxvYWQucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgYmFsYW5jZTogbmV3QXZhaWxhYmxlQmFsYW5jZSxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiByZXNwb25zZT8uZGV0YWlscz8uY3VycmVuY3kgPz8gJ05HTicsXHJcbiAgICAgICAgdHlwZTogJ0NSJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC51c2VySWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcihldmVudElkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgICAgY291bnRyeTogdXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgIHBob25lOiB1c2VyPy5waG9uZSEsXHJcbiAgICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuYWt1dWsuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbQWlydGltZUhhbmRsZXJdIEFpcnRpbWUgcHVyY2hhc2UgZmFpbGVkOicsIGVycik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWt1dWsgfSBmcm9tICdAL2V4dGVuc2lvbnMvYWt1dWsnO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudChcclxuICBldmVudElkOiBhbnksXHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbikge1xyXG4gIGlmIChkYXRhLnR5cGUgPT09ICdTTVMnKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgc2VuZFNNU1dpdGhBa3V1ayhkYXRhKTtcclxuICB9XHJcbiAgaWYgKGRhdGEudHlwZSA9PT0gJ0VNQUlMJykge1xyXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRNYWlsKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgc2VuZFNNU1dpdGhBa3V1ayhkYXRhKTtcclxuICBhd2FpdCBzZW5kTWFpbChkYXRhKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZFNNU1dpdGhBa3V1ayhkYXRhOiBhbnkpIHtcclxuICBhd2FpdCBBa3V1ay5zZW5kU01TKHtcclxuICAgIGNvdW50cnk6IGRhdGEuY291bnRyeSxcclxuICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgIG51bWJlcjogZGF0YS5waG9uZSxcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZE1haWwoZGF0YTogYW55KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHNlbmRFbWFpbCh7XHJcbiAgICB0bzogZGF0YS5lbWFpbCEsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgIHRvX25hbWU6IGRhdGEubmFtZSxcclxuICAgICAgLi4uZGF0YS52YXJpYWJsZXMsXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGRhdGEudGVtcGxhdGUsXHJcbiAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbWJlZGx5VXNlciB9IGZyb20gJy4uL21vZHVsZXMvdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IHRvSVNPRGF0ZSB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0VtYmVkbHlXYWxsZXQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50LCAnR0VUIEVWRU5UJyk7XHJcblxyXG4gIGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgc3RyZWV0TGluZTogc3RyaW5nO1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gICAgZG9iOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGJ2bjogc3RyaW5nO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcGF5bG9hZC5lbWFpbCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG11c3QgcHJvdmlkZSBlbWFpbCcsIDQyMik7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgYWRkcmVzczogcGF5bG9hZD8uc3RyZWV0TGluZSxcclxuICAgICAgY2l0eTogcGF5bG9hZD8uY2l0eSxcclxuICAgICAgY291bnRyeTogcGF5bG9hZD8uY291bnRyeSxcclxuICAgICAgZG9iOiB0b0lTT0RhdGUocGF5bG9hZD8uZG9iISksXHJcbiAgICAgIGZpcnN0TmFtZTogcGF5bG9hZD8ubmFtZT8uc3BsaXQoJyAnKVswXSxcclxuICAgICAgbGFzdE5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJylbMV0sXHJcbiAgICAgIHBob25lOiBwYXlsb2FkPy5waG9uZSxcclxuICAgICAgbWlkZGxlTmFtZTogcGF5bG9hZD8ubmFtZT8uc3BsaXQoJyAnKT8uWzJdID8/ICcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnR0VUIFBBWUxPQUQnKTtcclxuXHJcbiAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBjcmVhdGVFbWJlZGx5VXNlcihldmVudElkLCB7XHJcbiAgICAgIGVtYmVkbHk6IGRhdGEsXHJcbiAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICBidm46IHBheWxvYWQ/LmJ2bj8udHJpbSgpISxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHdhbGxldCwgJ0NSRUFURSBFTUJFRExZIFdBTExFVCcpO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHBheWxvYWQuZW1haWwsXHJcbiAgICAgICAgICB3YWxsZXRJZDogd2FsbGV0Py5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHdhbGxldDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IsICdQcm9jZXNzRW1iZWRseVVTZXInKTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFRyYW5zZmVyIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudChcclxuICBldmVudElkOiBhbnksXHJcbiAgZGF0YTogVHJhbnNmZXIsXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBFbWJlZGx5LndhbGxldHMudHJhbnNmZXIoe1xyXG4gICAgICBhbW91bnQ6IE51bWJlcihkYXRhLmFtb3VudCksXHJcbiAgICAgIGZyb21BY2NvdW50OiBkYXRhLmZyb21BY2NvdW50LFxyXG4gICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogZGF0YS50cmFuc2FjdGlvblJlZmVyZW5jZSxcclxuICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLm9yZ2FuaXphdGlvbi5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBmcm9tQWNjb3VudDogZGF0YS5mcm9tQWNjb3VudCxcclxuICAgICAgICAgIHRvQWNjb3VudDogZGF0YS50b0FjY291bnQsXHJcbiAgICAgICAgICByZW1hcmtzOiBkYXRhLnJlbWFya3MsXHJcbiAgICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogZGF0YS50cmFuc2FjdGlvblJlZmVyZW5jZSxcclxuICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5pbnRlcm5hbC5vcmdhbml6YXRpb24uZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgZnJvbUFjY291bnQ6IGRhdGEuZnJvbUFjY291bnQsXHJcbiAgICAgICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ0ludGVybmFsIHRyYW5zZmVyIGZhaWxlZCB0byBvcmdhbml6YXRpb24gd2FsbGV0IGZhaWxlZCcsXHJcbiAgICAgIDUwMCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFFVRVVFX05BTUVTIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IFdvcmtlciB9IGZyb20gJ2J1bGxtcSc7XHJcbmltcG9ydCB7IHByb2Nlc3NUcmFuc2ZlckV2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLXRyYW5zZmVyJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgcHJvY2Vzc0FpcnRpbWVFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1haXJ0aW1lJztcclxuaW1wb3J0IHsgcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgSU9SZWRpcyBmcm9tICdpb3JlZGlzJztcclxuaW1wb3J0IHsgcHJvY2Vzc0VtYmVkbHlXYWxsZXQgfSBmcm9tICcuL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQnO1xyXG5pbXBvcnQgeyBwcm9jZXNzSW50ZXJuYWxUcmFuc2ZlckV2ZW50IH0gZnJvbSAnLi9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycyc7XHJcblxyXG5jb25zdCByZWRpc0NsaWVudCA9IG5ldyBJT1JlZGlzKGVudmlyb25tZW50LnJlZGlzLnVybCwge1xyXG4gIG1heFJldHJpZXNQZXJSZXF1ZXN0OiBudWxsLFxyXG4gIGVuYWJsZVJlYWR5Q2hlY2s6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7XHJcbiAgaG9zdDogZW52aXJvbm1lbnQucmVkaXMuaG9zdCxcclxuICBwb3J0OiBlbnZpcm9ubWVudC5yZWRpcy5wb3J0LFxyXG4gIG1heFJldHJpZXNQZXJSZXF1ZXN0OiBudWxsLFxyXG4gIGVuYWJsZVJlYWR5Q2hlY2s6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtlcnMge1xyXG4gIHN0YXRpYyBhc3luYyB0cmFuc2ZlcldvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5UUkFOU0ZFUixcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzVHJhbnNmZXJFdmVudChkYXRhLmlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBVc2UgU2FmZUhhdmVuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGludGVybmFsVHJhbnNmZXJXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuSU5URVJOQUxfVFJBTlNGRVIsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudChkYXRhLmlkLCBkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWlydGltZVdvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5BSVJUSU1FLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NBaXJ0aW1lRXZlbnQoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gVXNlIFNhZmVIYXZlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID4gMSlcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWdncmVnYXRlSWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuZmFpbGVkJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIG5vdGlmaWNhdGlvbldvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5OT1RJRklDQVRJT04sXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc05vdGlmaWNhdGlvbnNFdmVudChkYXRhLmlkLCBkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgd2FsbGV0V29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLkNSRUFURVdBTExFVCxcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzRW1iZWRseVdhbGxldChkYXRhLmlkKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsICdXT1JLRVInKTtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVldWUgYXMgQnVsbFF1ZXVlIH0gZnJvbSAnYnVsbG1xJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21OdW1iZXIsIFFVRVVFX05BTUVTIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgV29ya2VycyB9IGZyb20gJy4vV29ya2Vycyc7XHJcbmltcG9ydCBJT1JlZGlzIGZyb20gJ2lvcmVkaXMnO1xyXG5cclxuY29uc3QgcmVkaXNDbGllbnQgPSBuZXcgSU9SZWRpcyhlbnZpcm9ubWVudC5yZWRpcy51cmwsIHtcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBkZWZhdWx0Sm9iT3B0aW9ucyA9IHtcclxuICBhdHRlbXB0czogMyxcclxuICBiYWNrb2ZmOiB7XHJcbiAgICB0eXBlOiAnZXhwb25lbnRpYWwnIGFzIGNvbnN0LFxyXG4gICAgZGVsYXk6IDIwMDAsXHJcbiAgfSxcclxuICByZW1vdmVPbkNvbXBsZXRlOiB7XHJcbiAgICBjb3VudDogMTAwMCxcclxuICAgIGFnZTogMjQgKiAzNjAwLFxyXG4gIH0sXHJcbiAgcmVtb3ZlT25GYWlsOiB7XHJcbiAgICBjb3VudDogNTAwMCxcclxuICAgIGFnZTogNyAqIDI0ICogMzYwMCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zZmVyUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLlRSQU5TRkVSLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxUcmFuc2ZlclF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShcclxuICBRVUVVRV9OQU1FUy5JTlRFUk5BTF9UUkFOU0ZFUixcclxuICB7XHJcbiAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgICBhdHRlbXB0czogMixcclxuICAgIH0sXHJcbiAgfSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhaXJ0aW1lUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLkFJUlRJTUUsIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25RdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuTk9USUZJQ0FUSU9OLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgLy8gYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZW1iZWRseVdhbGxldFF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5DUkVBVEVXQUxMRVQsIHtcclxuICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgLi4uZGVmYXVsdEpvYk9wdGlvbnMsXHJcbiAgICBhdHRlbXB0czogMixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWV1ZSB7XHJcbiAgc3RhdGljIGFzeW5jIHRyaWdnZXIoXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgdHlwZToga2V5b2YgdHlwZW9mIFFVRVVFX05BTUVTLFxyXG4gICAgZGF0YT86IGFueSxcclxuICApOiBQcm9taXNlPHsgam9iSWQ6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ0FJUlRJTUUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJBaXJ0aW1lKGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ1RSQU5TRkVSJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyVHJhbnNmZXIoaWQpO1xyXG5cclxuICAgICAgY2FzZSAnTk9USUZJQ0FUSU9OJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyTm90aWZpY2F0aW9uKGlkLCBkYXRhKTtcclxuXHJcbiAgICAgIGNhc2UgJ0NSRUFURVdBTExFVCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlckNyZWF0ZUVtYmVkbHlXYWxsZXQoaWQpO1xyXG5cclxuICAgICAgY2FzZSAnSU5URVJOQUxfVFJBTlNGRVInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJJbnRlcm5hbFRyYW5zZmVyKGlkLCBkYXRhKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcXVldWUgdHlwZTogJHt0eXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlckFpcnRpbWUoXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8eyBqb2JJZDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBhaXJ0aW1lUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1haXJ0aW1lJyxcclxuICAgICAgeyBpZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGB0cmFuc2Zlci0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJUcmFuc2ZlcihpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCB0cmFuc2ZlclF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtdHJhbnNmZXInLFxyXG4gICAgICB7IGlkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYHRyYW5zZmVyLSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlckludGVybmFsVHJhbnNmZXIoaWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBpbnRlcm5hbFRyYW5zZmVyUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1pbnRlcm5hbC10cmFuc2ZlcicsXHJcbiAgICAgIHsgaWQsIGRhdGEgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgaW50ZXJuYWwtdHJhbnNmZXItJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyTm90aWZpY2F0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgbm90aWZpY2F0aW9uUXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1ub3RpZmljYXRpb24nLFxyXG4gICAgICB7IGlkLCBkYXRhIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYG5vdGlmaWNhdGlvbi0ke2dlbmVyYXRlUmFuZG9tTnVtYmVyKDYpfS0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDMsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJDcmVhdGVFbWJlZGx5V2FsbGV0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IGVtYmVkbHlXYWxsZXRRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLWNyZWF0ZS1lbWJlZGx5LXdhbGxldCcsXHJcbiAgICAgIHsgaWQgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgd2FsbGV0LSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMyxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuV29ya2Vycy5haXJ0aW1lV29ya2VyKCk7XHJcbldvcmtlcnMudHJhbnNmZXJXb3JrZXIoKTtcclxuV29ya2Vycy5ub3RpZmljYXRpb25Xb3JrZXIoKTtcclxuV29ya2Vycy53YWxsZXRXb3JrZXIoKTtcclxuV29ya2Vycy5pbnRlcm5hbFRyYW5zZmVyV29ya2VyKCk7XHJcbiIsImltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IEV4dGVybmFsVHJhbnNmZXJJbnB1dCwgaVdhbGxldCwgVHJhbnNmZXJQYXlsb2FkIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgYW1vdW50SW5Lb2JvLFxyXG4gIGFtb3VudEluTmFpcmEsXHJcbiAgY2hlY2tEYWlseUxpbWl0LFxyXG4gIGZvcm1hdFRyYW5zZmVyU01TLFxyXG59IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmNvbnN0IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UID0gMTAwO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zZmVyVG9FeHRlcm5hbEJhbmsocGF5bG9hZDogRXh0ZXJuYWxUcmFuc2ZlcklucHV0KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICBpbml0aWF0b3JVc2VySWQsXHJcbiAgICBzZW5kZXJOYW1lLFxyXG4gICAgZGVzdGluYXRpb25CYW5rLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TmFtZSxcclxuICAgIGFtb3VudCxcclxuICAgIGN1cnJlbmN5ID0gJ05HTicsXHJcbiAgICByZWFzb24gPSAnRnVuZHMgVHJhbnNmZXInLFxyXG4gIH0gPSBwYXlsb2FkO1xyXG5cclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8oYW1vdW50KTtcclxuICBpZiAoIWlkZW1wb3RlbmN5S2V5KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ01pc3NpbmcgaWRlbXBvdGVuY3kga2V5JywgNDAwKTtcclxuICBpZiAoYW10IDw9IDBuKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgYW1vdW50JywgNDAwKTtcclxuICBpZiAoYW1vdW50IDwgTUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBBbW91bnQgbXVzdCBiZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gJHtNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVH1gLFxyXG4gICAgKTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyAx77iP4oOjIENoZWNrIElkZW1wb3RlbmN5IFJlY29yZFxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGV4aXN0aW5nVHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEudHJhbnNmZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleSB9LFxyXG4gIH0pO1xyXG4gIGlmIChleGlzdGluZ1RyYW5zZmVyKSByZXR1cm4gZXhpc3RpbmdUcmFuc2ZlcjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gMu+4j+KDoyBSZXNvbHZlIFdhbGxldCAmIEJhbGFuY2VcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBbZnJvbVdhbGxldCwgZnJvbVVzZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB1c2VySWQ6IGluaXRpYXRvclVzZXJJZCwgY3VycmVuY3kgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLnVzZXIuZmluZEZpcnN0KHsgd2hlcmU6IHsgaWQ6IGluaXRpYXRvclVzZXJJZCB9IH0pLFxyXG4gIF0pO1xyXG5cclxuICBpZiAoIWZyb21Vc2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIGNvbnN0IGZlZVJhdGUgPSBOdW1iZXIocHJvY2Vzcy5lbnY/LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTUpO1xyXG4gIGNvbnN0IHRvdGFsQW1vdW50ID0gYW1vdW50SW5Lb2JvKGFtb3VudCArIGZlZVJhdGUpO1xyXG5cclxuICBpZiAoTnVtYmVyKGZyb21XYWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgPCB0b3RhbEFtb3VudClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGJhbGFuY2UnLCA0MjIpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgZGFpbHkgbGltaXRcclxuICBjb25zdCBsaW1pdEV4Y2VlZGVkID0gYXdhaXQgY2hlY2tEYWlseUxpbWl0KGZyb21XYWxsZXQsIGZyb21Vc2VyLCBhbXQpO1xyXG4gIGlmIChsaW1pdEV4Y2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoYERhaWx5IGxpbWl0IGV4Y2VlZGVkLmAsIDQwMyk7XHJcblxyXG4gIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdHgucHJvdmlkZXIudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgICB1cGRhdGU6IHt9LFxyXG4gICAgICBjcmVhdGU6IHtcclxuICAgICAgICBwcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgcmVhc29uLFxyXG4gICAgICAgIGtpbmQ6ICdPVVQnLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHNob3VsZFJlZnVuZDogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1hbW91bnQudG9TdHJpbmcoKSxcclxuICAgICAgICBpdGVtSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUicsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgICAgdXNlcklkOiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdkZWJpdCcsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiBgJHtkZXN0aW5hdGlvbkFjY291bnROYW1lfS0ke2Rlc3RpbmF0aW9uQWNjb3VudE51bWJlcn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICBzb3VyY2VBY2NvdW50TnVtYmVyOiBmcm9tV2FsbGV0LmFjY291bnROdW1iZXI/LnRyaW0oKSxcclxuICAgICAgICAgIHNvdXJjZUFjY291bnROYW1lOiBzZW5kZXJOYW1lLnRyaW0oKSxcclxuICAgICAgICAgIHJlbWFya3M6IHJlYXNvbixcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyUmVjb3JkLmlkLCAnVFJBTlNGRVInKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnRyYW5zZmVyUmVjb3JkLFxyXG4gICAgYW1vdW50OiBhbW91bnRJbk5haXJhKHRyYW5zZmVyUmVjb3JkLmFtb3VudCksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhbGxldFRvV2FsbGV0VHJhbnNmZXIocGF5bG9hZDogVHJhbnNmZXJQYXlsb2FkKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICBpbml0aWF0b3JVc2VySWQsXHJcbiAgICBzZW5kZXIsXHJcbiAgICByZWNlaXZlcixcclxuICAgIGFtb3VudCxcclxuICAgIGN1cnJlbmN5ID0gJ05HTicsXHJcbiAgICByZWFzb24sXHJcbiAgfSA9IHBheWxvYWQ7XHJcblxyXG4gIC8vIFRPRE86OiBDaGVjayBmb3IgdXNlciB3YWxsZXQgYW1vdW50IGJlZm9yZSB0cmFuc2ZlcmluZ1xyXG5cclxuICBjb25zdCBhbXQgPSBhbW91bnRJbktvYm8oYW1vdW50KTtcclxuICBpZiAoYW10IDw9IDBuKSB0aHJvdyBuZXcgRXJyb3IoJ0Ftb3VudCBtdXN0IGJlIHBvc2l0aXZlJyk7XHJcbiAgaWYgKGFtb3VudCA8IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgQW1vdW50IG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuICR7TUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlR9YCxcclxuICAgICk7XHJcblxyXG4gIC8vIFJlc29sdmUgc2VuZGVyIGFuZCByZWNpcGllbnRcclxuICBjb25zdCBbZnJvbVdhbGxldCwgdG9XYWxsZXRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBhY2NvdW50TnVtYmVyOiBzZW5kZXIsIGN1cnJlbmN5IH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHJlY2VpdmVyLCBjdXJyZW5jeSB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG5cclxuICBpZiAoIWZyb21XYWxsZXQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgIGBTZW5kZXIgd2FsbGV0IG5vdCBmb3VuZCBmb3IgY3VycmVuY3kgJHtjdXJyZW5jeX1gLFxyXG4gICAgICA0MDQsXHJcbiAgICApO1xyXG4gIGlmICghdG9XYWxsZXQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgIGBSZWNpcGllbnQgd2FsbGV0IG5vdCBmb3VuZCBmb3IgY3VycmVuY3kgJHtjdXJyZW5jeX1gLFxyXG4gICAgICA0MDQsXHJcbiAgICApO1xyXG5cclxuICBpZiAoZnJvbVdhbGxldC5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnU2VuZGVyIHdhbGxldCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciB3YWxsZXQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG4gIGlmICh0b1dhbGxldC5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnUmVjaXBpZW50IHdhbGxldCBpcyBub3QgYWN0aXZlLiBQbGVhc2UgZm9sbG93IG91ciBpbnN0cnVjdGlvbnMgdG8gYWN0aXZhdGUgeW91ciB3YWxsZXQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG5cclxuICBjb25zdCBmcm9tVXNlciA9IGZyb21XYWxsZXQudXNlcjtcclxuICBjb25zdCB0b1VzZXIgPSB0b1dhbGxldC51c2VyO1xyXG5cclxuICAvLyBDaGVja3NcclxuICBpZiAoIXRvVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdSZWNpcGllbnQgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoIWZyb21Vc2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1NlbmRlciBub3QgZm91bmQnLCA0MDQpO1xyXG4gIGlmIChmcm9tVXNlci5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnU2VuZGVyIGFjY291bnQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgYWNjb3VudCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcbiAgaWYgKHRvVXNlci5zdGF0dXMgIT09ICdBQ1RJVkUnKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAnUmVjaXBpZW50IGFjY291bnQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuICBpZiAoZnJvbVVzZXIuaWQgPT09IHRvVXNlci5pZClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQ2Fubm90IHRyYW5zZmVyIHRvIHNlbGYnLCA0MjIpO1xyXG5cclxuICAvLyBjYW5vbmljYWwgb3JkZXIgdG8gYXZvaWQgZGVhZGxvY2tzXHJcbiAgY29uc3Qgb3JkZXJlZCA9IFtmcm9tV2FsbGV0LmlkLCB0b1dhbGxldC5pZF0uc29ydCgpO1xyXG5cclxuICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAvLyBpZGVtcG90ZW5jeSBndWFyZFxyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkZW1wb3RlbmN5S2V5IH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nOyAvLyBsb2cgaGVyZVxyXG5cclxuICAgIC8vIGxvY2sgd2FsbGV0cyB3aXRoIEZPUiBVUERBVEVcclxuICAgIGNvbnN0IGxvY2tlZFJvd3MgPSBhd2FpdCB0eC4kcXVlcnlSYXc8XHJcbiAgICAgIGFueVtdXHJcbiAgICA+YFNFTEVDVCBpZCwgXCJ1c2VySWRcIiwgY3VycmVuY3ksIFwibGVkZ2VyQmFsYW5jZVwiLCBcImF2YWlsYWJsZUJhbGFuY2VcIiwgXCJyZXNlcnZlZEJhbGFuY2VcIiwgdmVyc2lvbiwgc3RhdHVzIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtvcmRlcmVkWzBdfSwgJHtvcmRlcmVkWzFdfSkgRk9SIFVQREFURWA7XHJcbiAgICBpZiAobG9ja2VkUm93cy5sZW5ndGggIT09IDIpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDUwMCk7XHJcblxyXG4gICAgLy8gbWFwIGxvY2tlZCByb3dzXHJcbiAgICBjb25zdCBsb2NrZWRNYXAgPSBuZXcgTWFwKChsb2NrZWRSb3dzIGFzIGFueVtdKS5tYXAoKHIpID0+IFtyLmlkLCByXSkpO1xyXG4gICAgY29uc3QgbG9ja2VkRnJvbSA9IGxvY2tlZE1hcC5nZXQoZnJvbVdhbGxldC5pZCk7XHJcbiAgICBjb25zdCBsb2NrZWRUbyA9IGxvY2tlZE1hcC5nZXQodG9XYWxsZXQuaWQpO1xyXG5cclxuICAgIGlmICghbG9ja2VkRnJvbSB8fCAhbG9ja2VkVG8pXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDQyMik7XHJcblxyXG4gICAgLy8gY2hlY2sgZnVuZHNcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRGcm9tLmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KTtcclxuICAgIC8vIGNvbnN0IHJlc2VydmVkID0gQmlnSW50KChsb2NrZWRGcm9tLnJlc2VydmVkQmFsYW5jZSBhcyBhbnkpIHx8IDApO1xyXG4gICAgaWYgKGF2YWlsYWJsZSA8IGFtdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnN1ZmZpY2llbnQgZnVuZHMnLCA0MDMpO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBkYWlseSBsaW1pdFxyXG4gICAgY29uc3QgbGltaXRFeGNlZWRlZCA9IGF3YWl0IGNoZWNrRGFpbHlMaW1pdChmcm9tV2FsbGV0LCBmcm9tVXNlciwgYW10KTtcclxuICAgIGlmIChsaW1pdEV4Y2VlZGVkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoYERhaWx5IGxpbWl0IGV4Y2VlZGVkLmAsIDQwMyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIFRyYW5zZmVyIHJlY29yZFxyXG4gICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBgdHJhbnNmZXJfJHtwYXlsb2FkLmlkZW1wb3RlbmN5S2V5fWA7XHJcbiAgICBsZXQgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW10LFxyXG4gICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgIGtpbmQ6ICdPVVQnLFxyXG4gICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgcmVhc29uLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb3V0Ym94IGV2ZW50XHJcbiAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwuaW5pdGlhdGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBmcm9tVXNlcklkOiBmcm9tVXNlci5pZCxcclxuICAgICAgICAgIHRvVXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICAgIGluaXRpYXRlZEJ5OiBpbml0aWF0b3JVc2VySWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIEpvdXJuYWxFbnRyeVxyXG4gICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcmVhc29uID8/ICdpbnRlcm5hbCB0cmFuc2ZlcicsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGUgbmV3IGJhbGFuY2VzXHJcbiAgICBjb25zdCBuZXdGcm9tTGVkZ2VyQmFsID0gQmlnSW50KGxvY2tlZEZyb20ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gYW10O1xyXG4gICAgY29uc3QgbmV3RnJvbUF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRGcm9tLmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuXHJcbiAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9IEJpZ0ludChsb2NrZWRUby5sZWRnZXJCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcbiAgICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRUby5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIGxlZGdlciByb3dzIChkZWJpdCB0aGVuIGNyZWRpdCksIHJlZmVyZW5jZSBqb3VybmFsLmlkXHJcbiAgICBjb25zdCBkZWJpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGNoYW5nZTogLWFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0Zyb21MZWRnZXJCYWwsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0RFQklUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICByZWNpcGllbnRXYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNyZWRpdCA9IGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgd2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICByZWFzb24sXHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIHNlbmRlcldhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc2VuZGVyIHdhbGxldFxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdGcm9tTGVkZ2VyQmFsLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0Zyb21BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZWNpcGllbnQgd2FsbGV0XHJcbiAgICBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHRvV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgICAgICB2ZXJzaW9uOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFyayB0cmFuc2ZlciBjb21wbGV0ZWRcclxuICAgIHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnIGFzIGFueSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmNvbXBsZXRlZCcsXHJcbiAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBmcm9tVXNlcklkOiBmcm9tVXNlci5pZCxcclxuICAgICAgICAgIHRvVXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBkZWJpdExlZGdlcklkOiBkZWJpdC5pZCxcclxuICAgICAgICAgIGNyZWRpdExlZGdlcklkOiBjcmVkaXQuaWQsXHJcbiAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkZWJpdCB0cmFuc2FjdGlvblxyXG4gICAgYXdhaXQgdHgudHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFtb3VudDogLWFtb3VudC50b1N0cmluZygpLFxyXG4gICAgICAgIGl0ZW1JZDogZGViaXQuaWQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSJyxcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHVzZXJJZDogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiB0b1VzZXIubmFtZSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICBpdGVtSWQ6IGNyZWRpdC5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgdXNlcklkOiB0b1VzZXIuaWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHR5cGU6ICdjcmVkaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgICAgcmVjaXBpZW50OiB0b1VzZXIubmFtZSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc3RydWN0dXJlZCByZXN1bHRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zZmVyOiB7XHJcbiAgICAgICAgLi4udHJhbnNmZXIsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICAgIGNyZWRpdExlZGdlcklkOiBjcmVkaXQuaWQsXHJcbiAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgIGlkOiB0cmFuc2Zlci5pZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld0Zyb21BdmFpbGFibGUgPSBCaWdJbnQoZnJvbVdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpIC0gYW10O1xyXG4gIGNvbnN0IG5ld1RvQXZhaWxhYmxlID0gQmlnSW50KHRvV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgKyBhbXQ7XHJcblxyXG4gIC8vIFRPRE86IFRoaXMgbm90IHdvcmtpbmdcclxuICBjb25zdCBEUk1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiBmcm9tV2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICBhbW91bnQ6IGFtdCxcclxuICAgIGN1cnJlbmN5LFxyXG4gICAgZGVzYzogcmVhc29uPy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgYmFsYW5jZTogbmV3RnJvbUF2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICB0eXBlOiAnRFInLFxyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgY291bnRyeTogZnJvbVVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2U6IERSTWVzc2FnZSxcclxuICAgIHBob25lOiBmcm9tVXNlcj8ucGhvbmUhLFxyXG4gICAgdHlwZTogJ1NNUycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiB0b1dhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgYW1vdW50OiBhbXQsXHJcbiAgICBkZXNjOiByZWFzb24/LnRvVXBwZXJDYXNlKCksXHJcbiAgICBiYWxhbmNlOiBuZXdUb0F2YWlsYWJsZSxcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBjdXJyZW5jeSxcclxuICAgIHR5cGU6ICdDUicsXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodHJhbnNmZXIuaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICBjb3VudHJ5OiB0b1VzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogdG9Vc2VyPy5waG9uZSEsXHJcbiAgICB0eXBlOiAnU01TJyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZmVyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKHBheWxvYWQ6IHtcclxuICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgYmFua0NvZGU6IHN0cmluZztcclxuICBiYW5rTmFtZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbn0pIHtcclxuICAvLyBDcmVhdGUgdXNlciB3YWxsZXRcclxuICBjb25zdCB1c2VyV2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NvdW50TnVtYmVyOiBwYXlsb2FkLmFjY291bnROdW1iZXIsXHJcbiAgICAgIGJhbmtDb2RlOiBwYXlsb2FkLmJhbmtDb2RlLFxyXG4gICAgICBiYW5rTmFtZTogcGF5bG9hZC5iYW5rTmFtZSxcclxuICAgICAgd2FsbGV0SWQ6IHBheWxvYWQ/LmlkLFxyXG4gICAgICBhdmFpbGFibGVCYWxhbmNlOiAwLFxyXG4gICAgICBsZWRnZXJCYWxhbmNlOiAwLFxyXG4gICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICBzdGF0dXM6ICdBQ1RJVkUnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXJXYWxsZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCBoYXNoUGluLCBoYXNoVG9rZW4sIHZlcmlmeVBpbiB9IGZyb20gJ0AvdXRpbHMvaGFzaCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFkZHJlc3MsXHJcbiAgQmFuayxcclxuICBCVk5JbnB1dCxcclxuICBFbWJlZGx5SW5wdXQsXHJcbiAgTmV4dE9mS2luLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQC91dGlscy9nZXRVc2VyJztcclxuaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgWW91dmVyaWZ5IH0gZnJvbSAnQC9leHRlbnNpb25zL3lvdS12ZXJpZnknO1xyXG5pbXBvcnQgeyB0b0lTT0RhdGUgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0ICogYXMgV2FsbGV0U2VydmljZSBmcm9tICcuLi93YWxsZXRzL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShcclxuICBpZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5leHRPZktpbj86IE5leHRPZktpbjtcclxuICAgIGJhbms/OiBCYW5rO1xyXG4gICAgYnZuPzogc3RyaW5nO1xyXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XHJcbiAgICBlbWFpbFZlcmlmaWVkPzogYm9vbGVhbjtcclxuICAgIG9jY3VwYXRpb24/OiBzdHJpbmc7XHJcbiAgICBlZHVjYXRpb24/OiBzdHJpbmc7XHJcbiAgICByZWxpZ2lvbj86IHN0cmluZztcclxuICAgIG1hcml0YWxTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIGVtYmVkbHlDdXN0b21lcklkPzogc3RyaW5nO1xyXG4gIH0sXHJcbikge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDIwMCk7XHJcblxyXG4gIHJldHVybiBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gQmFzZSB1cGRhdGVcclxuICAgIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcclxuXHJcbiAgICAvLyBURE9EOiBSZW1vdmUgcGFzc3dvcmQgdXBkYXRlIGZyb20gaGVyZVxyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgIGlmIChkYXRhLm9jY3VwYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLm9jY3VwYXRpb24gPSBkYXRhLm9jY3VwYXRpb247XHJcbiAgICBpZiAoZGF0YS5lZHVjYXRpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLmVkdWNhdGlvbiA9IGRhdGEuZWR1Y2F0aW9uO1xyXG4gICAgaWYgKGRhdGEucmVsaWdpb24gIT09IHVuZGVmaW5lZCkgcmVjb3JkLnJlbGlnaW9uID0gZGF0YS5yZWxpZ2lvbjtcclxuICAgIGlmIChkYXRhLmJ2biAhPT0gdW5kZWZpbmVkKSByZWNvcmQuYnZuID0gZGF0YS5idm47XHJcbiAgICBpZiAoZGF0YS5lbWJlZGx5Q3VzdG9tZXJJZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQuZW1iZWRseUN1c3RvbWVySWQgPSBkYXRhLmVtYmVkbHlDdXN0b21lcklkO1xyXG4gICAgaWYgKGRhdGEubWFyaXRhbFN0YXR1cyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICByZWNvcmQubWFyaXRhbFN0YXR1cyA9IGRhdGEubWFyaXRhbFN0YXR1cztcclxuICAgIGlmIChkYXRhLmVtYWlsVmVyaWZpZWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgcmVjb3JkLmVtYWlsVmVyaWZpZWQgPSBkYXRhLmVtYWlsVmVyaWZpZWQ7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlLCBhZ2VudDogeyBzZWxlY3Q6IHsgaWQ6IHRydWUgfSB9IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWxhdGVkIHVwZGF0ZXNcclxuICAgIGlmIChkYXRhPy5uZXh0T2ZLaW4gJiYgdXNlci5hZ2VudD8uaWQpIHtcclxuICAgICAgYXdhaXQgdHguYWdlbnQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5hZ2VudD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuZXh0T2ZLaW46IHtcclxuICAgICAgICAgICAgY3JlYXRlOiB7IC4uLmRhdGEubmV4dE9mS2luIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5iYW5rKSB7XHJcbiAgICAgIGF3YWl0IHR4LmJhbmsuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5kYXRhLmJhbmssXHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIoZGF0YS5iYW5rLmFjY291bnROdW1iZXIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhPy5hZGRyZXNzKSB7XHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IHsgY3JlYXRlOiB7IC4uLmRhdGEuYWRkcmVzcyB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUJWTihidm46IHN0cmluZykge1xyXG4gIGNvbnN0IGJ2bkhhc2ggPSBoYXNoVG9rZW4oYnZuKTtcclxuXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgZW1haWxWZXJpZmllZDogdHJ1ZSxcclxuICAgICAgYnZuOiBidm5IYXNoICxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBCb29sZWFuKGV4aXN0aW5nKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlQaG9uZShwaG9uZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFwaG9uZSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHBob25lOiBwaG9uZSB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SUQoSUQ6IHN0cmluZykge1xyXG4gIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignV2VwYXkgSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHVuaXF1ZUlEOiBJRCB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgcm9sZTogdHJ1ZSxcclxuICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgaXNMb2NrZWQ6IHRydWUsXHJcbiAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUGFzc3dvcmQoaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGlmIChwYXNzd29yZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdQYXNzd29yZCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXdhaXQgZ2V0VXNlcih1c2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBpZiAoIWRhdGEuZG9jdW1lbnRzLmxlbmd0aClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQXRsZWFzdCBvbmUgb2N1bWVudCByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcklkOiBpZCxcclxuICAgICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgY3JlYXRlOiBkYXRhLmRvY3VtZW50cy5tYXAoKGRvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgdHlwZTogZG9jLnR5cGUsXHJcbiAgICAgICAgICBmaWxlVXJsOiBkb2MuZmlsZVVybCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBkb2N1bWVudHM6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZlcmlmaWNhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBpbihpZDogc3RyaW5nLCBwYXlsb2FkOiB7IHBpbjogc3RyaW5nIH0pIHtcclxuICBjb25zdCBoYXNoZWRQaW4gPSBhd2FpdCBoYXNoUGluKHBheWxvYWQucGluKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwaW46IGhhc2hlZFBpbixcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKHVzZXIuZW1iZWRseUN1c3RvbWVySWQpIHJldHVybiB1c2VyO1xyXG5cclxuICAvLyBUcmlnZ2VyIHdhbGxldCBjcmVhdGlvblxyXG4gIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhZ2dyZWdhdGVJZDogdXNlci5pZCxcclxuICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmluaXRpYXRlZCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgc3RyZWV0TGluZTogdXNlcj8uYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgICBjaXR5OiB1c2VyLmFkZHJlc3M/LmNpdHksXHJcbiAgICAgICAgY291bnRyeTogdXNlci5hZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAgIGRvYjogdXNlci5kb2IsXHJcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIGJ2bjogdXNlci5idm4sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIodXNlci5pZCwgJ0NSRUFURVdBTExFVCcpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVVzZXJQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgcGF5bG9hZDogeyBwaW46IHN0cmluZyB9LFxyXG4pIHtcclxuICByZXR1cm4gYXdhaXQgdmVyaWZ5UGluKGhhc2hlZFBpbiwgcGF5bG9hZC5waW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1iZWRseVVzZXIodXNlcklkOiBzdHJpbmcsIGRhdGE6IEVtYmVkbHlJbnB1dCkge1xyXG4gIGxldCBlbWJlZGx5ID0geyBpZDogZGF0YT8uZW1iZWRseT8uaWQgfTtcclxuXHJcbiAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICBlbWJlZGx5ID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMucGVyc29uYWwoe1xyXG4gICAgICBhZGRyZXNzOiBkYXRhPy5lbWJlZGx5Py5hZGRyZXNzLFxyXG4gICAgICBjaXR5OiBkYXRhPy5lbWJlZGx5Py5jaXR5LFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5lbWJlZGx5Py5jb3VudHJ5LFxyXG4gICAgICBkb2I6IGRhdGE/LmVtYmVkbHk/LmRvYixcclxuICAgICAgZmlyc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgbW9iaWxlTnVtYmVyOiBkYXRhPy5lbWJlZGx5Py5waG9uZSxcclxuICAgICAgbWlkZGxlTmFtZTogZGF0YT8uZW1iZWRseT8ubWlkZGxlTmFtZSA/PyBkYXRhPy5lbWJlZGx5Py5sYXN0TmFtZSxcclxuICAgICAgZW1haWxBZGRyZXNzOiBkYXRhLmVtYWlsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlbWJlZGx5LmlkKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uY3VzdG9tZXIuZmFpbGVkJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICAgIGVycm9yOiAnRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgICAgICBlbWJlZGx5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1iZWRseSBwZXJzb25hbCBhY2NvdW50IGNvdWxkIGJlIGNyZWF0ZWQnLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHVwZGF0ZSh1c2VySWQsIHtcclxuICAgICAgZW1iZWRseUN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZlcmlmaWVkID0gYXdhaXQgRW1iZWRseS5jdXN0b21lcnMudmVyaWZ5S1lDKHtcclxuICAgIGJ2bjogZGF0YS5idm4sXHJcbiAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWVkKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmt5Yy5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgICAgICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICAgICAgICBlcnJvcjogJ0VtYmVkbHkgS1lDIGNvdWxkIG5vdCBiZSB2ZXJpZmllZCcsXHJcbiAgICAgICAgICB2ZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdFbWJlZGx5IEtZQyBjb3VsZCBub3QgYmUgdmVyaWZpZWQnLCA1MDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLmNyZWF0ZSh7XHJcbiAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgIGN1c3RvbWVySWQ6IGVtYmVkbHkuaWQsXHJcbiAgICBjdXJyZW5jeTogZGF0YT8uZXh0cmE/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgbmFtZTogYFdlUGF5LSR7dXNlcklkfWAsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzdWx0KSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB1c2VySWQsXHJcbiAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLndhbGxldC5mYWlsZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgd2FsbGV0OiByZXN1bHQsXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgZXJyb3I6ICdXYWxsZXQgY291bGQgbm90IGJlIGNyZWF0ZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignV2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkJywgNTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IFdhbGxldFNlcnZpY2UuY3JlYXRlKHtcclxuICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgYWNjb3VudE51bWJlcjogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5hY2NvdW50TnVtYmVyLFxyXG4gICAgYmFua05hbWU6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYmFua05hbWUsXHJcbiAgICBiYW5rQ29kZTogcmVzdWx0LnZpcnR1YWxBY2NvdW50Py5iYW5rQ29kZSxcclxuICAgIGlkOiByZXN1bHQ/LmlkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBidm5IYXNoID0gaGFzaFRva2VuKGRhdGE/LmJ2bik7XHJcbiAgYXdhaXQgdXBkYXRlKHVzZXJJZCwge1xyXG4gICAgYnZuOiBidm5IYXNoLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gd2FsbGV0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QlZORGF0YSh2YWx1ZTogQlZOSW5wdXQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgWW91dmVyaWZ5LnZlcmlmeUJWTih7XHJcbiAgICBpZDogdmFsdWUuYnZuLFxyXG4gICAgaXNTdWJqZWN0Q29uc2VudDogdHJ1ZSxcclxuICAgIHByZW1pdW1CVk46IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi52YWx1ZSxcclxuICAgIGV4dHJhOiB7XHJcbiAgICAgIG5hbWU6IGRhdGE/LmZpcnN0TmFtZSArICcgJyArIGRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICBkb2I6IHRvSVNPRGF0ZShkYXRhPy5kYXRlT2ZCaXJ0aCksXHJcbiAgICAgIGNvdW50cnk6IGRhdGE/LmNvdW50cnksXHJcbiAgICAgIGdlbmRlcjogZGF0YT8uZ2VuZGVyLFxyXG4gICAgICBwaG9uZTogZGF0YT8ubW9iaWxlLFxyXG4gICAgfSxcclxuICAgIGVtYmVkbHk6IHtcclxuICAgICAgZG9iOiB0b0lTT0RhdGUoZGF0YT8uZGF0ZU9mQmlydGgpLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5jb3VudHJ5LFxyXG4gICAgICBnZW5kZXI6IGRhdGE/LmdlbmRlcixcclxuICAgICAgcGhvbmU6IGRhdGE/Lm1vYmlsZSxcclxuICAgICAgYWRkcmVzczogZGF0YT8uYWRkcmVzcz8uYWRkcmVzc0xpbmUsXHJcbiAgICAgIGNpdHk6IGRhdGE/LmFkZHJlc3M/LnRvd24sXHJcbiAgICAgIGZpcnN0TmFtZTogZGF0YT8uZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogZGF0YT8ubGFzdE5hbWUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IGRhdGE/Lm1pZGRsZU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYXB0dXJlRmluZ2VyUHJpbnQoaWQ6IHN0cmluZywgcGF5bG9hZDogeyBmaW5nZXJQcmludDogc3RyaW5nIH0pIHtcclxuICAvLyBPcHRpb25hbGx5LCBoYXNoIHRoZSBmaW5nZXJwcmludCBiZWZvcmUgc2F2aW5nIGZvciBzZWN1cml0eVxyXG4gIC8vIGNvbnN0IGhhc2hlZEZpbmdlclByaW50ID0gYXdhaXQgaGFzaFBpbihwYXlsb2FkLmZpbmdlclByaW50KTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBmaW5nZXJQcmludDogcGF5bG9hZC5maW5nZXJQcmludCxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUmVnaXN0ZXIoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYnZuOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGQrJC8pIC8vIG9ubHkgZGlnaXRzXHJcbiAgICAgIC5sZW5ndGgoMTEpXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICByb2xlOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnZhbGlkKCdVU0VSJywgJ0FHRU5UJywgJ0FETUlOJywgJ0lOU1RJVFVUSU9OJywgJ01FUkNIQU5UJylcclxuICAgICAgLm9wdGlvbmFsKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVZlcmlmeURPQigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBkb2I6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8pXHJcbiAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgYnZuOiBKb2kuc3RyaW5nKCkubWluKDExKS5tYXgoMTEpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZU9UUCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIHR5cGU6IEpvaS5zdHJpbmcoKS52YWxpZCgnUEhPTkUnLCAnRU1BSUwnKS5kZWZhdWx0KCdFTUFJTCcpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVGb3Jnb3RQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIH0pLm9yKCdwaG9uZScsICdlbWFpbCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVMb2dpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaG9uZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIHBpbjogSm9pLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGZpbmdlclByaW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUmVzZXRQYXNzd29yZCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICB0b2tlbjogSm9pLnN0cmluZygpLm1pbig2KS5tYXgoNikucmVxdWlyZWQoKSxcclxuICAgIG5ld1Bhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDgpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlc2V0UGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBpbjogSm9pLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKSxcclxuICAgIG90cDogSm9pLnN0cmluZygpLm1pbig2KS5tYXgoNikucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVVwZGF0ZVBpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKClcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWZXJpZnlCVk4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgYnZuOiBKb2kuc3RyaW5nKCkubWluKDExKS5tYXgoMTEpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgYXV0aFNlcnZpY2UgZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyB1c2VyU2VydmljZSBmcm9tICcuLi91c2Vycy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7XHJcbiAgVmFsaWRhdGVGb3Jnb3RQYXNzd29yZCxcclxuICBWYWxpZGF0ZUZvcmdvdFBpbixcclxuICBWYWxpZGF0ZUxvZ2luLFxyXG4gIFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyLFxyXG4gIFZhbGlkYXRlT1RQLFxyXG4gIFZhbGlkYXRlUmVnaXN0ZXIsXHJcbiAgVmFsaWRhdGVSZXNldFBhc3N3b3JkLFxyXG4gIFZhbGlkYXRlUmVzZXRQaW4sXHJcbiAgVmFsaWRhdGVVcGRhdGVQaW4sXHJcbiAgVmFsaWRhdGVWZXJpZnlET0IsXHJcbiAgVmVyaWZ5QlZOLFxyXG59IGZyb20gJy4vdmFsaWRhdG9yJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBpc0RldiwgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ0AvdXRpbHMvZ2V0VXNlcic7XHJcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gJ2JvdHRsZW5lY2snO1xyXG5pbXBvcnQgeyBzaWduQWNjZXNzVG9rZW4gfSBmcm9tICdAL3V0aWxzL2p3dCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBsaW1pdGVyID0gbmV3IEJvdHRsZW5lY2soe1xyXG4gIG1heENvbmN1cnJlbnQ6IDEsXHJcbiAgbWluVGltZTogMzMzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHJlZ2lzdGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVnaXN0ZXIoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gYXdhaXQgdXNlclNlcnZpY2UudmFsaWRhdGVCVk4odmFsdWUuYnZuKTtcclxuICAgICAgaWYgKGV4aXN0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0JWTiBhbHJlYWR5IGluIHVzZScsIDQwMyk7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh2YWx1ZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aFNlcnZpY2UucmVnaXN0ZXIocGF5bG9hZCBhcyBhbnkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsIFxyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIGlmIChlLm1lc3NhZ2UuaW5jbHVkZXMoJ2BwaG9uZWAnKSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnUGhvbmUgbnVtYmVyIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlLm1lc3NhZ2UuaW5jbHVkZXMoJ2BlbWFpbGAnKSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0QlZORGV0YWlscyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWZXJpZnlCVk4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCVk5EYXRhKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0JWTiBkZXRhaWxzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0VXNlckRldGFpbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVGb3Jnb3RQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhdXRoU2VydmljZS5nZXRVc2VyRGV0YWlsQnlQaG9uZSh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGRldGFpbHMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgZGF0YTogcGF5bG9hZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGxvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlTG9naW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW4odmFsdWUpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHNpZ25BY2Nlc3NUb2tlbih7IGlkOiBkYXRhLmlkIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGxvZ2luV2l0aEZpbmdlclByaW50KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlTG9naW5XaXRoRmluZ2VyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlcih2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gc2lnbkFjY2Vzc1Rva2VuKHsgaWQ6IGRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZm9yZ290UGFzc3dvcmQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVGb3Jnb3RQYXNzd29yZCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5mb3Jnb3RQYXNzd29yZCh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgc2VudCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29kZVNlbnQ6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGZvcmdvdFBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZvcmdvdFBpbigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5mb3Jnb3RQaW4odmFsdWUpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJDb3VsZG4ndCBzZW50IE9UUFwiLCA1MDApO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIHNlbnQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvZGVTZW50OiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgcmVzZXRQYXNzd29yZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlc2V0UGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeURPQihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVZlcmlmeURPQigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCVk5EYXRhKHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICByb2xlOiAnVVNFUicsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJDb3VsZG4ndCB2ZXJpZnkgQlZOXCIsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCBkb2IgPSBkYXRhPy5leHRyYT8uZG9iO1xyXG4gICAgICBjb25zdCBpc1ZlcmlmaWVkID0gZG9iID09PSB2YWx1ZS5kb2I7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCaXJ0aGRheSB2ZXJpZmllZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaXNWZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHJlc2V0UGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUmVzZXRQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgcGluLCBvdHAgfSA9IHZhbHVlO1xyXG5cclxuICAgICAgLy8gMe+4j+KDoyBFbnN1cmUgT1RQIHdhcyBwcm92aWRlZFxyXG4gICAgICBpZiAoIW90cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignT1RQIGlzIHJlcXVpcmVkIHRvIHJlc2V0IFBJTicsIDQyMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDLvuI/ig6MgVmFsaWRhdGUgT1RQXHJcbiAgICAgIGNvbnN0IHJlY29yZDogYW55ID0ge307XHJcbiAgICAgIGlmICghaXNEZXYoKSAmJiBvdHAgIT09ICcyMjIyMjInKSByZWNvcmQucmVmcmVzaENvZGUgPSBvdHA7XHJcblxyXG4gICAgICBjb25zdCBvdHBSZWNvcmQgPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcmVmcmVzaENvZGU6IG90cCwgLi4ucmVjb3JkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFvdHBSZWNvcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ludmFsaWQgb3IgZXhwaXJlZCBPVFAnLCA0MjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VyOiBVc2VyIHwgbnVsbCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IG90cFJlY29yZC51c2VySWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgLy8gM++4j+KDoyBSZXNldCBQSU5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2V0UGluKHVzZXIsIHsgcGluIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUElOIHJlc2V0IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlUGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcT8udXNlcjtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VuYXV0aG9yaXplZCcsIDQwMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVcGRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSwgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgcGluIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIDPvuI/ig6MgUmVzZXQgUElOXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBpbih1c2VyLCB7IHBpbiB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1BJTiB1cGRhdGVkZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeU9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZsYXc6IEEgdXNlciBjYW4gdXNlIGFub3RoZXIgdXNlciBjb2RlIHRvIHZlcmlmeSBleGNlcHQgdXNlcklEIGlzIHBhc3NlZFxyXG5cclxuICAgICAgY29uc3QgY29kZSA9IHJlcS5ib2R5Py5jb2RlO1xyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcbiAgICAgIGlmICghaXNEZXYoKSAmJiBjb2RlICE9PSAnMjIyMjIyJykgcmVjb3JkLnJlZnJlc2hDb2RlID0gY29kZTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHByaXNtYS52ZXJpZmljYXRpb25JbnRlbnQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IGlkLCAuLi5yZWNvcmQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIE9UUCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBEZWxldGUgYWxsIHVzZXIgT1RQXHJcbiAgICAgIGxpbWl0ZXIuc2NoZWR1bGUoKCkgPT5cclxuICAgICAgICBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB2ZXJpZmljYXRpb24udXNlcklkIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB7IGVtYWlsVmVyaWZpZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1zZzogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgc2VuZE9UUChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZU9UUCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgYXdhaXQgYXV0aFNlcnZpY2UucmVzZW5kT1RQKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdPVFAgU2VudCBTdWNjZXNzZnVsJyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvbW9kdWxlcy9hdXRoL2F1dGgucm91dGVzLnRzXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC5jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIEF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKTtcclxucm91dGVyLnBvc3QoJy9sb2dpbicsIEF1dGhDb250cm9sbGVyLmxvZ2luKTtcclxucm91dGVyLnBvc3QoJy92ZXJpZnkvZG9iJywgQXV0aENvbnRyb2xsZXIudmVyaWZ5RE9CKTtcclxucm91dGVyLnBvc3QoJy9sb2dpbi9maW5nZXJwcmludCcsIEF1dGhDb250cm9sbGVyLmxvZ2luV2l0aEZpbmdlclByaW50KTtcclxucm91dGVyLnBvc3QoJy9wYXNzd29yZC9mb3Jnb3QnLCBBdXRoQ29udHJvbGxlci5mb3Jnb3RQYXNzd29yZCk7XHJcbnJvdXRlci5wb3N0KCcvcGFzc3dvcmQvcmVzZXQnLCBBdXRoQ29udHJvbGxlci5yZXNldFBhc3N3b3JkKTtcclxucm91dGVyLnB1dCgnLzppZC92ZXJpZnknLCBBdXRoQ29udHJvbGxlci52ZXJpZnlPVFApO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQvdmVyaWZ5JywgQXV0aENvbnRyb2xsZXIudmVyaWZ5T1RQKTtcclxucm91dGVyLnBvc3QoJy86aWQvb3RwJywgQXV0aENvbnRyb2xsZXIuc2VuZE9UUCk7XHJcbnJvdXRlci5wb3N0KCcvcGluL2ZvcmdvdCcsIEF1dGhDb250cm9sbGVyLmZvcmdvdFBpbik7XHJcbnJvdXRlci5wdXQoJy9waW4vcmVzZXQnLCBBdXRoQ29udHJvbGxlci5yZXNldFBpbik7XHJcbnJvdXRlci5wdXQoJy9waW4vdXBkYXRlJywgQXV0aENvbnRyb2xsZXIudXBkYXRlUGluKTtcclxucm91dGVyLmdldCgnL2J2bicsIEF1dGhDb250cm9sbGVyLmdldEJWTkRldGFpbHMpO1xyXG5yb3V0ZXIuZ2V0KCcvdXNlci1kZXRhaWxzJywgQXV0aENvbnRyb2xsZXIuZ2V0VXNlckRldGFpbHMpO1xyXG5cclxuLy8gRm9yZ2V0IFBpblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBpbjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDQpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVbmlxdWVJRCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBpZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVBob25lKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKCkucGF0dGVybigvXlswLTldezEwLDE1fSQvKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlU2V0Q3JlZGVudGlhbCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaG9uZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pXHJcbiAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oOCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVXBkYXRlVXNlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIG9jY3VwYXRpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZWR1Y2F0aW9uOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHJlbGlnaW9uOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIG1hcml0YWxTdGF0dXM6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgYWRkcmVzczogSm9pLm9iamVjdCh7XHJcbiAgICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBzdGF0ZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGNpdHk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBzdHJlZXRMaW5lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgb2ZmaWNlX2FkZHJlc3M6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBsYW5kbWFyazogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICB9KS5yZXF1aXJlZCgpLFxyXG4gICAgYmFuazogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBhY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0eXBlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIH0pLm9wdGlvbmFsKCksXHJcbiAgICBuZXh0T2ZLaW46IEpvaS5vYmplY3Qoe1xyXG4gICAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICByZWxhdGlvbnNoaXA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oOCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQlZOKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJudjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDExKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlT1RQKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGNvZGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlxcZCskLykgLy8gb25seSBkaWdpdHNcclxuICAgICAgLmxlbmd0aCg2KVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvY3VtZW50czogSm9pLmFycmF5KCkuaXRlbXMoXHJcbiAgICAgIEpvaS5vYmplY3Qoe1xyXG4gICAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgLnZhbGlkKFxyXG4gICAgICAgICAgICAnUEFTU1BPUlQnLFxyXG4gICAgICAgICAgICAnTkFUSU9OQUxfSUQnLFxyXG4gICAgICAgICAgICAnRFJJVkVSX0xJQ0VOU0UnLFxyXG4gICAgICAgICAgICAnVVRJTElUWV9CSUxMJyxcclxuICAgICAgICAgICAgJ1ZPVEVSX0NBUkQnLFxyXG4gICAgICAgICAgICAnQ0FDJyxcclxuICAgICAgICAgICAgJ01FTUFSVCcsXHJcbiAgICAgICAgICAgICdJREZST05UJyxcclxuICAgICAgICAgICAgJ0lEQkFDSycsXHJcbiAgICAgICAgICAgICdBVVRIT1JJVFlfTEVUVEVSJyxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGZpbGVVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB9KSxcclxuICAgICksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZpbmdlclByaW50KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGZpbmdlclByaW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyB1c2VyU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0ZVBhc3N3b3JkLFxyXG4gIFZhbGlkYXRlU2V0Q3JlZGVudGlhbCxcclxuICBWYWxpZGF0ZVVwZGF0ZVVzZXIsXHJcbiAgVmFsaWRhdGVWZXJpZmljYXRpb24sXHJcbiAgVmFsaWRhdGVQaW4sXHJcbiAgVmFsaWRhdGVPVFAsXHJcbiAgVmFsaWRhdGVGaW5nZXJQcmludCxcclxuICBWYWxpZGF0ZVVuaXF1ZUlELFxyXG4gIFZhbGlkYXRlUGhvbmUsXHJcbn0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHRvSVNPRGF0ZSwgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ0AvdXRpbHMvZ2V0VXNlcic7XHJcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gJ2JvdHRsZW5lY2snO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHNldENyZWRlbnRpYWxzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGlkID0gcmVxPy5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlU2V0Q3JlZGVudGlhbCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBjcmVkZW50aWFsIHNldCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVVzZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCcpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVXBkYXRlVXNlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIGlmICh2YWx1ZT8uZW1haWwgJiYgIXVzZXIuZW1iZWRseUN1c3RvbWVySWQpIHtcclxuICAgICAgLy8gICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAvLyAgICAgYWRkcmVzczogdXNlcj8uYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgLy8gICAgIGNpdHk6IHVzZXI/LmFkZHJlc3M/LmNpdHksXHJcbiAgICAgIC8vICAgICBjb3VudHJ5OiB1c2VyPy5hZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAvLyAgICAgZG9iOiB0b0lTT0RhdGUodXNlcj8uZG9iISksXHJcbiAgICAgIC8vICAgICBmaXJzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgIC8vICAgICBsYXN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVsxXSxcclxuICAgICAgLy8gICAgIHBob25lOiB1c2VyPy5waG9uZSxcclxuICAgICAgLy8gICAgIG1pZGRsZU5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJyk/LlsyXSA/PyAnJyxcclxuICAgICAgLy8gICB9O1xyXG5cclxuICAgICAgLy8gICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYSBRdWV1ZVxyXG4gICAgICAvLyAgIGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyKHVzZXIuaWQsIHtcclxuICAgICAgLy8gICAgIGVtYmVkbHk6IGRhdGEsXHJcbiAgICAgIC8vICAgICBlbWFpbDogdmFsdWUuZW1haWwsXHJcbiAgICAgIC8vICAgICBidm46IHVzZXI/LmJ2bj8udHJpbSgpISxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuXHJcbiAgICAgIGlmIChlLm1lc3NhZ2UuaW5jbHVkZXMoJyhgZW1haWxgKScpKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3QnIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5VXNlckJ5UGhvbmUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaG9uZSgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSh2YWx1ZS5waG9uZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5VXNlckJ5VW5pcXVlSWQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVbmlxdWVJRCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlJRCh2YWx1ZS5pZCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlUGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgSUQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIUlEKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1BhcmFtcyBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IElEIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jcmVhdGVQaW4oSUQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcGluIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1cGRhdGVkVXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeVBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCd1bmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IHVzZXJTZXJ2aWNlLnZlcmlmeVVzZXJQaW4odXNlci5waW4hLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHBpbiB2ZXJpZmllZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaXNWZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkUGFzc3dvcmQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBhc3N3b3JkKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShJRCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBwYXNzd29yZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFZlcmlmaWNhdGlvbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZCA9IHJlcT8ucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbihpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQWdlbnQgdmVyaWZpY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB2ZXJpZmljYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZU9UUCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiB2YWx1ZS5jb2RlLCB1c2VySWQ6IGlkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF2ZXJpZmljYXRpb24pIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBPVFAnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gRGVsZXRlIGFsbCB1c2VyIE9UUFxyXG4gICAgICAvLyBUT0RPOiBzZW5kIHRvIGJhY2tncm91bmRcclxuICAgICAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5kZWxldGVNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHZlcmlmaWNhdGlvbi51c2VySWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB7IGVtYWlsVmVyaWZpZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1zZzogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3VycmVudFVzZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAzKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbXNnOiAnTG9nZ2VkIGluIFN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjYXB0dXJlRmluZ2VyUHJpbnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZpbmdlclByaW50KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBJRCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgdXNlclNlcnZpY2UuY2FwdHVyZUZpbmdlclByaW50KElELCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGZpbmdlciBQcmludCBhZGRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdXBkYXRlZFVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cclxuXHJcbi8vIGltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyB2ZXJpZnlBY2Nlc3NUb2tlbiB9IGZyb20gJ0AvdXRpbHMvand0JztcclxuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuLyoqIGF1dGggbWlkZGxld2FyZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBBdXRoKFxyXG4gIHJlcTogUmVxdWVzdCxcclxuICByZXM6IFJlc3BvbnNlLFxyXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGFjY2VzcyBhdXRob3JpemUgaGVhZGVyIHRvIHZhbGlkYXRlIHJlcXVlc3RcclxuICAgIGNvbnN0IHRva2VuID0gcmVxPy5oZWFkZXJzPy5hdXRob3JpemF0aW9uPy5zcGxpdCgnICcpWzFdO1xyXG4gICAgaWYgKCF0b2tlbikgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyk7XHJcblxyXG4gICAgLy8gcmV0cmlldmluZyB1c2VyIGRhdGFcclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHZlcmlmeUFjY2Vzc1Rva2VuKHRva2VuKTtcclxuXHJcbiAgICBpZiAoIWRlY29kZWRUb2tlbj8uaWQpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCB0b2tlbiEnIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBkZWNvZGVkVG9rZW4/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUsIHdhbGxldHM6IHRydWUgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyk7XHJcblxyXG4gICAgcmVxLnVzZXIgPSB1c2VyO1xyXG5cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cyg0MDEpXHJcbiAgICAgIC5qc29uKHsgZXJyb3I6IGVycm9yPy5tZXNzYWdlID8/ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXV0aCBmcm9tICdAL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9tZScsIEF1dGgsIENvbnRyb2xsZXIuY3VycmVudFVzZXIpO1xyXG5yb3V0ZXIucHV0KCcvOmlkJywgQ29udHJvbGxlci51cGRhdGVVc2VyKTtcclxucm91dGVyLnBhdGNoKCcvOmlkJywgQ29udHJvbGxlci51cGRhdGVVc2VyKTtcclxucm91dGVyLnB1dCgnLzppZC9jcmVkZW50aWFscycsIENvbnRyb2xsZXIuc2V0Q3JlZGVudGlhbHMpO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQvY3JlZGVudGlhbHMnLCBDb250cm9sbGVyLnNldENyZWRlbnRpYWxzKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZpY2F0aW9uJywgQ29udHJvbGxlci5hZGRWZXJpZmljYXRpb24pO1xyXG5yb3V0ZXIucG9zdCgnLzppZC9waW4nLCBDb250cm9sbGVyLmNyZWF0ZVBpbik7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3ZlcmlmeScsIEF1dGgsIENvbnRyb2xsZXIudmVyaWZ5UGluKTtcclxucm91dGVyLnBvc3QoJy86aWQvZmluZ2VycHJpbnQnLCBDb250cm9sbGVyLmNhcHR1cmVGaW5nZXJQcmludCk7XHJcbnJvdXRlci5wb3N0KCcvcGhvbmUnLCBDb250cm9sbGVyLnZlcmlmeVVzZXJCeVBob25lKTtcclxucm91dGVyLnBvc3QoJy9pZCcsIENvbnRyb2xsZXIudmVyaWZ5VXNlckJ5VW5pcXVlSWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBCdXNpbmVzcyB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnVzaW5lc3MoaWQ6IHN0cmluZywgcGF5bG9hZDogQnVzaW5lc3MpIHtcclxuICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xyXG5cclxuICBpZiAocGF5bG9hZC5hZGRyZXNzKSB7XHJcbiAgICBjb25zdCBhID0gYXdhaXQgcHJpc21hLmFkZHJlc3MuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnBheWxvYWQuYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGRhdGEuYWRkcmVzc0lkID0gYS5pZDtcclxuICB9XHJcblxyXG4gIGlmIChwYXlsb2FkLmJhbmspIHtcclxuICAgIGRhdGEuYmFua3MgPSB7XHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGFjY291bnROYW1lOiBwYXlsb2FkPy5iYW5rPy5hY2NvdW50TmFtZSEsXHJcbiAgICAgICAgYWNjb3VudE51bWJlcjogTnVtYmVyKHBheWxvYWQ/LmJhbms/LmFjY291bnROdW1iZXIhKSxcclxuICAgICAgICBuYW1lOiBwYXlsb2FkPy5iYW5rPy5uYW1lISxcclxuICAgICAgICB0eXBlOiBwYXlsb2FkPy5iYW5rPy50eXBlISxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzcy5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBjYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeSxcclxuICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxyXG4gICAgICBjb250YWN0RW1haWw6IHBheWxvYWQuY29udGFjdEVtYWlsLFxyXG4gICAgICBjb250YWN0UGhvbmU6IHBheWxvYWQuY29udGFjdFBob25lLFxyXG4gICAgICBtZXJjaGFudElkOiBpZCxcclxuICAgICAgLi4uZGF0YSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBidXNpbmVzcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBpZiAoIWRhdGEuZG9jdW1lbnRzLmxlbmd0aClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQXQgbGVhc3Qgb25lIGRvY3VtZW50IHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgLy8gICBDaGVjayBmb3IgYnVzaW5lc3NcclxuICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzcy5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcbiAgaWYgKCFidXNpbmVzcykgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCdXNpbmVzcyBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGJ1c2luZXNzSWQ6IGlkLFxyXG4gICAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBjcmVhdGU6IGRhdGEuZG9jdW1lbnRzLm1hcCgoZG9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICB0eXBlOiBkb2MudHlwZSxcclxuICAgICAgICAgIGZpbGVVcmw6IGRvYy5maWxlVXJsLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGRvY3VtZW50czogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdmVyaWZpY2F0aW9uO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUJ1c2luZXNzKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGNhdGVnb3J5OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgY29udGFjdEVtYWlsOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGNvbnRhY3RQaG9uZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBzdGFydGVkQXQ6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgIGFkZHJlc3M6IEpvaS5vYmplY3Qoe1xyXG4gICAgICBjb3VudHJ5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgY2l0eTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIHN0YXRlOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgc3RyZWV0TGluZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGxhbmRtYXJrOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pLFxyXG4gICAgYmFuazogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBhY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0eXBlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIH0pLm9wdGlvbmFsKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVZlcmlmaWNhdGlvbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBkb2N1bWVudHM6IEpvaS5hcnJheSgpLml0ZW1zKFxyXG4gICAgICBKb2kub2JqZWN0KHtcclxuICAgICAgICB0eXBlOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAgIC52YWxpZChcclxuICAgICAgICAgICAgJ1BBU1NQT1JUJyxcclxuICAgICAgICAgICAgJ05BVElPTkFMX0lEJyxcclxuICAgICAgICAgICAgJ0RSSVZFUl9MSUNFTlNFJyxcclxuICAgICAgICAgICAgJ1VUSUxJVFlfQklMTCcsXHJcbiAgICAgICAgICAgICdWT1RFUl9DQVJEJyxcclxuICAgICAgICAgICAgJ0NBQycsXHJcbiAgICAgICAgICAgICdNRU1BUlQnLFxyXG4gICAgICAgICAgICAnSURGUk9OVCcsXHJcbiAgICAgICAgICAgICdJREJBQ0snLFxyXG4gICAgICAgICAgICAnQVVUSE9SSVRZX0xFVFRFUicsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAucmVxdWlyZWQoKSxcclxuICAgICAgICBmaWxlVXJsOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgfSksXHJcbiAgICApLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgTWVyY2hhbnQgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVCdXNpbmVzcywgVmFsaWRhdGVWZXJpZmljYXRpb24gfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGFkZEJ1c2luZXNzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXE/LnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJRCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUJ1c2luZXNzKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IE1lcmNoYW50LmNyZWF0ZUJ1c2luZXNzKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCdXNpbmVzcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBidXNpbmVzcyxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFZlcmlmaWNhdGlvbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBNZXJjaGFudC5hZGRWZXJpZmljYXRpb24oaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1ZlcmlmaWNhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdmVyaWZpY2F0aW9uLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvOmlkL2J1c2luZXNzJywgQ29udHJvbGxlci5hZGRCdXNpbmVzcyk7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3ZlcmlmaWNhdGlvbicsIENvbnRyb2xsZXIuYWRkVmVyaWZpY2F0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8sIGZvcm1hdFRyYW5zZmVyU01TLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5jb25zdCBUWE5GRUUgPSBwcm9jZXNzLmVudi5FWFRFUk5BTF9QRVJDRU5UID8/IDE1O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBheW91dChwYXlsb2FkOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICBpZiAocGF5bG9hZD8uc3RhdHVzPy50b0xvd2VyQ2FzZSgpICE9PSAnc3VjY2VzcycpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXJyb3IgZnJvbSBFbWJlZGx5JywgNTAwKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRyYW5zZmVyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICBpZiAoWydDT01QTEVURUQnLCAnUkVWRVJTRUQnXS5pbmNsdWRlcyh0cmFuc2Zlci5zdGF0dXMpKSByZXR1cm4gdHJhbnNmZXI7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB0cmFuc2Zlci5tZXRhZGF0YSBhcyB7IHByb3ZpZGVJZD86IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgeW91IGNhbiB1c2UgZGVjcmVtZW50IGluIHVwZGF0ZVdhbGxldCBpbnN0ZWFkIG9mIHF1ZXJpbmcgaGVyZVxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXIuZnJvbVdhbGxldElkISB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiBtZXRhZGF0YT8ucHJvdmlkZUlkLFxyXG4gICAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0Ftb3VudEluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTsgLy9Db252ZXJ0ZWQgdG8gS29ib1xyXG4gICAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gbmV3QW1vdW50SW5Lb2JvO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETzo6IE5PVElGWSBVU0VSXHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICAgIGFjY291bnQ6IHVwZGF0ZWRXYWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICBhbW91bnQ6IG5ld0Ftb3VudEluS29ibyxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBUUkFOU0ZFUiBUTyAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICBiYWxhbmNlOiB1cGRhdGVkV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICBjb3VudHJ5OiB3YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB3YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBGRUUgSGVyZVxyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzLi4gSXQgbWF5IHNob3cgaW5jb3JyZWN0IGJhbGFuY2UgaW4gU01TIChCZWNhdXNlIHRoZSBiYWxhbmNlIHdhcyBiaWxsZWQgYmVmb3JlKVxyXG4gICAgICBjb25zdCBuZXdCYWxBZnRlckZlZSA9IEJpZ0ludCh1cGRhdGVkV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBjb25zdCBuZXdMZWRnZUJhbEFmdGVyRmVlID1cclxuICAgICAgICBCaWdJbnQodXBkYXRlZFdhbGxldD8ubGVkZ2VyQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdMZWRnZUJhbEFmdGVyRmVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZmVlID0gYXdhaXQgdHguZmVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGZlZS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGZlZU1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdXBkYXRlZFdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogZmVlUmF0ZSxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBDb21taXNzaW9uIG9uIE5JUCBUcmFuc2ZlcmAsXHJcbiAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgY291bnRyeTogd2FsbGV0Py51c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgICAgbWVzc2FnZTogZmVlTWVzc2FnZSxcclxuICAgICAgICBwaG9uZTogd2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWRUcmFuc2ZlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlclJlY29yZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2U7XHJcblxyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIG1lc3NhZ2UgPSBlPy5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyaXRlIFJldmVyc2UgbG9naWNcclxuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdFcnJvciBmcm9tIEVtYmVkbHknKSkge1xyXG4gICAgICBjb25zdCBuZXdBbW91bnRJbktvYm8gPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0ZlZUluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcblxyXG4gICAgICBjb25zdCB0cnggPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmRlYml0QWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiB7IGluY3JlbWVudDogbmV3QW1vdW50SW5Lb2JvICsgbmV3RmVlSW5Lb2JvIH0sXHJcbiAgICAgICAgICAgIGxlZGdlckJhbGFuY2U6IHsgaW5jcmVtZW50OiBuZXdBbW91bnRJbktvYm8gKyBuZXdGZWVJbktvYm8gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlcj8uaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnUkVWRVJTRUQnIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdSRVZFUlNFRCcsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkucmV2ZXJzZWQnLFxyXG4gICAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcixcclxuICAgICAgICAgIHdhbGxldCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE5vdGlmeSB1c2VyIG9mIHJldmVyc2FsXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdHJ4LndhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogbmV3QW1vdW50SW5Lb2JvLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgICAgZGVzYzogYFJFVkVSU0VEOiAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cngudHJhbnNmZXI/LmN1cnJlbmN5ISxcclxuICAgICAgICBiYWxhbmNlOiB0cngud2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyeC50cmFuc2Zlcj8uaWQhLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgIGNvdW50cnk6IHRyeC53YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB0cngud2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YTogeyBlcnJvcjogbWVzc2FnZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbG93KHBheWxvYWQ6IGFueSkge1xyXG4gIC8vIEluY2FzZSBvZiBkb3VibGUgd2ViaG9va1xyXG4gIGNvbnN0IF90cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChfdHJhbnNmZXIpIHJldHVybiBfdHJhbnNmZXI7XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmFjY291bnROdW1iZXIgfSxcclxuICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBwcmlzbWEucHJvdmlkZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIGtpbmQ6ICdJTicsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQ/LnJlZmVyZW5jZSxcclxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZD8ucmVmZXJlbmNlLFxyXG4gICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHNob3VsZFJlZnVuZDogZmFsc2UsXHJcbiAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB0eXBlOiAnSU5GTE9XJyxcclxuICAgICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgIGNvbnN0IGpvdXJuYWwgPSBhd2FpdCB0eC5qb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZmVyZW5jZTogcGF5bG9hZC5yZWZlcmVuY2UsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGZyb21Qcm92aWRlcklkOiBwcm92aWRlcj8uaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB3YWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld1RvTGVkZ2VyQmFsID1cclxuICAgICAgQmlnSW50KHdhbGxldC5sZWRnZXJCYWxhbmNlKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuICAgIGNvbnN0IG5ld1RvQXZhaWxhYmxlID1cclxuICAgICAgQmlnSW50KHdhbGxldC5hdmFpbGFibGVCYWxhbmNlKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiB3YWxsZXQuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGNoYW5nZTogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGJhbGFuY2VBZnRlcjogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyPy5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQuaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld1RvQXZhaWxhYmxlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgIGl0ZW1JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdHlwZTogJ0RFUE9TSVQnLFxyXG4gICAgICAgIHVzZXJJZDogd2FsbGV0Py51c2VyPy5pZCEsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICAgIHR5cGU6ICdjcmVkaXQnLFxyXG4gICAgICAgICAgcmVhc29uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiBwYXlsb2FkPy5yZWZlcmVuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gIH0pO1xyXG5cclxuICAvL1RPRE86IFRyaWdnZXIgTm90aWZpY2F0aW9uc1xyXG4gIGNvbnN0IG5ld1RvQXZhaWxhYmxlID1cclxuICAgIEJpZ0ludCh3YWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgdHlwZTogJ0NSJyxcclxuICAgIGRlc2M6IGBUUkFOU0ZFUiBGUk9NICR7cGF5bG9hZD8uc2VuZGVyTmFtZX0gLSAke3BheWxvYWQ/LmRlc2NyaXB0aW9ufWAudG9VcHBlckNhc2UoKSxcclxuICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgIGJhbGFuY2U6IG5ld1RvQXZhaWxhYmxlLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICBjb3VudHJ5OiB3YWxsZXQudXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBob25lOiB3YWxsZXQudXNlcj8ucGhvbmUhLFxyXG4gICAgdHlwZTogJ1NNUycsXHJcbiAgfSk7XHJcblxyXG4gIC8vIE1vdmUgbW9uZXkgZnJvbSB1c2VyIHdhbGxldCB0byBvcmdhbml6YXRpb24gd2FsbGV0XHJcblxyXG4gIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICBjb25zdCByZWYgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwub3JnYW5pemF0aW9uLmluaXRpYXRlZCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBmcm9tQWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQsXHJcbiAgICAgICAgcmVtYXJrczogJ1RyYW5zZmVyIGZyb20gdXNlciB3YWxsZXQgdG8gb3JnYW5pemF0aW9uIHdhbGxldCcsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlZixcclxuICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIFJlbW92ZSBkYXRhIG9iamVjdCBmcm9tIHRoaXMgUXVldWVcclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnSU5URVJOQUxfVFJBTlNGRVInLCB7XHJcbiAgICBmcm9tQWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICB0b0FjY291bnQ6IGVudmlyb25tZW50LmVtYmVkbHkub3JnQWNjb3VudCxcclxuICAgIHJlbWFya3M6ICdUcmFuc2ZlciBmcm9tIHVzZXIgd2FsbGV0IHRvIG9yZ2FuaXphdGlvbiB3YWxsZXQnLFxyXG4gICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlZixcclxuICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cmFuc2ZlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCAqIGFzIHdlYmhvb2tTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGhhbmRsZVRyYW5zZmVycyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHJlcS5oZWFkZXJzWyd4LWVtYmVkbHktc2lnbmF0dXJlJ107XHJcbiAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuICAgICAgY29uc3QgcmF3Qm9keSA9IGJvZHk/LnRvU3RyaW5nKCd1dGY4Jyk7XHJcblxyXG4gICAgICBpZiAoIXNpZ25hdHVyZSB8fCAhcmF3Qm9keSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ01pc3Npbmcgc2lnbmF0dXJlIG9yIGJvZHknLCA0MDApO1xyXG5cclxuICAgICAgY29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IEVtYmVkbHkudmFsaWRhdGlvbnMudmVyaWZ5V2ViaG9vayhcclxuICAgICAgICByYXdCb2R5LFxyXG4gICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghaXNWZXJpZmllZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIHNpZ25hdHVyZScsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSByZXEuYm9keTtcclxuICAgICAgbGV0IHRyYW5zZmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5ldmVudCA9PT0gJ25pcCcpXHJcbiAgICAgICAgdHJhbnNmZXIgPSBhd2FpdCB3ZWJob29rU2VydmljZS5pbmZsb3cocmVzdWx0Py5kYXRhKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZXZlbnQgPT09ICdwYXlvdXQnKVxyXG4gICAgICAgIHRyYW5zZmVyID0gYXdhaXQgd2ViaG9va1NlcnZpY2UucGF5b3V0KHJlc3VsdD8uZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdXZWJob29rIHJlY2VpdmVkIGFuZCB2ZXJpZmllZCcsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXIsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL2FrdXVrJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gIH0pO1xyXG59KTtcclxucm91dGVyLnBvc3QoJy9lbWJlZGx5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnNlbmQoKTtcclxufSk7XHJcbnJvdXRlci5wb3N0KFxyXG4gICcvZW1iZWRseS90cmFuc2ZlcnMnLFxyXG4gIGV4cHJlc3MucmF3KHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gIENvbnRyb2xsZXIuaGFuZGxlVHJhbnNmZXJzLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVUcmFuc2ZlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBzZW5kZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgcmVjZWl2ZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYW1vdW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSwgLy8gc21hbGxlc3QgdW5pdCAoaW50ZWdlcilcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkubWF4KDMpLnJlcXVpcmVkKCksXHJcbiAgICByZWFzb246IEpvaS5zdHJpbmcoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRXh0ZXJuYWxUcmFuc2ZlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBhbW91bnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLCAvLyBzbWFsbGVzdCB1bml0IChpbnRlZ2VyKVxyXG4gICAgY3VycmVuY3k6IEpvaS5zdHJpbmcoKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgIHJlYXNvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGRlc3RpbmF0aW9uQmFuazogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVDcmVhdGVXYWxsZXQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY3VycmVuY3k6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0ZUNyZWF0ZVdhbGxldCxcclxuICBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIsXHJcbiAgVmFsaWRhdGVUcmFuc2ZlcixcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCAqIGFzIFdhbGxldFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0ICogYXMgVXNlclNlcnZpY2UgZnJvbSAnLi4vdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGJhbmtzIH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHRyYW5zZmVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVRyYW5zZmVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBpZGVtcG90ZW5jeUtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gICAgICBpZiAoIWlkZW1wb3RlbmN5S2V5KVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSWRlbXBvdGVuY3kga2V5IG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2ZlcnJlZCA9IGF3YWl0IFdhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2Zlcih7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgaW5pdGlhdG9yVXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGludGVybmFsKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVRyYW5zZmVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2ZlcnJlZCA9IGF3YWl0IEVtYmVkbHkud2FsbGV0cy50cmFuc2Zlcih7XHJcbiAgICAgICAgYW1vdW50OiB2YWx1ZS5hbW91bnQsXHJcbiAgICAgICAgZnJvbUFjY291bnQ6IHZhbHVlLnNlbmRlcixcclxuICAgICAgICB0b0FjY291bnQ6IGVudmlyb25tZW50LmVtYmVkbHkub3JnQWNjb3VudCArICcnLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgIHJlbWFya3M6IHZhbHVlLnJlYXNvbixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGV4dGVybmFsVHJhbnNmZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRXh0ZXJuYWxUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaWRlbXBvdGVuY3lLZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICAgICAgaWYgKCFpZGVtcG90ZW5jeUtleSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lkZW1wb3RlbmN5IGtleSBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLnRyYW5zZmVyVG9FeHRlcm5hbEJhbmsoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIGluaXRpYXRvclVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICBzZW5kZXJOYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlV2FsbGV0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcjogYW55ID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQ3JlYXRlV2FsbGV0KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgLy8gVE9ETzogUmV3cml0ZSB0aGlzIGNvZGUgdG8gY3JlYXRlIG11bHRpcGxlIHdhbGxldHNcclxuXHJcbiAgICAgIGlmICh1c2VyPy53YWxsZXRzPy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdXYWxsZXQgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogdXNlci53YWxsZXRzWzBdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHByaXNtYS5hZGRyZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmFkZHJlc3NJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZW1iZWRseToge1xyXG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgICAgIGNpdHk6IGFkZHJlc3M/LmNpdHksXHJcbiAgICAgICAgICBjb3VudHJ5OiBhZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAgICAgZG9iOiB1c2VyPy5kb2IsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgICAgICBsYXN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVsxXSxcclxuICAgICAgICAgIHBob25lOiB1c2VyPy5waG9uZSxcclxuICAgICAgICAgIG1pZGRsZU5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMl0sXHJcbiAgICAgICAgICBpZDogdXNlcj8uZW1iZWRseUN1c3RvbWVySWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHRyYTogeyBjdXJyZW5jeTogdmFsdWU/LmN1cnJlbmN5IH0sXHJcbiAgICAgICAgZW1haWw6IHVzZXI/LmVtYWlsISxcclxuICAgICAgICBidm46IHVzZXI/LmJ2biEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBVc2VyU2VydmljZS5jcmVhdGVFbWJlZGx5VXNlcih1c2VyLmlkLCBkYXRhKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1dhbGxldCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB3YWxsZXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdhbGxldEZyb21BY2NvdW50KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudE51bWJlciA9IHJlcS5wYXJhbXM/LmFjY291bnQ7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogYWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghd2FsbGV0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnV2FsbGV0IHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogd2FsbGV0LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplQmFua05hbWUgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBjb21tb24gc3VmZml4ZXNcclxuICAgICAgICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgL1xccysocGxjfGx0ZHxsaW1pdGVkfGJhbmt8aG9sZGluZ3M/fGdyb3VwfG5pZyhlcmlhKT98bWljcm9maW5hbmNlfG1mYikkL2dpLFxyXG4gICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJykgLy8gbm9ybWFsaXplIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5uaWdlcmlhbmJhbmtsb2dvcy54eXovJyk7XHJcblxyXG4gICAgICBjb25zdCBhbGxCYW5rcyA9IHJlc3AuZGF0YTtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBjb25zdCBtZXJnZWQgPSBiYW5rcy5tYXAoKGJhbms6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCYW5rTmFtZSA9IG5vcm1hbGl6ZUJhbmtOYW1lKGJhbmsuYmFua05hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9IGFsbEJhbmtzLmZpbmQoKGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEFwaVRpdGxlID0gbm9ybWFsaXplQmFua05hbWUoYi50aXRsZSk7XHJcblxyXG4gICAgICAgICAgLy8gRXhhY3QgbWF0Y2ggYWZ0ZXIgbm9ybWFsaXphdGlvblxyXG4gICAgICAgICAgaWYgKG5vcm1hbGl6ZWRBcGlUaXRsZSA9PT0gbm9ybWFsaXplZEJhbmtOYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAvLyBDaGVjayBpZiBvbmUgY29udGFpbnMgdGhlIG90aGVyIChmb3IgY2FzZXMgbGlrZSBcIkFjY2Vzc1wiIHZzIFwiQWNjZXNzIEJhbmtcIilcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgbm9ybWFsaXplZEFwaVRpdGxlLmluY2x1ZGVzKG5vcm1hbGl6ZWRCYW5rTmFtZSkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplZEJhbmtOYW1lLmluY2x1ZGVzKG5vcm1hbGl6ZWRBcGlUaXRsZSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEtlZXAgYWxsIGJhbmtzLCBhZGQgbG9nbyBkYXRhIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChtYXRjaCkgaSsrO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCA/IHsgLi4uYmFuaywgbG9nbzogbWF0Y2gucm91dGUgfSA6IGJhbms7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhiYW5rcyk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1JldHJpZXZlIGFsbCBiYW5rcycsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBtZXJnZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rQnlBY2NvdW50TnVtYmVyKCkge31cclxufVxyXG4iLCIvLyBzcmMvbWlkZGxld2FyZS9pZGVtcG90ZW5jeS50c1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaWRlbXBvdGVuY3koXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxyXG4pIHtcclxuICBjb25zdCBrZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICBpZiAoIWtleSkgcmV0dXJuIG5leHQoKTtcclxuXHJcbiAgY29uc3QgcmVxSGFzaCA9IGNyeXB0b1xyXG4gICAgLmNyZWF0ZUhhc2goJ3NoYTI1NicpXHJcbiAgICAudXBkYXRlKEpTT04uc3RyaW5naWZ5KHsgdXJsOiByZXEub3JpZ2luYWxVcmwsIGJvZHk6IHJlcS5ib2R5IH0pKVxyXG4gICAgLmRpZ2VzdCgnaGV4Jyk7XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmlkZW1wb3RlbmN5S2V5LmZpbmRVbmlxdWUoeyB3aGVyZTogeyBrZXkgfSB9KTtcclxuXHJcbiAgaWYgKCFleGlzdGluZykge1xyXG4gICAgLy8gTG9jayBuZXcga2V5IGltbWVkaWF0ZWx5XHJcbiAgICBhd2FpdCBwcmlzbWEuaWRlbXBvdGVuY3lLZXkuY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyBrZXksIHJlcXVlc3RIYXNoOiByZXFIYXNoLCBsb2NrZWRBdDogbmV3IERhdGUoKSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nLnJlcXVlc3RIYXNoICE9PSByZXFIYXNoKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBlcnJvcjogJ0lkZW1wb3RlbmN5IGtleSBjb25mbGljdCcgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXhpc3RpbmcucmVzcG9uc2VCb2R5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhleGlzdGluZy5zdGF0dXNDb2RlID8/IDIwMCkuanNvbihleGlzdGluZy5yZXNwb25zZUJvZHkpO1xyXG4gIH1cclxuXHJcbiAgLy8gS2V5IGV4aXN0cyBidXQgaXMgbG9ja2VkIOKAlCBjb25jdXJyZW50IHJlcXVlc3RcclxuICBpZiAoZXhpc3RpbmcubG9ja2VkQXQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyNSkuanNvbih7IGVycm9yOiAnUmVxdWVzdCBpbiBwcm9ncmVzcycgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcmlnaW5hbEpzb24gPSByZXMuanNvbi5iaW5kKHJlcyk7XHJcbiAgcmVzLmpzb24gPSAoYm9keTogYW55KSA9PiB7XHJcbiAgICBwcmlzbWEuaWRlbXBvdGVuY3lLZXlcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsga2V5IH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVzcG9uc2VCb2R5OiBib2R5LFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICBsb2NrZWRBdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgaWRlbXBvdGVuY3kgcmVjb3JkJywgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gb3JpZ2luYWxKc29uKGJvZHkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBpZGVtcG90ZW5jeSB9IGZyb20gJ0AvbWlkZGxld2FyZS9pZGVtcG90ZW5jeSc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJywgQ29udHJvbGxlci5jcmVhdGVXYWxsZXQpO1xyXG5yb3V0ZXIuZ2V0KCcvYmFua3MnLCBDb250cm9sbGVyLmdldEJhbmtzKTtcclxucm91dGVyLmdldCgnLzphY2NvdW50JywgQ29udHJvbGxlci5nZXRXYWxsZXRGcm9tQWNjb3VudCk7XHJcbnJvdXRlci5wb3N0KCcvdHJhbnNmZXInLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci50cmFuc2Zlcik7XHJcbnJvdXRlci5wb3N0KCcvZXh0ZXJuYWwnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5leHRlcm5hbFRyYW5zZmVyKTtcclxucm91dGVyLnBvc3QoJy9pbnRlcm5hbCcsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLmludGVybmFsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQWlydGltZVBheW1lbnQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgbnVtYmVyOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15bMC05XXsxMCwxNX0kLylcclxuICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICBhbW91bnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgY291bnRyeTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgYW1vdW50SW5Lb2JvLCBhbW91bnRJbk5haXJhIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhaXJ0aW1lKFxyXG4gIHVzZXJJZDogc3RyaW5nLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5OiBzdHJpbmc7XHJcbiAgICBudW1iZXI6IHN0cmluZztcclxuICAgIGFtb3VudDogYmlnaW50IHwgbnVtYmVyIHwgc3RyaW5nIHwgYW55O1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gIH0sXHJcbikge1xyXG4gIGNvbnN0IGFtdCA9IGFtb3VudEluS29ibyhwYXlsb2FkLmFtb3VudCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEVycm9yKCdBbW91bnQgbXVzdCBiZSBwb3NpdGl2ZScpO1xyXG5cclxuICAvLyBpZGVtcG90ZW5jeSBndWFyZFxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFpcnRpbWUuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleTogcGF5bG9hZC5pZGVtcG90ZW5jeUtleSB9LFxyXG4gIH0pO1xyXG4gIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xyXG5cclxuICAvLyBSZXNvbHZlIHNlbmRlciBhbmQgcmVjaXBpZW50XHJcbiAgY29uc3QgZnJvbVVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgIGluY2x1ZGU6IHsgd2FsbGV0czogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGZyb21XYWxsZXQgPSBmcm9tVXNlcj8ud2FsbGV0cz8uWzBdO1xyXG4gIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEVycm9yKCdXYWxsZXRzIG5vdCBmb3VuZCcpO1xyXG5cclxuICAvLyAgIENoZWNrIGZvciBzdWZmaWNpZW50IGFtb3VudCBoZXJlXHJcbiAgY29uc3QgYXZhaUJhbCA9IE51bWJlcihmcm9tV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpO1xyXG4gIGlmIChhdmFpQmFsIDwgYW10KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBiYWxhbmNlJywgNDIyKTtcclxuXHJcbiAgY29uc3QgYWlydGltZSA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAvLyBsb2NrIHdhbGxldHMgd2l0aCBGT1IgVVBEQVRFXHJcbiAgICAvLyBwYXJhbWV0ZXJpemUgY2FyZWZ1bGx5XHJcbiAgICBjb25zdCBsb2NrZWRSb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgICBgU0VMRUNUICogRlJPTSBcIldhbGxldFwiIFdIRVJFIGlkIElOICgkMSkgRk9SIFVQREFURWAsXHJcbiAgICAgIGZyb21XYWxsZXQuaWQsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG1hcCBsb2NrZWQgcm93c1xyXG4gICAgY29uc3QgbG9ja2VkTWFwID0gKGxvY2tlZFJvd3MgYXMgYW55W10pWzBdO1xyXG4gICAgaWYgKCFsb2NrZWRNYXApIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDUwMCk7XHJcblxyXG4gICAgLy8gY2hlY2sgZnVuZHNcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRNYXAuYXZhaWxhYmxlQmFsYW5jZSk7XHJcbiAgICBpZiAoYXZhaWxhYmxlIDwgYW10KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBmdW5kcycsIDQyMik7XHJcblxyXG4gICAgLy8gY3JlYXRlIEFpcnRpbWUgVHJhbnNhY3Rpb24gcmVjb3JkXHJcbiAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5haXJ0aW1lLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZGVtcG90ZW5jeUtleTogcGF5bG9hZC5pZGVtcG90ZW5jeUtleSxcclxuICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgYW1vdW50OiBhbXQudG9TdHJpbmcoKSxcclxuICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgIH0gYXMgYW55LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1wYXlsb2FkPy5hbW91bnQ/LnRvU3RyaW5nKCksXHJcbiAgICAgICAgaXRlbUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICB0eXBlOiAnQUlSVElNRScsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgSm91cm5hbEVudHJ5XHJcbiAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZWZlcmVuY2U6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQWlydGltZSBQdXJjaGFzZSB0byAke3BheWxvYWQubnVtYmVyfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb21wdXRlIG5ldyBiYWxhbmNlc1xyXG4gICAgY29uc3QgbmV3VXNlckxlZGdlckJhbGFuY2UgPSBCaWdJbnQobG9ja2VkTWFwLmxlZGdlckJhbGFuY2UpIC0gYW10O1xyXG4gICAgY29uc3QgbmV3QXZhaWxhYmxlQmFsYW5jZSA9IEJpZ0ludChhdmFpbGFibGUpIC0gYW10O1xyXG5cclxuICAgIC8vIGNyZWF0ZSBsZWRnZXIgcm93cyAoZGViaXQgdGhlbiBjcmVkaXQpLCByZWZlcmVuY2Ugam91cm5hbC5pZFxyXG4gICAgY29uc3QgZGViaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldDogeyBjb25uZWN0OiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0gfSxcclxuICAgICAgICBqb3VybmFsOiB7IGNvbm5lY3Q6IHsgaWQ6IGpvdXJuYWw/LmlkIH0gfSxcclxuICAgICAgICBjaGFuZ2U6IC1hbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgICAgcmVhc29uOiBgQWlydGltZSBQdXJjaGFzZSB0byAke3BheWxvYWQubnVtYmVyfWAsXHJcbiAgICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgd2FsbGV0cyBiYWxhbmNlc1xyXG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdBdmFpbGFibGVCYWxhbmNlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyArKysrKysrKysrKysrKysrKysrKysrOjorKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbiAgICAvLyBBZGQgdGhpcyB0cmFuc2FjdGlvbiB0byB0aGUgUHJvdmlkZXIgYWNjb3VudFxyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0eC5wcm92aWRlci51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0FLVVVLJyB9LFxyXG4gICAgICBjcmVhdGU6IHsgcHJvdmlkZXI6ICdBS1VVSycsIGJhbGFuY2U6IGFtdCB9LFxyXG4gICAgICB1cGRhdGU6IHtcclxuICAgICAgICBiYWxhbmNlOiB7IGluY3JlbWVudDogYW10LnRvU3RyaW5nKCkgfSBhcyBhbnksXHJcbiAgICAgICAgdG90YWw6IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcm92aWRlciBmbG9hdCBsZWRnZXIgcm93IChjcmVkaXQpXHJcbiAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IEJpZ0ludChwcm92aWRlci5iYWxhbmNlIGFzIGFueSkgKyBhbXQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG4gICAgLy8gVE9ETzo6IEltcGxlbWVudCBLYWZrYSBvciBTUVNcclxuICAgIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgYWlydGltZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBjb3VudHJ5OiBwYXlsb2FkLmNvdW50cnksXHJcbiAgICAgICAgICBhY2NvdW50TnVtYmVyOiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICAgIGJhbGFuY2U6IGFtb3VudEluTmFpcmEobmV3QXZhaWxhYmxlQmFsYW5jZSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldHVybiBzdHJ1Y3R1cmVkIHJlc3VsdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHJhbnNhY3Rpb246IHtcclxuICAgICAgICAuLi50cmFuc2FjdGlvbixcclxuICAgICAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICAgICAgfSxcclxuICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICBkZWJpdExlZGdlcklkOiBkZWJpdC5pZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIoYWlydGltZS50cmFuc2FjdGlvbi5pZCwgJ0FJUlRJTUUnKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYWlydGltZSxcclxuICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZUFpcnRpbWVQYXltZW50IH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgKiBhcyBQYXltZW50U2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUFpcnRpbWVQYXltZW50KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBpS2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgICAgIGlmICghaUtleSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJZGVtcG90ZW5jeSBrZXkgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50U2VydmljZS5haXJ0aW1lKHVzZXIuaWQsIHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleTogaUtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBaXJ0aW1lIHB1cmNoYXNlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogcGF5bWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBpZGVtcG90ZW5jeSB9IGZyb20gJ0AvbWlkZGxld2FyZS9pZGVtcG90ZW5jeSc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvYWlydGltZScsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLmFpcnRpbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgLy8gR2V0IGFsbCB0cmFuc2FjdGlvbnMgYnkgdXNlclxyXG4gIHN0YXRpYyBhc3luYyBhbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSByZXEucXVlcnk/LmZpbHRlcnMgPz8ge307XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIocmVxLnF1ZXJ5Py5wYWdlKSA/PyAwO1xyXG4gICAgICBjb25zdCBzaXplID0gTnVtYmVyKHJlcS5xdWVyeT8uc2l6ZSkgPz8gMTA7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxyXG4gICAgICAgIHRha2U6IHNpemUsXHJcbiAgICAgICAgc2tpcDogcGFnZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2FjdGlvbnMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2FjdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgc2luZ2xlIHRyYW5zYWN0aW9uIGJ5IElEXHJcbiAgc3RhdGljIGFzeW5jIGdldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zPy5pZDtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb24gcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2FjdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJywgQ29udHJvbGxlci5nZXQpO1xyXG5yb3V0ZXIuZ2V0KCcvJywgQ29udHJvbGxlci5hbGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFMzQ2xpZW50LCBQdXRPYmplY3RDb21tYW5kIH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJztcclxuaW1wb3J0IHsgZ2V0U2lnbmVkVXJsIH0gZnJvbSAnQGF3cy1zZGsvczMtcmVxdWVzdC1wcmVzaWduZXInO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5jb25zdCByMiA9IG5ldyBTM0NsaWVudCh7XHJcbiAgcmVnaW9uOiAnYXV0bycsIC8vIENsb3VkZmxhcmUgUjIgdXNlcyBcImF1dG9cIlxyXG4gIGVuZHBvaW50OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLnVybCxcclxuICBjcmVkZW50aWFsczoge1xyXG4gICAgYWNjZXNzS2V5SWQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUua2V5ISxcclxuICAgIHNlY3JldEFjY2Vzc0tleTogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5zZWNyZXQhLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY2xhc3MgQ2xvdWRmbGFyZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyB1cGxvYWRUb1IyKGZpbGVQYXRoOiBzdHJpbmcsIGtleVByZWZpeCA9ICd1cGxvYWRzJyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBmaWxlU3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpO1xyXG4gICAgY29uc3Qgb2JqZWN0S2V5ID0gYCR7a2V5UHJlZml4fS8ke0RhdGUubm93KCl9LSR7ZmlsZU5hbWV9YDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCByMi5zZW5kKFxyXG4gICAgICAgIG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgICAgIEJ1Y2tldDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXQhLFxyXG4gICAgICAgICAgS2V5OiBvYmplY3RLZXksXHJcbiAgICAgICAgICBCb2R5OiBmaWxlU3RyZWFtLFxyXG4gICAgICAgICAgQ29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLCAvLyBhZGp1c3QgZm9yIGltYWdlc1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gUHVibGljIFVSTCBpZiBidWNrZXQgcG9saWN5IGFsbG93c1xyXG4gICAgICByZXR1cm4gYCR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmx9LyR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXR9LyR7b2JqZWN0S2V5fWA7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQ2xvdWRmbGFyZSBSMiB1cGxvYWQgZmFpbGVkOicsIGVycik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2VuZXJhdGVVcGxvYWRVUkwoXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgY29udGVudFR5cGU6IHN0cmluZyxcclxuICAgIGV4cGlyZXNJbjogbnVtYmVyID0gNjAgKiA1LCAvLyA1IG1pblxyXG4gICkge1xyXG4gICAgY29uc3Qga2V5ID0gYHVwbG9hZHMvJHtjcnlwdG8ucmFuZG9tVVVJRCgpfS0ke2ZpbGVOYW1lfWA7XHJcblxyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgQnVja2V0OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmJ1Y2tldCxcclxuICAgICAgS2V5OiBrZXksXHJcbiAgICAgIENvbnRlbnRUeXBlOiBjb250ZW50VHlwZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNpZ25lZFVybCA9IGF3YWl0IGdldFNpZ25lZFVybChyMiwgY29tbWFuZCwgeyBleHBpcmVzSW4gfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc2lnbmVkVXJsLCBrZXkgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xvdWRmbGFyZSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9jbG91ZGZsYXJlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBnZW5lcmF0ZVVwbG9hZFVSTChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZmlsZU5hbWUsIGNvbnRlbnRUeXBlIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGlmICghZmlsZU5hbWUgfHwgIWNvbnRlbnRUeXBlKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignZmlsZU5hbWUgYW5kIGNvbnRlbnRUeXBlIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGNsb3VkZmxhcmUgPSBuZXcgQ2xvdWRmbGFyZSgpO1xyXG4gICAgICBjb25zdCB7IHNpZ25lZFVybCwga2V5IH0gPSBhd2FpdCBjbG91ZGZsYXJlLmdlbmVyYXRlVXBsb2FkVVJMKFxyXG4gICAgICAgIGZpbGVOYW1lLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHVwbG9hZFVybDogc2lnbmVkVXJsLFxyXG4gICAgICAgIHB1YmxpY1VybDogYCR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmx9LyR7a2V5fWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgYXV0aFJvdXRlcyBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoLnJvdXRlcyc7XHJcbmltcG9ydCBhZ2VudFJvdXRlcyBmcm9tICcuL21vZHVsZXMvYWdlbnRzL2FnZW50LnJvdXRlcyc7XHJcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vbW9kdWxlcy91c2Vycy9yb3V0ZXMnO1xyXG5pbXBvcnQgbWVyY2hhbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMnO1xyXG5pbXBvcnQgd2ViaG9va1JvdXRlcyBmcm9tICcuL21vZHVsZXMvd2ViaG9va3Mvcm91dGVzJztcclxuaW1wb3J0IFdhbGxldFJvdXRlcyBmcm9tICcuL21vZHVsZXMvd2FsbGV0cy9yb3V0ZXMnO1xyXG5pbXBvcnQgUGF5bWVudFJvdXRlcyBmcm9tICcuL21vZHVsZXMvcGF5bWVudHMvcm91dGVzJztcclxuaW1wb3J0IFRyYW5zYWN0aW9uUm91dGVzIGZyb20gJy4vbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzJztcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tICcuL21vZHVsZXMvQ29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnVzZSgnL2F1dGgnLCBhdXRoUm91dGVzKTtcclxucm91dGVyLnVzZSgnL3VzZXJzJywgdXNlclJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy93ZWJob29rcycsIHdlYmhvb2tSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvYWdlbnRzJywgQXV0aCwgYWdlbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvbWVyY2hhbnRzJywgQXV0aCwgbWVyY2hhbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvd2FsbGV0cycsIEF1dGgsIFdhbGxldFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy9wYXltZW50cycsIEF1dGgsIFBheW1lbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvdHJhbnNhY3Rpb25zJywgQXV0aCwgVHJhbnNhY3Rpb25Sb3V0ZXMpO1xyXG5yb3V0ZXIucG9zdCgnL3VwbG9hZHMvdXJsJywgQXV0aCwgQmFzZUNvbnRyb2xsZXIuZ2VuZXJhdGVVcGxvYWRVUkwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCIvLyBzcmMvYXBwLnRzXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJy4vbWlkZGxld2FyZS9lcnJvckhhbmRsZXInO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoaGVsbWV0KCkpO1xyXG5hcHAudXNlKGNvcnMoeyBvcmlnaW46ICcqJyB9KSk7IC8vIHRpZ2h0ZW4gbGF0ZXJcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKG1vcmdhbignY29tYmluZWQnKSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQXBwID0gKCkgPT4ge1xyXG4gIGFwcC5nZXQoJy8nLCAoXywgcmVzKSA9PiByZXMuanNvbih7IG9rOiB0cnVlIH0pKTtcclxuICBhcHAuZ2V0KCcvaGVhbHRoJywgKF8sIHJlcykgPT4gcmVzLmpzb24oeyBvazogdHJ1ZSB9KSk7XHJcblxyXG4gIC8vIHJlZ2lzdGVyIHJvdXRlc1xyXG4gIGFwcC51c2UoJy9hcGkvdjEnLCBSb3V0ZXMpO1xyXG4gIC8vIGFwcC51c2UoZXJyb3JIYW5kbGVyKTtcclxuXHJcbiAgYXBwLnVzZSgocmVxLCByZXMpPT57XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogXCJFbmRwb2ludCBub3QgZm91bmQuIHBsZWFzZSwgY2hlY2sgdGhlIHVybCBhbmQgdHJ5IGFnYWluLlwifSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gYXBwO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGDwn5qAIFdlcGF5IGJhY2tlbmQgbGlzdGVuaW5nIG9uIHBvcnQ6IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImZvcmdvdFBhc3N3b3JkIiwiQ2xpZW50IiwiY3J5cHRvIiwibGltaXRlciIsIlRYTkZFRSIsInJlZGlzQ2xpZW50IiwiQnVsbFF1ZXVlIiwiYWRkVmVyaWZpY2F0aW9uIiwiV2FsbGV0U2VydmljZS5jcmVhdGUiLCJWYWxpZGF0ZU9UUCIsInVzZXJTZXJ2aWNlLnZhbGlkYXRlQlZOIiwidXNlclNlcnZpY2UuZ2V0QlZORGF0YSIsImF1dGhTZXJ2aWNlLnJlZ2lzdGVyIiwiYXV0aFNlcnZpY2UuZ2V0VXNlckRldGFpbEJ5UGhvbmUiLCJhdXRoU2VydmljZS5sb2dpbiIsImF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlciIsImF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkIiwiYXV0aFNlcnZpY2UuZm9yZ290UGluIiwiYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCIsImF1dGhTZXJ2aWNlLnJlc2V0UGluIiwidXNlclNlcnZpY2UudXBkYXRlIiwiYXV0aFNlcnZpY2UucmVzZW5kT1RQIiwicm91dGVyIiwiVmFsaWRhdGVWZXJpZmljYXRpb24iLCJ1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSIsInVzZXJTZXJ2aWNlLmdldFVzZXJCeUlEIiwidXNlclNlcnZpY2UuY3JlYXRlUGluIiwidXNlclNlcnZpY2UudmVyaWZ5VXNlclBpbiIsInVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbiIsInVzZXJTZXJ2aWNlLmNhcHR1cmVGaW5nZXJQcmludCIsIkNvbnRyb2xsZXIiLCJNZXJjaGFudC5jcmVhdGVCdXNpbmVzcyIsIk1lcmNoYW50LmFkZFZlcmlmaWNhdGlvbiIsIndlYmhvb2tTZXJ2aWNlLmluZmxvdyIsIndlYmhvb2tTZXJ2aWNlLnBheW91dCIsIldhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2ZlciIsIldhbGxldFNlcnZpY2UudHJhbnNmZXJUb0V4dGVybmFsQmFuayIsIlVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyIiwiUGF5bWVudFNlcnZpY2UuYWlydGltZSIsImF1dGhSb3V0ZXMiLCJ1c2VyUm91dGVzIiwid2ViaG9va1JvdXRlcyIsImFnZW50Um91dGVzIiwibWVyY2hhbnRSb3V0ZXMiLCJXYWxsZXRSb3V0ZXMiLCJQYXltZW50Um91dGVzIiwiVHJhbnNhY3Rpb25Sb3V0ZXMiLCJhcHAiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQyxNQUFNLENBQUMsU0FBaUIsQ0FBQyxNQUFNLEdBQUcsWUFBQTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QyxJQUFBLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDL0IsQ0FBQztBQUlNLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDO0FBQ3JDO0FBQ0QsQ0FBQSxDQUFDOztBQ1ZGLHVCQUFlLENBQUMsT0FBWSxLQUFJO0lBQzlCLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDbkIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLDhDQUE4QztBQUNwRCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGdDQUFnQztBQUN0QyxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx3QkFBd0I7QUFDOUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsNENBQTRDO0FBQ2xELFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE9BQU87QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGFBQWE7QUFDbkIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxzQkFBc0I7QUFDNUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsYUFBYTtBQUNuQixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxnQkFBZ0I7QUFDdEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSwwQkFBMEI7QUFDaEMsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsaUNBQWlDO0FBQ3ZDLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE1BQU07QUFDWixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGFBQWE7QUFDbkIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGFBQWE7QUFDbkIsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsSUFBSTtBQUNmLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGtCQUFrQjtBQUN4QixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLDhDQUE4QztBQUNwRCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLHVCQUF1QjtBQUM3QixRQUFBLFNBQVMsRUFBRSxPQUFPO0FBQ2xCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGFBQWE7QUFDbkIsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxjQUFjO0FBQ3BCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsMkJBQTJCO0FBQ2pDLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0NBQWtDO0FBQ3hDLFFBQUEsU0FBUyxFQUFFLE9BQU87QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLHVCQUF1QjtBQUM3QixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGNBQWM7QUFDcEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsY0FBYztBQUNwQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGlCQUFpQjtBQUN2QixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGNBQWM7QUFDcEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxhQUFhO0FBQ25CLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsOENBQThDO0FBQ3BELFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx3QkFBd0I7QUFDOUIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsYUFBYTtBQUNuQixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLHNCQUFzQjtBQUM1QixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSx1Q0FBdUM7QUFDN0MsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsYUFBYTtBQUNuQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE1BQU07QUFDWixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLHFCQUFxQjtBQUMzQixRQUFBLFNBQVMsRUFBRSxPQUFPO0FBQ2xCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGNBQWM7QUFDcEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSwwQkFBMEI7QUFDaEMsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxzQkFBc0I7QUFDNUIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxnQkFBZ0I7QUFDdEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLElBQUk7QUFDZixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsNkNBQTZDO0FBQ25ELFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUseUJBQXlCO0FBQy9CLFFBQUEsU0FBUyxFQUFFLE9BQU87QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsc0JBQXNCO0FBQzVCLFFBQUEsU0FBUyxFQUFFLE9BQU87QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsbUJBQW1CO0FBQ3pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0NBQ0Y7O0FDbnJDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQSxFQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFBLENBQUEsRUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQSxDQUFFLENBQUM7QUFDdEUsTUFBTUMsUUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsSUFBQSxPQUFPLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHO0FBQy9CLElBQUEsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLENBQUEsTUFBQSxFQUFTLEdBQUcsQ0FBQSxDQUFFO0FBQzlCLEtBQUE7QUFDRixDQUFBLENBQUM7TUFFVyxLQUFLLENBQUE7QUFDaEIsSUFBQSxhQUFhLE9BQU8sQ0FBQyxPQUFpQixFQUFBO0FBQ3BDLFFBQUEsTUFBTSxJQUFJLEdBQUcsVUFBVSxFQUFFOztBQUd6QixRQUFBLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7O0FBRy9ELFFBQUEsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBVSxDQUFDO0FBRXJFLFFBQUEsSUFBSSxDQUFDLE1BQU07WUFBRTtRQUViLE1BQU0sR0FBRyxHQUFHLE1BQU1BLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO0FBQ3hCLFlBQUEsWUFBWSxFQUFFLElBQUk7QUFDbEIsWUFBQSxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ2hDLFlBQUEsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVM7WUFDL0IsTUFBTTtBQUNQLFNBQUEsQ0FBQztBQUNGLFFBQUEsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHO0FBRTVCLFFBQUEsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUc7WUFBRSxNQUFNLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0FBRW5FLFFBQUEsT0FBTyxNQUFNO0lBQ2Y7QUFFQSxJQUFBLGFBQWEsT0FBTyxDQUFDLE9BQVksRUFBQTtBQUMvQixRQUFBLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU87QUFFakUsUUFBQSxNQUFNLElBQUksR0FBRyxVQUFVLEVBQUU7O1FBR3pCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7UUFHcEQsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFVLENBQUM7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNWLFlBQUEsWUFBWSxFQUFFLElBQUk7QUFDbEIsWUFBQSxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMxRCxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFDbkIsWUFBQSxPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQzNDLFNBQUEsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU1BLFFBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7QUFDaEQsWUFBQSxZQUFZLEVBQUUsSUFBSTtBQUNsQixZQUFBLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQzFELE1BQU0sRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUNuQixZQUFBLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFDM0MsU0FBQSxDQUFDO0FBQ0YsUUFBQSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUc7QUFFNUIsUUFBQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRztZQUFFLE1BQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7QUFFbkUsUUFBQSxPQUFPLE1BQU07SUFDZjtBQUNEOztBQ3pETSxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQXdDLEtBQUk7QUFDekUsSUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNoQixPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVE7QUFDcEMsY0FBRTtBQUNGLGVBQUcsR0FBRyxFQUFFLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQztBQUM3QyxRQUFBLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLEdBQUc7QUFDMUIsUUFBQSxPQUFPLEVBQUUsS0FBSztLQUNmO0FBQ0gsQ0FBQztBQUVLLFNBQVUsb0JBQW9CLENBQUMsSUFBWSxFQUFBO0lBQy9DLElBQUksSUFBSSxJQUFJLENBQUM7QUFBRSxRQUFBLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUM7QUFDN0QsSUFBQSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLElBQUEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNsQyxJQUFBLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFDMUQ7QUFFTSxTQUFVLFlBQVksQ0FBQyxHQUFXLEVBQUE7QUFDdEMsSUFBQSxRQUNFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ2xELENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFFaEQ7U0FFZ0IsS0FBSyxHQUFBO0FBQ25CLElBQUEsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUMzRDtBQUVPLE1BQU0sV0FBVyxHQUFHO0FBQ3pCLElBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsSUFBQSxPQUFPLEVBQUUsU0FBUztBQUNsQixJQUFBLFlBQVksRUFBRSxjQUFjO0FBQzVCLElBQUEsaUJBQWlCLEVBQUUsbUJBQW1CO0FBQ3RDLElBQUEsWUFBWSxFQUFFLGVBQWU7Q0FDckI7QUFFSCxlQUFlLE9BQU8sQ0FBQyxJQUFVLEVBQUUsSUFBSSxHQUFHLE9BQU8sRUFBQTtBQUN0RCxJQUFBLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3BDLFFBQUEsa0JBQWtCLEVBQUUsS0FBSztBQUN6QixRQUFBLGtCQUFrQixFQUFFLEtBQUs7QUFDekIsUUFBQSxZQUFZLEVBQUUsS0FBSztBQUNwQixLQUFBLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7QUFDMUQsUUFBQSxJQUFJLEVBQUU7QUFDSixZQUFBLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksRUFBRSxJQUFJLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQzNDLFNBQUE7QUFDRixLQUFBLENBQUM7QUFFRixJQUFBLElBQUksQ0FBQyxZQUFZO0FBQUUsUUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQzs7QUFHbkQsSUFBQSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLE9BQU87UUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNaLFlBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLElBQUksSUFBSTtZQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbEIsT0FBTyxFQUFFLENBQUEsaUNBQUEsRUFBb0MsSUFBSSxDQUFBLCtCQUFBLENBQWlDO0FBQ25GLFNBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpDLElBQUEsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxPQUFPO0FBQ2hDLFFBQUEsU0FBUyxDQUFDO1lBQ1IsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFNO0FBQ2hCLFlBQUEsU0FBUyxFQUFFO0FBQ1QsZ0JBQUEsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDbkIsYUFBQTtBQUNELFlBQUEsUUFBUSxFQUFFLGNBQWM7QUFDekIsU0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkM7QUFFTSxTQUFVLGlCQUFpQixDQUFDLE1BQXVCLEVBQUUsUUFBZ0IsRUFBQTtBQUN6RSxJQUFBLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRztBQUNoQyxVQUFFO1VBQ0EsTUFBTSxDQUFDLENBQUEsRUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLEVBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFFLENBQUM7QUFDMUU7QUFFTyxNQUFNLFlBQVksR0FBRztBQUMxQixJQUFBLE1BQU0sRUFBRSxPQUFRO0FBQ2hCLElBQUEsTUFBTSxFQUFFLFFBQVU7QUFDbEIsSUFBQSxNQUFNLEVBQUUsUUFBVTtBQUNsQixJQUFBLE1BQU0sRUFBRSxhQUFnQjtDQUN6QjtBQUVEOzs7Ozs7QUFNRztBQUNHLFNBQVUsU0FBUyxDQUFDLEtBQTZCLEVBQUE7QUFDckQsSUFBQSxJQUFJOztBQUVGLFFBQUEsSUFBSSxDQUFDLEtBQUs7QUFBRSxZQUFBLE9BQU8sSUFBSTs7QUFHdkIsUUFBQSxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7O1FBRzVCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1FBQ2Q7O0FBR0EsUUFBQSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDM0I7SUFBRSxPQUFPLEdBQUcsRUFBRTtBQUNaLFFBQUEsT0FBTyxJQUFJO0lBQ2I7QUFDRjtBQUVNLFNBQVUsY0FBYyxDQUFDLE1BQVcsRUFBQTtBQUN4QyxJQUFBLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUNwQyxRQUFBLHFCQUFxQixFQUFFLENBQUM7QUFDeEIsUUFBQSxxQkFBcUIsRUFBRSxDQUFDO0FBQ3pCLEtBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbkI7QUFFTSxTQUFVLFVBQVUsQ0FBQyxJQUFnQixFQUFBO0FBQ3pDLElBQUEsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ25ELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzRCxJQUFBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFFL0IsSUFBQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLElBQUEsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQzFELElBQUEsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtJQUN0QyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFFekIsSUFBQSxPQUFPLENBQUEsRUFBRyxHQUFHLENBQUEsQ0FBQSxFQUFJLEtBQUssQ0FBQSxDQUFBLEVBQUksSUFBSSxDQUFBLENBQUEsRUFBSSxLQUFLLENBQUEsQ0FBQSxFQUFJLE9BQU8sQ0FBQSxDQUFBLEVBQUksSUFBSSxFQUFFO0FBQzlEO1NBRWdCLFFBQVEsQ0FBQyxJQUFnQixFQUFFLElBQVksRUFBRSxLQUFhLEVBQUE7QUFDcEUsSUFBQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FDekU7QUFDSDtBQW9CTSxTQUFVLFlBQVksQ0FBQyxNQUFjLEVBQUE7SUFDekMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDekM7QUFFTSxTQUFVLGFBQWEsQ0FBQyxNQUFXLEVBQUE7QUFDdkMsSUFBQSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO0FBQzdCO0FBRU8sZUFBZSxlQUFlLENBQ25DLFVBQWtCLEVBQ2xCLFFBQWMsRUFDZCxHQUFXLEVBQUE7QUFFWCxJQUFBLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFO0lBQzdCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRS9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDM0MsUUFBQSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ3RCLFFBQUEsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3ZCLFlBQUEsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRTtBQUM5QixZQUFBLElBQUksRUFBRSxnQkFBZ0I7QUFDdkIsU0FBQTtBQUNGLEtBQUEsQ0FBQztBQUVGLElBQUEsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNqQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUM5QztBQUVELElBQUEsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQXdDO0lBQzlELE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTTtJQUU1RCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsVUFBVTtBQUNsRDtBQUVBLFNBQVMsUUFBUSxDQUFDLElBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFBO0FBQ3ZDLElBQUEsSUFBSSxDQUFDLElBQUk7UUFBRTtJQUNYLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdCLElBQUksS0FBSyxHQUFhLEVBQUU7SUFDeEIsSUFBSSxPQUFPLEdBQUcsRUFBRTtBQUVoQixJQUFBLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO0FBQ3JCLFFBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsT0FBTyxHQUFHLENBQUM7UUFDYjthQUFPO0FBQ0wsWUFBQSxPQUFPLElBQUksR0FBRyxHQUFHLENBQUM7UUFDcEI7SUFDRjtBQUVBLElBQUEsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RCxJQUFBLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekI7QUFFQSxTQUFTLFdBQVcsQ0FBQyxJQUFhLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBQTtBQUMxQyxJQUFBLElBQUksQ0FBQyxJQUFJO0FBQUUsUUFBQSxPQUFPLElBQUk7QUFDdEIsSUFBQSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRztBQUFFLFFBQUEsT0FBTyxJQUFJO0FBQ25DLElBQUEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUN2QztTQUVnQixpQkFBaUIsQ0FBQyxFQUNoQyxPQUFPLEVBQ1AsTUFBTSxFQUNOLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLElBQUksRUFDSixJQUFJLEdBU0wsRUFBQTtJQUNDLE9BQU8sQ0FBQTtBQUNLLFlBQUEsRUFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO09BQ3hCLFFBQVEsQ0FBQSxFQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxDQUFBLEVBQUksSUFBSSxDQUFBO0FBQ3ZELE1BQUEsRUFBQSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdEIsV0FBQSxFQUFBLFFBQVEsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDdEQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO3VCQUNEO0FBQ3ZCO1NBRWdCLGtCQUFrQixHQUFBO0FBQ2hDLElBQUEsTUFBTSxLQUFLLEdBQUcsQ0FBQSxFQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFDN0MsSUFBQSxNQUFNLElBQUksR0FBR0MsUUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNwRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtBQUMzQzs7QUMzUUE7QUFNTyxlQUFlLFlBQVksQ0FBQyxLQUFhLEVBQUE7O0lBRTlDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQy9CO0FBTU0sU0FBVSxTQUFTLENBQUMsS0FBYSxFQUFBO0FBQ3JDLElBQUEsSUFBSSxDQUFDLEtBQUs7UUFBRTtBQUNaLElBQUEsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkIsUUFBQSxPQUFPQTthQUNKLFVBQVUsQ0FBQyxRQUFRO0FBQ25CLGFBQUEsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNsQjtBQUNBLElBQUEsT0FBT0EsUUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNoRTtBQUVPLGVBQWUsT0FBTyxDQUFDLEdBQVcsRUFBQTtBQUN2QyxJQUFBLE9BQU8sTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7QUFDckIsUUFBQSxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDbkIsUUFBQSxRQUFRLEVBQUUsQ0FBQztBQUNYLFFBQUEsV0FBVyxFQUFFLENBQUM7QUFDZixLQUFBLENBQUM7QUFDSjtBQUVPLGVBQWUsU0FBUyxDQUM3QixTQUFpQixFQUNqQixRQUFnQixFQUFBO0lBRWhCLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7QUFDakQ7O0FDeENBO0FBUU0sU0FBVSxlQUFlLENBQUMsT0FBZSxFQUFBO0lBQzdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FDYixPQUFPLEVBQ1AsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFnQixFQUNoQztBQUNFLFFBQUEsU0FBUyxFQUFFLENBQUEsRUFBRyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQSxDQUFBLENBQUc7QUFDN0IsS0FBQSxDQUNqQjtBQUNIO0FBRU0sU0FBVSxpQkFBaUIsQ0FBQyxLQUFhLEVBQUE7QUFDN0MsSUFBQSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFtQjtBQUNwRTs7QUNQQSxNQUFNQyxTQUFPLEdBQUcsSUFBSSxVQUFVLENBQUM7QUFDN0IsSUFBQSxhQUFhLEVBQUUsQ0FBQztBQUNoQixJQUFBLE9BQU8sRUFBRSxHQUFHO0FBQ2IsQ0FBQSxDQUFDO0FBR0ssZUFBZSxRQUFRLENBQUMsSUFBYyxFQUFBO0lBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLO0lBRTdDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDVixRQUFBLE1BQU0sSUFBSSxXQUFXLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDO0lBQ3hEO0lBRUEsTUFBTSxZQUFZLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMvQyxRQUFBLEtBQUssRUFBRTtZQUNMLEtBQUs7WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDZCxTQUFBO0FBQ0YsS0FBQSxDQUFDO0FBRUYsSUFBQSxJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDL0MsUUFBQSxNQUFNQSxTQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25ELFFBQUEsT0FBTyxZQUFZO0lBQ3JCO0FBRUEsSUFBQSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQzlDLFFBQUEsTUFBTSxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUM7SUFDdkQ7QUFFQSxJQUFBLE1BQU0sTUFBTSxHQUE0QjtRQUN0QyxHQUFHLElBQUksQ0FBQyxLQUFLO0tBQ2Q7QUFFRCxJQUFBLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPO1FBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7QUFDeEQsSUFBQSxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbkQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7SUFDbEM7QUFFQSxJQUFBLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLFFBQUEsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztJQUMzQjtBQUVBLElBQUEsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLEVBQUU7SUFFckMsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFJO1FBQ2xELE1BQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkMsWUFBQSxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLEtBQUs7QUFDTCxnQkFBQSxRQUFRLEVBQUUsUUFBUTtBQUNsQixnQkFBQSxHQUFHLE1BQU07QUFDVixhQUFBO0FBQ0YsU0FBQSxDQUFDO0FBRUYsUUFBQSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLFlBQUEsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRTtBQUN0QixnQkFBQSxNQUFNLEVBQUUsVUFBVTtBQUNsQixnQkFBQSxFQUFFLEVBQUUsSUFBSTtBQUNULGFBQUE7QUFDRixTQUFBLENBQUM7QUFFRixRQUFBLE9BQU8sV0FBVztBQUNwQixJQUFBLENBQUMsQ0FBQztBQUVGLElBQUEsTUFBTUEsU0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUzQyxJQUFBLE9BQU8sSUFBSTtBQUNiO0FBS08sZUFBZSxTQUFTLENBQUMsT0FBMkMsRUFBQTtJQUN6RSxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLFFBQUEsS0FBSyxFQUFFO0FBQ0wsWUFBQSxFQUFFLEVBQUU7QUFDRixnQkFBQTtvQkFDRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUs7QUFDdEIsaUJBQUE7QUFDRCxnQkFBQTtvQkFDRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUs7QUFDdEIsaUJBQUE7QUFDRixhQUFBO0FBQ0YsU0FBQTtBQUNGLEtBQUEsQ0FBQztBQUVGLElBQUEsSUFBSSxDQUFDLElBQUk7QUFBRSxRQUFBLE9BQU8sS0FBSztJQUV2QkEsU0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxJQUFBLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO0FBQ3JELEtBQUEsQ0FBQztBQUNGLElBQUEsT0FBTyxJQUFJO0FBQ2I7QUFHTyxlQUFlLG9CQUFvQixDQUFDLE9BQTRCLEVBQUE7SUFDckUsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN2QyxRQUFBLEtBQUssRUFBRTtZQUNELEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSztBQUMxQixTQUFBO0FBQ0YsS0FBQSxDQUFDO0FBRUYsSUFBQSxJQUFJLENBQUMsSUFBSTtBQUFFLFFBQUEsTUFBTSxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUM7QUFFdkQsSUFBQSxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUU7QUFDcEI7QUFFTyxlQUFlLEtBQUssQ0FBQyxJQUFXLEVBQUE7SUFDckMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtBQUVsQyxJQUFBLElBQUksQ0FBQyxHQUFHO0FBQUUsUUFBQSxNQUFNLElBQUksV0FBVyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQztBQUN2RCxJQUFBLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLO0FBQ2xCLFFBQUEsTUFBTSxJQUFJLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUM7O0lBRzFELE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDdkMsUUFBQSxLQUFLLEVBQUU7QUFDTCxZQUFBLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLFNBQUE7QUFDRCxRQUFBLE9BQU8sRUFBRTtBQUNQLFlBQUEsT0FBTyxFQUFFLElBQUk7QUFDZCxTQUFBO0FBQ0YsS0FBQSxDQUFDO0FBRUYsSUFBQSxJQUFJLENBQUMsSUFBSTtBQUFFLFFBQUEsTUFBTSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUM7SUFFNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUUsUUFBQSxNQUFNLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQztJQUVoRSxNQUFNLEVBQUUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUV6QyxJQUFJLENBQUMsRUFBRSxFQUFFOztBQUVQLFFBQUEsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO0FBQ2xELFNBQUEsQ0FBQztBQUVGLFFBQUEsTUFBTSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUM7SUFDbkQ7O0FBR0EsSUFBQSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDM0MsS0FBQSxDQUFDO0lBRUYsT0FBTztBQUNMLFFBQUEsR0FBRyxJQUFJO0FBQ1AsUUFBQSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDaEMsWUFBQSxHQUFHLENBQUM7QUFDSixZQUFBLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbkQsWUFBQSxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDN0MsWUFBQSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7QUFDbEQsU0FBQSxDQUFDLENBQUM7S0FDSjtBQUNIO0FBRU8sZUFBZSxlQUFlLENBQUMsSUFBNkIsRUFBQTtBQUNqRSxJQUFBLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJO0lBRTVCLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEIsUUFBQSxNQUFNLElBQUksV0FBVyxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsQ0FBQztJQUN6RTs7SUFHQSxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLFFBQUEsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtBQUNwQyxLQUFBLENBQUM7SUFFRixJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsUUFBQSxNQUFNLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQztJQUNuRDs7QUFHQSxJQUFBLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUMzQyxLQUFBLENBQUM7QUFFRixJQUFBLE9BQU8sSUFBSTtBQUNiO0FBRU8sZUFBZSxjQUFjLENBQUMsSUFBb0MsRUFBQTtJQUN2RSxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQzNFLElBQUEsSUFBSSxDQUFDLElBQUk7QUFBRSxRQUFBLE9BQU8sS0FBSztJQUV2QkEsU0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxJQUFBLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDM0IsUUFBQSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdkUsS0FBQSxDQUFDO0FBRUYsSUFBQSxPQUFPLElBQUk7QUFDYjtBQUVPLGVBQWUsYUFBYSxDQUFDLElBQW1CLEVBQUE7SUFDckQsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSTtJQUN2QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUNuRSxRQUFBLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7QUFDOUIsS0FBQSxDQUFDO0FBQ0YsSUFBQSxJQUFJLENBQUMsa0JBQWtCO0FBQUUsUUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDO0FBRXBFLElBQUEsTUFBTSxPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDO0lBQy9DLE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEMsUUFBQSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxFQUFFO0FBQ3hDLFFBQUEsSUFBSSxFQUFFO0FBQ0osWUFBQSxRQUFRLEVBQUUsT0FBTztBQUNsQixTQUFBO0FBQ0YsS0FBQSxDQUFDOztBQUdGLElBQUEsTUFBTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFFLElBQUEsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMzQixRQUFBLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzVELEtBQUEsQ0FBQztBQUNGLElBQUEsT0FBTyxJQUFJO0FBQ2I7QUFFTyxlQUFlLFFBQVEsQ0FBQyxJQUFVLEVBQUUsSUFBcUIsRUFBQTtBQUM5RCxJQUFBLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsUUFBQSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFBLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztBQUNkLFNBQUE7QUFDRixLQUFBLENBQUM7O0FBR0YsSUFBQSxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDMUUsSUFBQSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDL0MsS0FBQSxDQUFDO0FBQ0YsSUFBQSxPQUFPLElBQUk7QUFDYjtBQW1ETyxlQUFlLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBUyxFQUFBO0lBQ3ZELE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDdkMsUUFBQSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ3RCLEtBQUEsQ0FBQztBQUVGLElBQUEsSUFBSSxDQUFDLElBQUk7QUFBRSxRQUFBLE1BQU0sSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDO0lBRXZELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUN2QyxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3hDLFlBQUEsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUNsQixhQUFBO0FBQ0YsU0FBQSxDQUFDO0FBRUYsUUFBQSxJQUFJLEtBQUs7QUFBRSxZQUFBLE1BQU0sSUFBSSxXQUFXLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDO0FBRXhFLFFBQUFBLFNBQU8sQ0FBQyxRQUFRLENBQUMsTUFDZixPQUFPLENBQ0w7QUFDRSxZQUFBLEdBQUcsSUFBSTtZQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUNqQixZQUFBLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDdkIsU0FBQSxFQUNELElBQUksQ0FBQyxJQUFJLENBQ1YsQ0FDRjtRQUNEO0lBQ0Y7SUFFQUEsU0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxJQUFBLE9BQU8sSUFBSTtBQUNiOztBQ3BVTyxNQUFNLE9BQU8sR0FBRyxPQUFPLElBQVMsS0FBSTtBQUN6QyxJQUFBLElBQUksQ0FBQyxJQUFJO0FBQUUsUUFBQSxNQUFNLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQztJQUV2RCxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3pDLFFBQUEsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBQSxPQUFPLEVBQUU7QUFDUCxZQUFBLFFBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBQSxLQUFLLEVBQUUsSUFBSTtBQUNYLFlBQUEsT0FBTyxFQUFFLElBQUk7QUFDYixZQUFBLE9BQU8sRUFBRSxJQUFJO0FBQ2QsU0FBQTtBQUNGLEtBQUEsQ0FBQztBQUVGLElBQUEsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsS0FBSztJQUU3QixPQUFPO0FBQ0wsUUFBQSxHQUFHLFFBQVE7UUFDWCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUk7WUFDbEMsT0FBTztBQUNMLGdCQUFBLEdBQUcsQ0FBQztBQUNKLGdCQUFBLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbkQsZ0JBQUEsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBQ2pELGdCQUFBLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzthQUM5QztBQUNILFFBQUEsQ0FBQyxDQUFDO0tBQ0g7QUFDSCxDQUFDOztBQzVCTSxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU87QUFDcEUsTUFBRTtBQUNFLFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsV0FBVztBQUNsQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxZQUFZO0FBQ25CLFNBQUE7QUFDRjtBQUNILE1BQUU7QUFDRSxRQUFBO0FBQ0UsWUFBQSxFQUFFLEVBQUUsc0NBQXNDO0FBQzFDLFlBQUEsSUFBSSxFQUFFLFdBQVc7QUFDbEIsU0FBQTtBQUNELFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNuQixTQUFBO0tBQ0Y7QUFFRSxNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU87QUFDeEUsTUFBRTtBQUNFLFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsZUFBZTtBQUNyQixZQUFBLGNBQWMsRUFBRSxJQUFJO0FBQ3BCLFlBQUEsZ0JBQWdCLEVBQUUsS0FBSztBQUN4QixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsWUFBQSxjQUFjLEVBQUUsSUFBSTtBQUNwQixZQUFBLGdCQUFnQixFQUFFLEtBQUs7QUFDeEIsU0FBQTtBQUNELFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFlBQUEsY0FBYyxFQUFFLElBQUk7QUFDcEIsWUFBQSxnQkFBZ0IsRUFBRSxLQUFLO0FBQ3hCLFNBQUE7QUFDRCxRQUFBO0FBQ0UsWUFBQSxFQUFFLEVBQUUsc0NBQXNDO0FBQzFDLFlBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxZQUFBLGNBQWMsRUFBRSxJQUFJO0FBQ3BCLFlBQUEsZ0JBQWdCLEVBQUUsS0FBSztBQUN4QixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsWUFBQSxjQUFjLEVBQUUsSUFBSTtBQUNwQixZQUFBLGdCQUFnQixFQUFFLEtBQUs7QUFDeEIsU0FBQTtBQUNGO0FBQ0gsTUFBRTtBQUNFLFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFlBQUEsY0FBYyxFQUFFLElBQUk7QUFDcEIsWUFBQSxnQkFBZ0IsRUFBRSxLQUFLO0FBQ3hCLFNBQUE7S0FDRjtBQUVFLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTztBQUN6RSxNQUFFO0FBQ0UsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxtQkFBbUI7QUFDekIsWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxrQkFBa0I7QUFDeEIsWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxtQkFBbUI7QUFDekIsWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxtQkFBbUI7QUFDekIsWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxvQkFBb0I7QUFDMUIsWUFBQSxTQUFTLEVBQUUsS0FBSztBQUNqQixTQUFBO0FBQ0QsUUFBQTtBQUNFLFlBQUEsRUFBRSxFQUFFLHNDQUFzQztBQUMxQyxZQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFlBQUEsU0FBUyxFQUFFLEtBQUs7QUFDakIsU0FBQTtBQUNGO0FBQ0gsTUFBRTtBQUNFLFFBQUE7QUFDRSxZQUFBLEVBQUUsRUFBRSxzQ0FBc0M7QUFDMUMsWUFBQSxJQUFJLEVBQUUsZUFBZTtBQUNyQixZQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2pCLFNBQUE7S0FDRjtBQUVFLE1BQU0sS0FBSyxHQUFHO0FBQ25CLElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxhQUFhO0FBQ3ZCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxjQUFjO0FBQ3hCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxlQUFlO0FBQ3pCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDBCQUEwQjtBQUNwQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsVUFBVTtBQUNwQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsV0FBVztBQUNyQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZUFBZTtBQUN6QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsV0FBVztBQUNyQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsY0FBYztBQUN4QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZUFBZTtBQUN6QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsb0JBQW9CO0FBQzlCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxjQUFjO0FBQ3hCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxrQkFBa0I7QUFDNUIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZUFBZTtBQUN6QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZUFBZTtBQUN6QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsd0JBQXdCO0FBQ2xDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxZQUFZO0FBQ3RCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxpQkFBaUI7QUFDM0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsaUJBQWlCO0FBQzNCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxVQUFVO0FBQ3BCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxTQUFTO0FBQ25CLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxhQUFhO0FBQ3ZCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLE9BQU87QUFDakIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsb0JBQW9CO0FBQzlCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxrQkFBa0I7QUFDNUIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGNBQWM7QUFDeEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGlCQUFpQjtBQUMzQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxvQkFBb0I7QUFDOUIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGFBQWE7QUFDdkIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHdCQUF3QjtBQUNsQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUscUJBQXFCO0FBQy9CLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDJCQUEyQjtBQUNyQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsd0JBQXdCO0FBQ2xDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx5QkFBeUI7QUFDbkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHdCQUF3QjtBQUNsQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDBCQUEwQjtBQUNwQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsV0FBVztBQUNyQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxzQ0FBc0M7QUFDaEQsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGlCQUFpQjtBQUMzQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsVUFBVTtBQUNwQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUscUJBQXFCO0FBQy9CLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDJCQUEyQjtBQUNyQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsaUJBQWlCO0FBQzNCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxtQkFBbUI7QUFDN0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLCtCQUErQjtBQUN6QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxvQkFBb0I7QUFDOUIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGdDQUFnQztBQUMxQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsa0JBQWtCO0FBQzVCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxpQ0FBaUM7QUFDM0MsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGdCQUFnQjtBQUMxQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsY0FBYztBQUN4QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsc0NBQXNDO0FBQ2hELFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx3QkFBd0I7QUFDbEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLE1BQU07QUFDaEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDhCQUE4QjtBQUN4QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGNBQWM7QUFDeEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGNBQWM7QUFDeEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx5Q0FBeUM7QUFDbkQsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsa0JBQWtCO0FBQzVCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwwQkFBMEI7QUFDcEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGlDQUFpQztBQUMzQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsd0JBQXdCO0FBQ2xDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwrQkFBK0I7QUFDekMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx5QkFBeUI7QUFDbkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwwQkFBMEI7QUFDcEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGdDQUFnQztBQUMxQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxtQkFBbUI7QUFDN0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGtDQUFrQztBQUM1QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsbUNBQW1DO0FBQzdDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDBCQUEwQjtBQUNwQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNkJBQTZCO0FBQ3ZDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx5QkFBeUI7QUFDbkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLCtCQUErQjtBQUN6QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxpQkFBaUI7QUFDM0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFdBQVc7QUFDckIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUNBQXlDO0FBQ25ELFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxvQkFBb0I7QUFDOUIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxrQ0FBa0M7QUFDNUMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFlBQVk7QUFDdEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLG9CQUFvQjtBQUM5QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGdDQUFnQztBQUMxQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx3QkFBd0I7QUFDbEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFdBQVc7QUFDckIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsK0JBQStCO0FBQ3pDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGtCQUFrQjtBQUM1QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsaUJBQWlCO0FBQzNCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx3QkFBd0I7QUFDbEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHdCQUF3QjtBQUNsQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsdUJBQXVCO0FBQ2pDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxtQkFBbUI7QUFDN0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsOENBQThDO0FBQ3hELFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0Q0FBNEM7QUFDdEQsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDBCQUEwQjtBQUNwQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsb0NBQW9DO0FBQzlDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxLQUFLO0FBQ2YsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsaUJBQWlCO0FBQzNCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGdDQUFnQztBQUMxQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZ0NBQWdDO0FBQzFDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwrQkFBK0I7QUFDekMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDBDQUEwQztBQUNwRCxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsY0FBYztBQUN4QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNkJBQTZCO0FBQ3ZDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwwQkFBMEI7QUFDcEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxRQUFBLFFBQVEsRUFBRSxTQUFTO0FBQ3BCLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsZ0NBQWdDO0FBQzFDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLGtDQUFrQztBQUM1QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDhCQUE4QjtBQUN4QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEIsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDJCQUEyQjtBQUNyQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsOEJBQThCO0FBQ3hDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx5QkFBeUI7QUFDbkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDJCQUEyQjtBQUNyQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsV0FBVztBQUNyQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUseUJBQXlCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwwQkFBMEI7QUFDcEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHlCQUF5QjtBQUNuQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDhCQUE4QjtBQUN4QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLG1CQUFtQjtBQUM3QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsWUFBWTtBQUN0QixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNkJBQTZCO0FBQ3ZDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSx1QkFBdUI7QUFDakMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLHdCQUF3QjtBQUNsQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsT0FBTztBQUNqQixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNkJBQTZCO0FBQ3ZDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxtQ0FBbUM7QUFDN0MsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDRCQUE0QjtBQUN0QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSwyQkFBMkI7QUFDckMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLEtBQUs7QUFDZixRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsNEJBQTRCO0FBQ3RDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw0QkFBNEI7QUFDdEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDJCQUEyQjtBQUNyQyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsd0JBQXdCO0FBQ2xDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw4QkFBOEI7QUFDeEMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFBUSxFQUFFLDZCQUE2QjtBQUN2QyxRQUFBLFFBQVEsRUFBRSxRQUFRO0FBQ25CLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxRQUFRLEVBQUUsMkJBQTJCO0FBQ3JDLFFBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbkIsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLFFBQVEsRUFBRSw2QkFBNkI7QUFDdkMsUUFBQSxRQUFRLEVBQUUsUUFBUTtBQUNuQixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsUUFB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
