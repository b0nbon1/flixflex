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
