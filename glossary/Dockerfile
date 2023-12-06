#  Copyright (c) VKU.NewEnergy.

#  This source code is licensed under the Apache-2.0 license found in the
#  LICENSE file in the root directory of this source tree.

FROM node

WORKDIR /app/glossary

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm", "start"]