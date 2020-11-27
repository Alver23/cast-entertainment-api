// Dependencies
import * as Sentry from '@sentry/node';
import { NextFunction, Request, Response } from 'express';
import { badImplementation } from '@hapi/boom';

// Config
import { config } from '@config/index';

// Utils
import { setResponse } from '@utils/index';

const debug = require('debug')(`${config.appName}:error-handler`);

Sentry.init({ dsn: config.sentryDsn });

export const withErrorStack = (error: any, stack: any): any => {
	const { statusCode, ...otherValues } = error;
	const response = setResponse({
		status: statusCode,
		...otherValues,
	});
	if (config.env) {
		return { ...response, stack };
	}
	return response;
};

export const logErrors = (error: any, req: Request, res: Response, next: NextFunction): void => {
	debug(error);
	if (!config.env) {
		Sentry.captureException(error);
	}
	next(error);
};

export const wrapError = (error: any, req: Request, res: Response, next: NextFunction): void => {
	if (!error.isBoom) {
		next(badImplementation(error));
	}
	next(error);
};

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
	const {
		output: { statusCode, payload },
		stack,
		data,
	} = error;
	res.status(statusCode).json(withErrorStack({ ...payload, data }, stack));
};
