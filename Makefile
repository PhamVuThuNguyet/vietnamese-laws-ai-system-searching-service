prepare-environments:
	cp .env.example .env
	cd topic && cp .env.example .env
	cd subject && cp .env.example .env
	cd charter && cp .env.example .env
	cd indexing && cp .env.example .env
	cd legal-document && cp .env.example .env
	cd feedback && cp .env.example .env

import-data:
	cd init-data && psql -U vietnam_laws -h localhost -d vietnam_laws_topics -f vietnam_laws_topics.sql
	cd init-data && psql -U vietnam_laws -h localhost -d vietnam_laws_subjects -f vietnam_laws_subjects.sql
	cd init-data && psql -U vietnam_laws -h localhost -d vietnam_laws_indexing -f vietnam_laws_indexing.sql
	cd init-data && psql -U vietnam_laws -h localhost -d vietnam_laws_charters -f vietnam_laws_charters.sql
	cd init-data && psql -U vietnam_laws -h localhost -d vietnam_laws_legal_documents -f vietnam_laws_legal_documents.sql
	