// Controllers
import { ItineraryController } from '@api/itineraries/infrastructure/controllers/itinerary';

// Services
import { ItineraryService } from '@api/itineraries/applications/itinerary-service';

// Repositories
import { ItineraryRepository } from '@api/itineraries/infrastructure/persistence/itinerary';

// Dto's
import { ItineraryCreatorDto } from '@api/itineraries/infrastructure/dto/itinerary';
import { ItineraryUpdaterDto } from '@api/itineraries/infrastructure/dto/itinerary/itinerary-updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

const service = new ItineraryService(new ItineraryRepository());
const controller = new ItineraryController(service);

const schema = {
	post: {
		body: ItineraryCreatorDto,
	},
	put: {
		body: ItineraryUpdaterDto,
		params: RetrieveDto,
	},
};

const basePath = '/itineraries';
export const itineraryRouter = baseRouter(basePath, controller, schema);
