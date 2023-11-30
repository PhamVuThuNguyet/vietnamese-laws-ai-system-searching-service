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
