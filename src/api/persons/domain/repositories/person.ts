// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export interface IFilterForFullName {
	attributes: Array<any>;
	where: any;
	replacements: {
		fullName: string;
	};
	order: Array<any>;
}
export interface IPersonRepository extends IBaseCrudRepository<IPersonEntity, IPersonEntity> {
	getFilterForFullName(fullName: string): IFilterForFullName;
}
