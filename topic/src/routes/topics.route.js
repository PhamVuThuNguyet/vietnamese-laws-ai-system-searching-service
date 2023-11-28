const express = require('express');
const topicsController = require('../api/topics.controller');
const router = express.Router();

router.get('/', topicsController.index);
router.post('/', topicsController.create);
router.patch('/:id', topicsController.update);

module.exports = router;
