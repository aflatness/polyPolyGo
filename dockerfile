FROM node:12-alpine
WORKDIR /polypolyGo
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]