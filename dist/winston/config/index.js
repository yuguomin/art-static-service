"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const winston = require('winston');
console.log('path', path_1.join(__dirname, `../logs/app.log`));
const options = {
    file: {
        level: 'error',
        filename: path_1.join(__dirname, `../logs/error.log`),
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    }
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file)
    ],
    exitOnError: false,
});
logger.stream = {
    write(message, encoding) {
        logger.info(message);
    }
};
// module.exports = logger;
exports.default = logger;
