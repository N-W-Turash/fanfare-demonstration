FROM node:16-alpine as development

RUN  apk add --no-cache libc6-compat
WORKDIR /app

ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /app

EXPOSE 8000

CMD ["npm", "run", "start"]