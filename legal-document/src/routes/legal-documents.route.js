const express = require('express');
const legalDocumentsController = require('../api/legal-documents.controller');
const router = express.Router();

router.get('/', legalDocumentsController.index);
router.post('/', legalDocumentsController.create);
router.patch('/:id', legalDocumentsController.update);

module.exports = router;
