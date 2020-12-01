// Dependencies
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

// Utils
import { HttpMessages } from '@utils/index';

type ErrorData = { [key: string]: any };

export abstract class CustomError extends Error {
	constructor(
		public message: string,
		public code: string | number = HttpMessages.INTERNAL_ERROR,
		public statusCode: number = INTERNAL_SERVER_ERROR,
		public data: ErrorData = {},
	) {
		super();
	}
}
