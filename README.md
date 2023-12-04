# Vietnamese Laws AI System Backend Services

## I. Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [GNU Make](https://www.gnu.org/software/make/)
- [PostgreSQL CLI](https://www.postgresql.org/download/)
- [gdown](https://github.com/wkentaro/gdown)
- [Unzip CLI](https://www.tecmint.com/install-zip-and-unzip-in-linux/)

## II. Installation and running applications
#### 1. By `make` command
```
make install
```
#### 2. Manually
#### 2.1. Prepare environment
```sh
make prepare-environments
```
#### 2.2. Start services
```sh
docker compose up -d --build
```
#### 3. Prepare data for database
- Download database import file from this [link](https://drive.google.com/file/d/1eyYEydC-6TQ3uD2WO4cXpR0Odg3f3Pod/view)
- Create `init-data` directory in root directory.
- Extract and copy all files to `init-data` directory.
#### 4. Import data into database
```sh
make import-data
```

## III. API List

#### 1. Topics API

- Get all topics: [GET]: `/api/v1/topics`

#### 2. Subjects API

- Get all subjects: [GET]: `/api/v1/subjects`

| Params   | Description | Default |
| -------- | ----------- | ------- |
| topic_id | Topic ID    | null    |

#### 3. Indexing API

- Get all indexing: [GET]: `/api/v1/indexing`

| Params     | Description | Default |
| ---------- | ----------- | ------- |
| subject_id | Subject ID  | null    |

#### 4. Charters API

- Get all indexing: [GET]: `/api/v1/charters`

| Params | Description                         | Default |
| ------ | ----------------------------------- | ------- |
| page   | Page number                         | 1       |
| size   | Size of each page                   | 50      |
| q      | Search text by title or description | ''      |

#### 5. Legal Documents API

- Get all indexing: [GET]: `/api/v1/legal-documents`

| Params     | Description | Default |
| ---------- | ----------- | ------- |
| subject_id | Subject ID  | null    |
