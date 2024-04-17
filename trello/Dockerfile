FROM node:20.10.0

RUN apt-get update && apt-get install -y curl openssh-server zsh

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development
CMD service ssh start && npm run start:dev

# CMD ["npm", "run", "start:prod"]

# CMD npm run migration:run && npm run start