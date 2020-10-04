FROM node:12-alpine
RUN mkdir /usr/src
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","run", "prod"]