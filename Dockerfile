FROM node
WORKDIR /application
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]