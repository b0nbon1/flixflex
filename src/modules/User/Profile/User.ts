import { Resolver, Query, Authorized, Ctx } from 'type-graphql';
import { User } from '../../../models/User';
import { Context } from '../../../types/Context';

@Resolver()
export class UserProfile {
  @Authorized()
  @Query(() => User)
  async profile(@Ctx() ctx: Context): Promise<User> {
    const user = await User.findOne({
      where: [{ id: ctx.req.session.userId }]
    });

    return user;
  }

  @Authorized(['admin'])
  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    const users = await User.find();

    return users;
  }
}
