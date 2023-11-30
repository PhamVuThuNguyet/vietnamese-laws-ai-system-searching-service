const chartersRepository = require('./charters.repository');

class ChartersService {
  async getAll(conditions = {}) {
    return chartersRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return chartersRepository.insertOne(data);
  }

  async createMany(data) {
    return chartersRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return chartersRepository.update(id, data);
  }
}

module.exports = new ChartersService();
