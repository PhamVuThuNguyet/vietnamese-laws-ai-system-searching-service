const fs = require('fs');
const indexingService = require('../api/indexing.service');

const importIndexingData = async () => {
  for (let i = 1; i < 45; i++) {
    const importData = JSON.parse(fs.readFileSync(`src/data/phap-dien/${i}.json`, 'utf-8'));
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
    fs.writeFileSync(`src/data/phap-dien/${i}.json`, JSON.stringify(importData));
  }
};

module.exports = importIndexingData;
