/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const feedbackRepository = require('./feedback.repository');

class FeedbackService {
  async getAll(conditions) {
    return feedbackRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return feedbackRepository.insertOne(data);
  }

  async createMany(data) {
    return feedbackRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return feedbackRepository.update(id, data);
  }
}

module.exports = new FeedbackService();
