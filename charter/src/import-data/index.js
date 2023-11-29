const fs = require('fs');
const charterService = require('../api/charters.service');
const logger = require('../utils/logger.utils');
const axios = require('axios');

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
          });

          if (currentCharter.child) {
            for (let m = 0; m < currentCharter.child.length; m++) {
              const newChildCharter = await charterService.createOne({
                name: currentCharter.child[m].name,
                description: currentCharter.child[m].description || '',
                indexing_id: currentIndex.indexing_id,
                parent_charter_id: newCharter.id,
              });

              currentCharter.child[m].charter_id = newChildCharter.id;
            }
          }

          currentCharter.charter_id = newCharter.id;
        }
      }
    }
    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
    logger.log(`========== COMPLETE PROCESS ${i} ===========`);
  }
};

const importNoteAndRelatedData = async () => {
  for (let i = 0; i < 1; i++) {
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
              const charter_id = currentCharter.child[m].charter_id;
              const relatedList = currentCharter.child[m].related;
              for (let o = 0; o < relatedList.length; o++) {
                const updateData = {
                  note: currentCharter.child[m].note,
                  related: {
                    link: relatedList[o].link || '#',
                  },
                };

                if (updateData.related.link === '#' && relatedList[o].axios_id) {
                  const formData = new FormData();
                  formData.append('ItemId', relatedList[o].axios_id);

                  const BASE_URL = 'https://phapdien.moj.gov.vn/TraCuuPhapDien/ActionHandler.aspx?do=loadnodes';
                  const res = await axios.post(`${BASE_URL}&lenmpc=${relatedList[o].axios_id.length}`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  });

                  const jsonRes = JSON.parse(res.data.Data);
                  if (jsonRes.length > 0) {
                    const relatedTitle = jsonRes[0].a_attr.title;
                    const foundCharters = await charterService.getOneByCondition({ name: relatedTitle });
                    if (foundCharters) {
                      updateData.related.link = foundCharters.id;
                      console.log(foundCharters.id);
                    }
                  }
                }
              }
            }
          } else {
            const charter_id = currentCharter.charter_id;
            const relatedList = currentCharter.related;
            for (let o = 0; o < relatedList.length; o++) {
              const updateData = {
                note: currentCharter.note,
                related: {
                  link: relatedList[o].link || '#',
                },
              };

              if (updateData.related.link === '#' && relatedList[o].axios_id) {
                const formData = new FormData();
                formData.append('ItemId', relatedList[o].axios_id);

                const BASE_URL = 'https://phapdien.moj.gov.vn/TraCuuPhapDien/ActionHandler.aspx?do=loadnodes';
                const res = await axios.post(`${BASE_URL}&lenmpc=${relatedList[o].axios_id.length}`, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                });

                const jsonRes = JSON.parse(res.data.Data);
                if (jsonRes.length > 0) {
                  const relatedTitle = jsonRes[0].a_attr.title;
                  const foundCharters = await charterService.getOneByCondition({ name: relatedTitle });
                  if (foundCharters) {
                    updateData.related.link = foundCharters.id;
                    console.log(foundCharters.id);
                  }
                }
              }
            }
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
