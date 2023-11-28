const { dataSource } = require('../config/database/data-source');
const SubjectEntity = require('./entities/subject.entity');

const subjectRepo = dataSource.getRepository(SubjectEntity);

class SubjectsRepository {
  getAllByConditions(conditions = {}) {
    return subjectRepo.find(conditions);
  }

  insertOne(data) {
    return subjectRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = subjectRepo.create(data);
    return subjectRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return subjectRepo.update({ id }, data);
  }
}

module.exports = new SubjectsRepository();
