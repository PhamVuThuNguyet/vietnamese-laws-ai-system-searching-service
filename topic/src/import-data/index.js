const fs = require('fs');
const topicService = require('../api/topics.service');
const logger = require('../utils/logger.utils');

const importTopicData = async () => {
  logger.info("START IMPORT DATA");
  for (let i = 0; i < 45; i++) {
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const topicName = importData.name.split(':')[1].trim();
    console.log(topicName);
    const newTopic = await topicService.createOne({ name: topicName });
    importData.topic_id = newTopic.id;
    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
  }
  logger.info("COMPLETE IMPORT DATA");
};

module.exports = importTopicData;
