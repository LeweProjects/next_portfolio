FROM node:21-alpine

WORKDIR /user/src

COPY . .

RUN npm install
RUN npm run build
CMD ["npm", "start"]

EXPOSE 3000