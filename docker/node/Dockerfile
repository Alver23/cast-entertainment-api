FROM node:10 as base
WORKDIR /opt/app

FROM base as installer
COPY package*.json .sequelizerc tsconfig.json gulpfile.js ./
COPY src/ ./src
RUN npm install --silent

FROM installer as build
RUN npm run build
COPY build/ build/
COPY environments/ environments/
RUN touch .env
RUN npm run env:prod
COPY --from=installer /opt/app ./

FROM node:10-alpine as run
ARG NODE_ENV=development
WORKDIR /opt/app
COPY --from=build /opt/app ./
EXPOSE 5001
CMD npm run db:migrate && node ./build/bin/www.js

