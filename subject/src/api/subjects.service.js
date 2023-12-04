/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const subjectsRepository = require('./subjects.repository');

class SubjectsService {
  async getAll(conditions) {
    return subjectsRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return subjectsRepository.insertOne(data);
  }

  async createMany(data) {
    return subjectsRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return subjectsRepository.update(id, data);
  }
}

module.exports = new SubjectsService();
