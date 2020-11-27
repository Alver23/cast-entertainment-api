// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

// Repositories
import { ArtistRepository } from '@api/artists/domain/repositories/artist-repository';
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

export class ArtistService extends BaseCrudService<IArtist, any> {
	constructor(repository: ArtistRepository) {
		super(repository);
	}
}
