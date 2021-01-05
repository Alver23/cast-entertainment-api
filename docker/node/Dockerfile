FROM node:12 as base
WORKDIR /opt/app

FROM base as installer
COPY package*.json .sequelizerc tsconfig.json gulpfile.js newrelic.js ./
COPY environments/ environments/
COPY src/ ./src
RUN npm i --silent

FROM installer as build
RUN touch .env
RUN npm run env:prod
RUN npm run build

FROM build as buildProd
RUN rm -rf ./node_modules
RUN npm i --only=prod

FROM node:12-alpine as run
WORKDIR /opt/app
COPY --from=buildProd /opt/app/package.json /opt/app/newrelic.js ./
COPY --from=buildProd /opt/app/.env ./
COPY --from=buildProd /opt/app/.sequelizerc ./
COPY --from=buildProd /opt/app/node_modules ./node_modules
COPY --from=buildProd /opt/app/build ./build
RUN npm run clean:dt
CMD ["npm", "start"]
