
## I. Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [GNU Make](https://www.gnu.org/software/make/)

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