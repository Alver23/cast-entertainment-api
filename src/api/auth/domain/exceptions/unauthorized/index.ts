// Dependencies
import { unauthorized } from '@hapi/boom';

// Utils
import { CustomError } from '@utils/custom-error';
import { HttpMessages } from '@utils/messages/http-messages';

export class UnauthorizedException extends CustomError {
	constructor() {
		const {
			output: {
				statusCode,
				payload: { message },
			},
		} = unauthorized(HttpMessages.UNAUTHORIZED);
		super(message, statusCode, statusCode);
	}
}
