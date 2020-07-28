FROM node:14

WORKDIR /usr/src/index


COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "run", "watch"]
