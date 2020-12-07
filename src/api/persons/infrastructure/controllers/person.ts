// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Interfaces
import { IPersonService } from '@api/persons/application/person-service-interface';

export class PersonController extends BaseController<IPersonEntity, IPersonEntity, any> {
	constructor(service: IPersonService) {
		super(service);
	}
}
