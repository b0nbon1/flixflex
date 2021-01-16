import dbConfig from './index';

const config = {
  type: 'postgres',
  url: dbConfig.databaseUrl,
  entities: ['src/**/*.entity{.ts,.js}'],
  seeds: ['src/database/seeds/**/*.seed.ts'],
  factories: ['src/database/factories/**/*.factory.ts']
};

export default config;
