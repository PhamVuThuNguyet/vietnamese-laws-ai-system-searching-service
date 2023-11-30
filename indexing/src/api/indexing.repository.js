const { dataSource } = require('../config/database/data-source');
const IndexingEntity = require('./entities/indexing.entity');

const indexingRepo = dataSource.getRepository(IndexingEntity);

class IndexingRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;
    return indexingRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
  }

  insertOne(data) {
    return indexingRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = indexingRepo.create(data);
    return indexingRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return indexingRepo.update({ id }, data);
  }
}

module.exports = new IndexingRepository();
