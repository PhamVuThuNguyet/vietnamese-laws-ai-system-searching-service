const express = require('express');
const chartersController = require('../api/charters.controller');
const router = express.Router();

router.get('/', chartersController.index);
router.post('/', chartersController.create);
router.patch('/:id', chartersController.update);

module.exports = router;
