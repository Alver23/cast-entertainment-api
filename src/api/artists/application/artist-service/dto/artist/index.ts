// Dependencies
import { Expose, Type } from 'class-transformer';

// Dto's
import { ArtistPassportResponse } from '@api/artists/application/artist-service/dto/artist-passport';
import { ArtistSkillResponse } from '@api/artists/application/artist-service/dto/artist-skills';
import { ArtistBeneficiaryResponse } from '@api/artists/application/artist-service/dto/artist-beneficiary';
import { PersonResponseDto } from '@api/persons/application/dto/person';
import { EmergencyContactResponse } from '@api/emergency-contact/application/dto/emergency-contact';

export class ArtistItemDto extends PersonResponseDto {
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
	active: boolean;

	@Expose()
	@Type(() => EmergencyContactResponse)
	emergencyContact: EmergencyContactResponse;

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
