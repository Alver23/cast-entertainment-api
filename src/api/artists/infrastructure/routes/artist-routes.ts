// Routes Generic
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Repository
import { ArtistRepository } from '@api/artists/infrastructure/persistence/artist/artist-repository';

// Application
import { ArtistService } from '@api/artists/application/artist-service';

// Controllers
import { ArtistController } from '@api/artists/infrastructure/controllers/artist-controller';

// DTO's
import { Artist } from '@api/artists/infrastructure/dto/artist';
import { ArtistUpdaterDto } from '@api/artists/infrastructure/dto/artist/updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

const artistService = new ArtistService(new ArtistRepository());
const artistController = new ArtistController(artistService);

const basePath = '/artists';
const schema = {
	post: {
		body: Artist,
	},
	getById: {
		params: RetrieveDto,
	},
	put: {
		body: ArtistUpdaterDto,
		params: RetrieveDto,
	},
};
export const artistRouter = baseRouter(basePath, artistController, schema);
