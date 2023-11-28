const express = require('express');
const legalDocumentRoutes = require('./legal-documents.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: legalDocumentRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
