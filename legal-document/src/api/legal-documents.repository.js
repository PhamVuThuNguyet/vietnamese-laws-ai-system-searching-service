/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const { dataSource } = require('../config/database/data-source');
const LegalDocumentEntity = require('./entities/legal-document.entity');

const legalDocumentRepo = dataSource.getRepository(LegalDocumentEntity);

class LegalDocumentsRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;

    return legalDocumentRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
  }

  insertOne(data) {
    return legalDocumentRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = legalDocumentRepo.create(data);
    return legalDocumentRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return legalDocumentRepo.update({ id }, data);
  }
}

module.exports = new LegalDocumentsRepository();
