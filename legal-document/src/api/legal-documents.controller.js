const legalDocumentsService = require('./legal-documents.service');

class LegalDocumentsController {
  async index(req, res) {
    try {
      const data = await legalDocumentsService.getAll(req.query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send();
    }
  }

  async create(req, res) {
    try {
      const newTopic = await legalDocumentsService.createOne(req.body);
      res.status(201).json(newTopic);
    } catch (error) {
      res.status(500).send();
    }
  }

  async update(req, res) {
    try {
      await legalDocumentsService.updateOne(req.params.id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new LegalDocumentsController();
