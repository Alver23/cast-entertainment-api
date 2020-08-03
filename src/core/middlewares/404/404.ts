// Dependencies
import { Request, Response } from 'express';
import { notFound } from '@hapi/boom';

// Utils
import { setResponse } from '../../../utils';

export const fourOFour = (req: Request, res: Response) => {
	const {
		output: { statusCode, payload },
	} = notFound();
	const { message, error } = payload;
	res.status(statusCode).json(
		setResponse({
			message,
			options: { error },
			status: statusCode,
		}),
	);
};
