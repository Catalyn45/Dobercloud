

const winston = require('winston');

const LOGGER_CONFIG = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.align(),
        winston.format.printf(info => `[${[info.timestamp]}] [${info.level.toUpperCase()}] ${info.message}`),
    ),
    level: process.env.LOG_LEVEL && process.env.LOG_LEVEL.toLocaleLowerCase() || 'info'
}

const logger = winston.createLogger(LOGGER_CONFIG);

const log_requests = (req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
}

module.exports = {
    PORT: process.env.PORT || 3000,
    logger,
    log_requests
}