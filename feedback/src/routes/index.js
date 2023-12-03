const express = require('express');
const topicRoutes = require('./feedback.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: topicRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
