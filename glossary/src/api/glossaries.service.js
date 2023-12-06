/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const glossaryRepository = require('./glossaries.repository');

class GlossariesService {
  async getAll(conditions) {
    return glossaryRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return glossaryRepository.insertOne(data);
  }

  async createMany(data) {
    return glossaryRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return glossaryRepository.update(id, data);
  }
}

module.exports = new GlossariesService();
