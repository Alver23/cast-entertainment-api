// Base Controller
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Application
import { IArtistService } from '@api/artists/application/artist-service/artist-service-interface';

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

export class ArtistController extends BaseController<IArtist, any, any> {
	constructor(artistService: IArtistService) {
		super(artistService);
	}
}
