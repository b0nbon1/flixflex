import { buildSchema, Resolver, Query } from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import { Container } from 'typedi';

import { RegisterResolver } from '../modules/User/register/Register';
import { LoginResolver } from '../modules/User/Login/Login';
import { UserProfile } from '../modules/User/Profile/User';
import { authChecker } from '../auth/authChecker';
import { SocialAuthResolver } from '../modules/User/Login/social-auth';
import { ResetPasswordResolver } from '../modules/User/Profile/resetPassword';
import { FileResolver } from '../modules/shared/upload';
import { CinemaResolver } from '../modules/Cinema/cinema-resolver';

@Resolver()
class WelcomeResolver {
  @Query(() => String)
  async welcome(): Promise<string> {
    return 'welcome to Kencinema 👋🏾';
  }
}

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    authChecker,
    resolvers: [
      WelcomeResolver,
      RegisterResolver,
      LoginResolver,
      UserProfile,
      SocialAuthResolver,
      ResetPasswordResolver,
      FileResolver,
      CinemaResolver
    ],
    container: Container,
  });
