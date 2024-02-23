# Stage 1: Build the React application
FROM node:18 as build

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install 

ADD . .
RUN npm run build

RUN npm install

CMD ["npm", "run", "start"]