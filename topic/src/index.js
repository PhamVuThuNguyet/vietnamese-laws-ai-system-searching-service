/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const app = require('./app');
const connectDB = require('./config/database');
const logger = require('./utils/logger.utils');
const environmentConfig = require('./config/environment.config');
const listEndpoints = require('express-list-endpoints');
const { logAllRoutes } = require('./utils/misc.utils');

connectDB()
  .then(() => {
    logger.info('Connected to DATABASE');
    app.listen(environmentConfig.port, () => {
      logger.info('App listening on port ' + environmentConfig.port);
      logAllRoutes(listEndpoints(app));
    });
  })
  .catch((err) => logger.error(err));
