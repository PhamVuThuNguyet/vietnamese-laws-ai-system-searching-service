### 1. Prepare environment
- Copy enviroment file
```sh
cp .env.example .env
```
- Fill in information in `.env` file

### 2. Start mysql
```sh
docker-compose up -d --build mysql
```

### 3. Build library
```sh
npm install
```


### 4. Run app (mode dev) 
```sh
npm run dev
```
