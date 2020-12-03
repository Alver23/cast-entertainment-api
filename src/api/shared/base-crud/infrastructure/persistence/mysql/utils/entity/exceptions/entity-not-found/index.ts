// Dependencies
import { NOT_FOUND } from 'http-status-codes';
// Utils
import { CustomError } from '@utils/custom-error';

export class EntityNotFoundError extends CustomError {
	constructor(entityName: string) {
		super(`${entityName} not found.`, 'ENTITY_NOT_FOUND', NOT_FOUND);
	}
}
