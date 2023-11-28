const express = require('express');
const subjectRoutes = require('./subjects.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: subjectRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
