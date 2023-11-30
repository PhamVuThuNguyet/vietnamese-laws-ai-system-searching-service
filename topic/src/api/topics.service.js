const topicRepository = require('./topics.repository');

class TopicsService {
  async getAll(conditions) {
    return topicRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return topicRepository.insertOne(data);
  }

  async createMany(data) {
    return topicRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return topicRepository.update(id, data);
  }
}

module.exports = new TopicsService();
