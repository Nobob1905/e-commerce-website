FROM node:20.11.1-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["npm", "start"]