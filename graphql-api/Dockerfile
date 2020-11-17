FROM node:14

WORKDIR /usr/src/index


COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4000
CMD ["yarn", "start:dev"]
