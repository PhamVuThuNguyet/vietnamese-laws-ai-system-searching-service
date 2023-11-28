const express = require('express');
const topicsController = require('../api/topics.controller');
const router = express.Router();

router.get('/', topicsController.index);

module.exports = router;
