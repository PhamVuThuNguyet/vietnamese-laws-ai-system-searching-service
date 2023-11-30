const { dataSource } = require('../config/database/data-source');
const SubjectEntity = require('./entities/subject.entity');

const subjectRepo = dataSource.getRepository(SubjectEntity);

class SubjectsRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;

    return subjectRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
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
