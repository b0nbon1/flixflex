import ejs from 'ejs';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import logger from './winston';
import { Imail } from '../interfaces/mail';
import config from '../config';

const auth = {
  auth: {
    api_key: config.mailgunKey,
    domain: config.mailgunUrl
  }
};

export const mailer = async (mailOptionsObject: Imail): Promise<void> => {
  let msg = {};
  ejs.renderFile(
    `${__dirname}/../../../public/mail/${mailOptionsObject.htmlPath}`,
    mailOptionsObject.data,
    {},
    (err, html) => {
      if (err) {
        logger.error(err);
      } else {
        msg = {
          from: 'no-reply@cinema.com',
          to: mailOptionsObject.toAddress,
          subject: mailOptionsObject.subject,
          // 'h:Reply-To': 'reply2this@company.com',
          html
        };
      }
    }
  );

  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));

  await nodemailerMailgun.sendMail(msg, (err, info) => {
    if (err) {
      logger.error(`${err}`);
    } else {
      logger.info('success sent mail, %o', info);
    }
  });
};
