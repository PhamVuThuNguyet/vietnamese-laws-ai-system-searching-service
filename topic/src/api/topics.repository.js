const { dataSource } = require('../config/database/data-source');
const TopicEntity = require('./entities/topic.entity');

const topicRepo = dataSource.getRepository(TopicEntity);

class TopicsRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;

    return topicRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
  }

  insertOne(data) {
    return topicRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = topicRepo.create(data);
    return topicRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return topicRepo.update({ id }, data);
  }
}

module.exports = new TopicsRepository();
