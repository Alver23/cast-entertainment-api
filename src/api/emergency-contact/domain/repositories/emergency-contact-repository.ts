// Entities
import { IEmergencyContact } from '@api/emergency-contact/domain/entities/emergency-contact-entity';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IEmergencyContactRepository = IBaseCrudRepository<IEmergencyContact, IEmergencyContact>;
