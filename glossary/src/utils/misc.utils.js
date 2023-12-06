/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const logger = require('./logger.utils');

const logAllRoutes = (routes) => {
  routes.map((route) => {
    route.methods.map((method) => {
      logger.info(`Mapped {${route.path}, ${method}} route`);
    });
  });
};

module.exports = {
  logAllRoutes,
};