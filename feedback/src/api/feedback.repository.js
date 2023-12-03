const { dataSource } = require("../config/database/data-source");
const FeedbackEntity = require("./entities/feedback.entity");

const feedbackRepo = dataSource.getRepository(FeedbackEntity);

class FeedbackRepository {
  getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, ...restConditions } = conditions;

    return feedbackRepo.find({
      where: restConditions,
      skip: (page - 1) * size,
      take: size,
    });
  }

  insertOne(data) {
    return feedbackRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = feedbackRepo.create(data);
    return feedbackRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return feedbackRepo.update({ id }, data);
  }
}

module.exports = new FeedbackRepository();
