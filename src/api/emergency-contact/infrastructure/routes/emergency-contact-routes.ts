// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Infrastructure
import { EmergencyContact } from '@api/emergency-contact/infrastructure/dto/emergency-contact';
import { EmergencyContactController } from '@api/emergency-contact/infrastructure/controllers/emergency-contact-controller';
import { EmergencyContactRepository } from '@api/emergency-contact/infrastructure/persistence/emergency-contact-repository';

// Application
import { EmergencyContactService } from '@api/emergency-contact/application/emergency-contact-service';

const emergencyContactService = new EmergencyContactService(new EmergencyContactRepository());
const emergencyContactController = new EmergencyContactController(emergencyContactService);

const basePath = '/emergency-contacts';

const schemaValidation = {
	post: {
		body: EmergencyContact,
	},
	put: {
		body: EmergencyContact,
	},
};

export const emergencyContactRouter = baseRouter(basePath, emergencyContactController, schemaValidation);
