import { ConnectionOptions } from 'typeorm';
import config from '.';

const dbOptions: ConnectionOptions = {
  type: 'postgres',
  logging: true,
  logger: 'file',
  url: config.databaseUrl,
  entities: ['src/models/*{.ts,.js}'],
  synchronize: true,
  migrations: ['src/database/migration'],
  cli: {
    entitiesDir: 'dist/models',
    migrationsDir: 'dist/database/migration'
  }
};

export default dbOptions;
