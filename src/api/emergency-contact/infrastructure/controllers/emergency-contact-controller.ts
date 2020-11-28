// Application
import { IEmergencyContactService } from '@api/emergency-contact/application/emergency-contact-service-interface';

// Entities
import { IEmergencyContact } from '@api/emergency-contact/domain/entities/emergency-contact-entity';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class EmergencyContactController extends BaseController<IEmergencyContact, IEmergencyContact, any> {
	constructor(service: IEmergencyContactService) {
		super(service);
	}
}
