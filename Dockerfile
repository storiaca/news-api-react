FROM node:20-alpine as BUILD_IMAGE
WORKDIR /app/news-app

COPY package.json .

COPY . .

RUN npm install

RUN npm run build

FROM node:20-alpine as PRODUCTION_IMAGE
WORKDIR /app/news-app

COPY --from=BUILD_IMAGE /app/news-app/dist/ /app/news-app/dist/
EXPOSE 8080

COPY package.json .

RUN npm install -g typescript
RUN npm install -g vite

EXPOSE 8080
CMD ["npm", "run", "preview"]