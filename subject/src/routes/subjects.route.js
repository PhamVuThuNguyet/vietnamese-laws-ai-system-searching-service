/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const subjectsController = require('../api/subjects.controller');
const router = express.Router();

router.get('/', subjectsController.index);
router.post('/', subjectsController.create);
router.patch('/:id', subjectsController.update);

module.exports = router;
