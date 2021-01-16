import { createConnection, Connection, useContainer } from 'typeorm';
import { Container } from 'typedi';
import config from '../config';

export const testConn = async (drop = false): Promise<Connection> => {
  useContainer(Container);
  return createConnection({
    type: 'postgres',
    logging: false,
    url: config.databaseUrl,
    entities: ['src/models/*{.ts,.js}'],
    synchronize: drop,
    dropSchema: drop,
    cli: {
      entitiesDir: '../models',
      migrationsDir: '../migration'
    }
  });
};
