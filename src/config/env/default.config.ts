import dotenv from 'dotenv';

dotenv.config();
export default {
  PORT: process.env.PORT || 3080,
  secret: process.env.SECRET,
  databaseUrl: process.env.DATABASE_URL,
  debug: false,
  env: process.env.NODE_ENV || 'development'
};
