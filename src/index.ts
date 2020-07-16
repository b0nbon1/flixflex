import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import ormConfig from './config/ormconfig';
import logger from './lib/winston';
import { createSchema } from './graphql/schema';

async function bootstrap() {
  await createConnection(ormConfig)
    .then(async () => {
      logger.info('Connected to DB');
    })
    .catch((error) => logger.error('TypeORM connection error: %o', error));
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema
  });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    logger.info(
      `\
graphql server started at 🚀   http://localhost:4000${apolloServer.graphqlPath} \
      `
    );
  });
}

bootstrap();
