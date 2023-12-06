/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const glossariesController = require('../api/glossaries.controller');
const router = express.Router();

router.get('/', glossariesController.index);
// router.post('/', glossariesController.create);

module.exports = router;
