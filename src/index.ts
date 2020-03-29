/* eslint-disable require-jsdoc */
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as ormConfig from './config/ormconfig';
import logger from './lib/winston';
import { createSchema } from './graphql/schema';

const main = async (): Promise<void> => {
  await createConnection(ormConfig.dbOptions)
    .then(async () => {
      logger.info('Connected to DB');
    })
    .catch((error) => logger.error('TypeORM connection error: %o', error));

  const schema = await createSchema();

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    logger.info('server started at 🚀 http://localhost:4000');
  });
};

main();
