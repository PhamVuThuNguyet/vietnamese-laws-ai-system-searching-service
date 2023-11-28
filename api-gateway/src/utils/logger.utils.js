const loggerLib = require('node-color-log');

const logger = {
  log(...args) {
    return loggerLib.color('green').log(...args);
  },
  info(...args) {
    return loggerLib.color('blue').info(...args);
  },
  error(...args) {
    return loggerLib.color('red').error(...args);
  },
};

module.exports = logger;