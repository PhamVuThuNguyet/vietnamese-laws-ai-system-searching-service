
## I. Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [GNU Make](https://www.gnu.org/software/make/)
- [PostgreSQL CLI](https://www.postgresql.org/download/)

## II. Installation and running applications

### 1. Prepare environment
- Copy environment file
```sh
make prepare-environments
```
- Fill in (or change) information in `.env` file

### 2. Start app
```sh
docker-compose up -d --build
```

### 3. Prepare data for database
- Download database import file from this [link](https://drive.google.com/file/d/1AT11PWQ_1Jsds-RiMM55fqgT_ynnKsbw/view)
- Extract and copy all files to init-data directory
### 4. Import data into database
```sh
make import-data
```