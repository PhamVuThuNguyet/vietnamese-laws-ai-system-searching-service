/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const indexingController = require('../api/indexing.controller');
const router = express.Router();

router.get('/', indexingController.index);
router.post('/', indexingController.create);
router.patch('/:id', indexingController.update);

module.exports = router;
