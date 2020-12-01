// Dependencies
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

import { fourOFour } from '@core/middlewares/404';
import api from './api';
import { config } from './config';

// Middlewares
import { requestLogger } from './core/middlewares';

const {
	staticFiles: { directory },
} = config;

const basePath = '';

const server: express.Application = express();
server.disable('x-powered-by');

if (config.env) {
	server.use(requestLogger());
}

const healthCheck: any = require('express-healthcheck')();

server.set('trust proxy', true);
server.use(cookieParser());

server.use(`/${directory}`, express.static(path.join(__dirname, directory)));

server.get(`${basePath}/health(check)?`, healthCheck);
server.use(`${basePath}/api`, api);

server.use(fourOFour.handler());

export { server };
