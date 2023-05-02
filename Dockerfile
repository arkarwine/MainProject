FROM node:latest

COPY . .

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080
ENV PORT=8080

CMD [ "npm", "run", "start" ]