/* eslint-disable no-unused-expressions */
import { mailer } from '../../../lib/Mailer';
import messenger from '../../../lib/Sms';
import { ImailOptionsObject } from '../../../types/mail';

export const sendTxt = async (code: number, phone: string): Promise<void> => {
  const textMessage = `Your reset password code is: ${code}`;
  await messenger(phone, textMessage);
};

export const sendMail = async (
  mailOptions: ImailOptionsObject
): Promise<void> => {
  await mailer({
    toAddress: mailOptions.to,
    htmlPath: 'resetPasswordMail.ejs',
    subject: 'Reset Password Email',
    data: mailOptions
  });
};

export const sendConfirmText = async (phone: string | null): Promise<void> => {
  const textMessage = `Your password has been update for cinema app. please reset again if it's not you who updated.`;
  // tslint:disable-next-line: no-unused-expression
  phone && (await messenger(phone, textMessage));
};

export const sendConfirmMail = async (
  mailOptions: ImailOptionsObject
): Promise<void> => {
  await mailer({
    toAddress: mailOptions.to,
    htmlPath: 'updatePasswordMail.ejs',
    subject: 'Password has been updated successfully on cinema app',
    data: mailOptions
  });
};
