// Dependencies
import { OK } from 'http-status-codes';
import { NextFunction, Request, RequestHandler } from 'express';

// Utils
import { setResponse } from '@utils/index';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

export class ResponseToJson {
	handler(): RequestHandler {
		return (req: Request, res: ICustomResponse, next: NextFunction) => {
			res.responseJson = ({ data, message, status, options }): void => {
				res.status(status || OK).json(setResponse({ data, message, status, options }));
			};
			next();
		};
	}
}

export const addResponseJsonToResponse = new ResponseToJson();
