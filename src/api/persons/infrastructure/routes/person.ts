// Routes Generic
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Repository
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

// Application
import { PersonService } from '@api/persons/application/person-service';

// Controllers
import { PersonController } from '@api/persons/infrastructure/controllers/person';

// DTO's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

const service = new PersonService(new PersonRepository());
const controller = new PersonController(service);

const basePath = '/persons';
const schema = {
	post: {
		body: PersonDto,
	},
};
export const personRouter = baseRouter(basePath, controller, schema);
