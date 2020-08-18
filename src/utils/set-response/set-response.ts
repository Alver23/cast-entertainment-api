// Dependencies
import { NOT_FOUND, OK, NO_CONTENT } from 'http-status-codes';

interface IResponse {
	message?: string;
	data?: any;
	status?: number;
	options?: any;
}

export const setResponse = ({ message, data, status, options }: IResponse): IResponse => {
	let statusCode = OK;
	let additionalOptions = {};
	if (status) {
		statusCode = status;
	}

	if (options) {
		additionalOptions = options;
	}
	return {
		message,
		status: statusCode,
		data,
		...additionalOptions,
	};
};

export const setResponseForDelete = (type: number, message?: string): { status: number; message?: string } => {
	return {
		0: {
			status: NOT_FOUND,
		},
		1: {
			status: NO_CONTENT,
			message,
		},
	}[type];
};
