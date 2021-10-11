FROM node:lts

RUN npm install -g nodemon
WORKDIR /app
COPY ./package*.json ./
RUN npm i
COPY . .
RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD [ "nodemon" ]