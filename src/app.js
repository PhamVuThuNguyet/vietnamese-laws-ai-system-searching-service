const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const routes = require('./routes/v1');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

module.exports = app;
