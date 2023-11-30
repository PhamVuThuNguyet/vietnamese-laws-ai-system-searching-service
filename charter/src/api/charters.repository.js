const { dataSource } = require('../config/database/data-source');
const CharterEntity = require('./entities/charter.entity');

const charterRepo = dataSource.getRepository(CharterEntity);

class ChartersRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;
    return charterRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
  }

  insertOne(data) {
    return charterRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = charterRepo.create(data);
    return charterRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return charterRepo.update({ id }, data);
  }
}

module.exports = new ChartersRepository();
