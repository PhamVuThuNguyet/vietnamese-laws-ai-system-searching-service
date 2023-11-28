const express = require('express');
const indexingController = require('../api/indexing.controller');
const router = express.Router();

router.get('/', indexingController.index);
router.post('/', indexingController.create);
router.patch('/:id', indexingController.update);

module.exports = router;
