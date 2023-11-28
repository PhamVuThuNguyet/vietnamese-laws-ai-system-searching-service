const { dataSource } = require('../config/database/data-source');
const SubjectEntity = require('./entities/subject.entity');

const subjectRepo = dataSource.getRepository(SubjectEntity);

class SubjectsRepository {
  getAll(conditions = {}) {
    return subjectRepo.find(conditions);
  }
}

module.exports = new SubjectsRepository();
