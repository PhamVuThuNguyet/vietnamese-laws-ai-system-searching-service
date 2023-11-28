const express = require('express');
const topicRoutes = require('./topics.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/topics',
    route: topicRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
