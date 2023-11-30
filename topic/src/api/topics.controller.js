const topicService = require('./topics.service');

class TopicsController {
  async index(req, res) {
    try {
      const data = await topicService.getAll(req.query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send();
    }
  }

  async create(req, res) {
    try {
      const newTopic = await topicService.createOne(req.body);
      res.status(201).json(newTopic);
    } catch (error) {
      res.status(500).send();
    }
  }

  async update(req, res) {
    try {
      await topicService.updateOne(req.params.id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new TopicsController();
