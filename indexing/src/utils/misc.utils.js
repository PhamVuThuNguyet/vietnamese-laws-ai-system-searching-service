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