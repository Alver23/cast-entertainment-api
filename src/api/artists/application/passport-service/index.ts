// Entities
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';

export class ArtistPassportService {
	public transformData(data: any): IArtistPassport {
		return data?.dataValues;
	}
}

export const artistPassportService = new ArtistPassportService();
