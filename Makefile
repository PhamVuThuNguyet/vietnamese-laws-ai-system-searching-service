make prepare-environments:
	cp .env.example .env
	cd topic && cp .env.example .env
	cd subject && cp .env.example .env
	cd indexing && cp .env.example .env
	cd charter && cp .env.example .env
	cd legal-document && cp .env.example .env