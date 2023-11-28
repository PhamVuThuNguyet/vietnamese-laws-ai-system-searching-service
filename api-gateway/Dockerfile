FROM node

WORKDIR /app/api-gateway

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]