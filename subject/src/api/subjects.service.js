const subjectsRepository = require('./subjects.repository');

class SubjectsService {
  async getAll() {
    return subjectsRepository.getAll();
  }
}

module.exports = new SubjectsService();
