import * as path from 'path';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import api from './api';
import { config } from './config';

import { requestLogger, fourOFour } from './core/middlewares';

const {
	staticFiles: { directory },
} = config;

const basePath = '/cas-entertainment';

const server: express.Application = express();
server.disable('x-powered-by');

if (config.env) {
	server.use(requestLogger());
}

const healthCheck: any = require('express-healthcheck')();

server.use(cookieParser());

server.use(`/${directory}`, express.static(path.join(__dirname, directory)));

server.get(`${basePath}/health(check)?`, healthCheck);
server.use(`${basePath}/api`, api);

server.use(fourOFour);

export { server };
