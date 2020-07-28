import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
// import morgan from 'morgan';
import passport from 'passport';
import dbOptions from './config/ormconfig';
import logger from './lib/winston';
import { createSchema } from './graphql/schema';
import config from './config';
import { redis } from './redis';

async function bootstrap() {
  await createConnection(dbOptions)
    .then(async () => {
      logger.info('Connected to DB');
    })
    .catch((error) => logger.error('TypeORM connection error: %o', error));
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });

  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: 'qid',
      secret: config.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: config.env === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );

  app.use(passport.initialize());
  // app.use(morgan('dev'));
  app.get('/', (req, res) =>
    res.status(200).json({ message: 'Welcome to Cinema' })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(config.PORT, () => {
    logger.info(
      `\
graphql server started at 🚀   http://localhost:4000${apolloServer.graphqlPath} \
      `
    );
  });
}

bootstrap();
