// Entities
import { IEmergencyContact } from '@api/emergency-contact/domain/entities/emergency-contact-entity';

// Repositories
import { IEmergencyContactRepository } from '@api/emergency-contact/domain/repositories/emergency-contact-repository';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

export class EmergencyContactService extends BaseCrudService<IEmergencyContact, IEmergencyContact> {
	constructor(repository: IEmergencyContactRepository) {
		super(repository);
	}
}
