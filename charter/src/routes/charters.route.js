/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const chartersController = require('../api/charters.controller');
const router = express.Router();

router.get('/', chartersController.index);
router.post('/', chartersController.create);
router.patch('/:id', chartersController.update);

module.exports = router;
