FROM alpine:latest
MAINTAINER wicac@yahoo.com

RUN apk update && apk add tar gzip
RUN apk add --update nodejs

RUN mkdir -p /apps/docker-oauth2-server

WORKDIR /apps/docker-oauth2-server

COPY package.json .
COPY app.js .

RUN npm install --save express
RUN npm install --save body-parser
RUN npm install --save oauth2-server

ENTRYPOINT ["node"]
CMD ["app.js"]
