FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean 
COPY ./ ./
EXPOSE 3000
RUN npm run build && npm run start