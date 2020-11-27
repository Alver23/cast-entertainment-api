// Entities
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';

// Models
import { ArtistHasPassport } from '@database/models/artist-has-passport';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ArtistPassportRespository extends BaseCrudRepository<typeof ArtistHasPassport, IArtistPassport, IArtistPassport> {
	constructor() {
		super(ArtistHasPassport);
	}
}
