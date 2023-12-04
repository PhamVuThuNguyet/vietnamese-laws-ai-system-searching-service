/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const topicsController = require('../api/topics.controller');
const router = express.Router();

router.get('/', topicsController.index);
router.post('/', topicsController.create);
router.patch('/:id', topicsController.update);

module.exports = router;
