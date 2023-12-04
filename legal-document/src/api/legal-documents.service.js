/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const legalDocumentsRepository = require('./legal-documents.repository');

class LegalDocumentsService {
  async getAll(conditions) {
    return legalDocumentsRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return legalDocumentsRepository.insertOne(data);
  }

  async createMany(data) {
    return legalDocumentsRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return legalDocumentsRepository.update(id, data);
  }
}

module.exports = new LegalDocumentsService();
