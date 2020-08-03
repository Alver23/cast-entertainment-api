// Dependencies
import { OK } from 'http-status-codes';

interface IResponse {
	message?: string;
	data?: any;
	status?: number;
	options?: any;
}

export const setResponse = ({ message, data, status, options }: IResponse) => {
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
