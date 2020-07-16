import { ConnectionOptions } from 'typeorm';
import config from './index';

const dbOptions: ConnectionOptions = {
  type: 'postgres',
  logging: true,
  logger: 'file',
  url: config.databaseUrl,
  entities: ['dist/models/*{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/database/migration'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migration'
  }
};

export default dbOptions;
