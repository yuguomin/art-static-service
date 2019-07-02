import { join } from 'path';
const winston = require('winston');

const options = {
  error: {
    level: 'error',
    filename: join(__dirname, `../../../logs/error.log`),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.error),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write(message, encoding) {
    logger.error(message);
  }
};

export default logger;