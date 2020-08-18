// Dependencies
import { NextFunction, Request, Response } from 'express';

export const appendIpAddressToBody = (req: Request, res: Response, next: NextFunction): void => {
	const { body, ip } = req;
	if (body) {
		req.body = {
			...body,
			ipAddress: ip,
		};
	}
	next();
};
