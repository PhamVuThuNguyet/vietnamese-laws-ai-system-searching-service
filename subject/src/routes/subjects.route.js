const express = require('express');
const subjectsController = require('../api/subjects.controller');
const router = express.Router();

router.get('/', subjectsController.index);

module.exports = router;
