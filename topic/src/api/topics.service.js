/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const topicRepository = require('./topics.repository');

class TopicsService {
  async getAll(conditions) {
    return topicRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return topicRepository.insertOne(data);
  }

  async createMany(data) {
    return topicRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return topicRepository.update(id, data);
  }
}

module.exports = new TopicsService();
