const express = require('express');
const feedbackController = require('../api/feedback.controller');
const router = express.Router();

router.get('/', feedbackController.index);
router.post('/', feedbackController.create);

module.exports = router;
