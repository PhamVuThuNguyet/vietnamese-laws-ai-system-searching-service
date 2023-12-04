/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const legalDocumentsController = require('../api/legal-documents.controller');
const router = express.Router();

router.get('/', legalDocumentsController.index);
router.post('/', legalDocumentsController.create);
router.patch('/:id', legalDocumentsController.update);

module.exports = router;
