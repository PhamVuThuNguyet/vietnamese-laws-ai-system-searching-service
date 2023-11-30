const { dataSource } = require('../config/database/data-source');
const CharterEntity = require('./entities/charter.entity');
const { Like, OR } = require('typeorm');

const charterRepo = dataSource.getRepository(CharterEntity);

class ChartersRepository {
  async getAllByConditions(conditions = {}) {
    const { page = 1, size = 100, q = '', ...restConditions } = conditions;
    const [data, total] = await charterRepo.findAndCount({
      where: [
        { ...restConditions, name: Like(`%${q}%`) },
        { ...restConditions, description: Like(`%${q}%`) },
      ],
      skip: (page - 1) * size,
      take: size,
      order: {
        id: 'asc',
      },
    });

    return { data, total, page, size };
  }

  insertOne(data) {
    return charterRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = charterRepo.create(data);
    return charterRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return charterRepo.update({ id }, data);
  }
}

module.exports = new ChartersRepository();
