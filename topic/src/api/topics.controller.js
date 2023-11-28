const topicService = require('./topics.service');

class TopicsController {
  async index(req, res) {
    const data = await topicService.getAll();
    res.status(200).json(data);
  }
}

module.exports = new TopicsController();
