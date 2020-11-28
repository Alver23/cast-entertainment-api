// Entities
import { IEmergencyContact } from '@api/emergency-contact/domain/entities/emergency-contact-entity';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IEmergencyContactService = IBaseCrudService<IEmergencyContact, IEmergencyContact>;
