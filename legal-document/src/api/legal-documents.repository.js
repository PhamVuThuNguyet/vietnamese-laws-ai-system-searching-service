const { dataSource } = require('../config/database/data-source');
const LegalDocumentEntity = require('./entities/legal-document.entity');

const legalDocumentRepo = dataSource.getRepository(LegalDocumentEntity);

class LegalDocumentsRepository {
  getAllByConditions(conditions = {}) {
    return legalDocumentRepo.find(conditions);
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
