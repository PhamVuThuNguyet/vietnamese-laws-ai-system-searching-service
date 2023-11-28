const express = require('express');
const topicsController = require('../../modules/topics/topics.controller');
const router = express.Router();

router.get('/', topicsController.index);

module.exports = router;
