import { RequestHandler, Request, Response, NextFunction } from 'express';

import { config } from '../../../config';

const debug = require('debug')(`${config.appName}:request-logger`);

export function requestLogger(): RequestHandler {
	return (req: Request, res: Response, next: NextFunction) => {
		res.on('finish', () => {
			const { method, originalUrl } = req;
			const { statusCode, statusMessage } = res;

			debug(`${method} ${originalUrl} - ${statusCode} ${statusMessage}`);
		});
		next();
	};
}
