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
