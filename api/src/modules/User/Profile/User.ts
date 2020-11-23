import { Resolver, Query, Authorized, Ctx, Mutation, Arg } from 'type-graphql';
import { User } from '../../../models/User';
import { Context } from '../../../types/Context';
import { ProfileInput } from './profile-input';

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

  @Authorized()
  @Mutation(() => User)
  async updateProfile(
    @Arg('data') data: ProfileInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    await User.update(ctx.req.session.userId, data);

    const user = await User.findOne({
      where: [{ id: ctx.req.session.userId }]
    });

    return user;
  }
}
