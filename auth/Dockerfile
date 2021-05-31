FROM node:alpine

WORKDIR /usr/src/auth

COPY package*.json ./

RUN npm install

ADD . /usr/src/auth

EXPOSE 3001

CMD [ "npm", "start" ]
