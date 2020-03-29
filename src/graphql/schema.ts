import { buildSchema, Resolver, Query } from 'type-graphql';
import { GraphQLSchema } from 'graphql';

@Resolver()
class WelcomeResolver {
  @Query(() => String)
  async welcome(): Promise<string> {
    return 'welcome to Kencinema 👋🏾';
  }
}

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [WelcomeResolver]
  });
