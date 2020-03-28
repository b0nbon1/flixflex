/* eslint-disable require-jsdoc */
import {
  createLogger,
  format,
  transports,
  LoggerOptions,
  Logger,
  LeveledLogMethod
} from 'winston';

const { combine, timestamp, simple, json } = format;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const myCustomLevels: Record<string, any> = {
  levels: {
    data: 10,
    protocol: 9,
    debug: 8,
    info: 7,
    notice: 6,
    note: 5,
    warn: 4,
    error: 3,
    crit: 2,
    alert: 1,
    emerg: 0
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWinstonLogger<T>(
  options?: Pick<LoggerOptions, Exclude<keyof LoggerOptions, 'levels'>> & {
    levels: T;
  }
) {
  return createLogger(options) as Logger & Record<keyof T, LeveledLogMethod>;
}

const logger = createWinstonLogger({
  level: 'debug',
  levels: myCustomLevels.levels,
  format: combine(timestamp(), json(), format.splat()),
  transports: [
    new transports.Console({
      format: combine(
        simple(),
        format.colorize({
          all: true
        })
      )
    }),
    new transports.File({ filename: '.logs/error.log', level: 'error' }),
    new transports.File({
      filename: '.logs/info.log',
      level: 'info'
    })
  ],
  exitOnError: false
});

logger.protocol({});

export default logger;
