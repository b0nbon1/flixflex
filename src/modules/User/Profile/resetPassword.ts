import { Resolver, Mutation, Arg } from 'type-graphql';

import { User } from '../../../models/User';
import { sendMail, sendTxt } from './resetPassword.service';

const resetCode = Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000);

@Resolver()
export class ResetPasswordResolver {
  @Mutation(() => User, { nullable: true })
  async resetPassword(
    @Arg('email') email: string | null,
    @Arg('phoneNumber') phone: string | null
  ): Promise<boolean | null> {
    let user: User;
    if (!email) {
      user = await User.findOne({ where: { phone } });
      if (!user) {
        throw new Error(
          'Phone Number does not exist please try to signup again.'
        );
      }

      const upd = await User.update({ email }, { resetCode });
      console.log(upd);

      await sendTxt(resetCode, phone);

      return true;
    }
    user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Email does not exist please try to signup again.');
    }

    const upd = await User.update({ email }, { resetCode });
    console.log(upd);

    await sendMail({
      name: user.name,
      to: email,
      verifyCode: resetCode
    });

    return true;
  }
}
