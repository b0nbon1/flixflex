import { ConnectionOptions } from 'typeorm';
import config from './index';

export const dbOptions: ConnectionOptions = {
  type: 'postgres',
  logging: true,
  logger: 'file',
  url: config.databaseUrl,
  entities: ['src/models/*{.ts,.js}'],
  synchronize: true,
  migrations: ['src/migration/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migration'
  }
};
