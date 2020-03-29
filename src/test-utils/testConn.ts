import { createConnection, Connection } from 'typeorm';
import config from '../config';

export const testConn = (drop = false): Promise<Connection> =>
  createConnection({
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
