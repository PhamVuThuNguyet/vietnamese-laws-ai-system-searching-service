/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const { dataSource } = require('../config/database/data-source');
const GlossaryEntity = require('./entities/glossary.entity');
const { Like } = require('typeorm');

const glossaryRepo = dataSource.getRepository(GlossaryEntity);

class GlossariesRepository {
  async getAllByConditions(conditions = {}) {
    const { page = 1, size = 50, q = '', ...restConditions } = conditions;
    const [data, total] = await glossaryRepo.findAndCount({
      where: [
        { ...restConditions, term: Like(`%${q}%`) },
        { ...restConditions, desc: Like(`%${q}%`) },
        { ...restConditions, source: Like(`%${q}%`) },
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
    return glossaryRepo.save(data);
  }

  insertMany(data) {
    const listTopicEntities = glossaryRepo.create(data);
    return glossaryRepo.insert(listTopicEntities);
  }

  update(id, data) {
    return glossaryRepo.update({ id }, data);
  }
}

module.exports = new GlossariesRepository();
