make prepare-environments:
	cp .env.example .env
	cd topic && cp .env.example .env
	cd subject && cp .env.example .env