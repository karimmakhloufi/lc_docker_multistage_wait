FROM node:alpine as builder

RUN mkdir app

WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm install
RUN npm install -g typescript

COPY src ./

RUN tsc

FROM node:alpine

RUN mkdir app

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN apk --no-cache add curl

COPY package*.json ./

RUN npm install --production

CMD npm start
