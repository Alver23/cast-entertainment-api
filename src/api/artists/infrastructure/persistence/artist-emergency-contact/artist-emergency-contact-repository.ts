// Entities
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';

// Models
import { EmergencyContact } from '@database/models/emergency-contact';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ArtistEmergencyContactRepository extends BaseCrudRepository<
	typeof EmergencyContact,
	IArtistEmergencyContact,
	IArtistEmergencyContact
> {
	constructor() {
		super(EmergencyContact);
	}
}
