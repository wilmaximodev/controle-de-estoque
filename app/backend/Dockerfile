FROM node:23.8-alpine

WORKDIR /app-backend

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
