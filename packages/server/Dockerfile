FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY packages/server/package.json ./packages/server/package.json

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["nodemon", "package/server/src/index.ts"]