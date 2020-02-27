const dotenv = require('dotenv');

dotenv.config();
const config = {
  PORT: process.env.PORT || 3080,
  secret: process.env.SECRET,
  database: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  debug: false,
  env: process.env.NODE_ENV || 'development'
};

module.exports = config;
