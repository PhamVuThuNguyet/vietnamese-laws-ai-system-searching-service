const subjectsRepository = require('./subjects.repository');

class SubjectsService {
  async getAll() {
    return subjectsRepository.getAllByConditions();
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
