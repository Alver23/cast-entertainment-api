// Middlewares
import { ISchemaValidator } from '@core/middlewares/schema-validator/schema-validator-interface';

export interface ISchemaStructure {
	get?: ISchemaValidator;
	getById?: ISchemaValidator;
	post?: ISchemaValidator;
	put?: ISchemaValidator;
	delete?: ISchemaValidator;
}

export const defaultSchema: ISchemaStructure = {
	get: {},
	getById: {},
	post: {},
	put: {},
	delete: {},
};
