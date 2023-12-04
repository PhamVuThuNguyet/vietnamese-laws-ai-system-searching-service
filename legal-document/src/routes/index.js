/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

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
