FROM node:12-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm start