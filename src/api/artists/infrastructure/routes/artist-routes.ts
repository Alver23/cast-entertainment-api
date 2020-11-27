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

const artistService = new ArtistService(new ArtistRepository());
const artistController = new ArtistController(artistService);

const basePath = '/artists';
export const artistRouter = baseRouter(basePath, artistController, Artist, Artist);
