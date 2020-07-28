import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { compareHash } from '../../../utils/hash';

import { User } from '../../../models/User';
import { Context } from '../../../types/Context';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('email') email: string | null,
    @Arg('phoneNumber') phoneNumber: string | null,
    @Arg('password') password: string,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    let user: User;
    if (!email) {
      user = await User.findOne({ where: { phone: phoneNumber } });
    } else {
      user = await User.findOne({ where: { email } });
    }

    if (!user) {
      return null;
    }

    if (!user.active) {
      return null;
    }

    const valid = await compareHash(password, user.password);

    if (!valid) {
      return null;
    }

    ctx.req.session.userId = user.id;

    return user;
  }
}
