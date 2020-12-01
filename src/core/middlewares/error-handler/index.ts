// Dependencies
import * as Sentry from '@sentry/node';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { badImplementation } from '@hapi/boom';

// Config
import { config } from '@config/index';

// Utils
import { setResponse } from '@utils/index';

const debug = require('debug')(`${config.appName}:error-handler`);

export class ErrorHandler {
	private readonly sentry;

	constructor() {
		if (config.sentryDsn) {
			this.sentry = Sentry.init({ dsn: config.sentryDsn });
		}
	}

	private errorWithStack(error: any, stack: any) {
		const { statusCode, ...otherValues } = error;
		const response = setResponse({
			status: statusCode,
			...otherValues,
		});
		if (config.env) {
			return { ...response, stack };
		}
		return response;
	}

	public logErrors(): ErrorRequestHandler {
		return (error: any, req: Request, res: Response, next: NextFunction): void => {
			debug(error);
			if (!config.env && !!this.sentry) {
				Sentry.captureException(error);
			}
			next(error);
		};
	}

	public wrapperError(): ErrorRequestHandler {
		return (error: any, req: Request, res: Response, next: NextFunction): void => {
			if (!error.isBoom) {
				next(badImplementation(error));
			}
			next(error);
		};
	}

	public handler(): ErrorRequestHandler {
		return (error: any, req: Request, res: Response, next: NextFunction): void => {
			const {
				output: { statusCode, payload },
				stack,
				data,
			} = error;
			res.status(statusCode).json(this.errorWithStack({ ...payload, data }, stack));
		};
	}
}

export const errorHandler: ErrorHandler = new ErrorHandler();
