import { Resolver, Mutation, Arg } from 'type-graphql';

import { User } from '../../../models/User';
import {
  sendMail,
  sendTxt,
  sendConfirmText,
  sendConfirmMail
} from './resetPassword.service';
import { hashPassword } from '../../../utils/hash';

const resetCode = Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000);

@Resolver()
export class ResetPasswordResolver {
  @Mutation(() => User, { nullable: true })
  async resetPassword(
    @Arg('email') email: string | null,
    @Arg('phoneNumber') phone: string | null
  ): Promise<User | null> {
    let user: User;
    if (!email) {
      user = await User.findOne({ where: { phone } });
      if (!user) {
        throw new Error(
          'Phone Number does not exist please try to signup again.'
        );
      }

      await User.update({ phone }, { resetCode });

      sendTxt(resetCode, phone);

      return user;
    }
    user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Email does not exist please try to signup again.');
    }

    await User.update({ email }, { resetCode });

    sendMail({
      name: user.name,
      to: email,
      verifyCode: resetCode
    });

    return user;
  }

  @Mutation(() => Boolean, { nullable: true })
  async updatePassword(
    @Arg('id') id: string,
    @Arg('code') code: number,
    @Arg('password') password: string
  ): Promise<boolean | null> {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return false;
    }

    if (user.resetCode !== code) {
      return false;
    }

    const hashedPassword = await hashPassword(password);

    await User.update({ id }, { resetCode: null, password: hashedPassword });

    sendConfirmMail({
      name: user.name,
      to: user.email
    });

    sendConfirmText(user.phone);

    return true;
  }
}
