// Dependencies
import { Expose } from 'class-transformer';

// Dto's
import { ArtistPassport } from '@api/artists/infrastructure/dto/artist-passport/index';

export class ArtistPassportUpdaterDto extends ArtistPassport {
	@Expose()
	id: number;
}
