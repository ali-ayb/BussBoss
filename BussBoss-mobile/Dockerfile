FROM node:14-alpine

RUN npm install -g expo-cli

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN expo build:android --release-channel production

EXPOSE 3000

CMD ["npm","expo", "start"]
