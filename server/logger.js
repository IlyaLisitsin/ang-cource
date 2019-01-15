const winston = require('winston')

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'chosen-cource.log' })
  ]
});

module.exports = logger
