const { dataSource } = require('../config/database/data-source');
const IndexingEntity = require('./entities/indexing.entity');

const indexingRepo = dataSource.getRepository(IndexingEntity);

class IndexingRepository {
  getAllByConditions(conditions = {}) {
    return indexingRepo.find(conditions);
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
