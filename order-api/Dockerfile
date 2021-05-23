FROM node:alpine

WORKDIR /usr/src/orders

COPY package*.json ./

RUN npm install

ADD . /usr/src/orders

EXPOSE 3002

CMD [ "npm", "start" ]
