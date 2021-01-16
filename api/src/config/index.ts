/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import merge from 'lodash.merge';
import dotenv from 'dotenv';
import config from './env/default.config';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  let localConfig = {};

  try {
    // The environment file might not exist
    // tslint:disable-next-line: no-var-requires
    localConfig = require(`./env/${config.env}.config`).default;
    localConfig = localConfig || {};
  } catch (err) {
    localConfig = {};
  }
  merge(config, localConfig);
}

export default config;
