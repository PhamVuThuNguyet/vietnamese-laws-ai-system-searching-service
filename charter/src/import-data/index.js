const fs = require('fs');
const charterService = require('../api/charters.service');
const logger = require('../utils/logger.utils');

const importCharterData = async () => {
  for (let i = 0; i < 45; i++) {
    logger.log(`========== PROCESS ${i} ===========`);
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      for (let k = 0; k < subject.index.length; k++) {
        const currentIndex = subject.index[k];
        const chartersList = currentIndex.charters;
        for (let n = 0; n < chartersList.length; n++) {
          const currentCharter = chartersList[n];
          const newCharter = await charterService.createOne({
            name: currentCharter.name,
            description: currentCharter.description || '',
            indexing_id: currentIndex.indexing_id,
            note: currentCharter.note,
            level: 1,
          });

          currentCharter.charter_id = newCharter.id;

          if (currentCharter.child) {
            for (let m = 0; m < currentCharter.child.length; m++) {
              const currentChildCharter = currentCharter.child[m];
              const newChildCharter = await charterService.createOne({
                name: currentChildCharter.name,
                description: currentChildCharter.description || '',
                indexing_id: currentIndex.indexing_id,
                parent_charter_id: newCharter.id,
                note: currentChildCharter.note,
                level: 2,
              });

              currentChildCharter.charter_id = newChildCharter.id;

              if (currentChildCharter.child) {
                for (let a = 0; a < currentChildCharter.child.length; a++) {
                  const newChildChildCharter = await charterService.createOne({
                    name: currentChildCharter.child[a].name,
                    description: currentChildCharter.child[a].description || '',
                    indexing_id: currentIndex.indexing_id,
                    parent_charter_id: newChildCharter.id,
                    note: currentChildCharter.child[a].note,
                    level: 3,
                  });

                  currentChildCharter.child[a].charter_id = newChildChildCharter.id;
                }
              }
            }
          }
        }
      }
    }
    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
    logger.log(`========== COMPLETE PROCESS ${i} ===========`);
  }
};

const importNoteAndRelatedData = async () => {
  for (let i = 6; i < 7; i++) {
    logger.log(`========== PROCESS ${i} ===========`);
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      for (let k = 0; k < subject.index.length; k++) {
        const currentIndex = subject.index[k];
        const chartersList = currentIndex.charters;
        for (let n = 0; n < chartersList.length; n++) {
          const currentCharter = chartersList[n];

          if (currentCharter.child) {
            for (let m = 0; m < currentCharter.child.length; m++) {
              const currentChildCharter = currentCharter.child[m];
              if (currentChildCharter.child) {
                for (let a = 0; a < currentChildCharter.child.length; a++) {
                  const charter_id = currentChildCharter.child[a].charter_id;
                  const relatedList = currentChildCharter.child[a].related;
                  for (let o = 0; o < relatedList.length; o++) {
                    if (relatedList[o].link === '#' && relatedList[o].title) {
                      const foundCharters = await charterService.getOneByCondition({ name: relatedList[o].title });
                      if (foundCharters) {
                        relatedList[o].link = foundCharters.id;
                      }
                    }
                  }
                  await charterService.updateOne(charter_id, { related: relatedList });
                }
              } else {
                const charter_id = currentCharter.child[m].charter_id;
                const relatedList = currentCharter.child[m].related;
                if (!relatedList) {
                  console.log(charter_id, currentCharter.child[m].name);
                }
                for (let o = 0; o < relatedList.length; o++) {
                  if (relatedList[o].link === '#' && relatedList[o].title) {
                    const foundCharters = await charterService.getOneByCondition({ name: relatedList[o].title });
                    if (foundCharters) {
                      relatedList[o].link = foundCharters.id;
                    }
                  }
                }
                await charterService.updateOne(charter_id, { related: relatedList });
              }
            }
          } else {
            const charter_id = currentCharter.charter_id;
            const relatedList = currentCharter.related;
            for (let o = 0; o < relatedList.length; o++) {
              if (relatedList[o].link === '#' && relatedList[o].title) {
                const foundCharters = await charterService.getOneByCondition({ name: relatedList[o].title });
                if (foundCharters) {
                  relatedList[o].link = foundCharters.id;
                }
              }
            }
            await charterService.updateOne(charter_id, { related: relatedList });
          }
        }
      }
    }
    // fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
    logger.log(`========== COMPLETE PROCESS ${i} ===========`);
  }
};

module.exports = {
  importCharterData,
  importNoteAndRelatedData,
};
