/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const express = require('express');
const feedbackController = require('../api/feedback.controller');
const router = express.Router();

router.get('/', feedbackController.index);
router.post('/', feedbackController.create);

module.exports = router;
