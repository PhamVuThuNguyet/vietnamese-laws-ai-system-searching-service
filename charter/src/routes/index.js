const express = require('express');
const charterRoutes = require('./charters.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: charterRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
