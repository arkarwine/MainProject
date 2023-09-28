FROM node:latest

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]