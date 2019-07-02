"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const winston = require('winston');
const options = {
    error: {
        level: 'error',
        filename: path_1.join(__dirname, `../logs/error.log`),
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false
    }
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.error),
    ],
    exitOnError: false,
});
logger.stream = {
    write(message, encoding) {
        logger.error(message);
    }
};
exports.default = logger;
