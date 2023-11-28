const app = require('./app');
const connectDB = require('./config/database');
const logger = require('./utils/logger.utils');
const environmentConfig = require('./config/environment.config');
const listEndpoints = require('express-list-endpoints');
const { logAllRoutes } = require('./utils/misc.utils');

connectDB()
  .then(() => {
    logger.info('Connected to DATABASE')
    app.listen(3002, () => {
      logger.info('App listening on port ' + 3002);
      logAllRoutes(listEndpoints(app));
    });
  })
  .catch((err) => logger.error(err));
