/* eslint-disable no-unused-expressions */
import { getConnection } from 'typeorm';
import bcrypt from 'bcryptjs';
import { ImailOptionsObject } from '../../../interfaces/mail';
import { User } from '../../../models/User';
import { mailer } from '../../../lib/Mailer';
import messenger from '../../../lib/Sms';
// import config from '../../../config';

const sendMail = async (mailOptions: ImailOptionsObject): Promise<void> => {
  await mailer({
    toAddress: mailOptions.to,
    htmlPath: 'verificationCodeMail.ejs',
    subject: 'Email verification code from cinema',
    data: mailOptions
  });
};

const sendTxt = async (code: number, phone: string): Promise<void> => {
  const textMessage = `Your cinema verification code is: ${code}`;
  await messenger(phone, textMessage);
};

const registerService = async (
  name: string,
  useEmail: boolean,
  email: string | null,
  phone: string | null,
  password: string
): Promise<User> => {
  const registerWith = useEmail ? 'email' : 'phone';
  const verificationCode = Math.floor(
    Math.random() * (1000000 - 100000 + 1) + 100000
  );

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      {
        name,
        verificationCode,
        password: hashedPassword,
        ...(useEmail && { email }),
        ...(!useEmail && { phone })
      }
    ])
    .onConflict(
      `("${registerWith}") DO UPDATE SET "name" = excluded."name", "password" = excluded."password"`
    )
    .returning('*')
    .execute();

  useEmail
    ? sendMail({
        to: email,
        verifyCode: verificationCode,
        name
      })
    : sendTxt(verificationCode, phone);

  return user.generatedMaps[0] as User;
};

const verificationService = async (
  verificationCode: number,
  id: string
): Promise<User> => {
  const user = await User.findOne({
    where: [{ verificationCode, id }]
  });

  if (!user) {
    throw new Error(
      'something went wrong while verifying the code, try to signup again'
    );
  }

  const updatedUser = await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({
      verificationCode: null,
      active: true
    })
    .where('id = :id', { id })
    .returning('*')
    .execute();

  return updatedUser.raw[0] as User;
};

const resendVerificationService = async (
  email: string,
  phone: string,
  useEmail: boolean
): Promise<User> => {
  const user = await User.findOne({
    where: [
      { email, active: false },
      { phone, active: false }
    ]
  });

  if (!user) {
    throw new Error('Email does not exist please try to signup again.');
  }

  useEmail
    ? sendMail({
        to: email,
        verifyCode: user.verificationCode,
        name: user.name
      })
    : sendTxt(user.verificationCode, phone);

  return user as User;
};

export { registerService, verificationService, resendVerificationService };
