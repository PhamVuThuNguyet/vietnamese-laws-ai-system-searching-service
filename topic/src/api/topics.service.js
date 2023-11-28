const topicRepository = require('./topics.repository');

class TopicsService {
  async getAll() {
    return topicRepository.getAllByConditions();
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
