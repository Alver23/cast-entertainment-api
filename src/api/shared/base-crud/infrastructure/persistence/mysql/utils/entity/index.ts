// Exceptions
import { EntityNotFoundError } from './exceptions/entity-not-found';

export class EntityUtils {
	public async findEntityOrThrow(Constructor: any, where: any, options?: any): Promise<any> {
		const instance = await Constructor.findOne({ where, ...options });
		if (!instance) {
			throw new EntityNotFoundError(Constructor.name);
		}
		return instance;
	}
}

export const entityUtils = new EntityUtils();
