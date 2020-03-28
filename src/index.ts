/* eslint-disable require-jsdoc */
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import * as ormConfig from './config/ormconfig';
import logger from './lib/winston';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello(): string {
    return 'hello world 👋🏾';
  }
}

const main = async (): Promise<void> => {
  await createConnection(ormConfig.dbOptions)
    .then(async () => {
      logger.info('Connected to DB');
    })
    .catch((error) => logger.error('TypeORM connection error: %o', error));

  const schema = await buildSchema({
    resolvers: [HelloResolver]
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    logger.info('server started at 🚀 http://localhost:4000');
  });
};

main();
