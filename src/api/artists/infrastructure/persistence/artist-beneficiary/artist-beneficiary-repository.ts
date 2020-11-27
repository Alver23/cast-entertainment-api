// Entities
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';

// Models
import { ArtistHasBeneficiary } from '@database/models/artist-has-beneficiary';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ArtistBeneficiaryRepository extends BaseCrudRepository<typeof ArtistHasBeneficiary, IArtistBeneficiary, IArtistBeneficiary> {
	constructor() {
		super(ArtistHasBeneficiary);
	}
}
