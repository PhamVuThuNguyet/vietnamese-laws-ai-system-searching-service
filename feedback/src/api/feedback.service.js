const feedbackRepository = require('./feedback.repository');

class FeedbackService {
  async getAll(conditions) {
    return feedbackRepository.getAllByConditions(conditions);
  }

  async createOne(data) {
    return feedbackRepository.insertOne(data);
  }

  async createMany(data) {
    return feedbackRepository.insertMany(data);
  }

  async updateOne(id, data) {
    return feedbackRepository.update(id, data);
  }
}

module.exports = new FeedbackService();
