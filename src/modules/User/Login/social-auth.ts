/* eslint-disable no-underscore-dangle */
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import {
  authenticateFacebook,
  authenticateGoogle
} from '../../../auth/passport';

import { User } from '../../../models/User';
import { Context } from '../../../types/Context';
import { upsertUser } from './socialAuth.service';

@Resolver()
export class SocialAuthResolver {
  @Mutation(() => User, { nullable: true })
  async authFacebook(
    @Arg('accessToken') accessToken: string | null,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    const { req, res } = ctx;
    req.body = {
      ...req.body,
      access_token: accessToken
    };

    const { data } = await authenticateFacebook(req, res);

    if (data) {
      const {
        profile: {
          _json: { name, email, id }
        }
      } = data;

      const user = await upsertUser({
        name,
        email,
        picture: `http://graph.facebook.com/${id}/picture?type=square`
      });

      ctx.req.session.userId = user.id;
      return user;
    }

    return null;
  }

  @Mutation(() => User, { nullable: true })
  async authGoogle(
    @Arg('accessToken') accessToken: string | null,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    const { req, res } = ctx;
    req.body = {
      ...req.body,
      access_token: accessToken
    };

    const { data } = await authenticateGoogle(req, res);

    if (data) {
      const {
        profile: {
          _json: { name, picture, email }
        }
      } = data;

      const user = await upsertUser({
        name,
        email,
        picture
      });

      ctx.req.session.userId = user.id;

      return user;
    }

    return null;
  }
}
