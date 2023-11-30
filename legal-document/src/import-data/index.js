const fs = require('fs');
const legalDocumentsService = require('../api/legal-documents.service');
const logger = require('../utils/logger.utils');

const importLegalDocuments = async () => {
  logger.info('START IMPORT DATA');
  for (let i = 0; i < 45; i++) {
    logger.info('START IMPORT FOR TOPIC', i);
    const importData = JSON.parse(fs.readFileSync(`src/import-data/data/${i}.json`, 'utf-8'));
    const subjects = importData.subjects;
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      const subject_id = subject.subject_id;

      for (let k = 0; k < subject.legalDocuments.length; k++) {
        const legalDocument = subject.legalDocuments[k];
        await legalDocumentsService.createOne({
          name: legalDocument.name,
          doc_type: legalDocument.symbol,
          issuing_authority: legalDocument.authority,
          issued_date: legalDocument.issueDate,
          effective_date: legalDocument.effectiveDate,
          ordinal_number: k,
          subject_id,
          ordinary_number_in_subject: k,
        });
      }
    }

    fs.writeFileSync(`src/import-data/data/${i}.json`, JSON.stringify(importData));
  }
  logger.info('COMPLETE IMPORT DATA');
};

module.exports = importLegalDocuments;
