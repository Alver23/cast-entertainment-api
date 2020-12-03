// Dependencies
import { Expose, Type } from 'class-transformer';

// Dto's
import { ArtistPersonResponse } from '@api/artists/application/artist-service/dto/artist-person';
import { ArtistPassportResponse } from '@api/artists/application/artist-service/dto/artist-passport';
import { ArtistEmergencyContactResponse } from '@api/artists/application/artist-service/dto/artist-emergency-contact';
import { ArtistSkillResponse } from '@api/artists/application/artist-service/dto/artist-skills';
import { ArtistBeneficiaryResponse } from '@api/artists/application/artist-service/dto/artist-beneficiary';

export class ArtistResponse extends ArtistPersonResponse {
	@Expose()
	id: number;

	@Expose()
	personId: number;

	@Expose()
	nativeLanguage: number;

	@Expose()
	otherLanguage: number;

	@Expose()
	fullNamesFather: string;

	@Expose()
	fullNamesMother: string;

	@Expose()
	@Type(() => ArtistEmergencyContactResponse)
	emergencyContact: ArtistEmergencyContactResponse;

	@Expose()
	@Type(() => ArtistPassportResponse)
	passport: ArtistPassportResponse;

	@Expose()
	@Type(() => ArtistSkillResponse)
	skills: ArtistSkillResponse[];

	@Expose()
	@Type(() => ArtistBeneficiaryResponse)
	beneficiaries: ArtistBeneficiaryResponse[];
}
