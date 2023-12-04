/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const { dataSource } = require('./data-source');

const connectDB = async () => {
  return dataSource.initialize();
};

module.exports = connectDB;
