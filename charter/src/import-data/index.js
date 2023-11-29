const fs = require('fs');
const charterService = require('../api/charters.service');
const logger = require('../utils/logger.utils');

const importCharterData = async () => {
  for (let i = 1; i < 45; i++) {
    logger.log(`========== PROCESS ${i} ===========`);
    const importData = JSON.parse(fs.readFileSync(`src/data/phap-dien/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      for (let k = 0; k < subject.index.length; k++) {
        const currentIndex = subject.index[k];
        const chartersList = currentIndex.charters;
        for (let n = 0; n < chartersList.length; n++) {
          const newCharter = await charterService.createOne({
            name: chartersList[n].name,
            description: chartersList[n].description,
            indexing_id: currentIndex.indexing_id,
          });

          chartersList[n].charter_id = newCharter.id;
        }
      }
    }
    fs.writeFileSync(`src/data/phap-dien/${i}.json`, JSON.stringify(importData));
    logger.log(`========== COMPLETE PROCESS ${i} ===========`);
  }
};

module.exports = importCharterData;
