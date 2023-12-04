/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

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