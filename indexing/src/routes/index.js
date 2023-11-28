const express = require('express');
const indexingRoutes = require('./indexing.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: indexingRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
