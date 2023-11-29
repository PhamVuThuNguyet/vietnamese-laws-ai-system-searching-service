const fs = require('fs');
const topicService = require('../api/topics.service');

const importTopicData = async () => {
  for (let i = 0; i < 45; i++) {
    const importData = JSON.parse(fs.readFileSync(`src/data/phap-dien/${i}.json`, 'utf-8'));
    const topicName = importData.name.split(':')[1].trim();
    console.log(topicName);
    const newTopic = await topicService.createOne({ name: topicName });
    importData.topic_id = newTopic.id;
    fs.writeFileSync(`src/data/phap-dien/${i}.json`, JSON.stringify(importData));
  }
};

module.exports = importTopicData;
