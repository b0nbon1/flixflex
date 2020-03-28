import merge from 'lodash.merge';
import dotenv from 'dotenv';

const config = require('./env/default');


if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  let localConfig = {};

  try {
    // The environment file might not exist
    localConfig = require(`./env/${config.env}`);
    localConfig = localConfig || {};
  } catch (err) {
    localConfig = {};
  }
  merge(config, localConfig);
}

export default config;
