// Middlewares
import { ISchemaValidator } from '@core/middlewares/schema-validator/schema-validator-interface';

// Dto's
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';
import { PaginationParamsDto } from '@api/shared/base-crud/infrastructure/dto/pagination';

export interface ISchemaStructure {
	get?: ISchemaValidator;
	getById?: ISchemaValidator;
	post?: ISchemaValidator;
	put?: ISchemaValidator;
	delete?: ISchemaValidator;
}

export const defaultSchema: ISchemaStructure = {
	get: {
		query: PaginationParamsDto,
	},
	getById: {
		params: RetrieveDto,
	},
	post: {},
	put: {
		params: RetrieveDto,
	},
	delete: {
		params: RetrieveDto,
	},
};
