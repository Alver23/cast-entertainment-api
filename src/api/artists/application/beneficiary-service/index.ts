// Entities
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';

export class ArtistBeneficiaryService {
	public transformData(data: any): IArtistBeneficiary {
		return data.map((value) => ({ ...value.dataValues, ...value.person.dataValues }));
	}
}

export const artistBeneficiaryService = new ArtistBeneficiaryService();
