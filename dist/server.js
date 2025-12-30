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
    try {
        const user = await prisma.user.findFirst({
            where: {
                phone: payload?.phone,
            },
        });
        return { ...user };
    }
    catch (error) {
        if (error.code === 'P2025') {
            throw new CustomError('This account does not exist', 404);
        }
        throw error;
    }
}
async function deleteUserAccount(userId) {
    try {
        const user = await prisma.user.delete({
            where: { id: userId },
        });
        return user;
    }
    catch (error) {
        if (error.code === 'P2025') {
            throw new CustomError('User not found', 404);
        }
        throw error;
    }
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
    static async deleteUserAccount(req, res) {
        try {
            const { id } = req.params;
            if (!id)
                throw new CustomError('Unauthorized', 402);
            const data = await deleteUserAccount(id);
            return res.status(200).json({
                message: 'User account deleted successfully',
                success: true,
                data,
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
router$8.delete('/delete-account/:id', AuthController.deleteUserAccount);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJpc21hL2NsaWVudC50cyIsIi4uL3NyYy9leHRlbnNpb25zL21haWwtc2VydmljZS90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy93ZWxjb21lLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwudHMiLCIuLi9zcmMvY29uZmlnL2Vudi50cyIsIi4uL3NyYy91dGlscy9sb2dnZXIudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbC50cyIsIi4uL3NyYy91dGlscy9jdXN0b21FcnJvci50cyIsIi4uL3NyYy9leHRlbnNpb25zL2FrdXVrL3V0aWxzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvYWt1dWsvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvdXRpbHMvaGFzaC50cyIsIi4uL3NyYy91dGlscy9qd3QudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIi4uL3NyYy91dGlscy9nZXRVc2VyLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvZW1iZWRseS91dGlscy50cyIsIi4uL3NyYy9leHRlbnNpb25zL2VtYmVkbHkvaW5kZXgudHMiLCIuLi9zcmMvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5L2luZGV4LnRzIiwiLi4vc3JjL2pvYnMvcHJvY2Vzcy10cmFuc2Zlci50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtYWlydGltZS50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucy50cyIsIi4uL3NyYy9qb2JzL3Byb2Nlc3MtZW1iZWRseS13YWxsZXQudHMiLCIuLi9zcmMvam9icy9wcm9jZXNzLWludGVybmFsLXRyYW5zZmVycy50cyIsIi4uL3NyYy9qb2JzL1dvcmtlcnMudHMiLCIuLi9zcmMvam9icy9xdWV1ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvYXV0aC92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9hZ2VudHMvYWdlbnQucm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvdXNlcnMvY29udHJvbGxlci50cyIsIi4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiLCIuLi9zcmMvbW9kdWxlcy91c2Vycy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvc2VydmljZS50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy92YWxpZGF0b3IudHMiLCIuLi9zcmMvbW9kdWxlcy9tZXJjaGFudHMvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMudHMiLCIuLi9zcmMvbW9kdWxlcy93ZWJob29rcy9zZXJ2aWNlLnRzIiwiLi4vc3JjL21vZHVsZXMvd2ViaG9va3MvY29udHJvbGxlci50cyIsIi4uL3NyYy9tb2R1bGVzL3dlYmhvb2tzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3dhbGxldHMvdmFsaWRhdG9yLnRzIiwiLi4vc3JjL21vZHVsZXMvd2FsbGV0cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21pZGRsZXdhcmUvaWRlbXBvdGVuY3kudHMiLCIuLi9zcmMvbW9kdWxlcy93YWxsZXRzL3JvdXRlcy50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3ZhbGlkYXRvci50cyIsIi4uL3NyYy9tb2R1bGVzL3BheW1lbnRzL3NlcnZpY2UudHMiLCIuLi9zcmMvbW9kdWxlcy9wYXltZW50cy9jb250cm9sbGVyLnRzIiwiLi4vc3JjL21vZHVsZXMvcGF5bWVudHMvcm91dGVzLnRzIiwiLi4vc3JjL21vZHVsZXMvdHJhbnNhY3Rpb25zL2NvbnRyb2xsZXIudHMiLCIuLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzLnRzIiwiLi4vc3JjL2V4dGVuc2lvbnMvY2xvdWRmbGFyZS9pbmRleC50cyIsIi4uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIudHMiLCIuLi9zcmMvcm91dGVzLnRzIiwiLi4vc3JjL2FwcC50cyIsIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3ByaXNtYS9jbGllbnQudHNcclxuKEJpZ0ludC5wcm90b3R5cGUgYXMgYW55KS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaW50ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgcmV0dXJuIGludCA/PyB0aGlzLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgLy8gbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAvKiBCYXNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByZWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtc28taGlkZTogYWxsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5LFxyXG4gICAgICB0ZCxcclxuICAgICAgdGgge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLFxyXG4gICAgICB1bCxcclxuICAgICAgb2wsXHJcbiAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAuc3ViIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyogVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFsaWduLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idXR0b24tLWdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzIyQkM2NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbi0tcmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MTM2O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRjYxMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hdHRyaWJ1dGVzX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogUmVsYXRlZCBJdGVtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0JDQ0NGO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBEaXNjb3VudCBDb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAvKiBTb2NpYWwgSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAuc29jaWFsIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwIDAgMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfaGVhZGluZyBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM4NTg3OEU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHVyY2hhc2VfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wdXJjaGFzZV90b3RhbC0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM2QjZFNzY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLW1hc3RoZWFkX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJvZHktc3ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1jZWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAuZW1haWwtYm9keV9pbm5lcixcclxuICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQsXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcclxuICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuICAgICAgICAuZi1mYWxsYmFjayAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLiBUaGUgbGluayBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPWZvcmdvdF9wYXNzd29yZF9lbWFpbFwiIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbS9fbnV4dC9pbWcvbG9nby4wNzc3OWUyLnBuZ1wiIGFsdD1cIk1hc3RlcmluZ2JhY2tlbmRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtYm9keVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYWNjb3VudC4gVXNlIHRoZSBidXR0b24gYmVsb3cgdG8gcmVzZXQgaXQuIDxzdHJvbmc+VGhpcyBwYXNzd29yZCByZXNldCBpcyBvbmx5IHZhbGlkIGZvciB0aGUgbmV4dCA2MCBtaW51dGVzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cImYtZmFsbGJhY2sgYnV0dG9uIGJ1dHRvbi0tZ3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lc3NhZ2UuY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBzZWN1cml0eSwgaWYgeW91IGRpZCBub3QgcmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgb3IgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QHByb2ZhaWxpLmNvbVwiPmNvbnRhY3Qgc3VwcG9ydDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+VGhlICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9IFRlYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPlBvcnQgSGFyY291cnQsIFJpdmVycywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIiA+XHJcbiAgICAgICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiY29sb3Itc2NoZW1lXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzODY5RDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICBvbCxcclxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAuNGVtIDAgMS4xODc1ZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMzODY5RDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ1dHRvbi0tZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJDNjY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIyQkM2NjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYxMzY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEF0dHJpYnV0ZSBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmF0dHJpYnV0ZXNfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBSZWxhdGVkIEl0ZW1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlbGF0ZWRfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDQkNDQ0Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9oZWFkaW5nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEwcHggOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogRGF0YSB0YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgICAgICBjb2xvcjogIzUxNTQ1RTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1MTU0NUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuc3ViIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLW1hc3RoZWFkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNBOEFBQUY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiA1NzBweDtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZW1haWwtZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgb2wsXHJcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICAgIHN1cHBvcnRlZC1jb2xvci1zY2hlbWVzOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwhLS1baWYgbXNvXT5cclxuICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgICAgIC5mLWZhbGxiYWNrICB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIj5Zb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCB5b3VyIHBhc3N3b3JkIHN1Y2Nlc3NmdWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWNvbnRlbnRcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXBhc3N3b3JkX2NoYW5nZWRfZW1haWxcIiBjbGFzcz1cImYtZmFsbGJhY2sgZW1haWwtbWFzdGhlYWRfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbWFpbCBCb2R5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBCb2R5IGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmLWZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBwYXNzd29yZCBjb25uZWN0ZWQgdG8geW91ciBNYXN0ZXJpbmdiYWNrZW5kIGFjY291bnQgd2FzIGNoYW5nZWQuIElmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzIGNoYW5nZSwgdGFsayB0byB1cyB0byByZXZlcnQgaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFsayBzb29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlRoZSAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSBUZWFtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImVtYWlsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCI1NzBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29udGVudC1jZWxsXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLWZhbGxiYWNrIHN1YiBhbGlnbi1jZW50ZXJcIj4mY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9ICR7XHJcbiAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gIH0uIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk5vLiAxMDAgT2dvbG9nbyBTdHJlZXQsIFJ1bXVpZ2JvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxyXG4gIDxodG1sIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIngtYXBwbGUtZGlzYWJsZS1tZXNzYWdlLXJlZm9ybWF0dGluZ1wiIC8+XHJcbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInN1cHBvcnRlZC1jb2xvci1zY2hlbWVzXCIgY29udGVudD1cImxpZ2h0IGRhcmtcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG8rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM4NjlkNDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgYSBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHJlaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIG1zby1oaWRlOiBhbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFR5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLFxyXG4gICAgICAgIHVsLFxyXG4gICAgICAgIG9sLFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OWQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlkNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMmJjNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJiYzY2O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI2ZmNjEzNjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjY2NmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJlbGF0ZWRfaXRlbS10aHVtYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucmVsYXRlZF9oZWFkaW5nIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjY2NmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERpc2NvdW50IENvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiY2NjZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmRpc2NvdW50X2hlYWRpbmcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzY291bnRfYm9keSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFNvY2lhbCBJY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuc29jaWFsIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNvY2lhbF9pY29uIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHggMTBweCA4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBEYXRhIHRhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2NvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAucHVyY2hhc2VfaGVhZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICM4NTg3OGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wdXJjaGFzZV9mb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnB1cmNoYXNlX3RvdGFsLS1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTQ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcC5zdWIge1xyXG4gICAgICAgICAgY29sb3I6ICM2YjZlNzY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjc7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogTWFzdGhlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogOTRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YWFhZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1ib2R5X2lubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZiNmU3NjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJvZHktYWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuYm9keS1zdWIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWM7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypNZWRpYSBRdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZW1haWwtYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5X2lubmVyLFxyXG4gICAgICAgICAgLmVtYWlsLWNvbnRlbnQsXHJcbiAgICAgICAgICAuZW1haWwtd3JhcHBlcixcclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZCxcclxuICAgICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLFxyXG4gICAgICAgICAgdWwsXHJcbiAgICAgICAgICBvbCxcclxuICAgICAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJpYnV0ZXNfY29udGVudCxcclxuICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbWFpbC1tYXN0aGVhZF9uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG4gICAgICAgICAgc3VwcG9ydGVkLWNvbG9yLXNjaGVtZXM6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPCFbZW5kaWZdLS0+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVoZWFkZXJcIlxyXG4gICAgICAgID5XZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgYWJvYXJkLjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLW1hc3RoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20/c291cmNlPXdlbGNvbWVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZi1mYWxsYmFjayBlbWFpbC1tYXN0aGVhZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtYm9keV9pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTcwXCJcclxuICAgICAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJvZHkgY29udGVudCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImYtZmFsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGkgJHttZXNzYWdlLnRvX25hbWV9LDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE1hc3RlcmluZ2JhY2tlbmQhIEknbSBzdXBlciBleGNpdGVkIHRvIHdlbGNvbWUgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9hcmQuIE15IG5hbWUgaXMgU29sb21vbiBhbmQgSSdsbCBzdXBwb3J0IHlvdSB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHlvdSdyZSBoZXJlLCBsZXQgbWUgYnJpZWZseSByZWNhcCB0aGUgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIE1hc3RlcmluZ2JhY2tlbmQgY2FuIG9mZmVyIHlvdTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpZGVvIGFuZCBUZXh0IGJhc2VkIEJhY2tlbmQgRW5naW5lZXJpbmcgY291cnNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJhY2tlbmQgUG9ydGZvbGlvIHRvIHNob3djYXNlIHlvdXIgc2tpbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXJuIHRvIGJ1aWxkIGZyb20gVGhvdXNhbmRzIFJlYWwtd29ybGQgUHJvamVjdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyYWNrIHlvdXIgbGVhcm5pbmdzIGFuZCBzZXQgc2NoZWR1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IEV4cGVydCBWZXR0ZWQgcm9hZG1hcHMgdG8gbGVhcm4gYmFja2VuZCBlbmdpbmVlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFwIGNvdXJzZXMgdG8gQmFja2VuZCBQcm9qZWN0cyB0byBoZWxwIHlvdSBtYXN0ZXIgeW91ciBza2lsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25saW5lIGNvZGluZyBjaGFsbGVuZ2VzIGJ5IGV4cGVydHMgdG8gaW1wcm92ZSB5b3VyIHNraWxsczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGljayBwcm9qZWN0cyBmcm9tIGRpZmZlcmVudCBidXNpbmVzcyBkb21haW5zIHRvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIG9mIHRoZSBmZWF0dXJlcyBvbiB0aGUgd2F5OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9hZG1hcHMgPT4gPC9zdHJvbmc+TUIgUm9hZG1hcCBlbmFibGVzIHN0cnVjdHVyZWQtYmFzZWQgbGVhcm5pbmcgYXBwcm9hY2ggZm9yIEJhY2tlbmQgZW5naW5lZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0IExhbmQgPT4gPC9zdHJvbmc+TUIgUHJvamVjdHMgZW5hYmxlcyBCYWNrZW5kIGVuZ2luZWVycyB0aHJvdWdoIGEgbGVhcm4tYnktYnVpbGRpbmcgbW9kZWwuIEJ1aWxkIHJlYWwtd29ybGQgYmFja2VuZCBwcm9qZWN0cyB3aXRob3V0IGNvZGluZyB0aGUgZnJvbnRlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tlbmQgUG9ydGZvbGlvID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DcmVhdGUgYW5kIG1hbmFnZSB5b3VyIGJhY2tlbmQgcG9ydGZvbGlvIHdpdGggdG9ucyBvZiByZWFsIHdvcmxkIGJhY2tlbmQgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhY2tMYW5kID0+IDwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5MZWFybiBiYWNrZW5kIGVuZ2luZWVyaW5nIGJ5IHNvbHZpbmcgY2hhbGxlbmdlcyBpbiBhIGdhbWlmeWluZyB3YXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGRvbid0IGJlIHNoeSBhbmQgcmVhY2ggb3V0IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91ciB0ZWFtIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BtYXN0ZXJpbmdiYWNrZW5kLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPmluZm9AbWFzdGVyaW5nYmFja2VuZC5jb208L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCBpbiBubyB0aW1lLCBoZXJlJ3MgYSBsaW5rIHRvIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+ZGVtbyB2aWRlbzwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vcG9zdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5ibG9nPC9hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjBweCAwIDAgMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRhbGsgc29vbiwgPGJyIC8+U29sb21vbiBmcm9tICR7cHJvY2Vzcy5lbnYuQVBQX05BTUV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICBcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbnRlbnQtY2VsbFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby4gPGJyIC8+UG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBcclxuICBgO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkXCIgPlxyXG4gICAgPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwieC1hcHBsZS1kaXNhYmxlLW1lc3NhZ2UtcmVmb3JtYXR0aW5nXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImNvbG9yLXNjaGVtZVwiIGNvbnRlbnQ9XCJsaWdodCBkYXJrXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwic3VwcG9ydGVkLWNvbG9yLXNjaGVtZXNcIiBjb250ZW50PVwibGlnaHQgZGFya1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBtZWRpYT1cImFsbFwiPlxyXG4gICAgICAgIC8qIEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg2OUQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcmVoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgbXNvLWhpZGU6IGFsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogVHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCxcclxuICAgICAgICB1bCxcclxuICAgICAgICBvbCxcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgIG1hcmdpbjogLjRlbSAwIDEuMTg3NWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMzg2OUQ0O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgIzM4NjlENDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1ncmVlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMkJDNjY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjMjJCQzY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnV0dG9uLS1yZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjRkY2MTM2O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgI0ZGNjEzNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBBdHRyaWJ1dGUgbGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0Rjc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXR0cmlidXRlc19pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFJlbGF0ZWQgSXRlbXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbGF0ZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjQ0JDQ0NGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2l0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVsYXRlZF9pdGVtLXRodW1iIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZWxhdGVkX2hlYWRpbmcge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQkNDQ0Y7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRGlzY291bnQgQ29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQ0JDQ0NGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZGlzY291bnRfaGVhZGluZyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXNjb3VudF9ib2R5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU29jaWFsIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zb2NpYWwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc29jaWFsX2ljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweCAxMHB4IDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIERhdGEgdGFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9pdGVtIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wdXJjaGFzZV9oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2hlYWRpbmcgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzg1ODc4RTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnB1cmNoYXNlX2Zvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucHVyY2hhc2VfdG90YWwtLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTE1NDVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwLnN1YiB7XHJcbiAgICAgICAgICBjb2xvcjogIzZCNkU3NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBNYXN0aGVhZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1tYXN0aGVhZF9sb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZW1haWwtbWFzdGhlYWRfbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjQThBQUFGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEJvZHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogMTAwJTtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxzcGFjaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lbWFpbC1mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLWNlbGxwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxsc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmVtYWlsLWZvb3RlciBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkI2RTc2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keS1hY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAtcHJlbWFpbGVyLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLXByZW1haWxlci1jZWxscGFkZGluZzogMDtcclxuICAgICAgICAgIC1wcmVtYWlsZXItY2VsbHNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5LXN1YiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKk1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5lbWFpbC1ib2R5LFxyXG4gICAgICAgICAgLmVtYWlsLWJvZHlfaW5uZXIsXHJcbiAgICAgICAgICAuZW1haWwtY29udGVudCxcclxuICAgICAgICAgIC5lbWFpbC13cmFwcGVyLFxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkLFxyXG4gICAgICAgICAgLmVtYWlsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAsXHJcbiAgICAgICAgICB1bCxcclxuICAgICAgICAgIG9sLFxyXG4gICAgICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXR0cmlidXRlc19jb250ZW50LFxyXG4gICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsLW1hc3RoZWFkX25hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQtY29sb3Itc2NoZW1lczogbGlnaHQgZGFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8IS0tW2lmIG1zb10+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgLmYtZmFsbGJhY2sgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwhW2VuZGlmXS0tPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJlaGVhZGVyXCI+VXNlIHRoaXMgY29kZSB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBUaGUgY29kZSBpcyBvbmx5IHZhbGlkIGZvciAyNCBob3Vycy48L3NwYW4+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZW1haWwtY29udGVudFwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZW1haWwtbWFzdGhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXN0ZXJpbmdiYWNrZW5kLmNvbT9zb3VyY2U9dmVyaWZpY2F0aW9uX2VtYWlsXCIgY2xhc3M9XCJmLWZhbGxiYWNrIGVtYWlsLW1hc3RoZWFkX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiYXV0b1wiIHNyYz1cImh0dHBzOi8vbWFzdGVyaW5nYmFja2VuZC5jb20vX251eHQvaW1nL2xvZ28uMDc3NzllMi5wbmdcIiBhbHQ9XCJNYXN0ZXJpbmdiYWNrZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEVtYWlsIEJvZHkgLS0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImVtYWlsLWJvZHlcIiB3aWR0aD1cIjEwMCVcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1ib2R5X2lubmVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjU3MFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQm9keSBjb250ZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZi1mYWxsYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhpICR7bWVzc2FnZS50b19uYW1lfSw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhhbmtzIGZvciBzaWduaW5nIHVwIGZvciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BUFBfTkFNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSEgVGhpcyBlbWFpbCB2ZXJpZmljYXRpb24gc3RlcCBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBhY2N1cmF0ZSBlbWFpbCBhZGRyZXNzIHRvIGNvbW11bmljYXRlIGltcG9ydGFudCBhY2NvdW50IGV2ZW50cyB0byB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSBjb3B5IGFuZCBwYXN0ZSB0aGUgY29kZSBiZWxvdyBpbiB5b3VyIGJyb3dzZXIsIGJhY2sgdG8gdGhlIHNpZ24gdXAgd29ya2Zsb3cgaW5zaWRlIG91ciBhcHA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBY3Rpb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJib2R5LWFjdGlvblwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgYm9yZGVyPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHttZXNzYWdlLmNvZGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAbWFzdGVyaW5nYmFja2VuZC5jb21cIj5jb250YWN0IHN1cHBvcnQ8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy4g4oCUIHdlJ3JlIGFsd2F5cyBoYXBweSB0byBoZWxwIG91dC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWxrIHNvb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5UaGUgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gVGVhbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJlbWFpbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiNTcwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjb250ZW50LWNlbGxcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZi1mYWxsYmFjayBzdWIgYWxpZ24tY2VudGVyXCI+JmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAke1xyXG4gICAgcHJvY2Vzcy5lbnYuQVBQX05BTUVcclxuICB9LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtZmFsbGJhY2sgc3ViIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Oby4gMTAwIE9nb2xvZ28gU3RyZWV0LCBSdW11aWdiby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5Qb3J0IEhhcmNvdXJ0LCBSaXZlcnMsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5gO1xyXG59O1xyXG4iLCJjb25zdCBkZWZhdWx0UG9ydCA9IDMwMDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcclxuICBjb250ZXh0OiAnTE9DQUwnIHwgJ0RFVkVMT1AnIHwgJ1NUQUdJTkcnIHwgJ1BST0RVQ1RJT04nO1xyXG4gIGFwcE5hbWU6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICBwb3J0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgZGVidWc/OiBzdHJpbmc7XHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hTZWNyZXQ6IHN0cmluZztcclxuICAgIHJlZnJlc2hEYXlzOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzSW46IHN0cmluZztcclxuICAgIHNhbHRSb3VuZHM6IG51bWJlcjtcclxuICB9O1xyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbiAgICBwb3J0OiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXdzOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGJ1Y2tldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IG51bWJlcjtcclxuICB9O1xyXG4gIHFvcmVJZDoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjbGllbnQ6IHN0cmluZztcclxuICAgIHNlY3JldDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWt1dWs6IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlbWJlZGx5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHBheW91dFVSTDogc3RyaW5nO1xyXG4gICAgd2ViaG9va1VSTDogc3RyaW5nO1xyXG4gICAgb3JnQWNjb3VudDogbnVtYmVyO1xyXG4gICAgb3JnTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgbWFpbDoge1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgcG9ydDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IHN0cmluZztcclxuICB9IHwgbnVsbDtcclxuXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIGNsaWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBidWNrZXROYW1lVGVtcG9yYXJ5OiBzdHJpbmc7XHJcbiAgICBhc3luY0Z1bmN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrUXVldWU6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUhhbmRsZXI6IHN0cmluZztcclxuICAgIHRhc2tRdWV1ZUxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBvYXV0aEdvb2dsZUNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XHJcbiAgICBjYWxsYmFja1VSTDogc3RyaW5nO1xyXG4gIH07XHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWNrZXQ6IHN0cmluZztcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9XHJcbiAgKHByb2Nlc3MuZW52LkNPTlRFWFQgYXNcclxuICAgIHwgJ0xPQ0FMJ1xyXG4gICAgfCAnREVWRUxPUCdcclxuICAgIHwgJ1NUQUdJTkcnXHJcbiAgICB8ICdQUk9EVUNUSU9OJ1xyXG4gICAgfCB1bmRlZmluZWQpIHx8ICdMT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0ge1xyXG4gIGNvbnRleHQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCBkZWZhdWx0UG9ydCxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5BUFBfTkFNRSBhcyBzdHJpbmcsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5GRV9VUkwgYXMgc3RyaW5nLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5ERUJVRyxcclxuXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHBhc3N3b3JkUmVzZXRzSW46IE51bWJlcihwcm9jZXNzLmVudi5QQVNTV09SRF9SRVNFVF9FWFBJUkVTX01JTiksXHJcbiAgfSxcclxuXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGF3czoge1xyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5HQ1BfUFJPSUVDVF9JRCBhcyBzdHJpbmcsXHJcbiAgICBidWNrZXQ6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVRfTkFNRSBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBqd3Q6IHtcclxuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX0VYUElSRVNfSU4gYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaERheXM6IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fRVhQSVJFU19EQVlTIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVUIGFzIHN0cmluZyxcclxuICAgIHNhbHRSb3VuZHM6IE51bWJlcihwcm9jZXNzLmVudi5BVVRIX1NBTFRfUk9VTkRTKSB8fCAxMCxcclxuICB9LFxyXG4gIHJlZGlzOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlJFRElTX1BPUlQgfHwgJzYzNzknKSxcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMIGFzIHN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRURJU19QQVNTV09SRCxcclxuICB9LFxyXG4gIG1haWw6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfSE9TVCBhcyBzdHJpbmcsXHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTUFJTF9QT1JUKSB8fCAyNTI1LFxyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUk5BTUUgYXMgc3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkQgYXMgc3RyaW5nLFxyXG4gICAgc2VuZGVyOiBwcm9jZXNzLmVudi5NQUlMX1NFTkRFUiBhcyBzdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuR0NQX1BST0pFQ1RfSUQhLFxyXG4gICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUwhLFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuR0NQX1BSSVZBVEVfS0VZISxcclxuICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkdDUF9CVUNLRVQhLFxyXG4gICAgYnVja2V0TmFtZVRlbXBvcmFyeTogcHJvY2Vzcy5lbnYuR0NQX0JVQ0tFVF9URU1QT1JBUlkhLFxyXG4gICAgYXN5bmNGdW5jdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX0ZVTkNUSU9OISxcclxuICAgIHRhc2tRdWV1ZTogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUUhLFxyXG4gICAgdGFza1F1ZXVlSGFuZGxlcjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfSEFORExFUiEsXHJcbiAgICB0YXNrUXVldWVMb2NhdGlvbjogcHJvY2Vzcy5lbnYuR0NQX0FTWU5DX1RBU0tfUVVFVUVfTE9DQVRJT04hLFxyXG4gICAgb2F1dGhHb29nbGVDbGllbnRUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfR09PR0xFX0NMSUVOVF9UT0tFTiEsXHJcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIGNhbGxiYWNrVVJMOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTEJBQ0shLFxyXG4gIH0sXHJcbiAgeW91dmVyaWZ5OiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LllPVVZFUklGWV9VUkwgYXMgc3RyaW5nLFxyXG4gICAga2V5OiBwcm9jZXNzLmVudi5ZT1VWRVJJRllfS0VZIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGVtYmVkbHk6IHtcclxuICAgIGlkOiBwcm9jZXNzLmVudi5FTUJFRExZX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuRU1CRURMWV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgdXJsOiBwcm9jZXNzLmVudi5FTUJFRExZX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBwYXlvdXRVUkw6IHByb2Nlc3MuZW52LkVNQkVETFlfUEFZT1VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgICB3ZWJob29rVVJMOiBwcm9jZXNzLmVudi5FTUJFRExZX1dFQkhPT0tfVVJMIGFzIHN0cmluZyxcclxuICAgIG9yZ0FjY291bnQ6IE51bWJlcihwcm9jZXNzLmVudi5FTUJFRExZX09SR0FOSVpBVElPTl9BQ0NPVU5UKSxcclxuICAgIG9yZ05hbWU6IHByb2Nlc3MuZW52LkVNQkVETFlfT1JHQU5JWkFUSU9OX05BTUUgYXMgc3RyaW5nLFxyXG4gIH0sXHJcbiAgY2xvdWRmbGFyZToge1xyXG4gICAgYnVja2V0OiBwcm9jZXNzLmVudi5DTE9VREZMQVJFX0JVQ0tFVF9OQU1FIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9BQ0NFU1NfS0VZX0lEIGFzIHN0cmluZyxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURGTEFSRV9TRUNSRVRfQUNDRVNTX0tFWSBhcyBzdHJpbmcsXHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfQlVDS0VUX1VSTCBhcyBzdHJpbmcsXHJcbiAgfSxcclxuXHJcbiAgcW9yZUlkOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LlFPUkVJRF9CQVNFX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjbGllbnQ6IHByb2Nlc3MuZW52LlFPUkVJRF9DTElFTlQgYXMgc3RyaW5nLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5RT1JFSURfU0VDUkVUIGFzIHN0cmluZyxcclxuICB9LFxyXG4gIGFrdXVrOiB7XHJcbiAgICB1cmw6IHByb2Nlc3MuZW52LkFLVVVLX0JBU0VfVVJMIGFzIHN0cmluZyxcclxuICAgIGlkOiBwcm9jZXNzLmVudi5BS1VVS19BQ0NPVU5UX0lEIGFzIHN0cmluZyxcclxuICAgIGtleTogcHJvY2Vzcy5lbnYuQUtVVUtfS0VZIGFzIHN0cmluZyxcclxuICAgIHNlbmRlcjogcHJvY2Vzcy5lbnYuQUtVVUtfU0VOREVSIGFzIHN0cmluZyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZGVidWdNb2R1bGUgZnJvbSAnZGVidWcnO1xyXG5jb25zdCBkZWJ1ZyA9IGRlYnVnTW9kdWxlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luZm8gPSBkZWJ1ZygnYXBpOmluZm8nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gZGVidWcoJ2FwaTplcnJvcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc29sdmVyID0gZGVidWcoJ2FwaTpmaWVsZC1yZXNvbHZlcicpO1xyXG5leHBvcnQgY29uc3QgbG9nUXVlcnkgPSBkZWJ1ZygnYXBpOnF1ZXJ5Jyk7XHJcbmV4cG9ydCBjb25zdCBsb2dNdXRhdGlvbiA9IGRlYnVnKCdhcGk6bXV0YXRpb24nKTtcclxuZXhwb3J0IGNvbnN0IGxvZ0hlbHBlciA9IGRlYnVnKCdhcGk6aGVscGVyJyk7XHJcbiIsImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgZm9yZ290UGFzc3dvcmQgZnJvbSAnLi90ZW1wbGF0ZXMvZm9yZ290LXBhc3N3b3JkJztcclxuaW1wb3J0IHBhc3N3b3JkQ2hhbmdlZCBmcm9tICcuL3RlbXBsYXRlcy9wYXNzd29yZC1jaGFuZ2VkJztcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi90ZW1wbGF0ZXMvd2VsY29tZSc7XHJcbmltcG9ydCB2ZXJpZmljYXRpb25FbWFpbCBmcm9tICcuL3RlbXBsYXRlcy92ZXJpZmljYXRpb24tZW1haWwnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnQC91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xyXG5pbXBvcnQgeyBNYWlsT3B0aW9ucywgU2VsZWN0VGVtcGxhdGUsIFNlbmRFbWFpbCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgdG8sIHRlbXBsYXRlLCB2YXJpYWJsZXMsIHRlbXBsYXRlSWQgfTogU2VuZEVtYWlsKSA9PiB7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdObyBtYWlsIHRlbXBsYXRlIHNwZWNpZmllZCcpO1xyXG5cclxuICBjb25zdCB7IHN1YmplY3QsIHRlbXBsYXRlOiB0ZW1wIH0gPSBhd2FpdCBzZWxlY3RUZW1wbGF0ZSh7XHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIHZhcmlhYmxlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKFsnUFJPRFVDVElPTicsICdERVZFTE9QJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkpIHtcclxuICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0tFWSk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQGVtYWlscy5tYXN0ZXJpbmdiYWNrZW5kLmNvbT5gLFxyXG4gICAgICB0bzogdG8sXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnM6IE1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiBgXCIke3Byb2Nlc3MuZW52LkFQUF9OQU1FfVwiIDxpbmZvQHByZXNzbW9uaS5jb20+YCxcclxuICAgICAgdG8sXHJcbiAgICAgIHN1YmplY3QsXHJcbiAgICAgIGh0bWw6IHRlbXAgPz8gJzxoMj5DaGVjayB0aGUgc3ViamVjdCA8L2gyPicsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haWxDb25maWc6IGFueSA9IHtcclxuICAgICAgaG9zdDogZW52aXJvbm1lbnQubWFpbD8uaG9zdCB8fCAnc210cC5tYWlsdHJhcC5pbycsXHJcbiAgICAgIHBvcnQ6IGVudmlyb25tZW50Lm1haWw/LnBvcnQgfHwgMjUyNSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogZW52aXJvbm1lbnQubWFpbD8udXNlcm5hbWUgfHwgJ2EzZDExNTliYmJlM2E2JywgLy9nZW5lcmF0ZWQgYnkgTWFpbHRyYXBcclxuICAgICAgICBwYXNzOiBlbnZpcm9ubWVudC5tYWlsPy5wYXNzd29yZCB8fCAnMmI0NjY4ZmUyZDZhNjcnLCAvL2dlbmVyYXRlZCBieSBNYWlsdHJhcFxyXG4gICAgICB9LFxyXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcclxuICAgICAgZ3JlZXRpbmdUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgc29ja2V0VGltZW91dDogMTAwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1haWxPcHRpb25zLCBtYWlsQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQubWFpbD8uaG9zdD8uaW5jbHVkZXMoJ2dtYWlsJykpXHJcbiAgICAgIG1haWxDb25maWdbJ3NlcnZpY2UnXSA9IGVudmlyb25tZW50Lm1haWw/Lmhvc3Q7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChtYWlsQ29uZmlnKTtcclxuXHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBsb2dFcnJvcignc2VuZEVtYWlsICVvJywgeyBtYWlsT3B0aW9ucywgZXJyb3IgfSk7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigndHJ5IGVtYWlsIGFnYWluIGxhdGVyJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgdHJhbnNwb3J0ZXIuY2xvc2UoKTtcclxuICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0VGVtcGxhdGUgPSBhc3luYyAoeyB0ZW1wbGF0ZSwgdmFyaWFibGVzIH06IFNlbGVjdFRlbXBsYXRlKSA9PiB7XHJcbiAgbGV0IHN1YmplY3QgPSBgYDtcclxuICBsZXQgX3RlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcclxuICAgIGNhc2UgJ2ZvcmdvdC1wYXNzd29yZCc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFBhc3N3b3JkIFJlc2V0YDtcclxuICAgICAgX3RlbXBsYXRlID0gZm9yZ290UGFzc3dvcmQodmFyaWFibGVzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2ZXJpZmljYXRpb24nOlxyXG4gICAgICBzdWJqZWN0ICs9IGBFbWFpbCBWZXJpZmljYXRpb25gO1xyXG4gICAgICBfdGVtcGxhdGUgPSB2ZXJpZmljYXRpb25FbWFpbCh2YXJpYWJsZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Bhc3N3b3JkLWNoYW5nZWQnOlxyXG4gICAgICBzdWJqZWN0ICs9IGBQYXNzd29yZCBDaGFuZ2VkYDtcclxuICAgICAgX3RlbXBsYXRlID0gcGFzc3dvcmRDaGFuZ2VkKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnd2VsY29tZSc6XHJcbiAgICAgIHN1YmplY3QgKz0gYFdlbGNvbWUgdG8gTWFzdGVyaW5nYmFja2VuZCFgO1xyXG4gICAgICBfdGVtcGxhdGUgPSB3ZWxjb21lKHZhcmlhYmxlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiB7IHRlbXBsYXRlOiBfdGVtcGxhdGUsIHN1YmplY3QgfTtcclxufTtcclxuIiwiY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgcHVibGljIHN0YXR1cztcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnlDb2RlcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkzJyxcclxuICAgIGNvZGU6ICdBRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxhbmQgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdBWCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU1JyxcclxuICAgIGNvZGU6ICdBTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjEzJyxcclxuICAgIGNvZGU6ICdEWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW1lcmljYW5TYW1vYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY4NCcsXHJcbiAgICBjb2RlOiAnQVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZG9ycmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NicsXHJcbiAgICBjb2RlOiAnQUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ0JyxcclxuICAgIGNvZGU6ICdBTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5ndWlsbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNjQnLFxyXG4gICAgY29kZTogJ0FJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRhcmN0aWNhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzInLFxyXG4gICAgY29kZTogJ0FRJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAgIGRpYWxfY29kZTogJysxMjY4JyxcclxuICAgIGNvZGU6ICdBRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1NCcsXHJcbiAgICBjb2RlOiAnQVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FybWVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3NCcsXHJcbiAgICBjb2RlOiAnQU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FydWJhJyxcclxuICAgIGRpYWxfY29kZTogJysyOTcnLFxyXG4gICAgY29kZTogJ0FXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzYxJyxcclxuICAgIGNvZGU6ICdBVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQXVzdHJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDMnLFxyXG4gICAgY29kZTogJ0FUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBemVyYmFpamFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTQnLFxyXG4gICAgY29kZTogJ0FaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCYWhhbWFzJyxcclxuICAgIGRpYWxfY29kZTogJysxMjQyJyxcclxuICAgIGNvZGU6ICdCUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFocmFpbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTczJyxcclxuICAgIGNvZGU6ICdCSCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuZ2xhZGVzaCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrODgwJyxcclxuICAgIGNvZGU6ICdCRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyNDYnLFxyXG4gICAgY29kZTogJ0JCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxhcnVzJyxcclxuICAgIGRpYWxfY29kZTogJyszNzUnLFxyXG4gICAgY29kZTogJ0JZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCZWxnaXVtJyxcclxuICAgIGRpYWxfY29kZTogJyszMicsXHJcbiAgICBjb2RlOiAnQkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAxJyxcclxuICAgIGNvZGU6ICdCWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmVuaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyOScsXHJcbiAgICBjb2RlOiAnQkonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jlcm11ZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE0NDEnLFxyXG4gICAgY29kZTogJ0JNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3NScsXHJcbiAgICBjb2RlOiAnQlQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MScsXHJcbiAgICBjb2RlOiAnQk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NycsXHJcbiAgICBjb2RlOiAnQkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgIGRpYWxfY29kZTogJysyNjcnLFxyXG4gICAgY29kZTogJ0JXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU1JyxcclxuICAgIGNvZGU6ICdCUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAgIGRpYWxfY29kZTogJysyNDYnLFxyXG4gICAgY29kZTogJ0lPJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjczJyxcclxuICAgIGNvZGU6ICdCTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1OScsXHJcbiAgICBjb2RlOiAnQkcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0J1cmtpbmEgRmFzbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI2JyxcclxuICAgIGNvZGU6ICdCRicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnVydW5kaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU3JyxcclxuICAgIGNvZGU6ICdCSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FtYm9kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1NScsXHJcbiAgICBjb2RlOiAnS0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgIGRpYWxfY29kZTogJysyMzcnLFxyXG4gICAgY29kZTogJ0NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYW5hZGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ0NBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcclxuICAgIGRpYWxfY29kZTogJysyMzgnLFxyXG4gICAgY29kZTogJ0NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzQ1JyxcclxuICAgIGNvZGU6ICdLWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJysyMzYnLFxyXG4gICAgY29kZTogJ0NGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGFkJyxcclxuICAgIGRpYWxfY29kZTogJysyMzUnLFxyXG4gICAgY29kZTogJ1REJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGlsZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTYnLFxyXG4gICAgY29kZTogJ0NMJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrODYnLFxyXG4gICAgY29kZTogJ0NOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ1gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgIGRpYWxfY29kZTogJys2MScsXHJcbiAgICBjb2RlOiAnQ0MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgIGRpYWxfY29kZTogJys1NycsXHJcbiAgICBjb2RlOiAnQ08nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbW9yb3MnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OScsXHJcbiAgICBjb2RlOiAnS00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDInLFxyXG4gICAgY29kZTogJ0NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgIGRpYWxfY29kZTogJysyNDMnLFxyXG4gICAgY29kZTogJ0NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4MicsXHJcbiAgICBjb2RlOiAnQ0snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Nvc3RhIFJpY2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwNicsXHJcbiAgICBjb2RlOiAnQ1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI1JyxcclxuICAgIGNvZGU6ICdDSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3JvYXRpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg1JyxcclxuICAgIGNvZGU6ICdIUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTMnLFxyXG4gICAgY29kZTogJ0NVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDeXBydXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NycsXHJcbiAgICBjb2RlOiAnQ1knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0N6ZWNoIFJlcHVibGljJyxcclxuICAgIGRpYWxfY29kZTogJys0MjAnLFxyXG4gICAgY29kZTogJ0NaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZW5tYXJrJyxcclxuICAgIGRpYWxfY29kZTogJys0NScsXHJcbiAgICBjb2RlOiAnREsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RqaWJvdXRpJyxcclxuICAgIGRpYWxfY29kZTogJysyNTMnLFxyXG4gICAgY29kZTogJ0RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc2NycsXHJcbiAgICBjb2RlOiAnRE0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg0OScsXHJcbiAgICBjb2RlOiAnRE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VjdWFkb3InLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MycsXHJcbiAgICBjb2RlOiAnRUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VneXB0JyxcclxuICAgIGRpYWxfY29kZTogJysyMCcsXHJcbiAgICBjb2RlOiAnRUcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcclxuICAgIGRpYWxfY29kZTogJys1MDMnLFxyXG4gICAgY29kZTogJ1NWJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQwJyxcclxuICAgIGNvZGU6ICdHUScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjkxJyxcclxuICAgIGNvZGU6ICdFUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXN0b25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcyJyxcclxuICAgIGNvZGU6ICdFRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRXRoaW9waWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1MScsXHJcbiAgICBjb2RlOiAnRVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdGSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk4JyxcclxuICAgIGNvZGU6ICdGTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlqaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc5JyxcclxuICAgIGNvZGU6ICdGSicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmlubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU4JyxcclxuICAgIGNvZGU6ICdGSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJhbmNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMycsXHJcbiAgICBjb2RlOiAnRlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NCcsXHJcbiAgICBjb2RlOiAnR0YnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OScsXHJcbiAgICBjb2RlOiAnUEYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhYm9uJyxcclxuICAgIGRpYWxfY29kZTogJysyNDEnLFxyXG4gICAgY29kZTogJ0dBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYW1iaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMCcsXHJcbiAgICBjb2RlOiAnR00nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlb3JnaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk5NScsXHJcbiAgICBjb2RlOiAnR0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQ5JyxcclxuICAgIGNvZGU6ICdERScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2hhbmEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMycsXHJcbiAgICBjb2RlOiAnR0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dpYnJhbHRhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUwJyxcclxuICAgIGNvZGU6ICdHSScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgIGRpYWxfY29kZTogJyszMCcsXHJcbiAgICBjb2RlOiAnR1InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dyZWVubGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjk5JyxcclxuICAgIGNvZGU6ICdHTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3JlbmFkYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTQ3MycsXHJcbiAgICBjb2RlOiAnR0QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5MCcsXHJcbiAgICBjb2RlOiAnR1AnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1YW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NzEnLFxyXG4gICAgY29kZTogJ0dVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzUwMicsXHJcbiAgICBjb2RlOiAnR1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1ZXJuc2V5JyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI0JyxcclxuICAgIGNvZGU6ICdHTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3VpbmVhLUJpc3NhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjQ1JyxcclxuICAgIGNvZGU6ICdHVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR3V5YW5hJyxcclxuICAgIGRpYWxfY29kZTogJys1OTUnLFxyXG4gICAgY29kZTogJ0dZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTA5JyxcclxuICAgIGNvZGU6ICdIVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3OScsXHJcbiAgICBjb2RlOiAnVkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbmR1cmFzJyxcclxuICAgIGRpYWxfY29kZTogJys1MDQnLFxyXG4gICAgY29kZTogJ0hOJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MicsXHJcbiAgICBjb2RlOiAnSEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0h1bmdhcnknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM2JyxcclxuICAgIGNvZGU6ICdIVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSWNlbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzU0JyxcclxuICAgIGNvZGU6ICdJUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkxJyxcclxuICAgIGNvZGU6ICdJTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSW5kb25lc2lhJyxcclxuICAgIGRpYWxfY29kZTogJys2MicsXHJcbiAgICBjb2RlOiAnSUQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YgUGVyc2lhbiBHdWxmJyxcclxuICAgIGRpYWxfY29kZTogJys5OCcsXHJcbiAgICBjb2RlOiAnSVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyYXEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2NCcsXHJcbiAgICBjb2RlOiAnSVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lyZWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1MycsXHJcbiAgICBjb2RlOiAnSUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzbGUgb2YgTWFuJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnSU0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcyJyxcclxuICAgIGNvZGU6ICdJTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSXRhbHknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM5JyxcclxuICAgIGNvZGU6ICdJVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnSmFtYWljYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg3NicsXHJcbiAgICBjb2RlOiAnSk0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phcGFuJyxcclxuICAgIGRpYWxfY29kZTogJys4MScsXHJcbiAgICBjb2RlOiAnSlAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0plcnNleScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDQnLFxyXG4gICAgY29kZTogJ0pFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdKb3JkYW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MicsXHJcbiAgICBjb2RlOiAnSk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzc3JyxcclxuICAgIGNvZGU6ICdLWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS2VueWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1NCcsXHJcbiAgICBjb2RlOiAnS0UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgIGRpYWxfY29kZTogJys2ODYnLFxyXG4gICAgY29kZTogJ0tJJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgS29yZWFcIixcclxuICAgIGRpYWxfY29kZTogJys4NTAnLFxyXG4gICAgY29kZTogJ0tQJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzgyJyxcclxuICAgIGNvZGU6ICdLUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnS3V3YWl0JyxcclxuICAgIGRpYWxfY29kZTogJys5NjUnLFxyXG4gICAgY29kZTogJ0tXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTYnLFxyXG4gICAgY29kZTogJ0tHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYW9zJyxcclxuICAgIGRpYWxfY29kZTogJys4NTYnLFxyXG4gICAgY29kZTogJ0xBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMYXR2aWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM3MScsXHJcbiAgICBjb2RlOiAnTFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlYmFub24nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk2MScsXHJcbiAgICBjb2RlOiAnTEInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2NicsXHJcbiAgICBjb2RlOiAnTFMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYmVyaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMScsXHJcbiAgICBjb2RlOiAnTFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxOCcsXHJcbiAgICBjb2RlOiAnTFknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpZWNodGVuc3RlaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzQyMycsXHJcbiAgICBjb2RlOiAnTEknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzcwJyxcclxuICAgIGNvZGU6ICdMVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTHV4ZW1ib3VyZycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzUyJyxcclxuICAgIGNvZGU6ICdMVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFjYW8nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg1MycsXHJcbiAgICBjb2RlOiAnTU8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzg5JyxcclxuICAgIGNvZGU6ICdNSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFkYWdhc2NhcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYxJyxcclxuICAgIGNvZGU6ICdNRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsYXdpJyxcclxuICAgIGRpYWxfY29kZTogJysyNjUnLFxyXG4gICAgY29kZTogJ01XJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjAnLFxyXG4gICAgY29kZTogJ01ZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNYWxkaXZlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYwJyxcclxuICAgIGNvZGU6ICdNVicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsaScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIzJyxcclxuICAgIGNvZGU6ICdNTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM1NicsXHJcbiAgICBjb2RlOiAnTVQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY5MicsXHJcbiAgICBjb2RlOiAnTUgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRpbmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzU5NicsXHJcbiAgICBjb2RlOiAnTVEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIyMicsXHJcbiAgICBjb2RlOiAnTVInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hdXJpdGl1cycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjMwJyxcclxuICAgIGNvZGU6ICdNVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWF5b3R0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdZVCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgIGRpYWxfY29kZTogJys1MicsXHJcbiAgICBjb2RlOiAnTVgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkxJyxcclxuICAgIGNvZGU6ICdGTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzczJyxcclxuICAgIGNvZGU6ICdNRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9uYWNvJyxcclxuICAgIGRpYWxfY29kZTogJyszNzcnLFxyXG4gICAgY29kZTogJ01DJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdNb25nb2xpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTc2JyxcclxuICAgIGNvZGU6ICdNTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgyJyxcclxuICAgIGNvZGU6ICdNRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY2NCcsXHJcbiAgICBjb2RlOiAnTVMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vcm9jY28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIxMicsXHJcbiAgICBjb2RlOiAnTUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI1OCcsXHJcbiAgICBjb2RlOiAnTVonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ015YW5tYXInLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk1JyxcclxuICAgIGNvZGU6ICdNTScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjY0JyxcclxuICAgIGNvZGU6ICdOQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmF1cnUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NCcsXHJcbiAgICBjb2RlOiAnTlInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05lcGFsJyxcclxuICAgIGRpYWxfY29kZTogJys5NzcnLFxyXG4gICAgY29kZTogJ05QJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzEnLFxyXG4gICAgY29kZTogJ05MJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk5JyxcclxuICAgIGNvZGU6ICdBTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjg3JyxcclxuICAgIGNvZGU6ICdOQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY0JyxcclxuICAgIGNvZGU6ICdOWicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmljYXJhZ3VhJyxcclxuICAgIGRpYWxfY29kZTogJys1MDUnLFxyXG4gICAgY29kZTogJ05JJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOaWdlcicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI3JyxcclxuICAgIGNvZGU6ICdORScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjM0JyxcclxuICAgIGNvZGU6ICdORycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTml1ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgzJyxcclxuICAgIGNvZGU6ICdOVScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3MicsXHJcbiAgICBjb2RlOiAnTkYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTY3MCcsXHJcbiAgICBjb2RlOiAnTVAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ05vcndheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ05PJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdPbWFuJyxcclxuICAgIGRpYWxfY29kZTogJys5NjgnLFxyXG4gICAgY29kZTogJ09NJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTInLFxyXG4gICAgY29kZTogJ1BLJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjgwJyxcclxuICAgIGNvZGU6ICdQVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTcwJyxcclxuICAgIGNvZGU6ICdQUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGFuYW1hJyxcclxuICAgIGRpYWxfY29kZTogJys1MDcnLFxyXG4gICAgY29kZTogJ1BBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgIGRpYWxfY29kZTogJys2NzUnLFxyXG4gICAgY29kZTogJ1BHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk1JyxcclxuICAgIGNvZGU6ICdQWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUGVydScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTEnLFxyXG4gICAgY29kZTogJ1BFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjMnLFxyXG4gICAgY29kZTogJ1BIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQaXRjYWlybicsXHJcbiAgICBkaWFsX2NvZGU6ICcrODcyJyxcclxuICAgIGNvZGU6ICdQTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUG9sYW5kJyxcclxuICAgIGRpYWxfY29kZTogJys0OCcsXHJcbiAgICBjb2RlOiAnUEwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BvcnR1Z2FsJyxcclxuICAgIGRpYWxfY29kZTogJyszNTEnLFxyXG4gICAgY29kZTogJ1BUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTkzOScsXHJcbiAgICBjb2RlOiAnUFInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1FhdGFyJyxcclxuICAgIGRpYWxfY29kZTogJys5NzQnLFxyXG4gICAgY29kZTogJ1FBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb21hbmlhJyxcclxuICAgIGRpYWxfY29kZTogJys0MCcsXHJcbiAgICBjb2RlOiAnUk8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J1c3NpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNycsXHJcbiAgICBjb2RlOiAnUlUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUwJyxcclxuICAgIGNvZGU6ICdSVycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV1bmlvbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYyJyxcclxuICAgIGNvZGU6ICdSRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgQmFydGhlbGVteScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTkwJyxcclxuICAgIGNvZGU6ICdCTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gRGEgQ3VuaGEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI5MCcsXHJcbiAgICBjb2RlOiAnU0gnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTg2OScsXHJcbiAgICBjb2RlOiAnS04nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhaW50IEx1Y2lhJyxcclxuICAgIGRpYWxfY29kZTogJysxNzU4JyxcclxuICAgIGNvZGU6ICdMQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcclxuICAgIGRpYWxfY29kZTogJys1OTAnLFxyXG4gICAgY29kZTogJ01GJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAgIGRpYWxfY29kZTogJys1MDgnLFxyXG4gICAgY29kZTogJ1BNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTc4NCcsXHJcbiAgICBjb2RlOiAnVkMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhbW9hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODUnLFxyXG4gICAgY29kZTogJ1dTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW4gTWFyaW5vJyxcclxuICAgIGRpYWxfY29kZTogJyszNzgnLFxyXG4gICAgY29kZTogJ1NNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzOScsXHJcbiAgICBjb2RlOiAnU1QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY2JyxcclxuICAgIGNvZGU6ICdTQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VuZWdhbCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjIxJyxcclxuICAgIGNvZGU6ICdTTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgIGRpYWxfY29kZTogJyszODEnLFxyXG4gICAgY29kZTogJ1JTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcclxuICAgIGRpYWxfY29kZTogJysyNDgnLFxyXG4gICAgY29kZTogJ1NDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTaWVycmEgTGVvbmUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzIzMicsXHJcbiAgICBjb2RlOiAnU0wnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjUnLFxyXG4gICAgY29kZTogJ1NHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTbG92YWtpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDIxJyxcclxuICAgIGNvZGU6ICdTSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2xvdmVuaWEnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM4NicsXHJcbiAgICBjb2RlOiAnU0knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjc3JyxcclxuICAgIGNvZGU6ICdTQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU29tYWxpYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjUyJyxcclxuICAgIGNvZGU6ICdTTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU291dGggQWZyaWNhJyxcclxuICAgIGRpYWxfY29kZTogJysyNycsXHJcbiAgICBjb2RlOiAnWkEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1NvdXRoIFN1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyMTEnLFxyXG4gICAgY29kZTogJ1NTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTAwJyxcclxuICAgIGNvZGU6ICdHUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzM0JyxcclxuICAgIGNvZGU6ICdFUycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3JpIExhbmthJyxcclxuICAgIGRpYWxfY29kZTogJys5NCcsXHJcbiAgICBjb2RlOiAnTEsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgIGRpYWxfY29kZTogJysyNDknLFxyXG4gICAgY29kZTogJ1NEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdXJpbmFtZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNTk3JyxcclxuICAgIGNvZGU6ICdTUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDcnLFxyXG4gICAgY29kZTogJ1NKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2F6aWxhbmQnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzI2OCcsXHJcbiAgICBjb2RlOiAnU1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N3ZWRlbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDYnLFxyXG4gICAgY29kZTogJ1NFJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNDEnLFxyXG4gICAgY29kZTogJ0NIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTYzJyxcclxuICAgIGNvZGU6ICdTWScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVGFpd2FuJyxcclxuICAgIGRpYWxfY29kZTogJys4ODYnLFxyXG4gICAgY29kZTogJ1RXJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTInLFxyXG4gICAgY29kZTogJ1RKJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNTUnLFxyXG4gICAgY29kZTogJ1RaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaGFpbGFuZCcsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjYnLFxyXG4gICAgY29kZTogJ1RIJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjcwJyxcclxuICAgIGNvZGU6ICdUTCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9nbycsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjI4JyxcclxuICAgIGNvZGU6ICdURycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9rZWxhdScsXHJcbiAgICBkaWFsX2NvZGU6ICcrNjkwJyxcclxuICAgIGNvZGU6ICdUSycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVG9uZ2EnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY3NicsXHJcbiAgICBjb2RlOiAnVE8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE4NjgnLFxyXG4gICAgY29kZTogJ1RUJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5pc2lhJyxcclxuICAgIGRpYWxfY29kZTogJysyMTYnLFxyXG4gICAgY29kZTogJ1ROJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrZXknLFxyXG4gICAgZGlhbF9jb2RlOiAnKzkwJyxcclxuICAgIGNvZGU6ICdUUicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTMnLFxyXG4gICAgY29kZTogJ1RNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzE2NDknLFxyXG4gICAgY29kZTogJ1RDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdXZhbHUnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzY4OCcsXHJcbiAgICBjb2RlOiAnVFYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjU2JyxcclxuICAgIGNvZGU6ICdVRycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVWtyYWluZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMzgwJyxcclxuICAgIGNvZGU6ICdVQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzk3MScsXHJcbiAgICBjb2RlOiAnQUUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgIGRpYWxfY29kZTogJys0NCcsXHJcbiAgICBjb2RlOiAnR0InLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEnLFxyXG4gICAgY29kZTogJ1VTJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVcnVndWF5JyxcclxuICAgIGRpYWxfY29kZTogJys1OTgnLFxyXG4gICAgY29kZTogJ1VZJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdVemJla2lzdGFuJyxcclxuICAgIGRpYWxfY29kZTogJys5OTgnLFxyXG4gICAgY29kZTogJ1VaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgIGRpYWxfY29kZTogJys2NzgnLFxyXG4gICAgY29kZTogJ1ZVJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YgVmVuZXp1ZWxhJyxcclxuICAgIGRpYWxfY29kZTogJys1OCcsXHJcbiAgICBjb2RlOiAnVkUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgZGlhbF9jb2RlOiAnKzg0JyxcclxuICAgIGNvZGU6ICdWTicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVmlyZ2luIElzbGFuZHMsIEJyaXRpc2gnLFxyXG4gICAgZGlhbF9jb2RlOiAnKzEyODQnLFxyXG4gICAgY29kZTogJ1ZHJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWaXJnaW4gSXNsYW5kcywgVS5TLicsXHJcbiAgICBkaWFsX2NvZGU6ICcrMTM0MCcsXHJcbiAgICBjb2RlOiAnVkknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcclxuICAgIGRpYWxfY29kZTogJys2ODEnLFxyXG4gICAgY29kZTogJ1dGJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICBkaWFsX2NvZGU6ICcrOTY3JyxcclxuICAgIGNvZGU6ICdZRScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnWmFtYmlhJyxcclxuICAgIGRpYWxfY29kZTogJysyNjAnLFxyXG4gICAgY29kZTogJ1pNJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdaaW1iYWJ3ZScsXHJcbiAgICBkaWFsX2NvZGU6ICcrMjYzJyxcclxuICAgIGNvZGU6ICdaVycsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBjb3VudHJ5Q29kZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU01TSW5wdXQgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgZmluZEl0ZW0sIGZvcm1hdFBob25lTnVtYmVyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5jb25zdCBhY2MgPSBidG9hKGAke2Vudmlyb25tZW50LmFrdXVrPy5pZH06JHtlbnZpcm9ubWVudC5ha3V1az8ua2V5fWApO1xyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LmFrdXVrPy51cmwsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YWNjfWAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQWt1dWsge1xyXG4gIHN0YXRpYyBhc3luYyBzZW5kU01TKHBheWxvYWQ6IFNNU0lucHV0KSB7XHJcbiAgICBjb25zdCB1dWlkID0gcmFuZG9tVVVJRCgpO1xyXG5cclxuICAgIC8vIEZpbmQgY291bnRyeSBjb2RlXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZmluZEl0ZW0oY291bnRyeUNvZGVzLCBwYXlsb2FkLmNvdW50cnksICdjb2RlJyk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHBob25lIG51bWJlclxyXG4gICAgY29uc3QgbnVtYmVyID0gZm9ybWF0UGhvbmVOdW1iZXIocGF5bG9hZC5udW1iZXIsIGNvdW50cnk/LmRpYWxfY29kZSEpO1xyXG5cclxuICAgIGlmICghbnVtYmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9tZXNzYWdpbmcvc21zJywge1xyXG4gICAgICBtZXNzYWdlOiBwYXlsb2FkLm1lc3NhZ2UsXHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgc2VuZGVyOiBlbnZpcm9ubWVudC5ha3V1ay5zZW5kZXIsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgY291bnRyeUNvZGU6IGNvdW50cnk/LmRpYWxfY29kZSxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHBheWxvYWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBhbW91bnQsIGJpbGxpbmcsIGNvdW50cnk6IGNvZGUsIG51bWJlcjogcGhvbmUgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgY29uc3QgdXVpZCA9IHJhbmRvbVVVSUQoKTtcclxuXHJcbiAgICAvLyBGaW5kIGNvdW50cnkgY29kZVxyXG4gICAgY29uc3QgY291bnRyeSA9IGZpbmRJdGVtKGNvdW50cnlDb2RlcywgY29kZSwgJ2NvZGUnKTtcclxuXHJcbiAgICAvLyBGb3JtYXQgcGhvbmUgbnVtYmVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBmb3JtYXRQaG9uZU51bWJlcihwaG9uZSwgY291bnRyeT8uZGlhbF9jb2RlISk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBtcmNSZWZlcmVuY2U6IHV1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlOiBOdW1iZXIoY291bnRyeT8uZGlhbF9jb2RlLnNwbGl0KCcrJylbMV0pICsgJycsXHJcbiAgICAgIG51bWJlcjogbnVtYmVyICsgJycsXHJcbiAgICAgIGJpbGxpbmc6IGJpbGxpbmcsXHJcbiAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMikgKyAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy9wYXltZW50L2FpcnRpbWUnLCB7XHJcbiAgICAgIG1yY1JlZmVyZW5jZTogdXVpZCxcclxuICAgICAgY291bnRyeUNvZGU6IE51bWJlcihjb3VudHJ5Py5kaWFsX2NvZGUuc3BsaXQoJysnKVsxXSkgKyAnJyxcclxuICAgICAgbnVtYmVyOiBudW1iZXIgKyAnJyxcclxuICAgICAgYmlsbGluZzogYmlsbGluZyxcclxuICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCkudG9GaXhlZCgyKSArICcnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJ0AvZXh0ZW5zaW9ucy9tYWlsLXNlcnZpY2Uvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsZURpck5hbWUobWV0YTogYW55KSB7XHJcbiAgY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgobWV0YS51cmwpO1xyXG5cclxuICBjb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5cclxuICByZXR1cm4geyBfX2Rpcm5hbWUsIF9fZmlsZW5hbWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUVycm9yUGFyc2VyID0gKGVycjogeyBtZXNzYWdlOiBzdHJpbmc7IHN0YXR1czogbnVtYmVyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZS5pbmNsdWRlcygncHJpc21hJylcclxuICAgICAgPyAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG4gICAgICA6IChlcnI/Lm1lc3NhZ2UgPz8gJ0ludGVybmFsIFNlcnZlciBFcnJvcicpLFxyXG4gICAgc3RhdHVzOiBlcnI/LnN0YXR1cyA/PyA1MDAsXHJcbiAgICBzdWNjZXNzOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKHNpemU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKHNpemUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKCdTaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcclxuICBjb25zdCBtaW4gPSBNYXRoLnBvdygxMCwgc2l6ZSAtIDEpO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgucG93KDEwLCBzaXplKSAtIDE7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rlc3RpbmdCVk4oYnZuOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKFxyXG4gICAgWydERVZFTE9QJywgJ0xPQ0FMJ10uaW5jbHVkZXMoZW52aXJvbm1lbnQuY29udGV4dCkgJiZcclxuICAgIFsnMjIyMjIyMjIyMjInLCAnOTU4ODgxNjg5MjQnXS5pbmNsdWRlcyhidm4pXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIHJldHVybiBbJ0RFVkVMT1AnLCAnTE9DQUwnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFFVRVVFX05BTUVTID0ge1xyXG4gIFRSQU5TRkVSOiAndHJhbnNmZXInLFxyXG4gIEFJUlRJTUU6ICdhaXJ0aW1lJyxcclxuICBOT1RJRklDQVRJT046ICdub3RpZmljYXRpb24nLFxyXG4gIElOVEVSTkFMX1RSQU5TRkVSOiAnaW50ZXJuYWxfdHJhbnNmZXInLFxyXG4gIENSRUFURVdBTExFVDogJ2NyZWF0ZV93YWxsZXQnLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAodXNlcjogVXNlciwgdHlwZSA9ICdQSE9ORScpIHtcclxuICBjb25zdCBjb2RlID0gb3RwR2VuZXJhdG9yLmdlbmVyYXRlKDYsIHtcclxuICAgIGxvd2VyQ2FzZUFscGhhYmV0czogZmFsc2UsXHJcbiAgICB1cHBlckNhc2VBbHBoYWJldHM6IGZhbHNlLFxyXG4gICAgc3BlY2lhbENoYXJzOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICByZWZyZXNoQ29kZTogY29kZSxcclxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICB0eXBlOiB0eXBlID09PSAnUEhPTkUnID8gJ1BIT05FJyA6ICdFTUFJTCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXZlcmlmaWNhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdPVFAgbm90IHNhdmVkJyk7XHJcblxyXG4gIC8vIFNlbmQgU01TXHJcbiAgaWYgKHVzZXIucGhvbmUgJiYgdHlwZSA9PT0gJ1BIT05FJylcclxuICAgIEFrdXVrLnNlbmRTTVMoe1xyXG4gICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIG51bWJlcjogdXNlci5waG9uZSxcclxuICAgICAgbWVzc2FnZTogYFlvdXIgV2VQYXkgdmVyaWZpY2F0aW9uIGNvZGUgaXM6ICR7Y29kZX0uIFRoYW5rcyB5b3UgZm9yIGNob29zaW5nIFdlUGF5YCxcclxuICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYWlsICYmIHR5cGUgPT09ICdFTUFJTCcpXHJcbiAgICBzZW5kRW1haWwoe1xyXG4gICAgICB0bzogdXNlcj8uZW1haWwhLFxyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHRvX25hbWU6IHVzZXIubmFtZSxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6ICd2ZXJpZmljYXRpb24nLFxyXG4gICAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBob25lTnVtYmVyKG51bWJlcjogc3RyaW5nIHwgbnVtYmVyLCBkYWlsQ29kZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLmxlbmd0aCA+IDExXHJcbiAgICA/IG51bWJlclxyXG4gICAgOiBOdW1iZXIoYCR7ZGFpbENvZGUuc3BsaXQoJysnKVsxXX0ke251bWJlci50b1N0cmluZygpLnN1YnN0cmluZygxKX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBSUxZX0xJTUlUUyA9IHtcclxuICBUSUVSXzE6IDIwMF8wMDBuLFxyXG4gIFRJRVJfMjogMV8wMDBfMDAwbixcclxuICBUSUVSXzM6IDVfMDAwXzAwMG4sXHJcbiAgVElFUl80OiAxMDBfMDAwXzAwMF8wMDBuLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFueSB2YWxpZCBkYXRlIHN0cmluZywgdGltZXN0YW1wLCBvciBEYXRlIG9iamVjdFxyXG4gKiB0byBhIHN0YW5kYXJkIElTTyA4NjAxIGRhdGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IERhdGV9IGlucHV0IC0gVGhlIGRhdGUgaW5wdXQgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9IFRoZSBJU08gZGF0ZSBzdHJpbmcgb3IgbnVsbCBpZiBpbnZhbGlkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPRGF0ZShpbnB1dDogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSk6IHN0cmluZyB8IG51bGwge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBIYW5kbGUgZW1wdHkgb3IgdW5kZWZpbmVkIGlucHV0XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaW5wdXQpO1xyXG5cclxuICAgIC8vIENoZWNrIHZhbGlkaXR5XHJcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGRhdGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gSVNPIHN0cmluZ1xyXG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KGFtb3VudDogYW55KSB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tTkcnLCB7XHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgfSkuZm9ybWF0KGFtb3VudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUgfCBhbnkpIHtcclxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gbW9udGhzIGFyZSAwLWluZGV4ZWRcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICBob3VycyA9IGhvdXJzICUgMTIgfHwgMTI7IC8vIGNvbnZlcnQgMCDihpIgMTIgZm9yIDEyIEFNXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtKGRhdGE6IEFycmF5PGFueT4sIGl0ZW06IHN0cmluZywgZmllbGQ6IHN0cmluZykge1xyXG4gIHJldHVybiBkYXRhLmZpbmQoXHJcbiAgICAoZCkgPT4gZD8uW2ZpZWxkXT8udG9Mb3dlckNhc2UoKT8udHJpbSgpID09PSBpdGVtPy50b0xvd2VyQ2FzZSgpPy50cmltKCksXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFjcXVpcmUgcm93IGxvY2tzIGZvciB3YWxsZXRzIGluIGNhbm9uaWNhbCBvcmRlciBpbnNpZGUgYSB0cmFuc2FjdGlvbi5cclxuICogUmV0dXJucyB3YWxsZXQgcm93cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2NrV2FsbGV0c1R4KHR4OiBhbnksIHdhbGxldElkczogc3RyaW5nW10pIHtcclxuICAvLyBlbnN1cmUgY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbLi4ud2FsbGV0SWRzXS5zb3J0KCk7XHJcbiAgLy8gYnVpbGQgcGFyYW1ldGVyaXplZCBxdWVyeVxyXG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IG9yZGVyZWQubWFwKChfLCBpKSA9PiBgJCR7aSArIDF9YCkuam9pbignLCcpO1xyXG4gIC8vIE5PVEU6IHdlIGFzc3VtZSB0YWJsZSBuYW1lIFwiV2FsbGV0XCIgYW5kIGNvbHVtbiBcImlkXCJcclxuICBjb25zdCByb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgYFNFTEVDVCAqIEZST00gXCJXYWxsZXRcIiBXSEVSRSBpZCBJTiAoJHtwbGFjZWhvbGRlcnN9KSBGT1IgVVBEQVRFYCxcclxuICAgIC4uLm9yZGVyZWQsXHJcbiAgKTtcclxuICAvLyByZXR1cm4gcm93cyBhcy1pc1xyXG4gIHJldHVybiByb3dzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5Lb2JvKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIEJpZ0ludChNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW1vdW50SW5OYWlyYShhbW91bnQ6IGFueSkge1xyXG4gIHJldHVybiBOdW1iZXIoYW1vdW50KSAvIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRGFpbHlMaW1pdChcclxuICBmcm9tV2FsbGV0OiBXYWxsZXQsXHJcbiAgZnJvbVVzZXI6IFVzZXIsXHJcbiAgYW10OiBiaWdpbnQsXHJcbikge1xyXG4gIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5sZWRnZXIuYWdncmVnYXRlKHtcclxuICAgIF9zdW06IHsgY2hhbmdlOiB0cnVlIH0sXHJcbiAgICB3aGVyZToge1xyXG4gICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgY3JlYXRlZEF0OiB7IGd0ZTogdG9kYXlTdGFydCB9LFxyXG4gICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYW1vdW50ID0gYW1vdW50SW5OYWlyYShhbXQpO1xyXG4gIGNvbnN0IHRyYW5zZmVycmVkID0gYW1vdW50SW5OYWlyYShcclxuICAgIHJlc3VsdC5fc3VtLmNoYW5nZSA/IC1yZXN1bHQuX3N1bS5jaGFuZ2UgOiAwbixcclxuICApO1xyXG5cclxuICBjb25zdCB0aWVyID0gZnJvbVVzZXIuY3VycmVudFRpZXIgYXMga2V5b2YgdHlwZW9mIERBSUxZX0xJTUlUUztcclxuICBjb25zdCBkYWlseUxpbWl0ID0gREFJTFlfTElNSVRTW3RpZXJdIHx8IERBSUxZX0xJTUlUUy5USUVSXzE7XHJcblxyXG4gIHJldHVybiBCaWdJbnQodHJhbnNmZXJyZWQgKyBhbW91bnQpID4gZGFpbHlMaW1pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcFRleHQodGV4dD86IHN0cmluZywgbWF4ID0gMzIpIHtcclxuICBpZiAoIXRleHQpIHJldHVybjtcclxuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcclxuICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XHJcbiAgbGV0IGN1cnJlbnQgPSAnJztcclxuXHJcbiAgZm9yIChjb25zdCB3IG9mIHdvcmRzKSB7XHJcbiAgICBpZiAoKGN1cnJlbnQgKyAnICcgKyB3KS50cmltKCkubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIGxpbmVzLnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICBjdXJyZW50ID0gdztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnQgKz0gJyAnICsgdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50LnRyaW0oKS5sZW5ndGggPiAwKSBsaW5lcy5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5EZXNjKGRlc2M/OiBzdHJpbmcsIG1heCA9IDMwKSB7XHJcbiAgaWYgKCFkZXNjKSByZXR1cm4gZGVzYztcclxuICBpZiAoZGVzYy5sZW5ndGggPD0gbWF4KSByZXR1cm4gZGVzYztcclxuICByZXR1cm4gZGVzYy5zbGljZSgwLCBtYXggLSAzKSArICcuLi4nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gIGFjY291bnQsXHJcbiAgYW1vdW50LFxyXG4gIGRlc2MsXHJcbiAgY3VycmVuY3ksXHJcbiAgYmFsYW5jZSxcclxuICBkYXRlLFxyXG4gIHR5cGUsXHJcbn06IHtcclxuICBhY2NvdW50OiBzdHJpbmc7XHJcbiAgYW1vdW50OiBiaWdpbnQ7XHJcbiAgZGVzYz86IHN0cmluZztcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGJhbGFuY2U6IGJpZ2ludDtcclxufSkge1xyXG4gIHJldHVybiBgXHJcbkFjY3Q6ICoqKioqKiR7YWNjb3VudC5zbGljZSgtNCl9XHJcbkFtdDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYW1vdW50KSl9ICR7dHlwZX1cclxuRGVzYzogJHt3cmFwVGV4dChzaG9ydGVuRGVzYyhkZXNjKSl9XHJcbkF2YWlsIEJhbDogJHtjdXJyZW5jeX0ke2Zvcm1hdEN1cnJlbmN5KGFtb3VudEluTmFpcmEoYmFsYW5jZSkpfVxyXG5EYXRlOiAke2Zvcm1hdERhdGUoZGF0ZSl9XHJcblRoYW5rcyBmb3IgdXNpbmcgV2VQYXlgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVc2VyU2FmZUlkKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgaW5wdXQgPSBgJHtEYXRlLm5vdygpIC0gTWF0aC5yYW5kb20oKX1gO1xyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGlucHV0KS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiBoYXNoLnN1YnN0cmluZygwLCA4KS50b1VwcGVyQ2FzZSgpO1xyXG59XHJcbiIsIi8vIHNyYy91dGlscy9oYXNoLnRzXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBhcmdvbjIgZnJvbSAnYXJnb24yJztcclxuaW1wb3J0IHsgaXNUZXN0aW5nQlZOIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBsYWluOiBzdHJpbmcpIHtcclxuICAvLyBkZWZhdWx0IG9wdGlvbnMgZm9yIGFyZ29uMiBhcmUgZmluZTsgdHVuZSBpbiBwcm9kIGlmIG5lZWRlZFxyXG4gIHJldHVybiBiY3J5cHQuaGFzaChwbGFpbiwgMTApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQoaGFzaDogc3RyaW5nLCBwbGFpbjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKGhhc2gsIHBsYWluKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hUb2tlbih0b2tlbjogc3RyaW5nKSB7XHJcbiAgaWYgKCF0b2tlbikgcmV0dXJuO1xyXG4gIGlmIChpc1Rlc3RpbmdCVk4odG9rZW4pKSB7XHJcbiAgICByZXR1cm4gY3J5cHRvXHJcbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxyXG4gICAgICAudXBkYXRlKHRva2VuICsgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zbGljZSg2KSlcclxuICAgICAgLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHRva2VuKS5kaWdlc3QoJ2hleCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBpbihwaW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi5oYXNoKHBpbiwge1xyXG4gICAgdHlwZTogYXJnb24yLmFyZ29uMmlkLFxyXG4gICAgbWVtb3J5Q29zdDogMiAqKiAxNiwgLy8gNjQgTUJcclxuICAgIHRpbWVDb3N0OiAzLFxyXG4gICAgcGFyYWxsZWxpc206IDEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQaW4oXHJcbiAgaGFzaGVkUGluOiBzdHJpbmcsXHJcbiAgaW5wdXRQaW46IHN0cmluZyxcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFyZ29uMi52ZXJpZnkoaGFzaGVkUGluLCBpbnB1dFBpbik7XHJcbn1cclxuIiwiLy8gc3JjL3V0aWxzL2p3dC50c1xyXG5pbXBvcnQgand0LCB7IEp3dFBheWxvYWQsIFNpZ25PcHRpb25zIH0gZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9jb25maWcvZW52JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEp3dFBheWxvYWQgZXh0ZW5kcyBKd3RQYXlsb2FkIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbkFjY2Vzc1Rva2VuKHBheWxvYWQ6IG9iamVjdCkge1xyXG4gIHJldHVybiBqd3Quc2lnbihcclxuICAgIHBheWxvYWQsXHJcbiAgICBlbnZpcm9ubWVudC5qd3Quc2VjcmV0IGFzIHN0cmluZyxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3Q/LmV4cGlyZXNJbn1oYCxcclxuICAgIH0gYXMgU2lnbk9wdGlvbnMsXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiBBdXRoSnd0UGF5bG9hZCB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIGVudmlyb25tZW50Lmp3dC5zZWNyZXQpIGFzIEF1dGhKd3RQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblJlZnJlc2hUb2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICAvLyBsb25nIGxpdmVkLCBidXQgd2Ugc3RpbGwgc3RvcmUgYSBoYXNoZWQgY29weSBzZXJ2ZXItc2lkZVxyXG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBlbnZpcm9ubWVudC5qd3QucmVmcmVzaFNlY3JldCwge1xyXG4gICAgZXhwaXJlc0luOiBgJHtlbnZpcm9ubWVudC5qd3QucmVmcmVzaERheXN9ZGAsXHJcbiAgfSBhcyBTaWduT3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlSZWZyZXNoVG9rZW4odG9rZW46IHN0cmluZyk6IEF1dGhKd3RQYXlsb2FkIHtcclxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgZW52aXJvbm1lbnQuand0LnNlY3JldCkgYXMgQXV0aEp3dFBheWxvYWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IGhhc2hQYXNzd29yZCwgaGFzaFRva2VuLCB2ZXJpZnlQaW4gfSBmcm9tICcuLi8uLi91dGlscy9oYXNoJztcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9jb25maWcvZW52JztcclxuaW1wb3J0IHsgc2lnbkFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvand0JztcclxuaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgTG9naW4sIFJlZ2lzdGVyLCBSZXNldFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgQm90dGxlbmVjayBmcm9tICdib3R0bGVuZWNrJztcclxuaW1wb3J0IHsgc2VuZE9UUCwgZ2VuZXJhdGVVc2VyU2FmZUlkLCBhbW91bnRJbk5haXJhIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKGRhdGE6IFJlZ2lzdGVyKSB7XHJcbiAgY29uc3QgcGhvbmUgPSBkYXRhLnBob25lIHx8IGRhdGEuZXh0cmE/LnBob25lO1xyXG5cclxuICBpZiAoIXBob25lKSB7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXCJQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIiwgNDAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBwaG9uZSxcclxuICAgICAgYnZuOiBkYXRhLmJ2bixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChleGlzdGluZ1VzZXIgJiYgIWV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWVkKSB7XHJcbiAgICBhd2FpdCBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAoZXhpc3RpbmdVc2VyKSk7XHJcbiAgICByZXR1cm4gZXhpc3RpbmdVc2VyO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nVXNlciAmJiBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmllZCkge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiVXNlciBhbHJlYWR5IHJlZ2lzdGVyZWRcIiwgNDA5KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XHJcbiAgICAuLi5kYXRhLmV4dHJhLFxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJvbGUgPT09IFwiQUdFTlRcIikgcmVjb3JkLmFnZW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgaWYgKFtcIk1FUkNIQU5UXCIsIFwiSU5TVElUVVRJT05cIl0uaW5jbHVkZXMoZGF0YS5yb2xlKSkge1xyXG4gICAgcmVjb3JkLm1lcmNoYW50ID0geyBjcmVhdGU6IHt9IH07XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS5lbWFpbCkge1xyXG4gICAgcmVjb3JkLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuaXF1ZUlkID0gZ2VuZXJhdGVVc2VyU2FmZUlkKCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCB0eC51c2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBidm46IGRhdGEuYnZuLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIHVuaXF1ZUlEOiB1bmlxdWVJZCxcclxuICAgICAgICAuLi5yZWNvcmQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0eC5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiBjcmVhdGVkVXNlci5pZCxcclxuICAgICAgICBhY3Rpb246IFwiUkVHSVNURVJcIixcclxuICAgICAgICBpcDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVkVXNlcjtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQaW4ocGF5bG9hZDoge3Bob25lPzogc3RyaW5nOyBlbWFpbD86IHN0cmluZzsgfSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgT1I6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwaG9uZTogcGF5bG9hZD8ucGhvbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZD8uZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+IHNlbmRPVFAodXNlcikpO1xyXG5cclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdGT1JHT1RfUElOX0NPREUnIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckRldGFpbEJ5UGhvbmUocGF5bG9hZDogeyBwaG9uZT86IHN0cmluZzsgfSkge1xyXG4gIHRyeSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICAgICAgcGhvbmU6IHBheWxvYWQ/LnBob25lLCAgICAgICAgXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IC4uLnVzZXIgfTtcclxuICB9Y2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAyNScpIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RoaXMgYWNjb3VudCBkb2VzIG5vdCBleGlzdCcsIDQwNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJBY2NvdW50KHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGlmIChlcnJvci5jb2RlID09PSAnUDIwMjUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGRhdGE6IExvZ2luKSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGhvbmUsIHBpbiB9ID0gZGF0YTtcclxuXHJcbiAgaWYgKCFwaW4pIHRocm93IG5ldyBDdXN0b21FcnJvcignUElOIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuICBpZiAoIWVtYWlsICYmICFwaG9uZSlcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1haWwgb3IgcGhvbmUgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAvLyBGaW5kIHVzZXIgYnkgZW1haWwgb3IgcGhvbmVcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIE9SOiBbLi4uKGVtYWlsID8gW3sgZW1haWwgfV0gOiBbXSksIC4uLihwaG9uZSA/IFt7IHBob25lIH1dIDogW10pXSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7XHJcbiAgICAgIHdhbGxldHM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBjcmVkZW50aWFscycsIDQwMSk7XHJcblxyXG4gIGlmICghdXNlci5waW4pIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBoYXMgbm8gcGluIHNldCcsIDQwMCk7XHJcblxyXG4gIGNvbnN0IG9rID0gYXdhaXQgdmVyaWZ5UGluKHVzZXIucGluLCBwaW4pO1xyXG5cclxuICBpZiAoIW9rKSB7XHJcbiAgICAvLyBPcHRpb25hbDogaW5jcmVtZW50IGZhaWxlZCBsb2dpbiBhdHRlbXB0cyBoZXJlXHJcbiAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0ZBSUxFRF9MT0dJTicgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBjcmVkZW50aWFscycsIDQwMSk7XHJcbiAgfVxyXG5cclxuICAvLyBTdWNjZXNzZnVsIGxvZ2luIOKGkiBMb2cgaXRcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdMT0dJTicgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnVzZXIsXHJcbiAgICB3YWxsZXRzOiB1c2VyLndhbGxldHMubWFwKCh3KSA9PiAoe1xyXG4gICAgICAuLi53LFxyXG4gICAgICBhdmFpbGFibGVCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcuYXZhaWxhYmxlQmFsYW5jZSksXHJcbiAgICAgIGxlZGdlckJhbGFuY2U6IGFtb3VudEluTmFpcmEody5sZWRnZXJCYWxhbmNlKSxcclxuICAgICAgcmVzZXJ2ZWRCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcucmVzZXJ2ZWRCYWxhbmNlKSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5XaXRoRmluZ2VyKGRhdGE6IHsgZmluZ2VyUHJpbnQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBmaW5nZXJQcmludCB9ID0gZGF0YTtcclxuXHJcbiAgaWYgKCFmaW5nZXJQcmludCkge1xyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGaW5nZXIgaXMgcmVxdWlyZWQgb3IgaW52YWxpZCBmaW5nZXIgZGF0YScsIDQyMik7XHJcbiAgfVxyXG5cclxuICAvLyBGaW5kIHVzZXIgZGlyZWN0bHkgYnkgZmluZ2VycHJpbnRcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGZpbmdlclByaW50OiBmaW5nZXJQcmludCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBmaW5nZXJwcmludCcsIDQwMSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb2cgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gIGF3YWl0IHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VySWQ6IHVzZXIuaWQsIGFjdGlvbjogJ0xPR0lOJyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZvcmdvdFBhc3N3b3JkKGRhdGE6IHsgZW1haWw6IHN0cmluZzsgaXA/OiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWw6IGRhdGEuZW1haWwgfSB9KTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnRk9SR09UX1BBU1NXT1JEX0NPREUnLCBpcDogZGF0YS5pcCB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoZGF0YTogUmVzZXRQYXNzd29yZCkge1xyXG4gIGNvbnN0IHsgdG9rZW4sIG5ld1Bhc3N3b3JkLCBpcCB9ID0gZGF0YTtcclxuICBjb25zdCB2ZXJpZmljYXRpb25JbnRlbnQgPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyByZWZyZXNoQ29kZTogdG9rZW4gfSxcclxuICB9KTtcclxuICBpZiAoIXZlcmlmaWNhdGlvbkludGVudCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yIGV4cGlyZWQgdG9rZW4nKTtcclxuXHJcbiAgY29uc3QgbmV3SGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChuZXdQYXNzd29yZCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogdmVyaWZpY2F0aW9uSW50ZW50LnVzZXJJZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwYXNzd29yZDogbmV3SGFzaCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldm9rZSBhbGwgcmVmcmVzaCB0b2tlbnMgKHNhZmV0eSlcclxuICBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSB9KTtcclxuICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLmlkLCBhY3Rpb246ICdSRVNFVF9QQVNTV09SRCcsIGlwOiBpcCB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQaW4odXNlcjogVXNlciwgZGF0YTogeyBwaW46IHN0cmluZyB9KSB7XHJcbiAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBpbjogZGF0YS5waW4sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyByZXZva2UgYWxsIHJlZnJlc2ggdG9rZW5zIChzYWZldHkpXHJcbiAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5kZWxldGVNYW55KHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0gfSk7XHJcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnUkVTRVRfUElOJyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm90YXRlUmVmcmVzaFRva2VuKFxyXG4gIG9sZFRva2VuUmF3OiBzdHJpbmcsXHJcbiAgaXA/OiBzdHJpbmcsXHJcbiAgZGV2aWNlSW5mbz86IHN0cmluZyxcclxuKSB7XHJcbiAgY29uc3Qgb2xkSGFzaCA9IGhhc2hUb2tlbihvbGRUb2tlblJhdyk7XHJcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEucmVmcmVzaFRva2VuLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgdG9rZW5IYXNoOiBvbGRIYXNoIH0sXHJcbiAgfSk7XHJcbiAgaWYgKCFleGlzdGluZyB8fCBleGlzdGluZy5leHBpcmVzQXQgPCBuZXcgRGF0ZSgpKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlZnJlc2ggdG9rZW4nKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogZXhpc3RpbmcudXNlcklkIH0gfSk7XHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcblxyXG4gIGNvbnN0IG5ld1JhdyA9IG5hbm9pZCg2NCk7XHJcbiAgY29uc3QgbmV3SGFzaCA9IGhhc2hUb2tlbihuZXdSYXcpO1xyXG4gIGNvbnN0IG5ld0V4cGlyZXMgPSBhZGREYXlzKG5ldyBEYXRlKCksIE51bWJlcihlbnZpcm9ubWVudC5qd3QucmVmcmVzaERheXMpKTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihbXHJcbiAgICBwcmlzbWEucmVmcmVzaFRva2VuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9IH0pLFxyXG4gICAgcHJpc21hLnJlZnJlc2hUb2tlbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIHRva2VuSGFzaDogbmV3SGFzaCEsXHJcbiAgICAgICAgZXhwaXJlc0F0OiBuZXdFeHBpcmVzLFxyXG4gICAgICAgIGRldmljZUluZm8sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHByaXNtYS5hdWRpdExvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgYWN0aW9uOiAnUkVGUkVTSF9ST1RBVEVEJywgaXAgfSxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNpZ25BY2Nlc3NUb2tlbih7IHN1YjogdXNlci5pZCwgcm9sZTogdXNlci5yb2xlIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBhY2Nlc3NUb2tlbixcclxuICAgIHJlZnJlc2hUb2tlbjogbmV3UmF3LFxyXG4gICAgdXNlcjogeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIHJvbGU6IHVzZXIucm9sZSB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVmcmVzaFRva2VuUmF3Pzogc3RyaW5nLCBpcD86IHN0cmluZykge1xyXG4gIGlmICghcmVmcmVzaFRva2VuUmF3KSByZXR1cm47XHJcbiAgY29uc3QgaGFzaCA9IGhhc2hUb2tlbihyZWZyZXNoVG9rZW5SYXcpO1xyXG4gIGF3YWl0IHByaXNtYS5yZWZyZXNoVG9rZW4uZGVsZXRlTWFueSh7IHdoZXJlOiB7IHRva2VuSGFzaDogaGFzaCB9IH0pO1xyXG4gIC8vIGF1ZGl0IGxvZyBvcHRpb25hbFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZW5kT1RQKHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS50eXBlID09PSAnRU1BSUwnKSB7XHJcbiAgICBjb25zdCBfdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoX3VzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBleGlzdC4gQ2xpY2sgb24gZm9yZ290IHBpbicsIDQwOSk7XHJcblxyXG4gICAgbGltaXRlci5zY2hlZHVsZSgoKSA9PlxyXG4gICAgICBzZW5kT1RQKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IGRhdGE/Lm5hbWUgPz8gJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhLnR5cGUsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGltaXRlci5zY2hlZHVsZSgoKSA9PiBzZW5kT1RQKHVzZXIpKTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgYW1vdW50SW5OYWlyYSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1c2VyOiBhbnkpID0+IHtcclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBfdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgbWVyY2hhbnQ6IHRydWUsXHJcbiAgICAgIGFnZW50OiB0cnVlLFxyXG4gICAgICB3YWxsZXRzOiB0cnVlLFxyXG4gICAgICBhZGRyZXNzOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyAuLi5hdXRoVXNlciB9ID0gX3VzZXI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hdXRoVXNlcixcclxuICAgIHdhbGxldHM6IGF1dGhVc2VyLndhbGxldHMubWFwKCh3KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udyxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcuYXZhaWxhYmxlQmFsYW5jZSksXHJcbiAgICAgICAgcmVzZXJ2ZWRCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcucmVzZXJ2ZWRCYWxhbmNlKSxcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBhbW91bnRJbk5haXJhKHcubGVkZ2VyQmFsYW5jZSksXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZXMgPSBbJ0xPQ0FMJywgJ0RFVkVMT1AnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KVxyXG4gID8gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwZWQ4Yjk5Yi04MDk3LTRlNDktYmQ0Yy1mZjA0MTBjNTdkMjcnLFxyXG4gICAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdmNjcxZGE1Ny1lMjgxLTRiNDAtOTY1Zi1hOTZmNDIwNTQwNWUnLFxyXG4gICAgICAgIG5hbWU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNDZlNjhjZjYtZjM1NS00NTM2LWFlOTYtYWRmMjQ2ODI4MDlmJyxcclxuICAgICAgICBuYW1lOiAnQ29ycG9yYXRlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzkyZDUxNTgtYTRjNS00NDE4LTgzZjctYTgxM2QzOTg5YTg1JyxcclxuICAgICAgICBuYW1lOiAnSW5kaXZpZHVhbCcsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50cmllcyA9IFsnTE9DQUwnLCAnREVWRUxPUCddLmluY2x1ZGVzKGVudmlyb25tZW50LmNvbnRleHQpXHJcbiAgPyBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ1ZDZjLWE5YjQtNDUyZC04ODcyLTRhZGEzZDQ2YjUwNicsXHJcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnVVMnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdVU0EnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwOGRkNzc1NC00NTRkLTRhYjAtOGVkMS01ZWVkOTMwYWQwNjcnLFxyXG4gICAgICAgIG5hbWU6ICdHaGFuYScsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdHSCcsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ0dIQScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzA4ZGQ3NzY0LWUyYWItNDU1ZS04MzU5LTg0ODA5NTUwZjE3YycsXHJcbiAgICAgICAgbmFtZTogJ1RvZ28nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnVEcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdUR08nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcwOGRkNzgyYi0xMzRjLTRlN2MtODcyNi00NTI0YjhlNDFmYTgnLFxyXG4gICAgICAgIG5hbWU6ICdCcmF6aWwnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVHdvOiAnQlInLFxyXG4gICAgICAgIGNvdW50cnlDb2RlVGhyZWU6ICdCUkEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdjMTVhZDlhZS1jNGQ3LTQzNDItYjcwZi1kZTU1MDg2MjdlM2InLFxyXG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVR3bzogJ05HJyxcclxuICAgICAgICBjb3VudHJ5Q29kZVRocmVlOiAnTkdBJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnNGFhOWQ1OWUtMDRlNy00OTg0LTk3OTQtODVhNTU0ODlkNDMzJyxcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICAgICAgY291bnRyeUNvZGVUd286ICdORycsXHJcbiAgICAgICAgY291bnRyeUNvZGVUaHJlZTogJ05HQScsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJlbmNpZXMgPSBbJ0xPQ0FMJywgJ0RFVkVMT1AnXS5pbmNsdWRlcyhlbnZpcm9ubWVudC5jb250ZXh0KVxyXG4gID8gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ZWViNTRjOC0yNGQ3LTExZjAtYTgxOC02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdDYW5hZGlhbiBEb2xsYXJzNCcsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0Q0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnODI2NDdiMjktMTMwMi0xMWYwLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnUkFORCcsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnWkFSJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnOThkNjQ1ODMtZmI3ZS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFycycsXHJcbiAgICAgICAgc2hvcnROYW1lOiAnQ0FEJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYWY4YzkxNjgtZmRjNS0xMWVmLWE4YTktNjA0NWJkOTdiODFkJyxcclxuICAgICAgICBuYW1lOiAnQ2FuYWRpYW4gRG9sbGFyczMnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ0NEMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2M4ZmU0MTlmLWZiN2UtMTFlZi1hOGE5LTYwNDViZDk3YjgxZCcsXHJcbiAgICAgICAgbmFtZTogJ0NhbmFkaWFuIERvbGxhcnMyJyxcclxuICAgICAgICBzaG9ydE5hbWU6ICdDRDInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdkOThiYTVhYi1mYjc4LTExZWYtYThhOS02MDQ1YmQ5N2I4MWQnLFxyXG4gICAgICAgIG5hbWU6ICdUYW56YW5pYSBTaGlsbGluZ3MnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ1RaUycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2ZkNWU0NzRkLWJiNDItNGRiMS1hYjc0LWU4ZDJhMDEwNDdlOScsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEgTmFpcmEnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ05HTicsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzQ1ODUyZjBjLTg0ZmEtNDEwYy1iNjZjLTFmZmVjNTZlNWNkOCcsXHJcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEgTmFpcmEnLFxyXG4gICAgICAgIHNob3J0TmFtZTogJ05HTicsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmtzID0gW1xyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDaXRpIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFY29iYW5rIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRlbGl0eSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQmFuayBvZiBOaWdlcmlhJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQ2l0eSBNb251bWVudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RCYW5rIFBsYycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hlcml0YWdlJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSkFJWiBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2V5c3RvbmUgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0t1ZGEgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BheWNvbShPUEFZKScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Byb3ZpZHVzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSYW5kIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQb2xhcmlzIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuYmljSUJUQyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3RhbmRhcmQgQ2hhcnRlcmVkIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGVybGluZyBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU1VOVFJVU1QgQkFOSycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaW9uIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVbml0ZWQgQmFuayBmb3IgQWZyaWNhJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pdHkgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1dlbWEvQUxBVCcsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1pFTklUSCBCQU5LIFBMQycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZGRCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhbmdlcmluZSBNb25leScsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQyNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RhaiBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3BhcmtsZScsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hvcGUgUFNCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFycmFsZXggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFeW93bycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJzlQYXltZW50IFNlcnZpY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzEyMDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05vdmEgTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RpdGFuIFRydXN0IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb3ZlbmFudCBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYWdlIEZpbmFuY2lhbHMnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGb3J0aXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGU0RIIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc0MDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHbG9idXMgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAyNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZCTlFVRVNUIE1lcmNoYW50IEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNjAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBU08gU2F2aW5ncyAmIExvYW5zJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVuTW9uZXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuYmljIElCVEMgQGVhc2Ugd2FsbGV0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRnV0byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dyZWVud2ljaCBNZXJjaGFudCBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDYwMDA0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTGFwbyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05JUlNBTCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FCVSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FjY2lvbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NlbGx1bGFudCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Jvd2VuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnZVRyYW56YWN0JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWR2YW5zIExhIEZheWV0dGUgIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ2FyYm9uJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGFsbVBheSBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9uaWVwb2ludCcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQwNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0tPTkdBUEFZJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWJiZXkgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ludGVyc3dpdGNoIExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXlzdGFjayBQYXltZW50cyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWHByZXNzIFBheW1lbnRzJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQUNDRUxFUkVYIE5FVFdPUksnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcmNhIFBheW1lbnRzIENvbXBhbnkgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOSUJBREFOIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlbWl1bSBUcnVzdCBiYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW9NbyBQU0InLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTbWFydENhc2ggUGF5bWVudCBTZXJ2aWNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMjAwMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25leSBNYXN0ZXIgUFNCJyxcclxuICAgIGJhbmtDb2RlOiAnMTIwMDA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkFJUk1PTkVZIE1JQ1JPRklOQU5DRSBCQU5LIExURCcsXHJcbiAgICBiYW5rQ29kZTogJzA5MDU1MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NJR05BVFVSRSBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDM0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT1BUSU1VUyBCQU5LJyxcclxuICAgIGJhbmtDb2RlOiAnMDAwMDM2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW1wZXJzYW5kIE1pY3JvZmluYW5jZSBCYW5rIChCYW5rbHkpJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNTI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnV0FZQSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDU5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BhZ2EnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBTC1CYXJha2FoIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnM2xpbmUgQ2FyZCBNYW5hZ2VtZW50IExpbWl0ZWQnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBYm92ZSBPbmx5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzIFllbGxvJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWNjZXNzTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDEzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWRhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDgzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWRkb3NzZXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZGV5ZW1pIENvbGxlZ2UgU3RhZmYgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBZmVraGFmZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FHIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGVrdW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbGVydCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FsLUhheWF0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQWxsd29ya2VycyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEzMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FscGhhIEthcGl0YWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBbWFjIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQW1qdSBVbmlxdWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBTU1MIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FuY2hvcmFnZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0FwZWtzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXBwbGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdBcmlzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Fzc2V0TWF0cml4IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXNzZXRzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXN0cmFwb2xhcmlzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTcyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQXVjaGkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCYWluZXMgQ3JlZGl0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE4OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhbG9ndW4gRnVsYW5pIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQmFsb2d1biBHYW1iYXJpIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQkMgS2FzaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JJUEMgTWljcm9maW5hbmNlIEJhbmsgJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzM2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQm9jdHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCT0kgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb3JndSAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzOTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCb3NhayBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE3NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyZW50IE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdCcmV0aHJlbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyaWRnZXdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JyaWdodHdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NhcmV0YWtlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nhc2hDb25uZWN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzYwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ0VNQ1MgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDaGFuZ2FuIFJUUyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NoaWt1bSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NodWt3dW5lbnllIE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ5MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NJVCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NvYWxjYW1wIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjU0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29hc3RsaW5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS3JlZGkgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzgwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ29uc3VtZXIgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb250ZWMgR2xvYmFsIEluZm90ZWNoIExpbWl0ZWQgKE5vd05vdyknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb29wIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMjEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdDb3Jlc3RlcCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Nvcm9uYXRpb24gTWVyY2hhbnQgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA2MDAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0NyZWRpdCBBZnJpcXVlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnQ3Jvd2Rmb3JjZScsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0N5YmVyc3BhY2UgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Rhdm9kYW5pIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzkxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRGF5bGlnaHQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNjcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFYWdsZSBGbGlnaHQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFYXJ0aG9sZXVtJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnZS1CYXJjcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vjb2JhbmsgWHByZXNzIEFjY291bnQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFY29Nb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFZEZpbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Vrb25kbyBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwOTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFSy1SZWxpYWJsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VtZXJhbGRzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRW1waXJlIHRydXN0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VudGVycHJpc2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzAwMDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0VzYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFc28tRSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0V2YW5nZWwgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdFdmVyZ3JlZW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQVNUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOIE1vcnRnYWdlcyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkJOTW9iaWxlJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRkNNQiBFYXN5IEFjY291bnQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGQ1QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGZWRlcmFsIFBvbHl0ZWNobmljIE5la2VkZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGVyYWwgVW5pdmVyc2l0eSBEdXRzZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZGV0aCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ4MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZlZFBvbHkgTmFzYXJhd2EgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGRVQnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGRlMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRlbGl0eSBNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdGaWRmdW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmluYVRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlybXVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmlyc3QgQXBwbGUgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IEdlbmVyYXRpb24gTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IE9wdGlvbiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZpcnN0IFJveWFsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTY0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnRmx1dHRlcndhdmUgVGVjaG5vbG9neSBTb2x1dGlvbnMgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzExMDAwMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0ZvcnRpc01vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0Z1bGxyYW5nZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dhc2h1YSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dhdGV3YXkgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaWFudCBTdHJpZGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHaWdpbnlhIE1pY3JvZmluYW5jZSBiYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDExJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR2lyZWkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxODYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdHbG9yeSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3OCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dNQiBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dvb2QgTmVpZ2JvdXJzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR293YW5zIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTIyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW5CYW5rIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR3JlZW52aWxsZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0dyb29taW5nIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RJIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnR1RNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMDknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdIYWNrbWFuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGFnZ2FpIE1vcnRnYWdlIEJhbmsgTGltaXRlZCcsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hhc2FsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSGVhZHdheSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0hlZG9ubWFyaycsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0lCSUxFIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSWtlbm5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSWtpcmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbGlzYW4gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbW8gU3RhdGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbXBlcmlhbCBIb21lcyBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW5maW5pdHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbmZpbml0eSBUcnVzdCBNb3J0Z2FnZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDE2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW5ub3ZlY3RpdmVzIEtlc2gnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdJbnRlbGxpZmluJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSW50ZXJsYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzg2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSVJMIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQ5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnSXNhbGVveW8gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdKdWJpbGVlLUxpZmUgTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDAwMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0thZFBvbHkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLQ01CIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnS2Vnb3cnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdLb250YWdvcmEgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyOTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYWdvcyBCdWlsZGluZyBJbnZlc3RtZW50IENvbXBhbnknLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdMYXZlbmRlciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xlZ2VuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xpZ2h0IE1GQicsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0xvdm9udXMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNMzYnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWlubGFuZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMyMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01haW5zdHJlZXQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWludHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYWxhY2h5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWFyaXRpbWUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0MTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNYXlGYWlyIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzIxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWF5RnJlc2ggTW9ydGdhZ2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA3MDAxOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01lZ2FwcmFpc2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyODAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaWNyb2NyZWQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNaWRsYW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWludEZpbmV4IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTWt1ZGknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb2x1c2kgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNb25leSBUcnVzdCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEyOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ01vbmV5Qm94JyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTW95b2ZhZGUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NDgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNdXR1YWwgQmVuZWZpdHMgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxOTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNdXR1YWwgVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxNTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOYWdhcnRhIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmF2eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05kaW9yYWggTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXB0dW5lIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmV3IERhd24gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOZXcgR29sZGVuIFBhc3R1cmVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzc4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTmV3IFBydWRlbnRpYWwgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDEwOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ05JUCBWaXJ0dWFsIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICc5OTk5OTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdObmV3IFdvbWVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjgzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnTlBGIE1pY3JvRmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnNzAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOdXR1cmUgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdOd2FubmVnYWRpIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzk5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT2NoZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09oYWZpYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDExOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09rcG9nYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09sYWJpc2kgT25hYmFuam8gVW5pdmVyc2l0eSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI3MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09MT0ZJTiBPV0VOQSBNSUNST0ZJTkFOQ0UgQkFOSyAnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NjgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPbHVjaHVrd3UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0NzEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPbWl5ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI5NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ09tb2x1YWJpIHNhdmluZ3MgYW5kIGxvYW5zJyxcclxuICAgIGJhbmtDb2RlOiAnMDcwMDA3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnT3JhdWt3dSBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTA0OTInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdPc2NvdGVjaCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDM5NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Bhcmt3YXktUmVhZHlDYXNoJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGF0cmlja0dvbGQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMTcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQYXlBdHRpdHVkZSBPbmxpbmUnLFxyXG4gICAgYmFua0NvZGU6ICcxMTAwMDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZWNhblRydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTM3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGVubnl3aXNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUGVyc29uYWwgVHJ1c3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQZXRyYSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE2NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BpbGxhciBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI4OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1BsYXRpbnVtIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQb2x5dW53YW5hIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjk2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHJlZW1pbmVudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQxMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ByZXN0aWdlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjc0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUHVycGxlbW9uZXkgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdQeXJhbWlkIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNjU3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUXVpY2tmdW5kIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjYxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVmdWdlIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwNzAwMTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWdlbnQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMjUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSZWhvYm90aCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2MycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1JlbGlhbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUmVwaGlkaW0gTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMjInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdSaWNod2F5IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTMyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnUm95YWwgRXhjaGFuZ2UgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzgnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTYWZlIEhhdmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjg2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2FmZVRydXN0JyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMDA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2FnYW11IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2VlZCBDYXBpdGFsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU2VlZHZlc3QgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzNjknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdTdGFuZm9yZCBNaWNyb2ZpbmFuY2UgQmFrJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTYyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnU3RlbGxhcyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI2MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1N1bHNwYXAgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAzMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUYWdQYXknLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMjMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUQ0YgTUZCJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGVhc3lNb2JpbGUnLFxyXG4gICAgYmFua0NvZGU6ICcxMDAwMTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUaGluayBGaW5hbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJpZGVudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE0NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RydXN0IE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVHJ1c3Rib25kIE1vcnRnYWdlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAwMDUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdUcnVzdGZ1bmQgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdVICYgQyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMxNScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOQUFCIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMzMxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pYmVuIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMjY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pY2FsIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTkzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVW5pbWFpZCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ2NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VuaVV5byBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDMzOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1VOTiBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNTEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWYXMybmV0cyBMaW1pdGVkJyxcclxuICAgIGJhbmtDb2RlOiAnMTEwMDE1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVmVyZGFudCBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ3NCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1ZpcnR1ZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDE1MCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1Zpc2EgTWljcm9maW5hbmNlIEJhbmsnLFxyXG4gICAgYmFua0NvZGU6ICcwOTAxMzknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdWVE5ldHdvcmtzJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWHNsbmNlIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTI0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWUNUIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwNDY2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWWVzIE1pY3JvZmluYW5jZSBCYW5rJyxcclxuICAgIGJhbmtDb2RlOiAnMDkwMTQyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnWW9iZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDI1MicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1plbml0aCBFYXp5IFdhbGxldCcsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAzNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1plbml0aE1vYmlsZScsXHJcbiAgICBiYW5rQ29kZTogJzEwMDAxOCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1RpdGFuLVBheXN0YWNrJyxcclxuICAgIGJhbmtDb2RlOiAnMTAwMDM5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhbmtOYW1lOiAnVGhlIEFsdGVybmF0aXZlIEJhbmsoQWx0QmFuayknLFxyXG4gICAgYmFua0NvZGU6ICcwMDAwMzcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFua05hbWU6ICdNa29ibyBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDQ1NScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ1NvdXJjZSBNaWNyb2ZpbmFuY2UgQmFuaycsXHJcbiAgICBiYW5rQ29kZTogJzA5MDY0MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYW5rTmFtZTogJ0JhbmtJVCBNRkInLFxyXG4gICAgYmFua0NvZGU6ICcwOTAyNzUnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVBZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKCFhZGRyZXNzKSByZXR1cm4gJyc7XHJcblxyXG4gIGNvbnN0IGNsZWFuZWQgPSBhZGRyZXNzLnJlcGxhY2UoL1teYS16QS1aMC05XFxzLFxcLV0vZywgJycpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVkID0gY2xlYW5lZC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xyXG5cclxuICByZXR1cm4gbm9ybWFsaXplZDtcclxufVxyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYmFua3MsIGNvdW50cmllcywgY3VycmVuY2llcywgc2FuaXRpemVBZGRyZXNzLCB0eXBlcyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIGZpbmRJdGVtLFxyXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyLFxyXG4gIGlzVGVzdGluZ0JWTixcclxuICB1c2VFcnJvclBhcnNlcixcclxufSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBDb3Jwb3JhdGUsIFBheW1lbnQsIFBlcnNvbmFsLCBUcmFuc2ZlciwgaVdhbGxldCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5cclxuY29uc3QgQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBlbnZpcm9ubWVudC5lbWJlZGx5Py51cmwgPz8gJ2h0dHBzOi8vd2Fhcy1zdGFnaW5nLmVtYmVkbHkubmcvYXBpL3YxJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAneC1hcGkta2V5JzogZW52aXJvbm1lbnQuZW1iZWRseT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uSWQgPSBlbnZpcm9ubWVudC5lbWJlZGx5LmlkO1xyXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5jbHVkZXMoY29uZmlnLm1ldGhvZCB8fCAnJykpIHtcclxuICAgIGNvbmZpZy5kYXRhID0ge1xyXG4gICAgICAuLi5jb25maWcuZGF0YSxcclxuICAgICAgb3JnYW5pemF0aW9uSWQsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gY29uZmlnO1xyXG59KTtcclxuXHJcbmNvbnN0IFBheW91dENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDpcclxuICAgIGVudmlyb25tZW50LmVtYmVkbHk/LnBheW91dFVSTCA/PyAnaHR0cHM6Ly9wYXlvdXQtc3RhZ2luZy5lbWJlZGx5Lm5nL2FwaScsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ3gtYXBpLWtleSc6IGVudmlyb25tZW50LmVtYmVkbHk/LmtleSA/PyAnJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNsYXNzIEN1c3RvbWVyIHtcclxuICBzdGF0aWMgYXN5bmMgcGVyc29uYWwocGF5bG9hZDogUGVyc29uYWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyVHlwZSA9IGZpbmRJdGVtKHR5cGVzLCAnSW5kaXZpZHVhbCcsICduYW1lJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBmaW5kSXRlbShcclxuICAgICAgICBjb3VudHJpZXMsXHJcbiAgICAgICAgcGF5bG9hZC5jb3VudHJ5LFxyXG4gICAgICAgIHBheWxvYWQ/LmNvdW50cnk/Lmxlbmd0aCA+IDIgPyAnbmFtZScgOiAnY291bnRyeUNvZGVUd28nLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgeyBjb3VudHJ5OiBjLCBhZGRyZXNzLCAuLi5yZXN0IH0gPSBwYXlsb2FkO1xyXG4gICAgICBjb25zdCBzYW5pdGl6ZWRBZGRyZXNzID0gc2FuaXRpemVBZGRyZXNzKGFkZHJlc3MpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgIGN1c3RvbWVyVHlwZUlkOiBjdXN0b21lclR5cGU/LmlkLFxyXG4gICAgICAgIGNvdW50cnlJZDogY291bnRyeT8uaWQsXHJcbiAgICAgICAgYWRkcmVzczogc2FuaXRpemVkQWRkcmVzcyxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdFbWJlZGx5IEFQSSBDYWxsJyk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9hZGQnLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsICdFcnJvciBFbWJlZGx5IEFQSSBDYWxsJyk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICAgICAgcmVzPy5tZXNzYWdlID8/IHJlcy50aXRsZSxcclxuICAgICAgICAgIHJlcz8uc3RhdHVzQ29kZSA/PyByZXMuc3RhdHVzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQuZ2V0KCcvY3VzdG9tZXJzL2dldC9pZC8nICsgaWQpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBDdXN0b21lciBmcm9tIEVtYmVkbHknLCA0MDQpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjb3Jwb3JhdGUocGF5bG9hZDogQ29ycG9yYXRlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXN0b21lclR5cGVJZCA9IGZpbmRJdGVtKHR5cGVzLCBwYXlsb2FkLnR5cGUsICduYW1lJyk/LmlkO1xyXG4gICAgICBjb25zdCBlQ291bnRyeSA9IGZpbmRJdGVtKGNvdW50cmllcywgcGF5bG9hZC5jb3VudHJ5LCAnY291bnRyeUNvZGVUd28nKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY291bnRyeSwgdHlwZSwgLi4ucmVzdCB9ID0gcGF5bG9hZDtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgIGN1c3RvbWVyVHlwZUlkLFxyXG4gICAgICAgIGNvdW50cnlJZDogZUNvdW50cnkuaWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9hZGQnLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzY29kZSAhPT0gJzAwJylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzdWx0Lm1lc3NhZ2UsIDUwMCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgaWYgKHJlcyAmJiAhcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlcy5tZXNzYWdlLCByZXMuc3RhdHVzQ29kZSk7XHJcblxyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZT8ubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeUtZQyhwYXlsb2FkOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBidm4gPSBwYXlsb2FkLmJ2bjtcclxuICAgICAgaWYgKGlzVGVzdGluZ0JWTihidm4pKSBidm4gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigxMSk7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL2N1c3RvbWVycy9reWMvcHJlbWl1bS1reWM/dmVyaWZ5PTEnLCB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBidm4sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5jb2RlICE9PSAnMDAnKSByZXR1cm47XHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGVycm9yPy5yZXNwb25zZT8uZGF0YTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9ICdDdXN0b21lciBoYXMgYWxyZWFkeSBjb21wbGV0ZWQgQlZOIHZlcmlmaWNhdGlvbiEnO1xyXG5cclxuICAgICAgaWYgKHJlcyAmJiByZXMubWVzc2FnZS5pbmNsdWRlcyhtZXNzYWdlKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihyZXMubWVzc2FnZSwgcmVzLnN0YXR1c0NvZGUpO1xyXG5cclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGU/Lm1lc3NhZ2UsIGUuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIHN0YXRpYyBhc3luYyBCVk4oKSB7fVxyXG4gIHN0YXRpYyBhc3luYyBOSU4oKSB7fVxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlXZWJob29rKHJhd0JvZHk6IGFueSwgc2lnbmF0dXJlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IGhtYWMgPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgZW52aXJvbm1lbnQuZW1iZWRseS5rZXkpO1xyXG4gICAgaG1hYy51cGRhdGUocmF3Qm9keSwgJ3V0ZjgnKTtcclxuICAgIGNvbnN0IGNvbXB1dGVkU2lnbmF0dXJlID0gaG1hYy5kaWdlc3QoJ2hleCcpO1xyXG5cclxuICAgIHJldHVybiBjb21wdXRlZFNpZ25hdHVyZSAhPT0gc2lnbmF0dXJlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgV2FsbGV0IHtcclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKHdhbGxldDogaVdhbGxldCkge1xyXG4gICAgY29uc3QgY3VycmVuY3kgPSBjdXJyZW5jaWVzLmZpbmQoKGMpID0+IGMuc2hvcnROYW1lID09PSB3YWxsZXQuY3VycmVuY3kpO1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVuY3k6IGMsIHVzZXJJZCwgLi4ucmVzdCB9ID0gd2FsbGV0O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2xpZW50LnBvc3QoJy93YWxsZXRzL2FkZCcsIHtcclxuICAgICAgLi4ucmVzdCxcclxuICAgICAgY3VycmVuY3lJZDogY3VycmVuY3k/LmlkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcwMCcpIHJldHVybjtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy93YWxsZXRzL2dldC93YWxsZXQvJyArIGlkKTtcclxuICAgIGNvbnN0IHsgZGF0YTogcmVzdWx0IH0gPSByZXM7XHJcblxyXG4gICAgaWYgKHJlc3VsdD8uY29kZSAhPT0gJzAwJykgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRXYWxsZXRCeUFjY291bnQoYWNjb3VudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQuZ2V0KCcvd2FsbGV0cy9nZXQvYWNjb3VudC8nICsgYWNjb3VudCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG5cclxuICAgIGlmIChyZXN1bHQ/LmNvZGUgIT09ICcyMDAnKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBXYWxsZXQgZnJvbSBFbWJlZGx5JywgNDA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXIocGF5bG9hZDogVHJhbnNmZXIpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5wdXQoXHJcbiAgICAgICcvd2FsbGV0cy93YWxsZXQvdHJhbnNhY3Rpb24vdjIvd2FsbGV0LXRvLXdhbGxldCcsXHJcbiAgICAgIHBheWxvYWQsXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhbmsge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENsaWVudC5nZXQoJy9iYW5rcycpO1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICBpZiAocmVzdWx0Py5jb2RlICE9PSAnMjAwJylcclxuICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgV2FsbGV0IGZyb20gRW1iZWRseScsIDQwNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHRyYW5zZmVyKHBheWxvYWQ6IFBheW1lbnQpIHtcclxuICAgIGNvbnN0IHdlYmhvb2tVcmwgPSBlbnZpcm9ubWVudC5lbWJlZGx5LndlYmhvb2tVUkw7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25BY2NvdW50ID0gZW52aXJvbm1lbnQuZW1iZWRseS5vcmdBY2NvdW50O1xyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uTmFtZSA9IGVudmlyb25tZW50LmVtYmVkbHkub3JnTmFtZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMuZmluZCgoYykgPT4gYy5zaG9ydE5hbWUgPT0gcGF5bG9hZC5jdXJyZW5jeSk7XHJcbiAgICBjb25zdCBiYW5rID0gYmFua3MuZmluZCgoYikgPT5cclxuICAgICAgYi5iYW5rTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBheWxvYWQuZGVzdGluYXRpb25CYW5rLnRvTG93ZXJDYXNlKCkpLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWJhbmspIHRocm93IG5ldyBDdXN0b21FcnJvcignQmFuayBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVuY3k6IGMsIGRlc3RpbmF0aW9uQmFuaywgLi4ucmVzdCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQYXlvdXRDbGllbnQucG9zdCgnL2ludGVyLWJhbmstdHJhbnNmZXInLCB7XHJcbiAgICAgIC4uLnJlc3QsXHJcbiAgICAgIHdlYmhvb2tVcmwsXHJcbiAgICAgIGN1cnJlbmN5SWQ6IGN1cnJlbmN5Py5pZCxcclxuICAgICAgZGVzdGluYXRpb25CYW5rQ29kZTogYmFuaz8uYmFua0NvZGUsXHJcbiAgICAgIHNvdXJjZUFjY291bnROdW1iZXI6IG9yZ2FuaXphdGlvbkFjY291bnQgKyAnJyxcclxuICAgICAgc291cmNlQWNjb3VudE5hbWU6IG9yZ2FuaXphdGlvbk5hbWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3VsdCB9ID0gcmVzO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbWJlZGx5IHtcclxuICBzdGF0aWMgY3VzdG9tZXJzID0gQ3VzdG9tZXI7XHJcbiAgc3RhdGljIHZhbGlkYXRpb25zID0gVmFsaWRhdGlvbjtcclxuICBzdGF0aWMgd2FsbGV0cyA9IFdhbGxldDtcclxuICBzdGF0aWMgYmFua3MgPSBCYW5rO1xyXG59XHJcbiIsImltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IHsgVVZlcmlmeUJWTiB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbU51bWJlciwgaXNUZXN0aW5nQlZOLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGVudmlyb25tZW50LnlvdXZlcmlmeT8udXJsID8/ICdodHRwczovL2FwaS5zYW5kYm94LnlvdXZlcmlmeS5jbycsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgdG9rZW46IGVudmlyb25tZW50LnlvdXZlcmlmeT8ua2V5ID8/ICcnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFlvdXZlcmlmeSB7XHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeUJWTihkYXRhOiBVVmVyaWZ5QlZOKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAoaXNUZXN0aW5nQlZOKGRhdGEuaWQpKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICdCdW5jaCcsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJ0RpbGxvbicsXHJcbiAgICAgICAgICBkYXRlT2ZCaXJ0aDogJzEyLTEyLTE5OTQnLFxyXG4gICAgICAgICAgY291bnRyeTogJ05HJyxcclxuICAgICAgICAgIG1vYmlsZTogJzA4MCcgKyBnZW5lcmF0ZVJhbmRvbU51bWJlcig4KSxcclxuICAgICAgICAgIGdlbmRlcjogJ01hbGUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBDbGllbnQucG9zdCgnL3YyL2FwaS9pZGVudGl0eS9uZy9idm4nLCBkYXRhKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHQgfSA9IHJlcztcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YT8uc3RhdHVzPy5pbmNsdWRlcygnbm90X2ZvdW5kJykpXHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKHJlc3VsdC5kYXRhLnJlYXNvbiwgNDA0KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YSkgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVzID0gZXJyb3I/LnJlc3BvbnNlPy5kYXRhO1xyXG4gICAgICBpZiAocmVzICYmICFyZXMuc3VjY2VzcylcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IocmVzLm1lc3NhZ2UsIHJlcy5zdGF0dXNDb2RlKTtcclxuXHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihlPy5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5QWRkcmVzcyhwaG9uZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICdodHRwczovL2FkZHJlc3Muc3ZjLnlvdXZlcmlmeS5jby92Mi9hcGkvZGlnaXRhbC1hZGRyZXNzZXMvbG9va3VwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zZW50OiB0cnVlLFxyXG4gICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiBlbnZpcm9ubWVudC55b3V2ZXJpZnk/LmtleSA/PyAnJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsICdBRERSRVNTIFZlcnknKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8gfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmNvbnN0IFRYTkZFRSA9IHByb2Nlc3MuZW52LkVYVEVSTkFMX1BFUkNFTlQgPz8gMTU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1RyYW5zZmVyRXZlbnQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghZXZlbnQpIHRocm93IG5ldyBDdXN0b21FcnJvcignRXZlbnQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIGFtb3VudDogc3RyaW5nO1xyXG4gICAgY3VycmVuY3k6IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uQmFuazogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25BY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2VBY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICBzb3VyY2VBY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgcmVtYXJrczogc3RyaW5nO1xyXG4gICAgZnJvbVdhbGxldElkOiBzdHJpbmc7XHJcbiAgICBpbml0aWF0ZWRCeTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVtYmVkbHkuYmFua3MudHJhbnNmZXIoe1xyXG4gICAgICBhbW91bnQ6IE51bWJlcihwYXlsb2FkLmFtb3VudCksXHJcbiAgICAgIGN1cnJlbmN5OiBwYXlsb2FkLmN1cnJlbmN5LFxyXG4gICAgICBkZXN0aW5hdGlvbkJhbms6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgIHJlbWFya3M6IHBheWxvYWQucmVtYXJrcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzdWx0LnN1Y2NlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdUcmFuc2ZlciBub3Qgc3VjY2VlZGVkJywgNTAwKTtcclxuXHJcbiAgICBjb25zdCBhbW91bnQgPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXJSZWNvcmQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBZGQgdGhpcyB0cmFuc2FjdGlvbiB0byB0aGUgUHJvdmlkZXIgYWNjb3VudFxyXG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHR4LnByb3ZpZGVyLnVwc2VydCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgICAgIGNyZWF0ZTogeyBwcm92aWRlcjogJ0VNQkVETFknLCBiYWxhbmNlOiBhbW91bnQgfSxcclxuICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgIGJhbGFuY2U6IHsgaW5jcmVtZW50OiBhbW91bnQgfSxcclxuICAgICAgICAgIHRvdGFsOiB7IGluY3JlbWVudDogMSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4xIENyZWF0ZSBwZW5kaW5nIHRyYW5zZmVyXHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4yIERlYml0IHVzZXIgd2FsbGV0XHJcbiAgICAgIGNvbnN0IGZyb21XYWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQuZnJvbVdhbGxldElkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIWZyb21XYWxsZXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignRnJvbSB3YWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0JhbGFuY2UgPSBCaWdJbnQoZnJvbVdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSkgLSBhbW91bnQ7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdCYWxhbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRGViaXQgZm9yIEZFRXNcclxuICAgICAgY29uc3QgZmVlUmF0ZSA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcbiAgICAgIGNvbnN0IG5ld0JhbEFmdGVyRmVlID0gQmlnSW50KHdhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGZyb21XYWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QmFsQWZ0ZXJGZWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT1UUkFOU0ZFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgICAgY29uc3Qgam91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlZmVyZW5jZTogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZXh0ZXJuYWwgdHJhbnNmZXInLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjMgQ3JlYXRlIGxlZGdlciBlbnRyeSAoREVCSVQpXHJcbiAgICAgIGF3YWl0IHR4LmxlZGdlci5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IC1hbW91bnQsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbGFuY2UsXHJcbiAgICAgICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHByb3ZpZGVyIGZsb2F0IGxlZGdlciByb3cgKGNyZWRpdClcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IGFtb3VudCxcclxuICAgICAgICAgIGJhbGFuY2VBZnRlcjogQmlnSW50KHByb3ZpZGVyLmJhbGFuY2UgYXMgYW55KSArIGFtb3VudCxcclxuICAgICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9DUkVESVQnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5yZW1hcmtzLFxyXG4gICAgICAgICAgICB0b0JhbmtDb2RlOiBwYXlsb2FkLmRlc3RpbmF0aW9uQmFuayxcclxuICAgICAgICAgICAgdG9BY2NvdW50OiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLjQgQ3JlYXRlIG91dGJveCBmb3IgYXN5bmMgcHVibGlzaFxyXG4gICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5wcm9jZXNzaW5nJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC5pbml0aWF0ZWRCeSxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHBheWxvYWQuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgICB0b0FjY291bnROYW1lOiBwYXlsb2FkLmRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYSBkZWJpdCB0cmFuc2FjdGlvblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ1BST0NFU1NJTkcnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiBwYXlsb2FkLnJlbWFya3MsXHJcbiAgICAgICAgICAgIHRvQmFua0NvZGU6IHBheWxvYWQuZGVzdGluYXRpb25CYW5rLFxyXG4gICAgICAgICAgICB0b0FjY291bnQ6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09VFJBTlNGRVI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT1GRUU9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgICAgY29uc3QgZmVlSm91cm5hbCA9IGF3YWl0IHR4LmpvdXJuYWxFbnRyeS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlZmVyZW5jZTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0Py5pZCxcclxuICAgICAgICAgICAgdG9Qcm92aWRlcjogJ0VNQkVETFknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBEZWJpdCBMZWRnZXJcclxuICAgICAgYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBmZWVKb3VybmFsLmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IC1mZWVSYXRlLFxyXG4gICAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdCYWxBZnRlckZlZSxcclxuICAgICAgICAgIHR5cGU6ICdGRUUnLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgcmVhc29uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgICB0b1Byb3ZpZGVyOiAnRU1CRURMWScsXHJcbiAgICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEZlZSBsZWRnZXJcclxuICAgICAgY29uc3QgZmVlTGVkZ2VyID0gYXdhaXQgdHgubGVkZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQ/LmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBmZWVKb3VybmFsLmlkLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBjaGFuZ2U6IGZlZVJhdGUsXHJcbiAgICAgICAgICBiYWxhbmNlQWZ0ZXI6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgICAgdHlwZTogJ0ZFRScsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246ICdDb21taXNzaW9uIG9uIE5pcCcsXHJcbiAgICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldD8uaWQsXHJcbiAgICAgICAgICAgIHRvUHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIEZlZVxyXG4gICAgICBjb25zdCBmZWUgPSBhd2FpdCB0eC5mZWUuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihmZWVSYXRlKSwgLy9JbiBLb2JvLFxyXG4gICAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgICAgcmF0ZTogTnVtYmVyKGZlZVJhdGUpLCAvL0luIEtvYm8sXHJcbiAgICAgICAgICBzdGF0dXM6ICdQUk9DRVNTSU5HJyxcclxuICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgbGVkZ2VySWQ6IGZlZUxlZGdlci5pZCxcclxuICAgICAgICAgIHR5cGU6ICdFWFRFUk5BTCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgcHJvY2Vzc2luZyB0cmFuc2FjdGlvbiBmb3IgRmVlXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBhbW91bnQ6IE51bWJlcihUWE5GRUUpLFxyXG4gICAgICAgICAgaXRlbUlkOiBmZWUuaWQsXHJcbiAgICAgICAgICB0eXBlOiAnRkVFJyxcclxuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC5pbml0aWF0ZWRCeSxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgICAgcmVhc29uOiAnQ29tbWlzc2lvbiBvbiBOaXAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09RkVFPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZmVyUmVjb3JkO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICByZWFzb246IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICByZWFzb246IHBheWxvYWQucmVtYXJrcyxcclxuICAgICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICAgIHRvQWNjb3VudDogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnI/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlID8/IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLmluaXRpYXRlZEJ5LFxyXG4gICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5OiBwYXlsb2FkLmN1cnJlbmN5LFxyXG4gICAgICAgICAgdG9CYW5rQ29kZTogcGF5bG9hZC5kZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICB0b0FjY291bnROdW1iZXI6IHBheWxvYWQuZGVzdGluYXRpb25BY2NvdW50TnVtYmVyLFxyXG4gICAgICAgICAgdG9BY2NvdW50TmFtZTogcGF5bG9hZC5kZXN0aW5hdGlvbkFjY291bnROYW1lLFxyXG4gICAgICAgICAgZXJyb3I6IGVycj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgPz8gZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXh0ZXJuYWwgdHJhbnNmZXIgZmFpbGVkJywgNTAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgQWt1dWsgfSBmcm9tICdAL2V4dGVuc2lvbnMvYWt1dWsnO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4vcXVldWVzJztcclxuaW1wb3J0IHsgYW1vdW50SW5Lb2JvLCBmb3JtYXRUcmFuc2ZlclNNUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NBaXJ0aW1lRXZlbnQoZXZlbnRJZDogYW55KSB7XHJcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFnZ3JlZ2F0ZUlkOiBldmVudElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghZXZlbnQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgcGF5bG9hZCA9IGV2ZW50Py5wYXlsb2FkIGFzIHtcclxuICAgIGFpcnRpbWVJZDogc3RyaW5nO1xyXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XHJcbiAgICBhbW91bnQ/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW5jeT86IHN0cmluZztcclxuICAgIHVzZXJJZD86IHN0cmluZztcclxuICAgIGZyb21XYWxsZXRJZD86IHN0cmluZztcclxuICAgIGNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBiYWxhbmNlOiBudW1iZXI7XHJcbiAgICBhY2NvdW50TnVtYmVyOiBudW1iZXI7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHJlc3BvbnNlOiBhbnkgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBBa3V1ay5haXJ0aW1lKHtcclxuICAgICAgbnVtYmVyOiBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICBjb3VudHJ5OiBwYXlsb2FkPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIGJpbGxpbmc6ICdwcmVwYWlkJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIG1hcmsgdGFuc2FjdGlvbiBjb21wbGV0ZWRcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzIGFnYWluLCBpdCBjYW4gcHVsbCBhbnkgbGVkZ2VyUm93XHJcbiAgICAgIGNvbnN0IGxlZGdlclJvdyA9IGF3YWl0IHR4LmxlZGdlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHdhbGxldElkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJhdGUgPSBOdW1iZXIocHJvY2Vzcy5lbnYuQUlSVElNRV9QRVJDRU5UKSA/PyAwLjAyNTtcclxuICAgICAgYXdhaXQgdHguZmVlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdHJhbnNhY3Rpb25JZDogcGF5bG9hZD8uYWlydGltZUlkLFxyXG4gICAgICAgICAgcHJvdmlkZXI6IGxlZGdlclJvdz8ucHJvdmlkZXJJZCxcclxuICAgICAgICAgIHR5cGU6ICdBSVJUSU1FJyBhcyBhbnksXHJcbiAgICAgICAgICByYXRlLFxyXG4gICAgICAgICAgYW1vdW50OiBOdW1iZXIocGF5bG9hZC5hbW91bnQpICogcmF0ZSxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnIGFzIGFueSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LmFpcnRpbWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5haXJ0aW1lSWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdTVUNDRVNTJyBhcyBhbnksXHJcbiAgICAgICAgICByZWZlcmVuY2U6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5SZWZlcmVuY2UgKyAnJyxcclxuICAgICAgICAgIGxlZGdlckVudHJ5SWQ6IGxlZGdlclJvdz8uaWQsXHJcbiAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgICAgICBjb21wZXRlZEF0OiByZXNwb25zZT8uZGV0YWlscz8udHhuRGF0ZSA/PyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICB0b3BpYzogJ2FpcnRpbWUucHVyY2hhc2UuY29tcGxldGVkJyxcclxuICAgICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGFpcnRpbWVJZDogcGF5bG9hZC5haXJ0aW1lSWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgZnJvbVdhbGxldElkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCxcclxuICAgICAgICAgICAgYW1vdW50OiBwYXlsb2FkLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3BvbnNlPy5kZXRhaWxzPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQudXNlcklkIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXNwb25zZTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICBhY2NvdW50OiBwYXlsb2FkLmFjY291bnROdW1iZXIgKyAnJyxcclxuICAgICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgIGRlc2M6ICdBaXJ0aW1lIFB1cmNoYXNlIHRvICcgKyBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICBiYWxhbmNlOiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYmFsYW5jZSkpLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICB0eXBlOiAnRFInLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgUXVldWUudHJpZ2dlcihldmVudElkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICBjb3VudHJ5OiB1c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHBob25lOiB1c2VyPy5waG9uZSEsXHJcbiAgICAgIHR5cGU6ICdTTVMnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaWYgKHJlc3BvbnNlPy5jb2RlID09PSAyMDApIHtcclxuICAgICAgYXdhaXQgcHJpc21hLmFpcnRpbWUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5haXJ0aW1lSWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdTVUNDRVNTJyBhcyBhbnksXHJcbiAgICAgICAgICByZWZlcmVuY2U6IHJlc3BvbnNlPy5kZXRhaWxzPy50eG5SZWZlcmVuY2UgKyAnJyxcclxuICAgICAgICAgIG5ldHdvcms6IHJlc3BvbnNlPy5kZXRhaWxzPy5uZXR3b3JrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaXRlbUlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiAnUFJPQ0VTU0lORycsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmFrdXVrLnBhcnRpYWwnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgYXdhaXQgdHguYWlydGltZS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmFpcnRpbWVJZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnRkFJTEVEJywgZXJyb3I6IChlcnIgYXMgRXJyb3IpLm1lc3NhZ2UgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcGF5bG9hZC5mcm9tV2FsbGV0SWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdVc2VyTGVkZ2VyQmFsYW5jZSA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSEpICsgYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpO1xyXG4gICAgICBjb25zdCBuZXdBdmFpbGFibGVCYWxhbmNlID1cclxuICAgICAgICBCaWdJbnQod2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlISkgK1xyXG4gICAgICAgIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXlsb2FkLmZyb21XYWxsZXRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld0F2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBuZXR3b3JrOiByZXNwb25zZT8uZGV0YWlscz8ubmV0d29yayxcclxuICAgICAgICAgICAgY29tcGV0ZWRBdDogcmVzcG9uc2U/LmRldGFpbHM/LnR4bkRhdGUgPz8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBhaXJ0aW1lSWQ6IHBheWxvYWQuYWlydGltZUlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogcGF5bG9hZC5hY2NvdW50TnVtYmVyICsgJycsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSksXHJcbiAgICAgICAgZGVzYzogJ1JldmVyc2VkOiBBaXJ0aW1lIFB1cmNoYXNlIHRvICcgKyBwYXlsb2FkLnBob25lTnVtYmVyLFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0F2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBjdXJyZW5jeTogcmVzcG9uc2U/LmRldGFpbHM/LmN1cnJlbmN5ID8/ICdOR04nLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBheWxvYWQudXNlcklkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGF3YWl0IFF1ZXVlLnRyaWdnZXIoZXZlbnRJZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICAgIGNvdW50cnk6IHVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICBwaG9uZTogdXNlcj8ucGhvbmUhLFxyXG4gICAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmFrdXVrLmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgYWlydGltZUlkOiBwYXlsb2FkLmFpcnRpbWVJZCxcclxuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXHJcbiAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5lcnJvcignW0FpcnRpbWVIYW5kbGVyXSBBaXJ0aW1lIHB1cmNoYXNlIGZhaWxlZDonLCBlcnIpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFrdXVrIH0gZnJvbSAnQC9leHRlbnNpb25zL2FrdXVrJztcclxuaW1wb3J0IHNlbmRFbWFpbCBmcm9tICdAL2V4dGVuc2lvbnMvbWFpbC1zZXJ2aWNlL3NlbmQtZW1haWwnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQoXHJcbiAgZXZlbnRJZDogYW55LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4pIHtcclxuICBpZiAoZGF0YS50eXBlID09PSAnU01TJykge1xyXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRTTVNXaXRoQWt1dWsoZGF0YSk7XHJcbiAgfVxyXG4gIGlmIChkYXRhLnR5cGUgPT09ICdFTUFJTCcpIHtcclxuICAgIHJldHVybiBhd2FpdCBzZW5kTWFpbChkYXRhKTtcclxuICB9XHJcblxyXG4gIGF3YWl0IHNlbmRTTVNXaXRoQWt1dWsoZGF0YSk7XHJcbiAgYXdhaXQgc2VuZE1haWwoZGF0YSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRTTVNXaXRoQWt1dWsoZGF0YTogYW55KSB7XHJcbiAgYXdhaXQgQWt1dWsuc2VuZFNNUyh7XHJcbiAgICBjb3VudHJ5OiBkYXRhLmNvdW50cnksXHJcbiAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICBudW1iZXI6IGRhdGEucGhvbmUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRNYWlsKGRhdGE6IGFueSkge1xyXG4gIHJldHVybiBhd2FpdCBzZW5kRW1haWwoe1xyXG4gICAgdG86IGRhdGEuZW1haWwhLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICB0b19uYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgIC4uLmRhdGEudmFyaWFibGVzLFxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBkYXRhLnRlbXBsYXRlLFxyXG4gIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgY3JlYXRlRW1iZWRseVVzZXIgfSBmcm9tICcuLi9tb2R1bGVzL3VzZXJzL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB0b0lTT0RhdGUgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NFbWJlZGx5V2FsbGV0KGV2ZW50SWQ6IGFueSkge1xyXG4gIGNvbnN0IGV2ZW50ID0gYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBhZ2dyZWdhdGVJZDogZXZlbnRJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhldmVudCwgJ0dFVCBFVkVOVCcpO1xyXG5cclxuICBpZiAoIWV2ZW50KSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHBheWxvYWQgPSBldmVudD8ucGF5bG9hZCBhcyB7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIHN0cmVldExpbmU6IHN0cmluZztcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGNvdW50cnk6IHN0cmluZztcclxuICAgIGRvYjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBidm46IHN0cmluZztcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXBheWxvYWQuZW1haWwpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBtdXN0IHByb3ZpZGUgZW1haWwnLCA0MjIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFkZHJlc3M6IHBheWxvYWQ/LnN0cmVldExpbmUsXHJcbiAgICAgIGNpdHk6IHBheWxvYWQ/LmNpdHksXHJcbiAgICAgIGNvdW50cnk6IHBheWxvYWQ/LmNvdW50cnksXHJcbiAgICAgIGRvYjogdG9JU09EYXRlKHBheWxvYWQ/LmRvYiEpLFxyXG4gICAgICBmaXJzdE5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgIGxhc3ROYW1lOiBwYXlsb2FkPy5uYW1lPy5zcGxpdCgnICcpWzFdLFxyXG4gICAgICBwaG9uZTogcGF5bG9hZD8ucGhvbmUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IHBheWxvYWQ/Lm5hbWU/LnNwbGl0KCcgJyk/LlsyXSA/PyAnJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSwgJ0dFVCBQQVlMT0FEJyk7XHJcblxyXG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgY3JlYXRlRW1iZWRseVVzZXIoZXZlbnRJZCwge1xyXG4gICAgICBlbWJlZGx5OiBkYXRhLFxyXG4gICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcclxuICAgICAgYnZuOiBwYXlsb2FkPy5idm4/LnRyaW0oKSEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3YWxsZXQsICdDUkVBVEUgRU1CRURMWSBXQUxMRVQnKTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IHdhbGxldD8uaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB3YWxsZXQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLCAnUHJvY2Vzc0VtYmVkbHlVU2VyJyk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogZXZlbnRJZCxcclxuICAgICAgICB0b3BpYzogJ2VtYmVkbHkudXNlci53YWxsZXQuY3JlYXRpb24uZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW1iZWRseSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9lbWJlZGx5JztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NJbnRlcm5hbFRyYW5zZmVyRXZlbnQoXHJcbiAgZXZlbnRJZDogYW55LFxyXG4gIGRhdGE6IFRyYW5zZmVyLFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRW1iZWRseS53YWxsZXRzLnRyYW5zZmVyKHtcclxuICAgICAgYW1vdW50OiBOdW1iZXIoZGF0YS5hbW91bnQpLFxyXG4gICAgICBmcm9tQWNjb3VudDogZGF0YS5mcm9tQWNjb3VudCxcclxuICAgICAgdG9BY2NvdW50OiBkYXRhLnRvQWNjb3VudCxcclxuICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgIHJlbWFya3M6IGRhdGEucmVtYXJrcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWdncmVnYXRlSWQ6IGV2ZW50SWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5pbnRlcm5hbC5vcmdhbml6YXRpb24uY29tcGxldGVkJyxcclxuICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiBldmVudElkLFxyXG4gICAgICAgICAgZnJvbUFjY291bnQ6IGRhdGEuZnJvbUFjY291bnQsXHJcbiAgICAgICAgICB0b0FjY291bnQ6IGRhdGEudG9BY2NvdW50LFxyXG4gICAgICAgICAgcmVtYXJrczogZGF0YS5yZW1hcmtzLFxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IGRhdGEudHJhbnNhY3Rpb25SZWZlcmVuY2UsXHJcbiAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiBldmVudElkLFxyXG4gICAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwub3JnYW5pemF0aW9uLmZhaWxlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogZXZlbnRJZCxcclxuICAgICAgICAgIGZyb21BY2NvdW50OiBkYXRhLmZyb21BY2NvdW50LFxyXG4gICAgICAgICAgdG9BY2NvdW50OiBkYXRhLnRvQWNjb3VudCxcclxuICAgICAgICAgIHJlbWFya3M6IGRhdGEucmVtYXJrcyxcclxuICAgICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBkYXRhLnRyYW5zYWN0aW9uUmVmZXJlbmNlLFxyXG4gICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoXHJcbiAgICAgICdJbnRlcm5hbCB0cmFuc2ZlciBmYWlsZWQgdG8gb3JnYW5pemF0aW9uIHdhbGxldCBmYWlsZWQnLFxyXG4gICAgICA1MDAsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBRVUVVRV9OQU1FUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBXb3JrZXIgfSBmcm9tICdidWxsbXEnO1xyXG5pbXBvcnQgeyBwcm9jZXNzVHJhbnNmZXJFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy10cmFuc2Zlcic7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHByb2Nlc3NBaXJ0aW1lRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3MtYWlydGltZSc7XHJcbmltcG9ydCB7IHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQgfSBmcm9tICcuL3Byb2Nlc3Mtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQC9jb25maWcvZW52JztcclxuaW1wb3J0IElPUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcbmltcG9ydCB7IHByb2Nlc3NFbWJlZGx5V2FsbGV0IH0gZnJvbSAnLi9wcm9jZXNzLWVtYmVkbHktd2FsbGV0JztcclxuaW1wb3J0IHsgcHJvY2Vzc0ludGVybmFsVHJhbnNmZXJFdmVudCB9IGZyb20gJy4vcHJvY2Vzcy1pbnRlcm5hbC10cmFuc2ZlcnMnO1xyXG5cclxuY29uc3QgcmVkaXNDbGllbnQgPSBuZXcgSU9SZWRpcyhlbnZpcm9ubWVudC5yZWRpcy51cmwsIHtcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge1xyXG4gIGhvc3Q6IGVudmlyb25tZW50LnJlZGlzLmhvc3QsXHJcbiAgcG9ydDogZW52aXJvbm1lbnQucmVkaXMucG9ydCxcclxuICBtYXhSZXRyaWVzUGVyUmVxdWVzdDogbnVsbCxcclxuICBlbmFibGVSZWFkeUNoZWNrOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrZXJzIHtcclxuICBzdGF0aWMgYXN5bmMgdHJhbnNmZXJXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuVFJBTlNGRVIsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc1RyYW5zZmVyRXZlbnQoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGpvYi5hdHRlbXB0c01hZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gVXNlIFNhZmVIYXZlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBpbnRlcm5hbFRyYW5zZmVyV29ya2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoXHJcbiAgICAgIFFVRVVFX05BTUVTLklOVEVSTkFMX1RSQU5TRkVSLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NJbnRlcm5hbFRyYW5zZmVyRXZlbnQoZGF0YS5pZCwgZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFpcnRpbWVXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuQUlSVElNRSxcclxuICAgICAgYXN5bmMgKGpvYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gam9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzQWlydGltZUV2ZW50KGRhdGEuaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChqb2IuYXR0ZW1wdHNNYWRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZSBTYWZlSGF2ZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICBpZiAoam9iLmF0dGVtcHRzTWFkZSA+IDEpXHJcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZUlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gICAgICAgIGNvbmN1cnJlbmN5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBub3RpZmljYXRpb25Xb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFdvcmtlcihcclxuICAgICAgUVVFVUVfTkFNRVMuTk9USUZJQ0FUSU9OLFxyXG4gICAgICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBqb2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NOb3RpZmljYXRpb25zRXZlbnQoZGF0YS5pZCwgZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICAgICAgY29uY3VycmVuY3k6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHdhbGxldFdvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgV29ya2VyKFxyXG4gICAgICBRVUVVRV9OQU1FUy5DUkVBVEVXQUxMRVQsXHJcbiAgICAgIGFzeW5jIChqb2IpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGpvYjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0VtYmVkbHlXYWxsZXQoZGF0YS5pZCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnV09SS0VSJyk7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb25uZWN0aW9uOiByZWRpc0NsaWVudCxcclxuICAgICAgICBjb25jdXJyZW5jeTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFF1ZXVlIGFzIEJ1bGxRdWV1ZSB9IGZyb20gJ2J1bGxtcSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tTnVtYmVyLCBRVUVVRV9OQU1FUyB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFdvcmtlcnMgfSBmcm9tICcuL1dvcmtlcnMnO1xyXG5pbXBvcnQgSU9SZWRpcyBmcm9tICdpb3JlZGlzJztcclxuXHJcbmNvbnN0IHJlZGlzQ2xpZW50ID0gbmV3IElPUmVkaXMoZW52aXJvbm1lbnQucmVkaXMudXJsLCB7XHJcbiAgbWF4UmV0cmllc1BlclJlcXVlc3Q6IG51bGwsXHJcbiAgZW5hYmxlUmVhZHlDaGVjazogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgZGVmYXVsdEpvYk9wdGlvbnMgPSB7XHJcbiAgYXR0ZW1wdHM6IDMsXHJcbiAgYmFja29mZjoge1xyXG4gICAgdHlwZTogJ2V4cG9uZW50aWFsJyBhcyBjb25zdCxcclxuICAgIGRlbGF5OiAyMDAwLFxyXG4gIH0sXHJcbiAgcmVtb3ZlT25Db21wbGV0ZToge1xyXG4gICAgY291bnQ6IDEwMDAsXHJcbiAgICBhZ2U6IDI0ICogMzYwMCxcclxuICB9LFxyXG4gIHJlbW92ZU9uRmFpbDoge1xyXG4gICAgY291bnQ6IDUwMDAsXHJcbiAgICBhZ2U6IDcgKiAyNCAqIDM2MDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2ZlclF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5UUkFOU0ZFUiwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVybmFsVHJhbnNmZXJRdWV1ZSA9IG5ldyBCdWxsUXVldWUoXHJcbiAgUVVFVUVfTkFNRVMuSU5URVJOQUxfVFJBTlNGRVIsXHJcbiAge1xyXG4gICAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgICBkZWZhdWx0Sm9iT3B0aW9uczoge1xyXG4gICAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgICAgYXR0ZW1wdHM6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgYWlydGltZVF1ZXVlID0gbmV3IEJ1bGxRdWV1ZShRVUVVRV9OQU1FUy5BSVJUSU1FLCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uUXVldWUgPSBuZXcgQnVsbFF1ZXVlKFFVRVVFX05BTUVTLk5PVElGSUNBVElPTiwge1xyXG4gIGNvbm5lY3Rpb246IHJlZGlzQ2xpZW50LFxyXG4gIGRlZmF1bHRKb2JPcHRpb25zOiB7XHJcbiAgICAuLi5kZWZhdWx0Sm9iT3B0aW9ucyxcclxuICAgIC8vIGF0dGVtcHRzOiAyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtYmVkbHlXYWxsZXRRdWV1ZSA9IG5ldyBCdWxsUXVldWUoUVVFVUVfTkFNRVMuQ1JFQVRFV0FMTEVULCB7XHJcbiAgY29ubmVjdGlvbjogcmVkaXNDbGllbnQsXHJcbiAgZGVmYXVsdEpvYk9wdGlvbnM6IHtcclxuICAgIC4uLmRlZmF1bHRKb2JPcHRpb25zLFxyXG4gICAgYXR0ZW1wdHM6IDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWUge1xyXG4gIHN0YXRpYyBhc3luYyB0cmlnZ2VyKFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHR5cGU6IGtleW9mIHR5cGVvZiBRVUVVRV9OQU1FUyxcclxuICAgIGRhdGE/OiBhbnksXHJcbiAgKTogUHJvbWlzZTx7IGpvYklkOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nIH0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdBSVJUSU1FJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyQWlydGltZShpZCk7XHJcblxyXG4gICAgICBjYXNlICdUUkFOU0ZFUic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlclRyYW5zZmVyKGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ05PVElGSUNBVElPTic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlck5vdGlmaWNhdGlvbihpZCwgZGF0YSk7XHJcblxyXG4gICAgICBjYXNlICdDUkVBVEVXQUxMRVQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJDcmVhdGVFbWJlZGx5V2FsbGV0KGlkKTtcclxuXHJcbiAgICAgIGNhc2UgJ0lOVEVSTkFMX1RSQU5TRkVSJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VySW50ZXJuYWxUcmFuc2ZlcihpZCwgZGF0YSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHF1ZXVlIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJBaXJ0aW1lKFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICApOiBQcm9taXNlPHsgam9iSWQ6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfT4ge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgYWlydGltZVF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtYWlydGltZScsXHJcbiAgICAgIHsgaWQgfSxcclxuICAgICAge1xyXG4gICAgICAgIGpvYklkOiBgdHJhbnNmZXItJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyVHJhbnNmZXIoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgdHJhbnNmZXJRdWV1ZS5hZGQoXHJcbiAgICAgICdwcm9jZXNzLXRyYW5zZmVyJyxcclxuICAgICAgeyBpZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGB0cmFuc2Zlci0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyaWdnZXJJbnRlcm5hbFRyYW5zZmVyKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgY29uc3Qgam9iID0gYXdhaXQgaW50ZXJuYWxUcmFuc2ZlclF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3MtaW50ZXJuYWwtdHJhbnNmZXInLFxyXG4gICAgICB7IGlkLCBkYXRhIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYGludGVybmFsLXRyYW5zZmVyLSR7aWR9YCxcclxuICAgICAgICBwcmlvcml0eTogMixcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgam9iSWQ6IGpvYi5pZCEsXHJcbiAgICAgIHN0YXR1czogJ3F1ZXVlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJpZ2dlck5vdGlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IG5vdGlmaWNhdGlvblF1ZXVlLmFkZChcclxuICAgICAgJ3Byb2Nlc3Mtbm90aWZpY2F0aW9uJyxcclxuICAgICAgeyBpZCwgZGF0YSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgam9iSWQ6IGBub3RpZmljYXRpb24tJHtnZW5lcmF0ZVJhbmRvbU51bWJlcig2KX0tJHtpZH1gLFxyXG4gICAgICAgIHByaW9yaXR5OiAzLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBqb2JJZDogam9iLmlkISxcclxuICAgICAgc3RhdHVzOiAncXVldWVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmlnZ2VyQ3JlYXRlRW1iZWRseVdhbGxldChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBqb2IgPSBhd2FpdCBlbWJlZGx5V2FsbGV0UXVldWUuYWRkKFxyXG4gICAgICAncHJvY2Vzcy1jcmVhdGUtZW1iZWRseS13YWxsZXQnLFxyXG4gICAgICB7IGlkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBqb2JJZDogYHdhbGxldC0ke2lkfWAsXHJcbiAgICAgICAgcHJpb3JpdHk6IDMsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGpvYklkOiBqb2IuaWQhLFxyXG4gICAgICBzdGF0dXM6ICdxdWV1ZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbldvcmtlcnMuYWlydGltZVdvcmtlcigpO1xyXG5Xb3JrZXJzLnRyYW5zZmVyV29ya2VyKCk7XHJcbldvcmtlcnMubm90aWZpY2F0aW9uV29ya2VyKCk7XHJcbldvcmtlcnMud2FsbGV0V29ya2VyKCk7XHJcbldvcmtlcnMuaW50ZXJuYWxUcmFuc2ZlcldvcmtlcigpO1xyXG4iLCJpbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBFeHRlcm5hbFRyYW5zZmVySW5wdXQsIGlXYWxsZXQsIFRyYW5zZmVyUGF5bG9hZCB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIGFtb3VudEluS29ibyxcclxuICBhbW91bnRJbk5haXJhLFxyXG4gIGNoZWNrRGFpbHlMaW1pdCxcclxuICBmb3JtYXRUcmFuc2ZlclNNUyxcclxufSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5jb25zdCBNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVCA9IDEwMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2ZlclRvRXh0ZXJuYWxCYW5rKHBheWxvYWQ6IEV4dGVybmFsVHJhbnNmZXJJbnB1dCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgc2VuZGVyTmFtZSxcclxuICAgIGRlc3RpbmF0aW9uQmFuayxcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE51bWJlcixcclxuICAgIGRlc3RpbmF0aW9uQWNjb3VudE5hbWUsXHJcbiAgICBhbW91bnQsXHJcbiAgICBjdXJyZW5jeSA9ICdOR04nLFxyXG4gICAgcmVhc29uID0gJ0Z1bmRzIFRyYW5zZmVyJyxcclxuICB9ID0gcGF5bG9hZDtcclxuXHJcbiAgY29uc3QgYW10ID0gYW1vdW50SW5Lb2JvKGFtb3VudCk7XHJcbiAgaWYgKCFpZGVtcG90ZW5jeUtleSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdNaXNzaW5nIGlkZW1wb3RlbmN5IGtleScsIDQwMCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIGFtb3VudCcsIDQwMCk7XHJcbiAgaWYgKGFtb3VudCA8IE1JTklNVU1fVFJBTlNGRVJfQU1PVU5UKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgQW1vdW50IG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuICR7TUlOSU1VTV9UUkFOU0ZFUl9BTU9VTlR9YCxcclxuICAgICk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gMe+4j+KDoyBDaGVjayBJZGVtcG90ZW5jeSBSZWNvcmRcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBleGlzdGluZ1RyYW5zZmVyID0gYXdhaXQgcHJpc21hLnRyYW5zZmVyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWRlbXBvdGVuY3lLZXkgfSxcclxuICB9KTtcclxuICBpZiAoZXhpc3RpbmdUcmFuc2ZlcikgcmV0dXJuIGV4aXN0aW5nVHJhbnNmZXI7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIDLvuI/ig6MgUmVzb2x2ZSBXYWxsZXQgJiBCYWxhbmNlXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW2Zyb21XYWxsZXQsIGZyb21Vc2VyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcklkOiBpbml0aWF0b3JVc2VySWQsIGN1cnJlbmN5IH0sXHJcbiAgICB9KSxcclxuICAgIHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGlkOiBpbml0aWF0b3JVc2VySWQgfSB9KSxcclxuICBdKTtcclxuXHJcbiAgaWYgKCFmcm9tVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgaWYgKCFmcm9tV2FsbGV0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICBjb25zdCBmZWVSYXRlID0gTnVtYmVyKHByb2Nlc3MuZW52Py5FWFRFUk5BTF9QRVJDRU5UID8/IDE1KTtcclxuICBjb25zdCB0b3RhbEFtb3VudCA9IGFtb3VudEluS29ibyhhbW91bnQgKyBmZWVSYXRlKTtcclxuXHJcbiAgaWYgKE51bWJlcihmcm9tV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpIDwgdG90YWxBbW91bnQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBiYWxhbmNlJywgNDIyKTtcclxuXHJcbiAgLy8gQ2hlY2sgZm9yIGRhaWx5IGxpbWl0XHJcbiAgY29uc3QgbGltaXRFeGNlZWRlZCA9IGF3YWl0IGNoZWNrRGFpbHlMaW1pdChmcm9tV2FsbGV0LCBmcm9tVXNlciwgYW10KTtcclxuICBpZiAobGltaXRFeGNlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGBEYWlseSBsaW1pdCBleGNlZWRlZC5gLCA0MDMpO1xyXG5cclxuICBjb25zdCB0cmFuc2ZlclJlY29yZCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHR4LnByb3ZpZGVyLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IHByb3ZpZGVyOiAnRU1CRURMWScgfSxcclxuICAgICAgdXBkYXRlOiB7fSxcclxuICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICBhbW91bnQ6IGFtdCxcclxuICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIHJlYXNvbixcclxuICAgICAgICBraW5kOiAnT1VUJyxcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICBzaG91bGRSZWZ1bmQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ0VYVEVSTkFMJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiAtYW1vdW50LnRvU3RyaW5nKCksXHJcbiAgICAgICAgaXRlbUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVInLFxyXG4gICAgICAgIHN0YXR1czogJ1BFTkRJTkcnLFxyXG4gICAgICAgIHVzZXJJZDogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdOR04nLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogYCR7ZGVzdGluYXRpb25BY2NvdW50TmFtZX0tJHtkZXN0aW5hdGlvbkFjY291bnROdW1iZXJ9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkJhbmssXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXIsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lLFxyXG4gICAgICAgICAgc291cmNlQWNjb3VudE51bWJlcjogZnJvbVdhbGxldC5hY2NvdW50TnVtYmVyPy50cmltKCksXHJcbiAgICAgICAgICBzb3VyY2VBY2NvdW50TmFtZTogc2VuZGVyTmFtZS50cmltKCksXHJcbiAgICAgICAgICByZW1hcmtzOiByZWFzb24sXHJcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWQsXHJcbiAgICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlcjtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2ZlclJlY29yZC5pZCwgJ1RSQU5TRkVSJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi50cmFuc2ZlclJlY29yZCxcclxuICAgIGFtb3VudDogYW1vdW50SW5OYWlyYSh0cmFuc2ZlclJlY29yZC5hbW91bnQpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWxsZXRUb1dhbGxldFRyYW5zZmVyKHBheWxvYWQ6IFRyYW5zZmVyUGF5bG9hZCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgc2VuZGVyLFxyXG4gICAgcmVjZWl2ZXIsXHJcbiAgICBhbW91bnQsXHJcbiAgICBjdXJyZW5jeSA9ICdOR04nLFxyXG4gICAgcmVhc29uLFxyXG4gIH0gPSBwYXlsb2FkO1xyXG5cclxuICAvLyBUT0RPOjogQ2hlY2sgZm9yIHVzZXIgd2FsbGV0IGFtb3VudCBiZWZvcmUgdHJhbnNmZXJpbmdcclxuXHJcbiAgY29uc3QgYW10ID0gYW1vdW50SW5Lb2JvKGFtb3VudCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEVycm9yKCdBbW91bnQgbXVzdCBiZSBwb3NpdGl2ZScpO1xyXG4gIGlmIChhbW91bnQgPCBNSU5JTVVNX1RSQU5TRkVSX0FNT1VOVClcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYEFtb3VudCBtdXN0IGJlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAke01JTklNVU1fVFJBTlNGRVJfQU1PVU5UfWAsXHJcbiAgICApO1xyXG5cclxuICAvLyBSZXNvbHZlIHNlbmRlciBhbmQgcmVjaXBpZW50XHJcbiAgY29uc3QgW2Zyb21XYWxsZXQsIHRvV2FsbGV0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogc2VuZGVyLCBjdXJyZW5jeSB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgIH0pLFxyXG4gICAgcHJpc21hLndhbGxldC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBhY2NvdW50TnVtYmVyOiByZWNlaXZlciwgY3VycmVuY3kgfSxcclxuICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXHJcbiAgICB9KSxcclxuICBdKTtcclxuXHJcbiAgaWYgKCFmcm9tV2FsbGV0KVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICBgU2VuZGVyIHdhbGxldCBub3QgZm91bmQgZm9yIGN1cnJlbmN5ICR7Y3VycmVuY3l9YCxcclxuICAgICAgNDA0LFxyXG4gICAgKTtcclxuICBpZiAoIXRvV2FsbGV0KVxyXG4gICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFxyXG4gICAgICBgUmVjaXBpZW50IHdhbGxldCBub3QgZm91bmQgZm9yIGN1cnJlbmN5ICR7Y3VycmVuY3l9YCxcclxuICAgICAgNDA0LFxyXG4gICAgKTtcclxuXHJcbiAgaWYgKGZyb21XYWxsZXQuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1NlbmRlciB3YWxsZXQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuICBpZiAodG9XYWxsZXQuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1JlY2lwaWVudCB3YWxsZXQgaXMgbm90IGFjdGl2ZS4gUGxlYXNlIGZvbGxvdyBvdXIgaW5zdHJ1Y3Rpb25zIHRvIGFjdGl2YXRlIHlvdXIgd2FsbGV0JyxcclxuICAgICAgNDAzLFxyXG4gICAgKTtcclxuXHJcbiAgY29uc3QgZnJvbVVzZXIgPSBmcm9tV2FsbGV0LnVzZXI7XHJcbiAgY29uc3QgdG9Vc2VyID0gdG9XYWxsZXQudXNlcjtcclxuXHJcbiAgLy8gQ2hlY2tzXHJcbiAgaWYgKCF0b1VzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignUmVjaXBpZW50IG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgaWYgKCFmcm9tVXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdTZW5kZXIgbm90IGZvdW5kJywgNDA0KTtcclxuICBpZiAoZnJvbVVzZXIuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1NlbmRlciBhY2NvdW50IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQnLFxyXG4gICAgICA0MDMsXHJcbiAgICApO1xyXG4gIGlmICh0b1VzZXIuc3RhdHVzICE9PSAnQUNUSVZFJylcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihcclxuICAgICAgJ1JlY2lwaWVudCBhY2NvdW50IGlzIG5vdCBhY3RpdmUuIFBsZWFzZSBmb2xsb3cgb3VyIGluc3RydWN0aW9ucyB0byBhY3RpdmF0ZSB5b3VyIHdhbGxldCcsXHJcbiAgICAgIDQwMyxcclxuICAgICk7XHJcbiAgaWYgKGZyb21Vc2VyLmlkID09PSB0b1VzZXIuaWQpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0Nhbm5vdCB0cmFuc2ZlciB0byBzZWxmJywgNDIyKTtcclxuXHJcbiAgLy8gY2Fub25pY2FsIG9yZGVyIHRvIGF2b2lkIGRlYWRsb2Nrc1xyXG4gIGNvbnN0IG9yZGVyZWQgPSBbZnJvbVdhbGxldC5pZCwgdG9XYWxsZXQuaWRdLnNvcnQoKTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgLy8gaWRlbXBvdGVuY3kgZ3VhcmRcclxuXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHR4LnRyYW5zZmVyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleSB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZzsgLy8gbG9nIGhlcmVcclxuXHJcbiAgICAvLyBsb2NrIHdhbGxldHMgd2l0aCBGT1IgVVBEQVRFXHJcbiAgICBjb25zdCBsb2NrZWRSb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3PFxyXG4gICAgICBhbnlbXVxyXG4gICAgPmBTRUxFQ1QgaWQsIFwidXNlcklkXCIsIGN1cnJlbmN5LCBcImxlZGdlckJhbGFuY2VcIiwgXCJhdmFpbGFibGVCYWxhbmNlXCIsIFwicmVzZXJ2ZWRCYWxhbmNlXCIsIHZlcnNpb24sIHN0YXR1cyBGUk9NIFwiV2FsbGV0XCIgV0hFUkUgaWQgSU4gKCR7b3JkZXJlZFswXX0sICR7b3JkZXJlZFsxXX0pIEZPUiBVUERBVEVgO1xyXG4gICAgaWYgKGxvY2tlZFJvd3MubGVuZ3RoICE9PSAyKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA1MDApO1xyXG5cclxuICAgIC8vIG1hcCBsb2NrZWQgcm93c1xyXG4gICAgY29uc3QgbG9ja2VkTWFwID0gbmV3IE1hcCgobG9ja2VkUm93cyBhcyBhbnlbXSkubWFwKChyKSA9PiBbci5pZCwgcl0pKTtcclxuICAgIGNvbnN0IGxvY2tlZEZyb20gPSBsb2NrZWRNYXAuZ2V0KGZyb21XYWxsZXQuaWQpO1xyXG4gICAgY29uc3QgbG9ja2VkVG8gPSBsb2NrZWRNYXAuZ2V0KHRvV2FsbGV0LmlkKTtcclxuXHJcbiAgICBpZiAoIWxvY2tlZEZyb20gfHwgIWxvY2tlZFRvKVxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0ZhaWxlZCB0byBsb2NrIHdhbGxldHMnLCA0MjIpO1xyXG5cclxuICAgIC8vIGNoZWNrIGZ1bmRzXHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkRnJvbS5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSk7XHJcbiAgICAvLyBjb25zdCByZXNlcnZlZCA9IEJpZ0ludCgobG9ja2VkRnJvbS5yZXNlcnZlZEJhbGFuY2UgYXMgYW55KSB8fCAwKTtcclxuICAgIGlmIChhdmFpbGFibGUgPCBhbXQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSW5zdWZmaWNpZW50IGZ1bmRzJywgNDAzKTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgZGFpbHkgbGltaXRcclxuICAgIGNvbnN0IGxpbWl0RXhjZWVkZWQgPSBhd2FpdCBjaGVja0RhaWx5TGltaXQoZnJvbVdhbGxldCwgZnJvbVVzZXIsIGFtdCk7XHJcbiAgICBpZiAobGltaXRFeGNlZWRlZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKGBEYWlseSBsaW1pdCBleGNlZWRlZC5gLCA0MDMpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBUcmFuc2ZlciByZWNvcmRcclxuICAgIGNvbnN0IG9wZXJhdGlvbklkID0gYHRyYW5zZmVyXyR7cGF5bG9hZC5pZGVtcG90ZW5jeUtleX1gO1xyXG4gICAgbGV0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICBhbW91bnQ6IGFtdCxcclxuICAgICAgICBjdXJyZW5jeSxcclxuICAgICAgICBraW5kOiAnT1VUJyxcclxuICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgIHJlYXNvbixcclxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG91dGJveCBldmVudFxyXG4gICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZUlkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmludGVybmFsLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgICBmcm9tV2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICAgICAgZnJvbVVzZXJJZDogZnJvbVVzZXIuaWQsXHJcbiAgICAgICAgICB0b1VzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgICAgY3VycmVuY3ksXHJcbiAgICAgICAgICBpbml0aWF0ZWRCeTogaW5pdGlhdG9yVXNlcklkLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgIGNvbnN0IGpvdXJuYWwgPSBhd2FpdCB0eC5qb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZmVyZW5jZTogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHJlYXNvbiA/PyAnaW50ZXJuYWwgdHJhbnNmZXInLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBvcGVyYXRpb25JZCxcclxuICAgICAgICAgIGZyb21XYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICAgIHRvV2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb21wdXRlIG5ldyBiYWxhbmNlc1xyXG4gICAgY29uc3QgbmV3RnJvbUxlZGdlckJhbCA9IEJpZ0ludChsb2NrZWRGcm9tLmxlZGdlckJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuICAgIGNvbnN0IG5ld0Zyb21BdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkRnJvbS5hdmFpbGFibGVCYWxhbmNlIGFzIGFueSkgLSBhbXQ7XHJcblxyXG4gICAgY29uc3QgbmV3VG9MZWRnZXJCYWwgPSBCaWdJbnQobG9ja2VkVG8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpICsgYW10O1xyXG4gICAgY29uc3QgbmV3VG9BdmFpbGFibGUgPSBCaWdJbnQobG9ja2VkVG8uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpICsgYW10O1xyXG5cclxuICAgIC8vIGNyZWF0ZSBsZWRnZXIgcm93cyAoZGViaXQgdGhlbiBjcmVkaXQpLCByZWZlcmVuY2Ugam91cm5hbC5pZFxyXG4gICAgY29uc3QgZGViaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBjaGFuZ2U6IC1hbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdGcm9tTGVkZ2VyQmFsLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUl9ERUJJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHJlYXNvbixcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgcmVjaXBpZW50V2FsbGV0SWQ6IHRvV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjcmVkaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgY2hhbmdlOiBhbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdUb0xlZGdlckJhbCxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfQ1JFRElUJyxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgcmVhc29uLFxyXG4gICAgICAgICAgb3BlcmF0aW9uSWQsXHJcbiAgICAgICAgICBzZW5kZXJXYWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHNlbmRlciB3YWxsZXRcclxuICAgIGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZnJvbVdhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3RnJvbUxlZGdlckJhbCxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdGcm9tQXZhaWxhYmxlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgcmVjaXBpZW50IHdhbGxldFxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB0b1dhbGxldC5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3VG9BdmFpbGFibGUsXHJcbiAgICAgICAgdmVyc2lvbjogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1hcmsgdHJhbnNmZXIgY29tcGxldGVkXHJcbiAgICB0cmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlci5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyBhcyBhbnksXHJcbiAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5jb21wbGV0ZWQnLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgdG9XYWxsZXRJZDogdG9XYWxsZXQuaWQsXHJcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICAgICAgICAgIGN1cnJlbmN5LFxyXG4gICAgICAgICAgZnJvbVVzZXJJZDogZnJvbVVzZXIuaWQsXHJcbiAgICAgICAgICB0b1VzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgICAgZGViaXRMZWRnZXJJZDogZGViaXQuaWQsXHJcbiAgICAgICAgICBjcmVkaXRMZWRnZXJJZDogY3JlZGl0LmlkLFxyXG4gICAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGViaXQgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1hbW91bnQudG9TdHJpbmcoKSxcclxuICAgICAgICBpdGVtSWQ6IGRlYml0LmlkLFxyXG4gICAgICAgIHR5cGU6ICdUUkFOU0ZFUicsXHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICB1c2VySWQ6IGluaXRpYXRvclVzZXJJZCxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHlwZTogJ2RlYml0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogdG9Vc2VyLm5hbWUsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgY3JlZGl0IHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgaXRlbUlkOiBjcmVkaXQuaWQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSJyxcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHVzZXJJZDogdG9Vc2VyLmlkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnY3JlZGl0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICAgIG9wZXJhdGlvbklkLFxyXG4gICAgICAgICAgd2FsbGV0SWQ6IGZyb21XYWxsZXQuaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB0b1dhbGxldC5pZCxcclxuICAgICAgICAgIHJlY2lwaWVudDogdG9Vc2VyLm5hbWUsXHJcbiAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHN0cnVjdHVyZWQgcmVzdWx0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0cmFuc2Zlcjoge1xyXG4gICAgICAgIC4uLnRyYW5zZmVyLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gICAgICB9LFxyXG4gICAgICBqb3VybmFsSWQ6IGpvdXJuYWwuaWQsXHJcbiAgICAgIGRlYml0TGVkZ2VySWQ6IGRlYml0LmlkLFxyXG4gICAgICBjcmVkaXRMZWRnZXJJZDogY3JlZGl0LmlkLFxyXG4gICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICBpZDogdHJhbnNmZXIuaWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXdGcm9tQXZhaWxhYmxlID0gQmlnSW50KGZyb21XYWxsZXQ/LmF2YWlsYWJsZUJhbGFuY2UgYXMgYW55KSAtIGFtdDtcclxuICBjb25zdCBuZXdUb0F2YWlsYWJsZSA9IEJpZ0ludCh0b1dhbGxldD8uYXZhaWxhYmxlQmFsYW5jZSBhcyBhbnkpICsgYW10O1xyXG5cclxuICAvLyBUT0RPOiBUaGlzIG5vdCB3b3JraW5nXHJcbiAgY29uc3QgRFJNZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgYWNjb3VudDogZnJvbVdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgYW1vdW50OiBhbXQsXHJcbiAgICBjdXJyZW5jeSxcclxuICAgIGRlc2M6IHJlYXNvbj8udG9VcHBlckNhc2UoKSxcclxuICAgIGJhbGFuY2U6IG5ld0Zyb21BdmFpbGFibGUsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgdHlwZTogJ0RSJyxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlci5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgIGNvdW50cnk6IGZyb21Vc2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICBtZXNzYWdlOiBEUk1lc3NhZ2UsXHJcbiAgICBwaG9uZTogZnJvbVVzZXI/LnBob25lISxcclxuICAgIHR5cGU6ICdTTVMnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgYWNjb3VudDogdG9XYWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgIGFtb3VudDogYW10LFxyXG4gICAgZGVzYzogcmVhc29uPy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgYmFsYW5jZTogbmV3VG9BdmFpbGFibGUsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgY3VycmVuY3ksXHJcbiAgICB0eXBlOiAnQ1InLFxyXG4gIH0pO1xyXG5cclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgY291bnRyeTogdG9Vc2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgcGhvbmU6IHRvVXNlcj8ucGhvbmUhLFxyXG4gICAgdHlwZTogJ1NNUycsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cmFuc2ZlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZShwYXlsb2FkOiB7XHJcbiAgYWNjb3VudE51bWJlcjogc3RyaW5nO1xyXG4gIGJhbmtDb2RlOiBzdHJpbmc7XHJcbiAgYmFua05hbWU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG59KSB7XHJcbiAgLy8gQ3JlYXRlIHVzZXIgd2FsbGV0XHJcbiAgY29uc3QgdXNlcldhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjb3VudE51bWJlcjogcGF5bG9hZC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICBiYW5rQ29kZTogcGF5bG9hZC5iYW5rQ29kZSxcclxuICAgICAgYmFua05hbWU6IHBheWxvYWQuYmFua05hbWUsXHJcbiAgICAgIHdhbGxldElkOiBwYXlsb2FkPy5pZCxcclxuICAgICAgYXZhaWxhYmxlQmFsYW5jZTogMCxcclxuICAgICAgbGVkZ2VyQmFsYW5jZTogMCxcclxuICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcclxuICAgICAgc3RhdHVzOiAnQUNUSVZFJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyV2FsbGV0O1xyXG59XHJcbiIsImltcG9ydCB7IGhhc2hQYXNzd29yZCwgaGFzaFBpbiwgaGFzaFRva2VuLCB2ZXJpZnlQaW4gfSBmcm9tICdAL3V0aWxzL2hhc2gnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBBZGRyZXNzLFxyXG4gIEJhbmssXHJcbiAgQlZOSW5wdXQsXHJcbiAgRW1iZWRseUlucHV0LFxyXG4gIE5leHRPZktpbixcclxufSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ0AvdXRpbHMvZ2V0VXNlcic7XHJcbmltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCB7IFlvdXZlcmlmeSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy95b3UtdmVyaWZ5JztcclxuaW1wb3J0IHsgdG9JU09EYXRlIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnQC9qb2JzL3F1ZXVlcyc7XHJcbmltcG9ydCAqIGFzIFdhbGxldFNlcnZpY2UgZnJvbSAnLi4vd2FsbGV0cy9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGUoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBkYXRhOiB7XHJcbiAgICBuZXh0T2ZLaW4/OiBOZXh0T2ZLaW47XHJcbiAgICBiYW5rPzogQmFuaztcclxuICAgIGJ2bj86IHN0cmluZztcclxuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xyXG4gICAgZW1haWxWZXJpZmllZD86IGJvb2xlYW47XHJcbiAgICBvY2N1cGF0aW9uPzogc3RyaW5nO1xyXG4gICAgZWR1Y2F0aW9uPzogc3RyaW5nO1xyXG4gICAgcmVsaWdpb24/OiBzdHJpbmc7XHJcbiAgICBtYXJpdGFsU3RhdHVzPzogc3RyaW5nO1xyXG4gICAgZW1haWw/OiBzdHJpbmc7XHJcbiAgICBlbWJlZGx5Q3VzdG9tZXJJZD86IHN0cmluZztcclxuICB9LFxyXG4pIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCAyMDApO1xyXG5cclxuICByZXR1cm4gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgIC8vIEJhc2UgdXBkYXRlXHJcbiAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XHJcblxyXG4gICAgLy8gVERPRDogUmVtb3ZlIHBhc3N3b3JkIHVwZGF0ZSBmcm9tIGhlcmVcclxuICAgIGlmIChkYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIHJlY29yZC5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICBpZiAoZGF0YS5vY2N1cGF0aW9uICE9PSB1bmRlZmluZWQpIHJlY29yZC5vY2N1cGF0aW9uID0gZGF0YS5vY2N1cGF0aW9uO1xyXG4gICAgaWYgKGRhdGEuZWR1Y2F0aW9uICE9PSB1bmRlZmluZWQpIHJlY29yZC5lZHVjYXRpb24gPSBkYXRhLmVkdWNhdGlvbjtcclxuICAgIGlmIChkYXRhLnJlbGlnaW9uICE9PSB1bmRlZmluZWQpIHJlY29yZC5yZWxpZ2lvbiA9IGRhdGEucmVsaWdpb247XHJcbiAgICBpZiAoZGF0YS5idm4gIT09IHVuZGVmaW5lZCkgcmVjb3JkLmJ2biA9IGRhdGEuYnZuO1xyXG4gICAgaWYgKGRhdGEuZW1iZWRseUN1c3RvbWVySWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgcmVjb3JkLmVtYmVkbHlDdXN0b21lcklkID0gZGF0YS5lbWJlZGx5Q3VzdG9tZXJJZDtcclxuICAgIGlmIChkYXRhLm1hcml0YWxTdGF0dXMgIT09IHVuZGVmaW5lZClcclxuICAgICAgcmVjb3JkLm1hcml0YWxTdGF0dXMgPSBkYXRhLm1hcml0YWxTdGF0dXM7XHJcbiAgICBpZiAoZGF0YS5lbWFpbFZlcmlmaWVkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHJlY29yZC5lbWFpbFZlcmlmaWVkID0gZGF0YS5lbWFpbFZlcmlmaWVkO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0eC51c2VyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAuLi5yZWNvcmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSwgYWdlbnQ6IHsgc2VsZWN0OiB7IGlkOiB0cnVlIH0gfSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVsYXRlZCB1cGRhdGVzXHJcbiAgICBpZiAoZGF0YT8ubmV4dE9mS2luICYmIHVzZXIuYWdlbnQ/LmlkKSB7XHJcbiAgICAgIGF3YWl0IHR4LmFnZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuYWdlbnQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmV4dE9mS2luOiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZTogeyAuLi5kYXRhLm5leHRPZktpbiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YT8uYmFuaykge1xyXG4gICAgICBhd2FpdCB0eC5iYW5rLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uZGF0YS5iYW5rLFxyXG4gICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgYWNjb3VudE51bWJlcjogTnVtYmVyKGRhdGEuYmFuay5hY2NvdW50TnVtYmVyKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YT8uYWRkcmVzcykge1xyXG4gICAgICBhd2FpdCB0eC51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiB7IGNyZWF0ZTogeyAuLi5kYXRhLmFkZHJlc3MgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVCVk4oYnZuOiBzdHJpbmcpIHtcclxuICBjb25zdCBidm5IYXNoID0gaGFzaFRva2VuKGJ2bik7XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGVtYWlsVmVyaWZpZWQ6IHRydWUsXHJcbiAgICAgIGJ2bjogYnZuSGFzaCAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gQm9vbGVhbihleGlzdGluZyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5UGhvbmUocGhvbmU6IHN0cmluZykge1xyXG4gIGlmICghcGhvbmUpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGhvbmUgTnVtYmVyIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBwaG9uZTogcGhvbmUgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBpZDogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIHJvbGU6IHRydWUsXHJcbiAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgIGlzTG9ja2VkOiB0cnVlLFxyXG4gICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlEKElEOiBzdHJpbmcpIHtcclxuICBpZiAoIUlEKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dlcGF5IElEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyB1bmlxdWVJRDogSUQgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBpZDogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIHJvbGU6IHRydWUsXHJcbiAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgIGlzTG9ja2VkOiB0cnVlLFxyXG4gICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhc3N3b3JkKGlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICBpZiAocGFzc3dvcmQgIT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFzc3dvcmQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGdldFVzZXIodXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRWZXJpZmljYXRpb24oaWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgaWYgKCFkYXRhLmRvY3VtZW50cy5sZW5ndGgpXHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0F0bGVhc3Qgb25lIG9jdW1lbnQgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXJJZDogaWQsXHJcbiAgICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZTogZGF0YS5kb2N1bWVudHMubWFwKChkb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGRvYy50eXBlLFxyXG4gICAgICAgICAgZmlsZVVybDogZG9jLmZpbGVVcmwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgZG9jdW1lbnRzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2ZXJpZmljYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQaW4oaWQ6IHN0cmluZywgcGF5bG9hZDogeyBwaW46IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgaGFzaGVkUGluID0gYXdhaXQgaGFzaFBpbihwYXlsb2FkLnBpbik7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcGluOiBoYXNoZWRQaW4sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICh1c2VyLmVtYmVkbHlDdXN0b21lcklkKSByZXR1cm4gdXNlcjtcclxuXHJcbiAgLy8gVHJpZ2dlciB3YWxsZXQgY3JlYXRpb25cclxuICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWdncmVnYXRlSWQ6IHVzZXIuaWQsXHJcbiAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5pbml0aWF0ZWQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIHN0cmVldExpbmU6IHVzZXI/LmFkZHJlc3M/LnN0cmVldExpbmUsXHJcbiAgICAgICAgY2l0eTogdXNlci5hZGRyZXNzPy5jaXR5LFxyXG4gICAgICAgIGNvdW50cnk6IHVzZXIuYWRkcmVzcz8uY291bnRyeSxcclxuICAgICAgICBkb2I6IHVzZXIuZG9iLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICBidm46IHVzZXIuYnZuLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHVzZXIuaWQsICdDUkVBVEVXQUxMRVQnKTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlVc2VyUGluKFxyXG4gIGhhc2hlZFBpbjogc3RyaW5nLFxyXG4gIHBheWxvYWQ6IHsgcGluOiBzdHJpbmcgfSxcclxuKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHZlcmlmeVBpbihoYXNoZWRQaW4sIHBheWxvYWQucGluKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVtYmVkbHlVc2VyKHVzZXJJZDogc3RyaW5nLCBkYXRhOiBFbWJlZGx5SW5wdXQpIHtcclxuICBsZXQgZW1iZWRseSA9IHsgaWQ6IGRhdGE/LmVtYmVkbHk/LmlkIH07XHJcblxyXG4gIGlmICghZW1iZWRseS5pZCkge1xyXG4gICAgZW1iZWRseSA9IGF3YWl0IEVtYmVkbHkuY3VzdG9tZXJzLnBlcnNvbmFsKHtcclxuICAgICAgYWRkcmVzczogZGF0YT8uZW1iZWRseT8uYWRkcmVzcyxcclxuICAgICAgY2l0eTogZGF0YT8uZW1iZWRseT8uY2l0eSxcclxuICAgICAgY291bnRyeTogZGF0YT8uZW1iZWRseT8uY291bnRyeSxcclxuICAgICAgZG9iOiBkYXRhPy5lbWJlZGx5Py5kb2IsXHJcbiAgICAgIGZpcnN0TmFtZTogZGF0YT8uZW1iZWRseT8uZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogZGF0YT8uZW1iZWRseT8ubGFzdE5hbWUsXHJcbiAgICAgIG1vYmlsZU51bWJlcjogZGF0YT8uZW1iZWRseT8ucGhvbmUsXHJcbiAgICAgIG1pZGRsZU5hbWU6IGRhdGE/LmVtYmVkbHk/Lm1pZGRsZU5hbWUgPz8gZGF0YT8uZW1iZWRseT8ubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsQWRkcmVzczogZGF0YS5lbWFpbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZW1iZWRseS5pZCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgICAgdG9waWM6ICdlbWJlZGx5LnVzZXIud2FsbGV0LmNyZWF0aW9uLmN1c3RvbWVyLmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgICBlcnJvcjogJ0VtYmVkbHkgcGVyc29uYWwgYWNjb3VudCBjb3VsZCBiZSBjcmVhdGVkJyxcclxuICAgICAgICAgICAgZW1iZWRseSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0VtYmVkbHkgcGVyc29uYWwgYWNjb3VudCBjb3VsZCBiZSBjcmVhdGVkJywgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB1cGRhdGUodXNlcklkLCB7XHJcbiAgICAgIGVtYmVkbHlDdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IEVtYmVkbHkuY3VzdG9tZXJzLnZlcmlmeUtZQyh7XHJcbiAgICBidm46IGRhdGEuYnZuLFxyXG4gICAgY3VzdG9tZXJJZDogZW1iZWRseS5pZCxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2ZXJpZmllZCkge1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi5reWMuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgIGJ2bjogZGF0YS5idm4sXHJcbiAgICAgICAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgICAgICAgZXJyb3I6ICdFbWJlZGx5IEtZQyBjb3VsZCBub3QgYmUgdmVyaWZpZWQnLFxyXG4gICAgICAgICAgdmVyaWZpZWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRW1iZWRseSBLWUMgY291bGQgbm90IGJlIHZlcmlmaWVkJywgNTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVtYmVkbHkud2FsbGV0cy5jcmVhdGUoe1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBjdXN0b21lcklkOiBlbWJlZGx5LmlkLFxyXG4gICAgY3VycmVuY3k6IGRhdGE/LmV4dHJhPy5jdXJyZW5jeSA/PyAnTkdOJyxcclxuICAgIG5hbWU6IGBXZVBheS0ke3VzZXJJZH1gLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlc3VsdCkge1xyXG4gICAgYXdhaXQgcHJpc21hLm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdXNlcklkLFxyXG4gICAgICAgIHRvcGljOiAnZW1iZWRseS51c2VyLndhbGxldC5jcmVhdGlvbi53YWxsZXQuZmFpbGVkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgIHdhbGxldDogcmVzdWx0LFxyXG4gICAgICAgICAgY3VzdG9tZXJJZDogZW1iZWRseS5pZCxcclxuICAgICAgICAgIGVycm9yOiAnV2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBjb3VsZCBub3QgYmUgY3JlYXRlZCcsIDUwMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YWxsZXQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgIGFjY291bnROdW1iZXI6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYWNjb3VudE51bWJlcixcclxuICAgIGJhbmtOYW1lOiByZXN1bHQudmlydHVhbEFjY291bnQ/LmJhbmtOYW1lLFxyXG4gICAgYmFua0NvZGU6IHJlc3VsdC52aXJ0dWFsQWNjb3VudD8uYmFua0NvZGUsXHJcbiAgICBpZDogcmVzdWx0Py5pZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnZuSGFzaCA9IGhhc2hUb2tlbihkYXRhPy5idm4pO1xyXG4gIGF3YWl0IHVwZGF0ZSh1c2VySWQsIHtcclxuICAgIGJ2bjogYnZuSGFzaCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHdhbGxldDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJWTkRhdGEodmFsdWU6IEJWTklucHV0KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFlvdXZlcmlmeS52ZXJpZnlCVk4oe1xyXG4gICAgaWQ6IHZhbHVlLmJ2bixcclxuICAgIGlzU3ViamVjdENvbnNlbnQ6IHRydWUsXHJcbiAgICBwcmVtaXVtQlZOOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4udmFsdWUsXHJcbiAgICBleHRyYToge1xyXG4gICAgICBuYW1lOiBkYXRhPy5maXJzdE5hbWUgKyAnICcgKyBkYXRhPy5sYXN0TmFtZSxcclxuICAgICAgZG9iOiB0b0lTT0RhdGUoZGF0YT8uZGF0ZU9mQmlydGgpLFxyXG4gICAgICBjb3VudHJ5OiBkYXRhPy5jb3VudHJ5LFxyXG4gICAgICBnZW5kZXI6IGRhdGE/LmdlbmRlcixcclxuICAgICAgcGhvbmU6IGRhdGE/Lm1vYmlsZSxcclxuICAgIH0sXHJcbiAgICBlbWJlZGx5OiB7XHJcbiAgICAgIGRvYjogdG9JU09EYXRlKGRhdGE/LmRhdGVPZkJpcnRoKSxcclxuICAgICAgY291bnRyeTogZGF0YT8uY291bnRyeSxcclxuICAgICAgZ2VuZGVyOiBkYXRhPy5nZW5kZXIsXHJcbiAgICAgIHBob25lOiBkYXRhPy5tb2JpbGUsXHJcbiAgICAgIGFkZHJlc3M6IGRhdGE/LmFkZHJlc3M/LmFkZHJlc3NMaW5lLFxyXG4gICAgICBjaXR5OiBkYXRhPy5hZGRyZXNzPy50b3duLFxyXG4gICAgICBmaXJzdE5hbWU6IGRhdGE/LmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICBtaWRkbGVOYW1lOiBkYXRhPy5taWRkbGVOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FwdHVyZUZpbmdlclByaW50KGlkOiBzdHJpbmcsIHBheWxvYWQ6IHsgZmluZ2VyUHJpbnQ6IHN0cmluZyB9KSB7XHJcbiAgLy8gT3B0aW9uYWxseSwgaGFzaCB0aGUgZmluZ2VycHJpbnQgYmVmb3JlIHNhdmluZyBmb3Igc2VjdXJpdHlcclxuICAvLyBjb25zdCBoYXNoZWRGaW5nZXJQcmludCA9IGF3YWl0IGhhc2hQaW4ocGF5bG9hZC5maW5nZXJQcmludCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgZmluZ2VyUHJpbnQ6IHBheWxvYWQuZmluZ2VyUHJpbnQsXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlZ2lzdGVyKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJ2bjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDExKVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5vcHRpb25hbCgpLFxyXG4gICAgcm9sZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC52YWxpZCgnVVNFUicsICdBR0VOVCcsICdBRE1JTicsICdJTlNUSVRVVElPTicsICdNRVJDSEFOVCcpXHJcbiAgICAgIC5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVWZXJpZnlET0IoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZG9iOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvKVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICAgIGJ2bjogSm9pLnN0cmluZygpLm1pbigxMSkubWF4KDExKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVPVFAoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICB0eXBlOiBKb2kuc3RyaW5nKCkudmFsaWQoJ1BIT05FJywgJ0VNQUlMJykuZGVmYXVsdCgnRU1BSUwnKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRm9yZ290UGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICB9KS5vcigncGhvbmUnLCAnZW1haWwnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlTG9naW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUxvZ2luV2l0aEZpbmdlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBmaW5nZXJQcmludDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgdG9rZW46IEpvaS5zdHJpbmcoKS5taW4oNikubWF4KDYpLnJlcXVpcmVkKCksXHJcbiAgICBuZXdQYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig4KS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVSZXNldFBpbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaW46IEpvaS5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCksXHJcbiAgICBvdHA6IEpvaS5zdHJpbmcoKS5taW4oNikubWF4KDYpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVcGRhdGVQaW4oKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGluOiBKb2kuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZvcmdvdFBhc3N3b3JkKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmVyaWZ5QlZOKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJ2bjogSm9pLnN0cmluZygpLm1pbigxMSkubWF4KDExKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIGF1dGhTZXJ2aWNlIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRlRm9yZ290UGFzc3dvcmQsXHJcbiAgVmFsaWRhdGVGb3Jnb3RQaW4sXHJcbiAgVmFsaWRhdGVMb2dpbixcclxuICBWYWxpZGF0ZUxvZ2luV2l0aEZpbmdlcixcclxuICBWYWxpZGF0ZU9UUCxcclxuICBWYWxpZGF0ZVJlZ2lzdGVyLFxyXG4gIFZhbGlkYXRlUmVzZXRQYXNzd29yZCxcclxuICBWYWxpZGF0ZVJlc2V0UGluLFxyXG4gIFZhbGlkYXRlVXBkYXRlUGluLFxyXG4gIFZhbGlkYXRlVmVyaWZ5RE9CLFxyXG4gIFZlcmlmeUJWTixcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgaXNEZXYsIHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICdAL3V0aWxzL2dldFVzZXInO1xyXG5pbXBvcnQgQm90dGxlbmVjayBmcm9tICdib3R0bGVuZWNrJztcclxuaW1wb3J0IHsgc2lnbkFjY2Vzc1Rva2VuIH0gZnJvbSAnQC91dGlscy9qd3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyByZWdpc3RlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlZ2lzdGVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBleGlzdCA9IGF3YWl0IHVzZXJTZXJ2aWNlLnZhbGlkYXRlQlZOKHZhbHVlLmJ2bik7XHJcbiAgICAgIGlmIChleGlzdCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCVk4gYWxyZWFkeSBpbiB1c2UnLCA0MDMpO1xyXG5cclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJWTkRhdGEodmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHBheWxvYWQgYXMgYW55KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCBcclxuICAgICAgICBzdGF0dXM6IDIwMSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgcGhvbmVgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ1Bob25lIG51bWJlciBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdgZW1haWxgJykpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEJWTkRldGFpbHMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmVyaWZ5QlZOKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCVk4gZGV0YWlscyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFVzZXJEZXRhaWxzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRm9yZ290UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXV0aFNlcnZpY2UuZ2V0VXNlckRldGFpbEJ5UGhvbmUodmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBkZXRhaWxzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIGRhdGE6IHBheWxvYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBsb2dpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUxvZ2luKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ2luKHZhbHVlKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBzaWduQWNjZXNzVG9rZW4oeyBpZDogZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBsb2dpbldpdGhGaW5nZXJQcmludChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUxvZ2luV2l0aEZpbmdlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5sb2dpbldpdGhGaW5nZXIodmFsdWUpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHNpZ25BY2Nlc3NUb2tlbih7IGlkOiBkYXRhLmlkIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGZvcmdvdFBhc3N3b3JkKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRm9yZ290UGFzc3dvcmQoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UuZm9yZ290UGFzc3dvcmQodmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIHNlbnQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvZGVTZW50OiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBmb3Jnb3RQaW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVGb3Jnb3RQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UuZm9yZ290UGluKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmICghZGF0YSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiQ291bGRuJ3Qgc2VudCBPVFBcIiwgNTAwKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ09UUCBzZW50IHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb2RlU2VudDogZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHJlc2V0UGFzc3dvcmQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVSZXNldFBhc3N3b3JkKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2V0UGFzc3dvcmQodmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlET0IocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVWZXJpZnlET0IoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QlZORGF0YSh7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgcm9sZTogJ1VTRVInLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghZGF0YSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKFwiQ291bGRuJ3QgdmVyaWZ5IEJWTlwiLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgZG9iID0gZGF0YT8uZXh0cmE/LmRvYjtcclxuICAgICAgY29uc3QgaXNWZXJpZmllZCA9IGRvYiA9PT0gdmFsdWUuZG9iO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQmlydGhkYXkgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlzVmVyaWZpZWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyByZXNldFBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVJlc2V0UGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiwgb3RwIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vIDHvuI/ig6MgRW5zdXJlIE9UUCB3YXMgcHJvdmlkZWRcclxuICAgICAgaWYgKCFvdHApIHtcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ09UUCBpcyByZXF1aXJlZCB0byByZXNldCBQSU4nLCA0MjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAy77iP4oOjIFZhbGlkYXRlIE9UUFxyXG4gICAgICBjb25zdCByZWNvcmQ6IGFueSA9IHt9O1xyXG4gICAgICBpZiAoIWlzRGV2KCkgJiYgb3RwICE9PSAnMjIyMjIyJykgcmVjb3JkLnJlZnJlc2hDb2RlID0gb3RwO1xyXG5cclxuICAgICAgY29uc3Qgb3RwUmVjb3JkID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiBvdHAsIC4uLnJlY29yZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghb3RwUmVjb3JkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIG9yIGV4cGlyZWQgT1RQJywgNDIyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcjogVXNlciB8IG51bGwgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBvdHBSZWNvcmQudXNlcklkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgICAgIC8vIDPvuI/ig6MgUmVzZXQgUElOXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBpbih1c2VyLCB7IHBpbiB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1BJTiByZXNldCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVXBkYXRlUGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IHBpbiB9ID0gdmFsdWU7XHJcblxyXG4gICAgICAvLyAz77iP4oOjIFJlc2V0IFBJTlxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UucmVzZXRQaW4odXNlciwgeyBwaW4gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdQSU4gdXBkYXRlZGQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGbGF3OiBBIHVzZXIgY2FuIHVzZSBhbm90aGVyIHVzZXIgY29kZSB0byB2ZXJpZnkgZXhjZXB0IHVzZXJJRCBpcyBwYXNzZWRcclxuXHJcbiAgICAgIGNvbnN0IGNvZGUgPSByZXEuYm9keT8uY29kZTtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xyXG4gICAgICBpZiAoIWlzRGV2KCkgJiYgY29kZSAhPT0gJzIyMjIyMicpIHJlY29yZC5yZWZyZXNoQ29kZSA9IGNvZGU7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uSW50ZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBpZCwgLi4ucmVjb3JkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF2ZXJpZmljYXRpb24pIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBPVFAnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gRGVsZXRlIGFsbCB1c2VyIE9UUFxyXG4gICAgICBsaW1pdGVyLnNjaGVkdWxlKCgpID0+XHJcbiAgICAgICAgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5kZWxldGVNYW55KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdmVyaWZpY2F0aW9uLnVzZXJJZCB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgeyBlbWFpbFZlcmlmaWVkOiB0cnVlIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtc2c6ICdWZXJpZnkgU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHNlbmRPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVPVFAoKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGF3YWl0IGF1dGhTZXJ2aWNlLnJlc2VuZE9UUChpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnT1RQIFNlbnQgU3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHN0YXRpYyBhc3luYyBkZWxldGVVc2VyQWNjb3VudChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAyKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5kZWxldGVVc2VyQWNjb3VudChpZCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGFjY291bnQgZGVsZXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIiwiLy8gc3JjL21vZHVsZXMvYXV0aC9hdXRoLnJvdXRlcy50c1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCBBdXRoQ29udHJvbGxlci5yZWdpc3Rlcik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBBdXRoQ29udHJvbGxlci5sb2dpbik7XHJcbnJvdXRlci5wb3N0KCcvdmVyaWZ5L2RvYicsIEF1dGhDb250cm9sbGVyLnZlcmlmeURPQik7XHJcbnJvdXRlci5wb3N0KCcvbG9naW4vZmluZ2VycHJpbnQnLCBBdXRoQ29udHJvbGxlci5sb2dpbldpdGhGaW5nZXJQcmludCk7XHJcbnJvdXRlci5wb3N0KCcvcGFzc3dvcmQvZm9yZ290JywgQXV0aENvbnRyb2xsZXIuZm9yZ290UGFzc3dvcmQpO1xyXG5yb3V0ZXIucG9zdCgnL3Bhc3N3b3JkL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQYXNzd29yZCk7XHJcbnJvdXRlci5wdXQoJy86aWQvdmVyaWZ5JywgQXV0aENvbnRyb2xsZXIudmVyaWZ5T1RQKTtcclxucm91dGVyLnBhdGNoKCcvOmlkL3ZlcmlmeScsIEF1dGhDb250cm9sbGVyLnZlcmlmeU9UUCk7XHJcbnJvdXRlci5wb3N0KCcvOmlkL290cCcsIEF1dGhDb250cm9sbGVyLnNlbmRPVFApO1xyXG5yb3V0ZXIucG9zdCgnL3Bpbi9mb3Jnb3QnLCBBdXRoQ29udHJvbGxlci5mb3Jnb3RQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3Jlc2V0JywgQXV0aENvbnRyb2xsZXIucmVzZXRQaW4pO1xyXG5yb3V0ZXIucHV0KCcvcGluL3VwZGF0ZScsIEF1dGhDb250cm9sbGVyLnVwZGF0ZVBpbik7XHJcbnJvdXRlci5nZXQoJy9idm4nLCBBdXRoQ29udHJvbGxlci5nZXRCVk5EZXRhaWxzKTtcclxucm91dGVyLmdldCgnL3VzZXItZGV0YWlscycsIEF1dGhDb250cm9sbGVyLmdldFVzZXJEZXRhaWxzKTtcclxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZS1hY2NvdW50LzppZCcsIEF1dGhDb250cm9sbGVyLmRlbGV0ZVVzZXJBY2NvdW50KTtcclxuXHJcbi8vIEZvcmdldCBQaW5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGluKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBpbjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDQpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVVbmlxdWVJRCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBpZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVBob25lKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIHBob25lOiBKb2kuc3RyaW5nKCkucGF0dGVybigvXlswLTldezEwLDE1fSQvKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlU2V0Q3JlZGVudGlhbCgpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBwaG9uZTogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eWzAtOV17MTAsMTV9JC8pXHJcbiAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oOCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVXBkYXRlVXNlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkub3B0aW9uYWwoKSxcclxuICAgIG9jY3VwYXRpb246IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZWR1Y2F0aW9uOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIHJlbGlnaW9uOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIG1hcml0YWxTdGF0dXM6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgYWRkcmVzczogSm9pLm9iamVjdCh7XHJcbiAgICAgIGNvdW50cnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBzdGF0ZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGNpdHk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBzdHJlZXRMaW5lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgb2ZmaWNlX2FkZHJlc3M6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBsYW5kbWFyazogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICB9KS5yZXF1aXJlZCgpLFxyXG4gICAgYmFuazogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBhY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0eXBlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIH0pLm9wdGlvbmFsKCksXHJcbiAgICBuZXh0T2ZLaW46IEpvaS5vYmplY3Qoe1xyXG4gICAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICByZWxhdGlvbnNoaXA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSkub3B0aW9uYWwoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlUGFzc3dvcmQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oOCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQlZOKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGJudjogSm9pLnN0cmluZygpXHJcbiAgICAgIC5wYXR0ZXJuKC9eXFxkKyQvKSAvLyBvbmx5IGRpZ2l0c1xyXG4gICAgICAubGVuZ3RoKDExKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlT1RQKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGNvZGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAucGF0dGVybigvXlxcZCskLykgLy8gb25seSBkaWdpdHNcclxuICAgICAgLmxlbmd0aCg2KVxyXG4gICAgICAucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGRvY3VtZW50czogSm9pLmFycmF5KCkuaXRlbXMoXHJcbiAgICAgIEpvaS5vYmplY3Qoe1xyXG4gICAgICAgIHR5cGU6IEpvaS5zdHJpbmcoKVxyXG4gICAgICAgICAgLnZhbGlkKFxyXG4gICAgICAgICAgICAnUEFTU1BPUlQnLFxyXG4gICAgICAgICAgICAnTkFUSU9OQUxfSUQnLFxyXG4gICAgICAgICAgICAnRFJJVkVSX0xJQ0VOU0UnLFxyXG4gICAgICAgICAgICAnVVRJTElUWV9CSUxMJyxcclxuICAgICAgICAgICAgJ1ZPVEVSX0NBUkQnLFxyXG4gICAgICAgICAgICAnQ0FDJyxcclxuICAgICAgICAgICAgJ01FTUFSVCcsXHJcbiAgICAgICAgICAgICdJREZST05UJyxcclxuICAgICAgICAgICAgJ0lEQkFDSycsXHJcbiAgICAgICAgICAgICdBVVRIT1JJVFlfTEVUVEVSJyxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGZpbGVVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB9KSxcclxuICAgICksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZpbmdlclByaW50KCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGZpbmdlclByaW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyB1c2VyU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0ZVBhc3N3b3JkLFxyXG4gIFZhbGlkYXRlU2V0Q3JlZGVudGlhbCxcclxuICBWYWxpZGF0ZVVwZGF0ZVVzZXIsXHJcbiAgVmFsaWRhdGVWZXJpZmljYXRpb24sXHJcbiAgVmFsaWRhdGVQaW4sXHJcbiAgVmFsaWRhdGVPVFAsXHJcbiAgVmFsaWRhdGVGaW5nZXJQcmludCxcclxuICBWYWxpZGF0ZVVuaXF1ZUlELFxyXG4gIFZhbGlkYXRlUGhvbmUsXHJcbn0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHRvSVNPRGF0ZSwgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ0AvdXRpbHMvZ2V0VXNlcic7XHJcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gJ2JvdHRsZW5lY2snO1xyXG5cclxuY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKHtcclxuICBtYXhDb25jdXJyZW50OiAxLFxyXG4gIG1pblRpbWU6IDMzMyxcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHNldENyZWRlbnRpYWxzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGlkID0gcmVxPy5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBDdXN0b21FcnJvcignSUQgaXMgcmVxdWlyZWQnLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlU2V0Q3JlZGVudGlhbCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBjcmVkZW50aWFsIHNldCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcih1c2VyKSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVVzZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCcpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVXBkYXRlVXNlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIGlmICh2YWx1ZT8uZW1haWwgJiYgIXVzZXIuZW1iZWRseUN1c3RvbWVySWQpIHtcclxuICAgICAgLy8gICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAvLyAgICAgYWRkcmVzczogdXNlcj8uYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgLy8gICAgIGNpdHk6IHVzZXI/LmFkZHJlc3M/LmNpdHksXHJcbiAgICAgIC8vICAgICBjb3VudHJ5OiB1c2VyPy5hZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAvLyAgICAgZG9iOiB0b0lTT0RhdGUodXNlcj8uZG9iISksXHJcbiAgICAgIC8vICAgICBmaXJzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgIC8vICAgICBsYXN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVsxXSxcclxuICAgICAgLy8gICAgIHBob25lOiB1c2VyPy5waG9uZSxcclxuICAgICAgLy8gICAgIG1pZGRsZU5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJyk/LlsyXSA/PyAnJyxcclxuICAgICAgLy8gICB9O1xyXG5cclxuICAgICAgLy8gICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYSBRdWV1ZVxyXG4gICAgICAvLyAgIGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZUVtYmVkbHlVc2VyKHVzZXIuaWQsIHtcclxuICAgICAgLy8gICAgIGVtYmVkbHk6IGRhdGEsXHJcbiAgICAgIC8vICAgICBlbWFpbDogdmFsdWUuZW1haWwsXHJcbiAgICAgIC8vICAgICBidm46IHVzZXI/LmJ2bj8udHJpbSgpISxcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuXHJcbiAgICAgIGlmIChlLm1lc3NhZ2UuaW5jbHVkZXMoJyhgZW1haWxgKScpKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3QnIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5VXNlckJ5UGhvbmUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaG9uZSgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlQaG9uZSh2YWx1ZS5waG9uZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5VXNlckJ5VW5pcXVlSWQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVVbmlxdWVJRCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlJRCh2YWx1ZS5pZCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlUGluKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgSUQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIUlEKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1BhcmFtcyBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gVmFsaWRhdGVQaW4oKS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IElEIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhZGRyZXNzOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVXNlciBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jcmVhdGVQaW4oSUQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcGluIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB1cGRhdGVkVXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZlcmlmeVBpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCd1bmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlUGluKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IHVzZXJTZXJ2aWNlLnZlcmlmeVVzZXJQaW4odXNlci5waW4hLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHBpbiB2ZXJpZmllZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaXNWZXJpZmllZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkUGFzc3dvcmQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVBhc3N3b3JkKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZShJRCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBwYXNzd29yZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdXNlcixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFZlcmlmaWNhdGlvbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZCA9IHJlcT8ucGFyYW1zLmlkO1xyXG4gICAgICBpZiAoIWlkKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lEIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcbiAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGF3YWl0IHVzZXJTZXJ2aWNlLmFkZFZlcmlmaWNhdGlvbihpZCwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQWdlbnQgdmVyaWZpY2F0aW9uIGFkZGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB2ZXJpZmljYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB2ZXJpZnlPVFAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZU9UUCgpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJlZnJlc2hDb2RlOiB2YWx1ZS5jb2RlLCB1c2VySWQ6IGlkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF2ZXJpZmljYXRpb24pIHRocm93IG5ldyBDdXN0b21FcnJvcignSW52YWxpZCBPVFAnLCA0MjIpO1xyXG5cclxuICAgICAgLy8gRGVsZXRlIGFsbCB1c2VyIE9UUFxyXG4gICAgICAvLyBUT0RPOiBzZW5kIHRvIGJhY2tncm91bmRcclxuICAgICAgYXdhaXQgcHJpc21hLnZlcmlmaWNhdGlvbkludGVudC5kZWxldGVNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHZlcmlmaWNhdGlvbi51c2VySWQgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlKGlkLCB7IGVtYWlsVmVyaWZpZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1zZzogJ1ZlcmlmeSBTdWNjZXNzZnVsJyxcclxuICAgICAgICBkYXRhOiBhd2FpdCBnZXRVc2VyKHVzZXIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3VycmVudFVzZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAzKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbXNnOiAnTG9nZ2VkIGluIFN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXIodXNlciksXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjYXB0dXJlRmluZ2VyUHJpbnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBJRCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgIGlmICghSUQpIHRocm93IG5ldyBDdXN0b21FcnJvcignUGFyYW1zIGlzIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUZpbmdlclByaW50KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBJRCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYWRkcmVzczogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1VzZXIgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgdXNlclNlcnZpY2UuY2FwdHVyZUZpbmdlclByaW50KElELCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGZpbmdlciBQcmludCBhZGRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdXBkYXRlZFVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cclxuXHJcbi8vIGltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyB2ZXJpZnlBY2Nlc3NUb2tlbiB9IGZyb20gJ0AvdXRpbHMvand0JztcclxuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuLyoqIGF1dGggbWlkZGxld2FyZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBBdXRoKFxyXG4gIHJlcTogUmVxdWVzdCxcclxuICByZXM6IFJlc3BvbnNlLFxyXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGFjY2VzcyBhdXRob3JpemUgaGVhZGVyIHRvIHZhbGlkYXRlIHJlcXVlc3RcclxuICAgIGNvbnN0IHRva2VuID0gcmVxPy5oZWFkZXJzPy5hdXRob3JpemF0aW9uPy5zcGxpdCgnICcpWzFdO1xyXG4gICAgaWYgKCF0b2tlbikgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyk7XHJcblxyXG4gICAgLy8gcmV0cmlldmluZyB1c2VyIGRhdGFcclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHZlcmlmeUFjY2Vzc1Rva2VuKHRva2VuKTtcclxuXHJcbiAgICBpZiAoIWRlY29kZWRUb2tlbj8uaWQpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCB0b2tlbiEnIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBkZWNvZGVkVG9rZW4/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7IGFkZHJlc3M6IHRydWUsIHdhbGxldHM6IHRydWUgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyk7XHJcblxyXG4gICAgcmVxLnVzZXIgPSB1c2VyO1xyXG5cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cyg0MDEpXHJcbiAgICAgIC5qc29uKHsgZXJyb3I6IGVycm9yPy5tZXNzYWdlID8/ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQXV0aCBmcm9tICdAL21pZGRsZXdhcmUvYXV0aCc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9tZScsIEF1dGgsIENvbnRyb2xsZXIuY3VycmVudFVzZXIpO1xyXG5yb3V0ZXIucHV0KCcvOmlkJywgQ29udHJvbGxlci51cGRhdGVVc2VyKTtcclxucm91dGVyLnBhdGNoKCcvOmlkJywgQ29udHJvbGxlci51cGRhdGVVc2VyKTtcclxucm91dGVyLnB1dCgnLzppZC9jcmVkZW50aWFscycsIENvbnRyb2xsZXIuc2V0Q3JlZGVudGlhbHMpO1xyXG5yb3V0ZXIucGF0Y2goJy86aWQvY3JlZGVudGlhbHMnLCBDb250cm9sbGVyLnNldENyZWRlbnRpYWxzKTtcclxucm91dGVyLnBvc3QoJy86aWQvdmVyaWZpY2F0aW9uJywgQ29udHJvbGxlci5hZGRWZXJpZmljYXRpb24pO1xyXG5yb3V0ZXIucG9zdCgnLzppZC9waW4nLCBDb250cm9sbGVyLmNyZWF0ZVBpbik7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3ZlcmlmeScsIEF1dGgsIENvbnRyb2xsZXIudmVyaWZ5UGluKTtcclxucm91dGVyLnBvc3QoJy86aWQvZmluZ2VycHJpbnQnLCBDb250cm9sbGVyLmNhcHR1cmVGaW5nZXJQcmludCk7XHJcbnJvdXRlci5wb3N0KCcvcGhvbmUnLCBDb250cm9sbGVyLnZlcmlmeVVzZXJCeVBob25lKTtcclxucm91dGVyLnBvc3QoJy9pZCcsIENvbnRyb2xsZXIudmVyaWZ5VXNlckJ5VW5pcXVlSWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBCdXNpbmVzcyB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnVzaW5lc3MoaWQ6IHN0cmluZywgcGF5bG9hZDogQnVzaW5lc3MpIHtcclxuICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xyXG5cclxuICBpZiAocGF5bG9hZC5hZGRyZXNzKSB7XHJcbiAgICBjb25zdCBhID0gYXdhaXQgcHJpc21hLmFkZHJlc3MuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnBheWxvYWQuYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGRhdGEuYWRkcmVzc0lkID0gYS5pZDtcclxuICB9XHJcblxyXG4gIGlmIChwYXlsb2FkLmJhbmspIHtcclxuICAgIGRhdGEuYmFua3MgPSB7XHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGFjY291bnROYW1lOiBwYXlsb2FkPy5iYW5rPy5hY2NvdW50TmFtZSEsXHJcbiAgICAgICAgYWNjb3VudE51bWJlcjogTnVtYmVyKHBheWxvYWQ/LmJhbms/LmFjY291bnROdW1iZXIhKSxcclxuICAgICAgICBuYW1lOiBwYXlsb2FkPy5iYW5rPy5uYW1lISxcclxuICAgICAgICB0eXBlOiBwYXlsb2FkPy5iYW5rPy50eXBlISxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzcy5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBjYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeSxcclxuICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxyXG4gICAgICBjb250YWN0RW1haWw6IHBheWxvYWQuY29udGFjdEVtYWlsLFxyXG4gICAgICBjb250YWN0UGhvbmU6IHBheWxvYWQuY29udGFjdFBob25lLFxyXG4gICAgICBtZXJjaGFudElkOiBpZCxcclxuICAgICAgLi4uZGF0YSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBidXNpbmVzcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbihpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICBpZiAoIWRhdGEuZG9jdW1lbnRzLmxlbmd0aClcclxuICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQXQgbGVhc3Qgb25lIGRvY3VtZW50IHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgLy8gICBDaGVjayBmb3IgYnVzaW5lc3NcclxuICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzcy5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcbiAgaWYgKCFidXNpbmVzcykgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdCdXNpbmVzcyBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBwcmlzbWEudmVyaWZpY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGJ1c2luZXNzSWQ6IGlkLFxyXG4gICAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBjcmVhdGU6IGRhdGEuZG9jdW1lbnRzLm1hcCgoZG9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICB0eXBlOiBkb2MudHlwZSxcclxuICAgICAgICAgIGZpbGVVcmw6IGRvYy5maWxlVXJsLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7IGRvY3VtZW50czogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdmVyaWZpY2F0aW9uO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUJ1c2luZXNzKCkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KHtcclxuICAgIGNhdGVnb3J5OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgY29udGFjdEVtYWlsOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIGNvbnRhY3RQaG9uZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBzdGFydGVkQXQ6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgIGFkZHJlc3M6IEpvaS5vYmplY3Qoe1xyXG4gICAgICBjb3VudHJ5OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgY2l0eTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIHN0YXRlOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgc3RyZWV0TGluZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGxhbmRtYXJrOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pLFxyXG4gICAgYmFuazogSm9pLm9iamVjdCh7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBhY2NvdW50TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0eXBlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIH0pLm9wdGlvbmFsKCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVZlcmlmaWNhdGlvbigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBkb2N1bWVudHM6IEpvaS5hcnJheSgpLml0ZW1zKFxyXG4gICAgICBKb2kub2JqZWN0KHtcclxuICAgICAgICB0eXBlOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAgIC52YWxpZChcclxuICAgICAgICAgICAgJ1BBU1NQT1JUJyxcclxuICAgICAgICAgICAgJ05BVElPTkFMX0lEJyxcclxuICAgICAgICAgICAgJ0RSSVZFUl9MSUNFTlNFJyxcclxuICAgICAgICAgICAgJ1VUSUxJVFlfQklMTCcsXHJcbiAgICAgICAgICAgICdWT1RFUl9DQVJEJyxcclxuICAgICAgICAgICAgJ0NBQycsXHJcbiAgICAgICAgICAgICdNRU1BUlQnLFxyXG4gICAgICAgICAgICAnSURGUk9OVCcsXHJcbiAgICAgICAgICAgICdJREJBQ0snLFxyXG4gICAgICAgICAgICAnQVVUSE9SSVRZX0xFVFRFUicsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAucmVxdWlyZWQoKSxcclxuICAgICAgICBmaWxlVXJsOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgfSksXHJcbiAgICApLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgTWVyY2hhbnQgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVCdXNpbmVzcywgVmFsaWRhdGVWZXJpZmljYXRpb24gfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGFkZEJ1c2luZXNzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXE/LnBhcmFtcy5pZDtcclxuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJRCBpcyByZXF1aXJlZCcsIDQyMik7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUJ1c2luZXNzKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBidXNpbmVzcyA9IGF3YWl0IE1lcmNoYW50LmNyZWF0ZUJ1c2luZXNzKGlkLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdCdXNpbmVzcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBidXNpbmVzcyxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFZlcmlmaWNhdGlvbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRpb25cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlVmVyaWZpY2F0aW9uKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBNZXJjaGFudC5hZGRWZXJpZmljYXRpb24oaWQsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1ZlcmlmaWNhdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdmVyaWZpY2F0aW9uLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvOmlkL2J1c2luZXNzJywgQ29udHJvbGxlci5hZGRCdXNpbmVzcyk7XHJcbnJvdXRlci5wb3N0KCcvOmlkL3ZlcmlmaWNhdGlvbicsIENvbnRyb2xsZXIuYWRkVmVyaWZpY2F0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJ0Avam9icy9xdWV1ZXMnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBhbW91bnRJbktvYm8sIGZvcm1hdFRyYW5zZmVyU01TLCB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcblxyXG5jb25zdCBUWE5GRUUgPSBwcm9jZXNzLmVudi5FWFRFUk5BTF9QRVJDRU5UID8/IDE1O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBheW91dChwYXlsb2FkOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICBpZiAocGF5bG9hZD8uc3RhdHVzPy50b0xvd2VyQ2FzZSgpICE9PSAnc3VjY2VzcycpXHJcbiAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignRXJyb3IgZnJvbSBFbWJlZGx5JywgNTAwKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRyYW5zZmVyKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1RyYW5zZmVyIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICBpZiAoWydDT01QTEVURUQnLCAnUkVWRVJTRUQnXS5pbmNsdWRlcyh0cmFuc2Zlci5zdGF0dXMpKSByZXR1cm4gdHJhbnNmZXI7XHJcblxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB0cmFuc2Zlci5tZXRhZGF0YSBhcyB7IHByb3ZpZGVJZD86IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZmVyUmVjb3JkID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgeW91IGNhbiB1c2UgZGVjcmVtZW50IGluIHVwZGF0ZVdhbGxldCBpbnN0ZWFkIG9mIHF1ZXJpbmcgaGVyZVxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXIuZnJvbVdhbGxldElkISB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2ZlciA9IGF3YWl0IHR4LnRyYW5zZmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiBtZXRhZGF0YT8ucHJvdmlkZUlkLFxyXG4gICAgICAgICAgc2hvdWxkUmVmdW5kOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0Ftb3VudEluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTsgLy9Db252ZXJ0ZWQgdG8gS29ib1xyXG4gICAgICBjb25zdCBuZXdUb0xlZGdlckJhbCA9XHJcbiAgICAgICAgQmlnSW50KHdhbGxldD8ubGVkZ2VyQmFsYW5jZSBhcyBhbnkpIC0gbmV3QW1vdW50SW5Lb2JvO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFdhbGxldCA9IGF3YWl0IHR4LndhbGxldC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQ/LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGVkZ2VyQmFsYW5jZTogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGl0ZW1JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETzo6IE5PVElGWSBVU0VSXHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybWF0VHJhbnNmZXJTTVMoe1xyXG4gICAgICAgIGFjY291bnQ6IHVwZGF0ZWRXYWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICBhbW91bnQ6IG5ld0Ftb3VudEluS29ibyxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBUUkFOU0ZFUiBUTyAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICBiYWxhbmNlOiB1cGRhdGVkV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyPy5pZCwgJ05PVElGSUNBVElPTicsIHtcclxuICAgICAgICBjb3VudHJ5OiB3YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB3YWxsZXQ/LnVzZXI/LnBob25lISxcclxuICAgICAgICB0eXBlOiAnU01TJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBGRUUgSGVyZVxyXG4gICAgICBjb25zdCBmZWVSYXRlID0gYW1vdW50SW5Lb2JvKE51bWJlcihUWE5GRUUpKTtcclxuXHJcbiAgICAgIC8vIFRPRE86OiBDaGVjayB0aGlzLi4gSXQgbWF5IHNob3cgaW5jb3JyZWN0IGJhbGFuY2UgaW4gU01TIChCZWNhdXNlIHRoZSBiYWxhbmNlIHdhcyBiaWxsZWQgYmVmb3JlKVxyXG4gICAgICBjb25zdCBuZXdCYWxBZnRlckZlZSA9IEJpZ0ludCh1cGRhdGVkV2FsbGV0Py5hdmFpbGFibGVCYWxhbmNlKSAtIGZlZVJhdGU7XHJcblxyXG4gICAgICBjb25zdCBuZXdMZWRnZUJhbEFmdGVyRmVlID1cclxuICAgICAgICBCaWdJbnQodXBkYXRlZFdhbGxldD8ubGVkZ2VyQmFsYW5jZSkgLSBmZWVSYXRlO1xyXG5cclxuICAgICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHdhbGxldD8uaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdMZWRnZUJhbEFmdGVyRmVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZmVlID0gYXdhaXQgdHguZmVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25JZDogdHJhbnNmZXIuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IGZlZS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0NPTVBMRVRFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWdncmVnYXRlSWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgIHRvcGljOiAndHJhbnNmZXIuZXh0ZXJuYWwuZW1iZWRseS5jb21wbGV0ZWQnLFxyXG4gICAgICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgcHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGZlZU1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdXBkYXRlZFdhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogZmVlUmF0ZSxcclxuICAgICAgICB0eXBlOiAnRFInLFxyXG4gICAgICAgIGRlc2M6IGBDb21taXNzaW9uIG9uIE5JUCBUcmFuc2ZlcmAsXHJcbiAgICAgICAgY3VycmVuY3k6IHRyYW5zZmVyLmN1cnJlbmN5LFxyXG4gICAgICAgIGJhbGFuY2U6IG5ld0JhbEFmdGVyRmVlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICAgICAgY291bnRyeTogd2FsbGV0Py51c2VyPy5jb3VudHJ5ID8/ICdORycsXHJcbiAgICAgICAgbWVzc2FnZTogZmVlTWVzc2FnZSxcclxuICAgICAgICBwaG9uZTogd2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWRUcmFuc2ZlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2ZlclJlY29yZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2U7XHJcblxyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIG1lc3NhZ2UgPSBlPy5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyaXRlIFJldmVyc2UgbG9naWNcclxuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdFcnJvciBmcm9tIEVtYmVkbHknKSkge1xyXG4gICAgICBjb25zdCBuZXdBbW91bnRJbktvYm8gPSBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcbiAgICAgIGNvbnN0IG5ld0ZlZUluS29ibyA9IGFtb3VudEluS29ibyhOdW1iZXIoVFhORkVFKSk7XHJcblxyXG4gICAgICBjb25zdCB0cnggPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBwYXlsb2FkLnBheW1lbnRSZWZlcmVuY2UgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCB0eC53YWxsZXQudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmRlYml0QWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiB7IGluY3JlbWVudDogbmV3QW1vdW50SW5Lb2JvICsgbmV3RmVlSW5Lb2JvIH0sXHJcbiAgICAgICAgICAgIGxlZGdlckJhbGFuY2U6IHsgaW5jcmVtZW50OiBuZXdBbW91bnRJbktvYm8gKyBuZXdGZWVJbktvYm8gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2Zlcj8uaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHsgc3RhdHVzOiAnUkVWRVJTRUQnIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdSRVZFUlNFRCcsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0eC5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgICB0b3BpYzogJ3RyYW5zZmVyLmV4dGVybmFsLmVtYmVkbHkucmV2ZXJzZWQnLFxyXG4gICAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlcj8uaWQsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0cmFuc2ZlcixcclxuICAgICAgICAgIHdhbGxldCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE5vdGlmeSB1c2VyIG9mIHJldmVyc2FsXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICAgICAgYWNjb3VudDogdHJ4LndhbGxldC5hY2NvdW50TnVtYmVyLFxyXG4gICAgICAgIGFtb3VudDogbmV3QW1vdW50SW5Lb2JvLFxyXG4gICAgICAgIHR5cGU6ICdDUicsXHJcbiAgICAgICAgZGVzYzogYFJFVkVSU0VEOiAke3BheWxvYWQ/LmNyZWRpdEFjY291bnROYW1lfSAtICR7cGF5bG9hZD8uZGVzY3JpcHRpb259YC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGN1cnJlbmN5OiB0cngudHJhbnNmZXI/LmN1cnJlbmN5ISxcclxuICAgICAgICBiYWxhbmNlOiB0cngud2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyeC50cmFuc2Zlcj8uaWQhLCAnTk9USUZJQ0FUSU9OJywge1xyXG4gICAgICAgIGNvdW50cnk6IHRyeC53YWxsZXQ/LnVzZXI/LmNvdW50cnkgPz8gJ05HJyxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIHBob25lOiB0cngud2FsbGV0Py51c2VyPy5waG9uZSEsXHJcbiAgICAgICAgdHlwZTogJ1NNUycsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdHgudHJhbnNmZXIuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZC5wYXltZW50UmVmZXJlbmNlIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNmZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdHJhbnNmZXI/LmlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdGQUlMRUQnIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgudHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpdGVtSWQ6IHRyYW5zZmVyPy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRCcsXHJcbiAgICAgICAgICBtZXRhZGF0YTogeyBlcnJvcjogbWVzc2FnZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHgub3V0Ym94RXZlbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXI/LmlkLFxyXG4gICAgICAgICAgdG9waWM6ICd0cmFuc2Zlci5leHRlcm5hbC5lbWJlZGx5LmZhaWxlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyPy5pZCxcclxuICAgICAgICAgICAgZXJyb3I6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbG93KHBheWxvYWQ6IGFueSkge1xyXG4gIC8vIEluY2FzZSBvZiBkb3VibGUgd2ViaG9va1xyXG4gIGNvbnN0IF90cmFuc2ZlciA9IGF3YWl0IHByaXNtYS50cmFuc2Zlci5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHBheWxvYWQucmVmZXJlbmNlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChfdHJhbnNmZXIpIHJldHVybiBfdHJhbnNmZXI7XHJcblxyXG4gIGNvbnN0IHdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXQuZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IGFjY291bnROdW1iZXI6IHBheWxvYWQ/LmFjY291bnROdW1iZXIgfSxcclxuICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXdhbGxldCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdXYWxsZXQgbm90IGZvdW5kJywgNDA0KTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBwcmlzbWEucHJvdmlkZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgcHJvdmlkZXI6ICdFTUJFRExZJyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmZXIgPSBhd2FpdCB0eC50cmFuc2Zlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICdFTUJFRExZJyxcclxuICAgICAgICBmcm9tUHJvdmlkZXJJZDogcHJvdmlkZXI/LmlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0eXBlOiAnRVhURVJOQUwnLFxyXG4gICAgICAgIGtpbmQ6ICdJTicsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXk6IHBheWxvYWQ/LnJlZmVyZW5jZSxcclxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogcGF5bG9hZD8ucmVmZXJlbmNlLFxyXG4gICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICBzdGF0dXM6ICdDT01QTEVURUQnLFxyXG4gICAgICAgIHNob3VsZFJlZnVuZDogZmFsc2UsXHJcbiAgICAgICAgY29tcGxldGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB0eXBlOiAnSU5GTE9XJyxcclxuICAgICAgICAgIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBKb3VybmFsRW50cnlcclxuICAgIGNvbnN0IGpvdXJuYWwgPSBhd2FpdCB0eC5qb3VybmFsRW50cnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlZmVyZW5jZTogcGF5bG9hZC5yZWZlcmVuY2UsXHJcbiAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHBheWxvYWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGZyb21Qcm92aWRlcklkOiBwcm92aWRlcj8uaWQsXHJcbiAgICAgICAgICB0b1dhbGxldElkOiB3YWxsZXQuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld1RvTGVkZ2VyQmFsID1cclxuICAgICAgQmlnSW50KHdhbGxldC5sZWRnZXJCYWxhbmNlKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuICAgIGNvbnN0IG5ld1RvQXZhaWxhYmxlID1cclxuICAgICAgQmlnSW50KHdhbGxldC5hdmFpbGFibGVCYWxhbmNlKSArIGFtb3VudEluS29ibyhOdW1iZXIocGF5bG9hZC5hbW91bnQpKTtcclxuXHJcbiAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldElkOiB3YWxsZXQuaWQsXHJcbiAgICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVyLmlkLFxyXG4gICAgICAgIGNoYW5nZTogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgICAgIGJhbGFuY2VBZnRlcjogbmV3VG9MZWRnZXJCYWwsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIHJlYXNvbjogcGF5bG9hZC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyPy5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB3YWxsZXQuaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxlZGdlckJhbGFuY2U6IG5ld1RvTGVkZ2VyQmFsLFxyXG4gICAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IG5ld1RvQXZhaWxhYmxlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCB0eC50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgIGl0ZW1JZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgICAgdHlwZTogJ0RFUE9TSVQnLFxyXG4gICAgICAgIHVzZXJJZDogd2FsbGV0Py51c2VyPy5pZCEsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgICAgICAgIHR5cGU6ICdjcmVkaXQnLFxyXG4gICAgICAgICAgcmVhc29uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiBwYXlsb2FkPy5yZWZlcmVuY2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gIH0pO1xyXG5cclxuICAvL1RPRE86IFRyaWdnZXIgTm90aWZpY2F0aW9uc1xyXG4gIGNvbnN0IG5ld1RvQXZhaWxhYmxlID1cclxuICAgIEJpZ0ludCh3YWxsZXQuYXZhaWxhYmxlQmFsYW5jZSkgKyBhbW91bnRJbktvYm8oTnVtYmVyKHBheWxvYWQuYW1vdW50KSk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRUcmFuc2ZlclNNUyh7XHJcbiAgICBhY2NvdW50OiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgIGFtb3VudDogYW1vdW50SW5Lb2JvKE51bWJlcihwYXlsb2FkLmFtb3VudCkpLFxyXG4gICAgdHlwZTogJ0NSJyxcclxuICAgIGRlc2M6IGBUUkFOU0ZFUiBGUk9NICR7cGF5bG9hZD8uc2VuZGVyTmFtZX0gLSAke3BheWxvYWQ/LmRlc2NyaXB0aW9ufWAudG9VcHBlckNhc2UoKSxcclxuICAgIGN1cnJlbmN5OiB0cmFuc2Zlci5jdXJyZW5jeSxcclxuICAgIGJhbGFuY2U6IG5ld1RvQXZhaWxhYmxlLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgUXVldWUudHJpZ2dlcih0cmFuc2Zlcj8uaWQsICdOT1RJRklDQVRJT04nLCB7XHJcbiAgICBjb3VudHJ5OiB3YWxsZXQudXNlcj8uY291bnRyeSA/PyAnTkcnLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBob25lOiB3YWxsZXQudXNlcj8ucGhvbmUhLFxyXG4gICAgdHlwZTogJ1NNUycsXHJcbiAgfSk7XHJcblxyXG4gIC8vIE1vdmUgbW9uZXkgZnJvbSB1c2VyIHdhbGxldCB0byBvcmdhbml6YXRpb24gd2FsbGV0XHJcblxyXG4gIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICBjb25zdCByZWYgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gIGF3YWl0IHByaXNtYS5vdXRib3hFdmVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBhZ2dyZWdhdGVJZDogdHJhbnNmZXIuaWQsXHJcbiAgICAgIHRvcGljOiAndHJhbnNmZXIuaW50ZXJuYWwub3JnYW5pemF0aW9uLmluaXRpYXRlZCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB0cmFuc2ZlcklkOiB0cmFuc2Zlci5pZCxcclxuICAgICAgICBmcm9tQWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICAgICAgdG9BY2NvdW50OiBlbnZpcm9ubWVudC5lbWJlZGx5Lm9yZ0FjY291bnQsXHJcbiAgICAgICAgcmVtYXJrczogJ1RyYW5zZmVyIGZyb20gdXNlciB3YWxsZXQgdG8gb3JnYW5pemF0aW9uIHdhbGxldCcsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlZixcclxuICAgICAgICBhbW91bnQ6IHBheWxvYWQuYW1vdW50LFxyXG4gICAgICAgIGN1cnJlbmN5OiAnTkdOJyxcclxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIFJlbW92ZSBkYXRhIG9iamVjdCBmcm9tIHRoaXMgUXVldWVcclxuICBhd2FpdCBRdWV1ZS50cmlnZ2VyKHRyYW5zZmVyLmlkLCAnSU5URVJOQUxfVFJBTlNGRVInLCB7XHJcbiAgICBmcm9tQWNjb3VudDogd2FsbGV0LmFjY291bnROdW1iZXIsXHJcbiAgICB0b0FjY291bnQ6IGVudmlyb25tZW50LmVtYmVkbHkub3JnQWNjb3VudCxcclxuICAgIHJlbWFya3M6ICdUcmFuc2ZlciBmcm9tIHVzZXIgd2FsbGV0IHRvIG9yZ2FuaXphdGlvbiB3YWxsZXQnLFxyXG4gICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHJlZixcclxuICAgIGFtb3VudDogcGF5bG9hZC5hbW91bnQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cmFuc2ZlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBFbWJlZGx5IH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHknO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCAqIGFzIHdlYmhvb2tTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIGhhbmRsZVRyYW5zZmVycyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHJlcS5oZWFkZXJzWyd4LWVtYmVkbHktc2lnbmF0dXJlJ107XHJcbiAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuICAgICAgY29uc3QgcmF3Qm9keSA9IGJvZHk/LnRvU3RyaW5nKCd1dGY4Jyk7XHJcblxyXG4gICAgICBpZiAoIXNpZ25hdHVyZSB8fCAhcmF3Qm9keSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ01pc3Npbmcgc2lnbmF0dXJlIG9yIGJvZHknLCA0MDApO1xyXG5cclxuICAgICAgY29uc3QgaXNWZXJpZmllZCA9IGF3YWl0IEVtYmVkbHkudmFsaWRhdGlvbnMudmVyaWZ5V2ViaG9vayhcclxuICAgICAgICByYXdCb2R5LFxyXG4gICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghaXNWZXJpZmllZCkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJbnZhbGlkIHNpZ25hdHVyZScsIDQwMSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSByZXEuYm9keTtcclxuICAgICAgbGV0IHRyYW5zZmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5ldmVudCA9PT0gJ25pcCcpXHJcbiAgICAgICAgdHJhbnNmZXIgPSBhd2FpdCB3ZWJob29rU2VydmljZS5pbmZsb3cocmVzdWx0Py5kYXRhKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZXZlbnQgPT09ICdwYXlvdXQnKVxyXG4gICAgICAgIHRyYW5zZmVyID0gYXdhaXQgd2ViaG9va1NlcnZpY2UucGF5b3V0KHJlc3VsdD8uZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdXZWJob29rIHJlY2VpdmVkIGFuZCB2ZXJpZmllZCcsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXIsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL2FrdXVrJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gIH0pO1xyXG59KTtcclxucm91dGVyLnBvc3QoJy9lbWJlZGx5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnNlbmQoKTtcclxufSk7XHJcbnJvdXRlci5wb3N0KFxyXG4gICcvZW1iZWRseS90cmFuc2ZlcnMnLFxyXG4gIGV4cHJlc3MucmF3KHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gIENvbnRyb2xsZXIuaGFuZGxlVHJhbnNmZXJzLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVUcmFuc2ZlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBzZW5kZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgcmVjZWl2ZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYW1vdW50OiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSwgLy8gc21hbGxlc3QgdW5pdCAoaW50ZWdlcilcclxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKCkubWF4KDMpLnJlcXVpcmVkKCksXHJcbiAgICByZWFzb246IEpvaS5zdHJpbmcoKSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRXh0ZXJuYWxUcmFuc2ZlcigpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCh7XHJcbiAgICBhbW91bnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLCAvLyBzbWFsbGVzdCB1bml0IChpbnRlZ2VyKVxyXG4gICAgY3VycmVuY3k6IEpvaS5zdHJpbmcoKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgIHJlYXNvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGRlc3RpbmF0aW9uQmFuazogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBkZXN0aW5hdGlvbkFjY291bnROdW1iZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVDcmVhdGVXYWxsZXQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgY3VycmVuY3k6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHtcclxuICBWYWxpZGF0ZUNyZWF0ZVdhbGxldCxcclxuICBWYWxpZGF0ZUV4dGVybmFsVHJhbnNmZXIsXHJcbiAgVmFsaWRhdGVUcmFuc2ZlcixcclxufSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcbmltcG9ydCAqIGFzIFdhbGxldFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlRXJyb3JQYXJzZXIgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0ICogYXMgVXNlclNlcnZpY2UgZnJvbSAnLi4vdXNlcnMvc2VydmljZSc7XHJcbmltcG9ydCB7IEVtYmVkbHkgfSBmcm9tICdAL2V4dGVuc2lvbnMvZW1iZWRseSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGJhbmtzIH0gZnJvbSAnQC9leHRlbnNpb25zL2VtYmVkbHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGFzeW5jIHRyYW5zZmVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVRyYW5zZmVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBpZGVtcG90ZW5jeUtleSA9IHJlcS5oZWFkZXIoJ0lkZW1wb3RlbmN5LUtleScpO1xyXG4gICAgICBpZiAoIWlkZW1wb3RlbmN5S2V5KVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignSWRlbXBvdGVuY3kga2V5IG5vdCBmb3VuZCcsIDUwMCk7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2ZlcnJlZCA9IGF3YWl0IFdhbGxldFNlcnZpY2Uud2FsbGV0VG9XYWxsZXRUcmFuc2Zlcih7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgaW5pdGlhdG9yVXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIGlkZW1wb3RlbmN5S2V5LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2ZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGludGVybmFsKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZVRyYW5zZmVyKCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2ZlcnJlZCA9IGF3YWl0IEVtYmVkbHkud2FsbGV0cy50cmFuc2Zlcih7XHJcbiAgICAgICAgYW1vdW50OiB2YWx1ZS5hbW91bnQsXHJcbiAgICAgICAgZnJvbUFjY291bnQ6IHZhbHVlLnNlbmRlcixcclxuICAgICAgICB0b0FjY291bnQ6IGVudmlyb25tZW50LmVtYmVkbHkub3JnQWNjb3VudCArICcnLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgIHJlbWFya3M6IHZhbHVlLnJlYXNvbixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogdHJhbnNmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGV4dGVybmFsVHJhbnNmZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlRXh0ZXJuYWxUcmFuc2ZlcigpLnZhbGlkYXRlKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgY29uc3QgaWRlbXBvdGVuY3lLZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICAgICAgaWYgKCFpZGVtcG90ZW5jeUtleSlcclxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0lkZW1wb3RlbmN5IGtleSBub3QgZm91bmQnLCA1MDApO1xyXG5cclxuICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSBhd2FpdCBXYWxsZXRTZXJ2aWNlLnRyYW5zZmVyVG9FeHRlcm5hbEJhbmsoe1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIGluaXRpYXRvclVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICBzZW5kZXJOYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgaWRlbXBvdGVuY3lLZXksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHRyYW5zZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlV2FsbGV0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcjogYW55ID0gcmVxLnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IFZhbGlkYXRlQ3JlYXRlV2FsbGV0KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlLCA0MjIpO1xyXG5cclxuICAgICAgLy8gVE9ETzogUmV3cml0ZSB0aGlzIGNvZGUgdG8gY3JlYXRlIG11bHRpcGxlIHdhbGxldHNcclxuXHJcbiAgICAgIGlmICh1c2VyPy53YWxsZXRzPy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdXYWxsZXQgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogdXNlci53YWxsZXRzWzBdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHByaXNtYS5hZGRyZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmFkZHJlc3NJZCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZW1iZWRseToge1xyXG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcz8uc3RyZWV0TGluZSxcclxuICAgICAgICAgIGNpdHk6IGFkZHJlc3M/LmNpdHksXHJcbiAgICAgICAgICBjb3VudHJ5OiBhZGRyZXNzPy5jb3VudHJ5LFxyXG4gICAgICAgICAgZG9iOiB1c2VyPy5kb2IsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMF0sXHJcbiAgICAgICAgICBsYXN0TmFtZTogdXNlcj8ubmFtZT8uc3BsaXQoJyAnKVsxXSxcclxuICAgICAgICAgIHBob25lOiB1c2VyPy5waG9uZSxcclxuICAgICAgICAgIG1pZGRsZU5hbWU6IHVzZXI/Lm5hbWU/LnNwbGl0KCcgJylbMl0sXHJcbiAgICAgICAgICBpZDogdXNlcj8uZW1iZWRseUN1c3RvbWVySWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHRyYTogeyBjdXJyZW5jeTogdmFsdWU/LmN1cnJlbmN5IH0sXHJcbiAgICAgICAgZW1haWw6IHVzZXI/LmVtYWlsISxcclxuICAgICAgICBidm46IHVzZXI/LmJ2biEsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBVc2VyU2VydmljZS5jcmVhdGVFbWJlZGx5VXNlcih1c2VyLmlkLCBkYXRhKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1dhbGxldCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB3YWxsZXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdhbGxldEZyb21BY2NvdW50KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudE51bWJlciA9IHJlcS5wYXJhbXM/LmFjY291bnQ7XHJcblxyXG4gICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBwcmlzbWEud2FsbGV0LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgYWNjb3VudE51bWJlcjogYWNjb3VudE51bWJlciB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghd2FsbGV0KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ1dhbGxldCBub3QgZm91bmQnLCA0MDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnV2FsbGV0IHJldHJpZXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogd2FsbGV0LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGUgPSB1c2VFcnJvclBhcnNlcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEJhbmtzKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplQmFua05hbWUgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBjb21tb24gc3VmZml4ZXNcclxuICAgICAgICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgL1xccysocGxjfGx0ZHxsaW1pdGVkfGJhbmt8aG9sZGluZ3M/fGdyb3VwfG5pZyhlcmlhKT98bWljcm9maW5hbmNlfG1mYikkL2dpLFxyXG4gICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJykgLy8gbm9ybWFsaXplIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5uaWdlcmlhbmJhbmtsb2dvcy54eXovJyk7XHJcblxyXG4gICAgICBjb25zdCBhbGxCYW5rcyA9IHJlc3AuZGF0YTtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBjb25zdCBtZXJnZWQgPSBiYW5rcy5tYXAoKGJhbms6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCYW5rTmFtZSA9IG5vcm1hbGl6ZUJhbmtOYW1lKGJhbmsuYmFua05hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9IGFsbEJhbmtzLmZpbmQoKGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEFwaVRpdGxlID0gbm9ybWFsaXplQmFua05hbWUoYi50aXRsZSk7XHJcblxyXG4gICAgICAgICAgLy8gRXhhY3QgbWF0Y2ggYWZ0ZXIgbm9ybWFsaXphdGlvblxyXG4gICAgICAgICAgaWYgKG5vcm1hbGl6ZWRBcGlUaXRsZSA9PT0gbm9ybWFsaXplZEJhbmtOYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAvLyBDaGVjayBpZiBvbmUgY29udGFpbnMgdGhlIG90aGVyIChmb3IgY2FzZXMgbGlrZSBcIkFjY2Vzc1wiIHZzIFwiQWNjZXNzIEJhbmtcIilcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgbm9ybWFsaXplZEFwaVRpdGxlLmluY2x1ZGVzKG5vcm1hbGl6ZWRCYW5rTmFtZSkgfHxcclxuICAgICAgICAgICAgbm9ybWFsaXplZEJhbmtOYW1lLmluY2x1ZGVzKG5vcm1hbGl6ZWRBcGlUaXRsZSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEtlZXAgYWxsIGJhbmtzLCBhZGQgbG9nbyBkYXRhIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChtYXRjaCkgaSsrO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCA/IHsgLi4uYmFuaywgbG9nbzogbWF0Y2gucm91dGUgfSA6IGJhbms7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhiYW5rcyk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1JldHJpZXZlIGFsbCBiYW5rcycsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBtZXJnZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRCYW5rQnlBY2NvdW50TnVtYmVyKCkge31cclxufVxyXG4iLCIvLyBzcmMvbWlkZGxld2FyZS9pZGVtcG90ZW5jeS50c1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vcHJpc21hL2NsaWVudCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaWRlbXBvdGVuY3koXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHJlczogUmVzcG9uc2UsXHJcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxyXG4pIHtcclxuICBjb25zdCBrZXkgPSByZXEuaGVhZGVyKCdJZGVtcG90ZW5jeS1LZXknKTtcclxuICBpZiAoIWtleSkgcmV0dXJuIG5leHQoKTtcclxuXHJcbiAgY29uc3QgcmVxSGFzaCA9IGNyeXB0b1xyXG4gICAgLmNyZWF0ZUhhc2goJ3NoYTI1NicpXHJcbiAgICAudXBkYXRlKEpTT04uc3RyaW5naWZ5KHsgdXJsOiByZXEub3JpZ2luYWxVcmwsIGJvZHk6IHJlcS5ib2R5IH0pKVxyXG4gICAgLmRpZ2VzdCgnaGV4Jyk7XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmlkZW1wb3RlbmN5S2V5LmZpbmRVbmlxdWUoeyB3aGVyZTogeyBrZXkgfSB9KTtcclxuXHJcbiAgaWYgKCFleGlzdGluZykge1xyXG4gICAgLy8gTG9jayBuZXcga2V5IGltbWVkaWF0ZWx5XHJcbiAgICBhd2FpdCBwcmlzbWEuaWRlbXBvdGVuY3lLZXkuY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyBrZXksIHJlcXVlc3RIYXNoOiByZXFIYXNoLCBsb2NrZWRBdDogbmV3IERhdGUoKSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV4aXN0aW5nLnJlcXVlc3RIYXNoICE9PSByZXFIYXNoKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBlcnJvcjogJ0lkZW1wb3RlbmN5IGtleSBjb25mbGljdCcgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXhpc3RpbmcucmVzcG9uc2VCb2R5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhleGlzdGluZy5zdGF0dXNDb2RlID8/IDIwMCkuanNvbihleGlzdGluZy5yZXNwb25zZUJvZHkpO1xyXG4gIH1cclxuXHJcbiAgLy8gS2V5IGV4aXN0cyBidXQgaXMgbG9ja2VkIOKAlCBjb25jdXJyZW50IHJlcXVlc3RcclxuICBpZiAoZXhpc3RpbmcubG9ja2VkQXQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyNSkuanNvbih7IGVycm9yOiAnUmVxdWVzdCBpbiBwcm9ncmVzcycgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcmlnaW5hbEpzb24gPSByZXMuanNvbi5iaW5kKHJlcyk7XHJcbiAgcmVzLmpzb24gPSAoYm9keTogYW55KSA9PiB7XHJcbiAgICBwcmlzbWEuaWRlbXBvdGVuY3lLZXlcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsga2V5IH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVzcG9uc2VCb2R5OiBib2R5LFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICBsb2NrZWRBdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgaWRlbXBvdGVuY3kgcmVjb3JkJywgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gb3JpZ2luYWxKc29uKGJvZHkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBpZGVtcG90ZW5jeSB9IGZyb20gJ0AvbWlkZGxld2FyZS9pZGVtcG90ZW5jeSc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJywgQ29udHJvbGxlci5jcmVhdGVXYWxsZXQpO1xyXG5yb3V0ZXIuZ2V0KCcvYmFua3MnLCBDb250cm9sbGVyLmdldEJhbmtzKTtcclxucm91dGVyLmdldCgnLzphY2NvdW50JywgQ29udHJvbGxlci5nZXRXYWxsZXRGcm9tQWNjb3VudCk7XHJcbnJvdXRlci5wb3N0KCcvdHJhbnNmZXInLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci50cmFuc2Zlcik7XHJcbnJvdXRlci5wb3N0KCcvZXh0ZXJuYWwnLCBpZGVtcG90ZW5jeSwgQ29udHJvbGxlci5leHRlcm5hbFRyYW5zZmVyKTtcclxucm91dGVyLnBvc3QoJy9pbnRlcm5hbCcsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLmludGVybmFsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlQWlydGltZVBheW1lbnQoKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3Qoe1xyXG4gICAgbnVtYmVyOiBKb2kuc3RyaW5nKClcclxuICAgICAgLnBhdHRlcm4oL15bMC05XXsxMCwxNX0kLylcclxuICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICBhbW91bnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgY291bnRyeTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVldWUgfSBmcm9tICdAL2pvYnMvcXVldWVzJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9wcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgYW1vdW50SW5Lb2JvLCBhbW91bnRJbk5haXJhIH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tICdAL3V0aWxzL2N1c3RvbUVycm9yJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhaXJ0aW1lKFxyXG4gIHVzZXJJZDogc3RyaW5nLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkZW1wb3RlbmN5S2V5OiBzdHJpbmc7XHJcbiAgICBudW1iZXI6IHN0cmluZztcclxuICAgIGFtb3VudDogYmlnaW50IHwgbnVtYmVyIHwgc3RyaW5nIHwgYW55O1xyXG4gICAgY291bnRyeTogc3RyaW5nO1xyXG4gIH0sXHJcbikge1xyXG4gIGNvbnN0IGFtdCA9IGFtb3VudEluS29ibyhwYXlsb2FkLmFtb3VudCk7XHJcbiAgaWYgKGFtdCA8PSAwbikgdGhyb3cgbmV3IEVycm9yKCdBbW91bnQgbXVzdCBiZSBwb3NpdGl2ZScpO1xyXG5cclxuICAvLyBpZGVtcG90ZW5jeSBndWFyZFxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFpcnRpbWUuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZGVtcG90ZW5jeUtleTogcGF5bG9hZC5pZGVtcG90ZW5jeUtleSB9LFxyXG4gIH0pO1xyXG4gIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xyXG5cclxuICAvLyBSZXNvbHZlIHNlbmRlciBhbmQgcmVjaXBpZW50XHJcbiAgY29uc3QgZnJvbVVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgIGluY2x1ZGU6IHsgd2FsbGV0czogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGZyb21XYWxsZXQgPSBmcm9tVXNlcj8ud2FsbGV0cz8uWzBdO1xyXG4gIGlmICghZnJvbVdhbGxldCkgdGhyb3cgbmV3IEVycm9yKCdXYWxsZXRzIG5vdCBmb3VuZCcpO1xyXG5cclxuICAvLyAgIENoZWNrIGZvciBzdWZmaWNpZW50IGFtb3VudCBoZXJlXHJcbiAgY29uc3QgYXZhaUJhbCA9IE51bWJlcihmcm9tV2FsbGV0LmF2YWlsYWJsZUJhbGFuY2UpO1xyXG4gIGlmIChhdmFpQmFsIDwgYW10KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBiYWxhbmNlJywgNDIyKTtcclxuXHJcbiAgY29uc3QgYWlydGltZSA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAvLyBsb2NrIHdhbGxldHMgd2l0aCBGT1IgVVBEQVRFXHJcbiAgICAvLyBwYXJhbWV0ZXJpemUgY2FyZWZ1bGx5XHJcbiAgICBjb25zdCBsb2NrZWRSb3dzID0gYXdhaXQgdHguJHF1ZXJ5UmF3VW5zYWZlKFxyXG4gICAgICBgU0VMRUNUICogRlJPTSBcIldhbGxldFwiIFdIRVJFIGlkIElOICgkMSkgRk9SIFVQREFURWAsXHJcbiAgICAgIGZyb21XYWxsZXQuaWQsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG1hcCBsb2NrZWQgcm93c1xyXG4gICAgY29uc3QgbG9ja2VkTWFwID0gKGxvY2tlZFJvd3MgYXMgYW55W10pWzBdO1xyXG4gICAgaWYgKCFsb2NrZWRNYXApIHRocm93IG5ldyBDdXN0b21FcnJvcignRmFpbGVkIHRvIGxvY2sgd2FsbGV0cycsIDUwMCk7XHJcblxyXG4gICAgLy8gY2hlY2sgZnVuZHNcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IEJpZ0ludChsb2NrZWRNYXAuYXZhaWxhYmxlQmFsYW5jZSk7XHJcbiAgICBpZiAoYXZhaWxhYmxlIDwgYW10KSB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0luc3VmZmljaWVudCBmdW5kcycsIDQyMik7XHJcblxyXG4gICAgLy8gY3JlYXRlIEFpcnRpbWUgVHJhbnNhY3Rpb24gcmVjb3JkXHJcbiAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5haXJ0aW1lLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZGVtcG90ZW5jeUtleTogcGF5bG9hZC5pZGVtcG90ZW5jeUtleSxcclxuICAgICAgICB3YWxsZXRJZDogZnJvbVdhbGxldC5pZCxcclxuICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogcGF5bG9hZC5udW1iZXIsXHJcbiAgICAgICAgbmV0d29yazogJ01UTicsXHJcbiAgICAgICAgYW1vdW50OiBhbXQudG9TdHJpbmcoKSxcclxuICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgIH0gYXMgYW55LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHR4LnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbW91bnQ6IC1wYXlsb2FkPy5hbW91bnQ/LnRvU3RyaW5nKCksXHJcbiAgICAgICAgaXRlbUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICB0eXBlOiAnQUlSVElNRScsXHJcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGViaXQnLFxyXG4gICAgICAgICAgcHJvdmlkZXI6ICdBS1VVSycsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBuZXR3b3JrOiAnTVROJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICAgIHdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgSm91cm5hbEVudHJ5XHJcbiAgICBjb25zdCBqb3VybmFsID0gYXdhaXQgdHguam91cm5hbEVudHJ5LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZWZlcmVuY2U6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQWlydGltZSBQdXJjaGFzZSB0byAke3BheWxvYWQubnVtYmVyfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb21wdXRlIG5ldyBiYWxhbmNlc1xyXG4gICAgY29uc3QgbmV3VXNlckxlZGdlckJhbGFuY2UgPSBCaWdJbnQobG9ja2VkTWFwLmxlZGdlckJhbGFuY2UpIC0gYW10O1xyXG4gICAgY29uc3QgbmV3QXZhaWxhYmxlQmFsYW5jZSA9IEJpZ0ludChhdmFpbGFibGUpIC0gYW10O1xyXG5cclxuICAgIC8vIGNyZWF0ZSBsZWRnZXIgcm93cyAoZGViaXQgdGhlbiBjcmVkaXQpLCByZWZlcmVuY2Ugam91cm5hbC5pZFxyXG4gICAgY29uc3QgZGViaXQgPSBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHdhbGxldDogeyBjb25uZWN0OiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0gfSxcclxuICAgICAgICBqb3VybmFsOiB7IGNvbm5lY3Q6IHsgaWQ6IGpvdXJuYWw/LmlkIH0gfSxcclxuICAgICAgICBjaGFuZ2U6IC1hbXQsXHJcbiAgICAgICAgYmFsYW5jZUFmdGVyOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICB0eXBlOiAnVFJBTlNGRVJfREVCSVQnLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICBhaXJ0aW1lSWQ6IHRyYW5zYWN0aW9uLmlkLFxyXG4gICAgICAgICAgcmVhc29uOiBgQWlydGltZSBQdXJjaGFzZSB0byAke3BheWxvYWQubnVtYmVyfWAsXHJcbiAgICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgd2FsbGV0cyBiYWxhbmNlc1xyXG4gICAgY29uc3Qgd2FsbGV0ID0gYXdhaXQgdHgud2FsbGV0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBmcm9tV2FsbGV0LmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsZWRnZXJCYWxhbmNlOiBuZXdVc2VyTGVkZ2VyQmFsYW5jZSxcclxuICAgICAgICBhdmFpbGFibGVCYWxhbmNlOiBuZXdBdmFpbGFibGVCYWxhbmNlLFxyXG4gICAgICAgIHZlcnNpb246IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyArKysrKysrKysrKysrKysrKysrKysrOjorKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbiAgICAvLyBBZGQgdGhpcyB0cmFuc2FjdGlvbiB0byB0aGUgUHJvdmlkZXIgYWNjb3VudFxyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0eC5wcm92aWRlci51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBwcm92aWRlcjogJ0FLVVVLJyB9LFxyXG4gICAgICBjcmVhdGU6IHsgcHJvdmlkZXI6ICdBS1VVSycsIGJhbGFuY2U6IGFtdCB9LFxyXG4gICAgICB1cGRhdGU6IHtcclxuICAgICAgICBiYWxhbmNlOiB7IGluY3JlbWVudDogYW10LnRvU3RyaW5nKCkgfSBhcyBhbnksXHJcbiAgICAgICAgdG90YWw6IHsgaW5jcmVtZW50OiAxIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcm92aWRlciBmbG9hdCBsZWRnZXIgcm93IChjcmVkaXQpXHJcbiAgICBhd2FpdCB0eC5sZWRnZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkLFxyXG4gICAgICAgIGpvdXJuYWxJZDogam91cm5hbC5pZCxcclxuICAgICAgICBjaGFuZ2U6IGFtdCxcclxuICAgICAgICBiYWxhbmNlQWZ0ZXI6IEJpZ0ludChwcm92aWRlci5iYWxhbmNlIGFzIGFueSkgKyBhbXQsXHJcbiAgICAgICAgdHlwZTogJ1RSQU5TRkVSX0NSRURJVCcsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgIGFpcnRpbWVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgICBwcm92aWRlcjogJ0FLVVVLJyxcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBheWxvYWQubnVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG4gICAgLy8gVE9ETzo6IEltcGxlbWVudCBLYWZrYSBvciBTUVNcclxuICAgIC8vIGNyZWF0ZSBvdXRib3ggZXZlbnRcclxuICAgIGF3YWl0IHR4Lm91dGJveEV2ZW50LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZ2dyZWdhdGVJZDogdHJhbnNhY3Rpb24uaWQsXHJcbiAgICAgICAgdG9waWM6ICdhaXJ0aW1lLnB1cmNoYXNlLmluaXRpYXRlZCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgYWlydGltZUlkOiB0cmFuc2FjdGlvbi5pZCxcclxuICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwYXlsb2FkLm51bWJlcixcclxuICAgICAgICAgIG5ldHdvcms6ICdNVE4nLFxyXG4gICAgICAgICAgZnJvbVdhbGxldElkOiBmcm9tV2FsbGV0LmlkLFxyXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRJbk5haXJhKGFtdCksXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ05HTicsXHJcbiAgICAgICAgICBjb3VudHJ5OiBwYXlsb2FkLmNvdW50cnksXHJcbiAgICAgICAgICBhY2NvdW50TnVtYmVyOiB3YWxsZXQuYWNjb3VudE51bWJlcixcclxuICAgICAgICAgIGJhbGFuY2U6IGFtb3VudEluTmFpcmEobmV3QXZhaWxhYmxlQmFsYW5jZSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldHVybiBzdHJ1Y3R1cmVkIHJlc3VsdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHJhbnNhY3Rpb246IHtcclxuICAgICAgICAuLi50cmFuc2FjdGlvbixcclxuICAgICAgICBhbW91bnQ6IGFtb3VudEluTmFpcmEoYW10KSxcclxuICAgICAgfSxcclxuICAgICAgam91cm5hbElkOiBqb3VybmFsLmlkLFxyXG4gICAgICBkZWJpdExlZGdlcklkOiBkZWJpdC5pZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IFF1ZXVlLnRyaWdnZXIoYWlydGltZS50cmFuc2FjdGlvbi5pZCwgJ0FJUlRJTUUnKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYWlydGltZSxcclxuICAgIGFtb3VudDogYW1vdW50SW5OYWlyYShhbXQpLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJ0AvdXRpbHMvY3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZUFpcnRpbWVQYXltZW50IH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgKiBhcyBQYXltZW50U2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBhaXJ0aW1lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBWYWxpZGF0ZUFpcnRpbWVQYXltZW50KCkudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBDdXN0b21FcnJvcihlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UsIDQyMik7XHJcblxyXG4gICAgICBjb25zdCBpS2V5ID0gcmVxLmhlYWRlcignSWRlbXBvdGVuY3ktS2V5Jyk7XHJcbiAgICAgIGlmICghaUtleSkgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdJZGVtcG90ZW5jeSBrZXkgbm90IGZvdW5kJywgNTAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50U2VydmljZS5haXJ0aW1lKHVzZXIuaWQsIHtcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBpZGVtcG90ZW5jeUtleTogaUtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBaXJ0aW1lIHB1cmNoYXNlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgZGF0YTogcGF5bWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBpZGVtcG90ZW5jeSB9IGZyb20gJ0AvbWlkZGxld2FyZS9pZGVtcG90ZW5jeSc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvYWlydGltZScsIGlkZW1wb3RlbmN5LCBDb250cm9sbGVyLmFpcnRpbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL3ByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFcnJvclBhcnNlciB9IGZyb20gJ0AvdXRpbHMnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgLy8gR2V0IGFsbCB0cmFuc2FjdGlvbnMgYnkgdXNlclxyXG4gIHN0YXRpYyBhc3luYyBhbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVxPy51c2VyO1xyXG4gICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDdXN0b21FcnJvcignVW5hdXRob3JpemVkJywgNDAxKTtcclxuXHJcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSByZXEucXVlcnk/LmZpbHRlcnMgPz8ge307XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIocmVxLnF1ZXJ5Py5wYWdlKSA/PyAwO1xyXG4gICAgICBjb25zdCBzaXplID0gTnVtYmVyKHJlcS5xdWVyeT8uc2l6ZSkgPz8gMTA7XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxyXG4gICAgICAgIHRha2U6IHNpemUsXHJcbiAgICAgICAgc2tpcDogcGFnZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdUcmFuc2FjdGlvbnMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2FjdGlvbnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgc2luZ2xlIHRyYW5zYWN0aW9uIGJ5IElEXHJcbiAgc3RhdGljIGFzeW5jIGdldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXE/LnVzZXI7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdVbmF1dGhvcml6ZWQnLCA0MDEpO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zPy5pZDtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb24gcmV0cmlldmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB0cmFuc2FjdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlID0gdXNlRXJyb3JQYXJzZXIoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlLnN0YXR1cykuanNvbihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJywgQ29udHJvbGxlci5nZXQpO1xyXG5yb3V0ZXIuZ2V0KCcvJywgQ29udHJvbGxlci5hbGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0AvY29uZmlnL2Vudic7XHJcbmltcG9ydCB7IFMzQ2xpZW50LCBQdXRPYmplY3RDb21tYW5kIH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJztcclxuaW1wb3J0IHsgZ2V0U2lnbmVkVXJsIH0gZnJvbSAnQGF3cy1zZGsvczMtcmVxdWVzdC1wcmVzaWduZXInO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5jb25zdCByMiA9IG5ldyBTM0NsaWVudCh7XHJcbiAgcmVnaW9uOiAnYXV0bycsIC8vIENsb3VkZmxhcmUgUjIgdXNlcyBcImF1dG9cIlxyXG4gIGVuZHBvaW50OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLnVybCxcclxuICBjcmVkZW50aWFsczoge1xyXG4gICAgYWNjZXNzS2V5SWQ6IGVudmlyb25tZW50LmNsb3VkZmxhcmUua2V5ISxcclxuICAgIHNlY3JldEFjY2Vzc0tleTogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5zZWNyZXQhLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY2xhc3MgQ2xvdWRmbGFyZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyB1cGxvYWRUb1IyKGZpbGVQYXRoOiBzdHJpbmcsIGtleVByZWZpeCA9ICd1cGxvYWRzJyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBmaWxlU3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpO1xyXG4gICAgY29uc3Qgb2JqZWN0S2V5ID0gYCR7a2V5UHJlZml4fS8ke0RhdGUubm93KCl9LSR7ZmlsZU5hbWV9YDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCByMi5zZW5kKFxyXG4gICAgICAgIG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgICAgIEJ1Y2tldDogZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXQhLFxyXG4gICAgICAgICAgS2V5OiBvYmplY3RLZXksXHJcbiAgICAgICAgICBCb2R5OiBmaWxlU3RyZWFtLFxyXG4gICAgICAgICAgQ29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLCAvLyBhZGp1c3QgZm9yIGltYWdlc1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gUHVibGljIFVSTCBpZiBidWNrZXQgcG9saWN5IGFsbG93c1xyXG4gICAgICByZXR1cm4gYCR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmx9LyR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS5idWNrZXR9LyR7b2JqZWN0S2V5fWA7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQ2xvdWRmbGFyZSBSMiB1cGxvYWQgZmFpbGVkOicsIGVycik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2VuZXJhdGVVcGxvYWRVUkwoXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgY29udGVudFR5cGU6IHN0cmluZyxcclxuICAgIGV4cGlyZXNJbjogbnVtYmVyID0gNjAgKiA1LCAvLyA1IG1pblxyXG4gICkge1xyXG4gICAgY29uc3Qga2V5ID0gYHVwbG9hZHMvJHtjcnlwdG8ucmFuZG9tVVVJRCgpfS0ke2ZpbGVOYW1lfWA7XHJcblxyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgQnVja2V0OiBlbnZpcm9ubWVudC5jbG91ZGZsYXJlLmJ1Y2tldCxcclxuICAgICAgS2V5OiBrZXksXHJcbiAgICAgIENvbnRlbnRUeXBlOiBjb250ZW50VHlwZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNpZ25lZFVybCA9IGF3YWl0IGdldFNpZ25lZFVybChyMiwgY29tbWFuZCwgeyBleHBpcmVzSW4gfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc2lnbmVkVXJsLCBrZXkgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xvdWRmbGFyZSB9IGZyb20gJ0AvZXh0ZW5zaW9ucy9jbG91ZGZsYXJlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAL2NvbmZpZy9lbnYnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnQC91dGlscy9jdXN0b21FcnJvcic7XHJcbmltcG9ydCB7IHVzZUVycm9yUGFyc2VyIH0gZnJvbSAnQC91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBhc3luYyBnZW5lcmF0ZVVwbG9hZFVSTChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZmlsZU5hbWUsIGNvbnRlbnRUeXBlIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGlmICghZmlsZU5hbWUgfHwgIWNvbnRlbnRUeXBlKVxyXG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignZmlsZU5hbWUgYW5kIGNvbnRlbnRUeXBlIHJlcXVpcmVkJywgNDIyKTtcclxuXHJcbiAgICAgIGNvbnN0IGNsb3VkZmxhcmUgPSBuZXcgQ2xvdWRmbGFyZSgpO1xyXG4gICAgICBjb25zdCB7IHNpZ25lZFVybCwga2V5IH0gPSBhd2FpdCBjbG91ZGZsYXJlLmdlbmVyYXRlVXBsb2FkVVJMKFxyXG4gICAgICAgIGZpbGVOYW1lLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHVwbG9hZFVybDogc2lnbmVkVXJsLFxyXG4gICAgICAgIHB1YmxpY1VybDogYCR7ZW52aXJvbm1lbnQuY2xvdWRmbGFyZS51cmx9LyR7a2V5fWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc3QgZSA9IHVzZUVycm9yUGFyc2VyKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoZS5zdGF0dXMpLmpzb24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgYXV0aFJvdXRlcyBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoLnJvdXRlcyc7XHJcbmltcG9ydCBhZ2VudFJvdXRlcyBmcm9tICcuL21vZHVsZXMvYWdlbnRzL2FnZW50LnJvdXRlcyc7XHJcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vbW9kdWxlcy91c2Vycy9yb3V0ZXMnO1xyXG5pbXBvcnQgbWVyY2hhbnRSb3V0ZXMgZnJvbSAnLi9tb2R1bGVzL21lcmNoYW50cy9yb3V0ZXMnO1xyXG5pbXBvcnQgd2ViaG9va1JvdXRlcyBmcm9tICcuL21vZHVsZXMvd2ViaG9va3Mvcm91dGVzJztcclxuaW1wb3J0IFdhbGxldFJvdXRlcyBmcm9tICcuL21vZHVsZXMvd2FsbGV0cy9yb3V0ZXMnO1xyXG5pbXBvcnQgUGF5bWVudFJvdXRlcyBmcm9tICcuL21vZHVsZXMvcGF5bWVudHMvcm91dGVzJztcclxuaW1wb3J0IFRyYW5zYWN0aW9uUm91dGVzIGZyb20gJy4vbW9kdWxlcy90cmFuc2FjdGlvbnMvcm91dGVzJztcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tICcuL21vZHVsZXMvQ29udHJvbGxlcic7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4vbWlkZGxld2FyZS9hdXRoJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnVzZSgnL2F1dGgnLCBhdXRoUm91dGVzKTtcclxucm91dGVyLnVzZSgnL3VzZXJzJywgdXNlclJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy93ZWJob29rcycsIHdlYmhvb2tSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvYWdlbnRzJywgQXV0aCwgYWdlbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvbWVyY2hhbnRzJywgQXV0aCwgbWVyY2hhbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvd2FsbGV0cycsIEF1dGgsIFdhbGxldFJvdXRlcyk7XHJcbnJvdXRlci51c2UoJy9wYXltZW50cycsIEF1dGgsIFBheW1lbnRSb3V0ZXMpO1xyXG5yb3V0ZXIudXNlKCcvdHJhbnNhY3Rpb25zJywgQXV0aCwgVHJhbnNhY3Rpb25Sb3V0ZXMpO1xyXG5yb3V0ZXIucG9zdCgnL3VwbG9hZHMvdXJsJywgQXV0aCwgQmFzZUNvbnRyb2xsZXIuZ2VuZXJhdGVVcGxvYWRVUkwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCIvLyBzcmMvYXBwLnRzXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJy4vbWlkZGxld2FyZS9lcnJvckhhbmRsZXInO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoaGVsbWV0KCkpO1xyXG5hcHAudXNlKGNvcnMoeyBvcmlnaW46ICcqJyB9KSk7IC8vIHRpZ2h0ZW4gbGF0ZXJcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKG1vcmdhbignY29tYmluZWQnKSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQXBwID0gKCkgPT4ge1xyXG4gIGFwcC5nZXQoJy8nLCAoXywgcmVzKSA9PiByZXMuanNvbih7IG9rOiB0cnVlIH0pKTtcclxuICBhcHAuZ2V0KCcvaGVhbHRoJywgKF8sIHJlcykgPT4gcmVzLmpzb24oeyBvazogdHJ1ZSB9KSk7XHJcblxyXG4gIC8vIHJlZ2lzdGVyIHJvdXRlc1xyXG4gIGFwcC51c2UoJy9hcGkvdjEnLCBSb3V0ZXMpO1xyXG4gIC8vIGFwcC51c2UoZXJyb3JIYW5kbGVyKTtcclxuXHJcbiAgYXBwLnVzZSgocmVxLCByZXMpPT57XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogXCJFbmRwb2ludCBub3QgZm91bmQuIHBsZWFzZSwgY2hlY2sgdGhlIHVybCBhbmQgdHJ5IGFnYWluLlwifSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gYXBwO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGDwn5qAIFdlcGF5IGJhY2tlbmQgbGlzdGVuaW5nIG9uIHBvcnQ6IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImZvcmdvdFBhc3N3b3JkIiwiQ2xpZW50IiwiY3J5cHRvIiwibGltaXRlciIsIlRYTkZFRSIsInJlZGlzQ2xpZW50IiwiQnVsbFF1ZXVlIiwiYWRkVmVyaWZpY2F0aW9uIiwiV2FsbGV0U2VydmljZS5jcmVhdGUiLCJWYWxpZGF0ZU9UUCIsInVzZXJTZXJ2aWNlLnZhbGlkYXRlQlZOIiwidXNlclNlcnZpY2UuZ2V0QlZORGF0YSIsImF1dGhTZXJ2aWNlLnJlZ2lzdGVyIiwiYXV0aFNlcnZpY2UuZ2V0VXNlckRldGFpbEJ5UGhvbmUiLCJhdXRoU2VydmljZS5sb2dpbiIsImF1dGhTZXJ2aWNlLmxvZ2luV2l0aEZpbmdlciIsImF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkIiwiYXV0aFNlcnZpY2UuZm9yZ290UGluIiwiYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZCIsImF1dGhTZXJ2aWNlLnJlc2V0UGluIiwidXNlclNlcnZpY2UudXBkYXRlIiwiYXV0aFNlcnZpY2UucmVzZW5kT1RQIiwiYXV0aFNlcnZpY2UuZGVsZXRlVXNlckFjY291bnQiLCJyb3V0ZXIiLCJWYWxpZGF0ZVZlcmlmaWNhdGlvbiIsInVzZXJTZXJ2aWNlLmdldFVzZXJCeVBob25lIiwidXNlclNlcnZpY2UuZ2V0VXNlckJ5SUQiLCJ1c2VyU2VydmljZS5jcmVhdGVQaW4iLCJ1c2VyU2VydmljZS52ZXJpZnlVc2VyUGluIiwidXNlclNlcnZpY2UuYWRkVmVyaWZpY2F0aW9uIiwidXNlclNlcnZpY2UuY2FwdHVyZUZpbmdlclByaW50IiwiQ29udHJvbGxlciIsIk1lcmNoYW50LmNyZWF0ZUJ1c2luZXNzIiwiTWVyY2hhbnQuYWRkVmVyaWZpY2F0aW9uIiwid2ViaG9va1NlcnZpY2UuaW5mbG93Iiwid2ViaG9va1NlcnZpY2UucGF5b3V0IiwiV2FsbGV0U2VydmljZS53YWxsZXRUb1dhbGxldFRyYW5zZmVyIiwiV2FsbGV0U2VydmljZS50cmFuc2ZlclRvRXh0ZXJuYWxCYW5rIiwiVXNlclNlcnZpY2UuY3JlYXRlRW1iZWRseVVzZXIiLCJQYXltZW50U2VydmljZS5haXJ0aW1lIiwiYXV0aFJvdXRlcyIsInVzZXJSb3V0ZXMiLCJ3ZWJob29rUm91dGVzIiwiYWdlbnRSb3V0ZXMiLCJtZXJjaGFudFJvdXRlcyIsIldhbGxldFJvdXRlcyIsIlBheW1lbnRSb3V0ZXMiLCJUcmFuc2FjdGlvblJvdXRlcyIsImFwcCIsIlJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNDLE1BQU0sQ0FBQyxTQUFpQixDQUFDLE1BQU0sR0FBRyxZQUFBO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVDLElBQUEsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMvQixDQUFDO0FBSU0sTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUM7QUFDckM7QUFDRCxDQUFBLENBQUM7O0FDVkYsdUJB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QUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE9BQU87QUFDbEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsV0FBVztBQUNqQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxlQUFlO0FBQ3JCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsT0FBTztBQUNiLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsK0JBQStCO0FBQ3JDLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsd0NBQXdDO0FBQzlDLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsU0FBUztBQUNmLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsYUFBYTtBQUNuQixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxPQUFPO0FBQ2xCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsOENBQThDO0FBQ3BELFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsZ0NBQWdDO0FBQ3RDLFFBQUEsU0FBUyxFQUFFLEtBQUs7QUFDaEIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE1BQU07QUFDWixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFFBQVE7QUFDZCxRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFNBQVM7QUFDZixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLHdCQUF3QjtBQUM5QixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLGVBQWU7QUFDckIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxXQUFXO0FBQ2pCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsVUFBVTtBQUNoQixRQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxNQUFNO0FBQ1osUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxPQUFPO0FBQ2IsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxrQkFBa0I7QUFDeEIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxZQUFZO0FBQ2xCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFdBQVc7QUFDakIsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSw0Q0FBNEM7QUFDbEQsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxRQUFRO0FBQ2QsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxVQUFVO0FBQ2hCLFFBQUEsU0FBUyxFQUFFLE1BQU07QUFDakIsUUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNYLEtBQUE7QUFDRCxJQUFBO0FBQ0UsUUFBQSxJQUFJLEVBQUUsWUFBWTtBQUNsQixRQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2pCLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDWCxLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsSUFBSSxFQUFFLFlBQVk7QUFDbEIsUUFBQSxTQUFTLEVBQUUsT0FBTztBQUNsQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElBQUksRUFBRSxTQUFTO0FBQ2YsUUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQixRQUFBLElBQUksRUFBRSxJQUFJO0FBQ1gsS0FBQTtBQUNELElBQUE7QUFDRSxRQUFBLElB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
