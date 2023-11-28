const topicRepository = require('./topics.repository');

class TopicsService {
  async getAll() {
    return topicRepository.getAll();
  }
}

module.exports = new TopicsService();
