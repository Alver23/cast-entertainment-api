// Dependencies
import { boomify } from '@hapi/boom';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Exceptions
import { RouteNotFoundError } from '@core/middlewares/404/route-error';

export class FourOFour {
	handler(): RequestHandler {
		return (req: Request, res: Response, next: NextFunction) => {
			const error = new RouteNotFoundError(req.originalUrl);
			next(boomify(error, { statusCode: error.statusCode }));
		};
	}
}

export const fourOFour = new FourOFour();
