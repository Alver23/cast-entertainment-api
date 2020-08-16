// Dependencies
import 'module-alias/register';
import http from 'http';

import { config } from '../config';
import { server } from '../index';

const debug = require('debug')(`${config.appName}:server`);

function normalizePort(portArg: string): boolean | number {
	const parsed = parseInt(portArg, 10);
	return parsed > 0 ? parsed : false;
}

const port = normalizePort(config.port as string);
server.set('port', port);

const httpServer = http.createServer(server);

function onError(error: any) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	debug(error);
	process.exit(1);
}

function onListening() {
	const address = httpServer.address();
	const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
	debug(`Listening on ${bind} - Environment: ${config.environment}`);
}

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);
