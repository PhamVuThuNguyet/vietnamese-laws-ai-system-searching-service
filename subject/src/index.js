const app = require('./app');
const connectDB = require('./config/database');
const logger = require('./utils/logger.utils');
const environmentConfig = require('./config/environment.config');
const listEndpoints = require('express-list-endpoints');
const { logAllRoutes } = require('./utils/misc.utils');

connectDB()
  .then(() => {
    logger.info('Connected to DATABASE')
    app.listen(3003, () => {
      logger.info('App listening on port ' + 3003);
      logAllRoutes(listEndpoints(app));
    });
  })
  .catch((err) => {
    console.log(err);
    logger.error(err)
  });
