/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

module.exports = app;
