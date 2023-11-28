const dataSource = require('../../config/database/data-source');
const TopicEntity = require('./entities/topic.entity');

const topicRepo = dataSource.getRepository(TopicEntity);

class TopicRepository {
  getAll(conditions = {}) {
    return topicRepo.find(conditions);
  }
}

module.exports = new TopicRepository();
