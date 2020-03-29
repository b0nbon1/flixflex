FROM node:13

WORKDIR /usr/src/index


COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "run", "watch"]
