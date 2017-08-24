FROM node:8.1.4-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY test.js /usr/src/app

CMD [ "node", "test.js" ]
