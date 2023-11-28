const subjectsService = require('./subjects.service');

class SubjectsController {
  async index(req, res) {
    const data = await subjectsService.getAll();
    res.status(200).json('Hello world');
  }
}

module.exports = new SubjectsController();
