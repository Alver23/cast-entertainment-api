// Entities
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';

export class ArtistEmergencyContactService {
	public transformData(data): IArtistEmergencyContact {
		if (data) {
			const { emergencyContact: emergencyContactValues } = data;
			const { person: personValues } = emergencyContactValues;
			return {
				...personValues.dataValues,
				...emergencyContactValues.dataValues,
				...data.dataValues,
			};
		}

		return null;
	}
}

export const artistEmergencyContactService = new ArtistEmergencyContactService();
