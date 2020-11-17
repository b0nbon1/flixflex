import 'reflect-metadata';
import fs from 'fs';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import passport from 'passport';
import { graphqlUploadExpress } from 'graphql-upload';
import dbOptions from './config/ormconfig';
import logger from './lib/winston';
import { createSchema } from './graphql/schema';
import config from './config';
import { redis } from './redis';
import { User } from './models/User';

const dir = './files';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

async function bootstrap() {
  await createConnection(dbOptions)
    .then(async () => {
      logger.info('Connected to DB');
    })
    .catch((error) => logger.error('TypeORM connection error: %o', error));
  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    uploads: false,
    context: async ({ req, res }: any) => {
      if (req.session.userId) {
        const user = await User.findOne({
          where: [{ id: req.session.userId }]
        });

        req.session.user = user;
      }
      return { req, res };
    }
  });

  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/static', express.static('files'));

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
  app.get('/', (req, res) =>
    res.status(200).json({ message: 'Welcome to Cinema' })
  );

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 15 }));

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
