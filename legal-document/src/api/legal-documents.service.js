const legalDocumentsRepository = require('./legal-documents.repository');

class LegalDocumentsService {
  async getAll() {
    return legalDocumentsRepository.getAllByConditions();
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
