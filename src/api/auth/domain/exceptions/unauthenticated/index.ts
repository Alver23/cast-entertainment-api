// Dependencies
import { unauthorized } from '@hapi/boom';

// Utils
import { CustomError } from '@utils/custom-error';
import { HttpMessages } from '@utils/messages/http-messages';

export class UnauthenticatedException extends CustomError {
	constructor() {
		const {
			output: {
				statusCode,
				payload: { message },
			},
		} = unauthorized(HttpMessages.UNAUTHENTICATED);
		super(message, statusCode, statusCode);
	}
}
