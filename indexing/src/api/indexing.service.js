/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const indexingRepository = require('./indexing.repository');

class IndexingService {
  async getAll(conditions) {
    return indexingRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return indexingRepository.insertOne(data);
  }

  async createMany(data) {
    return indexingRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return indexingRepository.update(id, data);
  }
}

module.exports = new IndexingService();
