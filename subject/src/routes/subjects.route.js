const express = require('express');
const subjectsController = require('../api/subjects.controller');
const router = express.Router();

router.get('/', subjectsController.index);
router.post('/', subjectsController.create);
router.patch('/:id', subjectsController.update);

module.exports = router;
