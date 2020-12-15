// Controllers
import { ItineraryActivityController } from '@api/itineraries/infrastructure/controllers/itinerary-activity';

// Services
import { ItineraryActivityService } from '@api/itineraries/applications/itinerary-activity-service';

// Repositories
import { ItineraryActivityRepository } from '@api/itineraries/infrastructure/persistence/itinerary-activity';

// Dto's
import { ItineraryActivityCreatorDto } from '@api/itineraries/infrastructure/dto/itinerary-activity';
import { ItineraryActivityUpdaterDto } from '@api/itineraries/infrastructure/dto/itinerary-activity/itinerary-activity-updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

const service = new ItineraryActivityService(new ItineraryActivityRepository());
const controller = new ItineraryActivityController(service);

const schema = {
	post: {
		body: ItineraryActivityCreatorDto,
	},
	put: {
		body: ItineraryActivityUpdaterDto,
		params: RetrieveDto,
	},
};

const basePath = '/itineraries/activities';
export const itineraryActivityRouter = baseRouter(basePath, controller, schema);
