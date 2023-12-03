const feedbackService = require('./feedback.service');

class FeedbackController {
  async index(req, res) {
    try {
      const data = await feedbackService.getAll(req.query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send();
    }
  }

  async create(req, res) {
    try {
      const newTopic = await feedbackService.createOne(req.body);
      res.status(201).json(newTopic);
    } catch (error) {
      res.status(500).send();
    }
  }

  async update(req, res) {
    try {
      await feedbackService.updateOne(req.params.id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new FeedbackController();
