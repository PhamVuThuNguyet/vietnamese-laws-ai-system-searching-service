const fs = require('fs');
const subjectService = require('../api/subjects.service');
const logger = require('../utils/logger.utils');

const importSubjectData = async () => {
  logger.info("START IMPORT DATA");
  for (let i = 0; i < 45; i++) {
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subjectName = subjects[j].name.split(':')[1].trim();
      console.log(subjectName)
      const newSubject = await subjectService.createOne({ name: subjectName, topic_id: importData.topic_id });
      subjects[j].subject_id = newSubject.id;
    }

    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
  }
  logger.info("COMPLETE IMPORT DATA");
};

module.exports = importSubjectData;
