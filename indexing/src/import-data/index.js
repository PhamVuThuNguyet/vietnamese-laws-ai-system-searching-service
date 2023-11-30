const fs = require('fs');
const indexingService = require('../api/indexing.service');
const logger = require('../utils/logger.utils');

const importIndexingData = async () => {
  logger.info('START IMPORT DATA');
  for (let i = 0; i < 45; i++) {
    logger.info('IMPORT DATA FOR TOPIC', i);
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      for (let k = 0; k < subject.index.length; k++) {
        const newIndex = await indexingService.createOne({
          subject_id: subject.subject_id,
          name: subject.index[k].name,
          ordinal_number: k,
        });
        subject.index[k].indexing_id = newIndex.id;
      }
    }
    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
  }
  logger.info('COMPLETE IMPORT DATA');
};

module.exports = importIndexingData;
