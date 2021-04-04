import express from 'express';
import fs from 'fs';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import morganLogger from 'morgan';
import router from './routes/index';
import logger from './utils/winston';
import { handleSuccess, handleError } from './utils/response';
import ErrorHandler from './utils/error';
import config from './config';

const isDevelopment = config.env;

const app = express();

app.use(morganLogger('common', {
  stream: fs.createWriteStream('.logs/request.log', { flags: 'a' })
}));

app.use(morganLogger('dev'));
app.use(cors());

app.use(urlencoded({ extended: false }));
app.use(json());
app.set('port', config.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  logger.info(`Express running → PORT ${server.address().port}`);
});

// used in testing heroku
app.get('/', (req, res) => handleSuccess(200, 'Welcome to FlixFlex', res));

app.use(router);
app.use((req, res) => handleError(404, 'Route not found', res));

// development error handler middleware
app.use((err, req, res, next) => {
  if (isDevelopment !== 'development') {
    next(err);
  }
  logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${
    req.ip
  } - Stack: ${err.stack}`);
  return handleError(err.statusCode || 500, `${err.message}.`, res);
});

// Production and testing error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${
    req.ip
  } - Stack: ${err.stack}`);
  return handleError(err.statusCode || 500, err.message, res);
});

process.on('unhandledRejection', (reason) => {
  throw new ErrorHandler(reason);
});

process.on('uncaughtException', (error) => {
  logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
  process.kill(process.pid, 'SIGTERM');
});
// Gracefull shut downs.
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received.');
  logger.info('Closing http server.');
  server.close(() => {
    logger.info('Http server closed.');
  });
});

export default app;
