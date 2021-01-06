// Dependencies
import { ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// DTO's
import { ArtistBeneficiary } from '@api/artists/infrastructure/dto/artist-beneficiary';
import { ArtistSkill } from '@api/artists/infrastructure/dto/artist-skills';
import { ArtistPassport } from '@api/artists/infrastructure/dto/artist-passport';
import { EmergencyContact } from '@api/emergency-contact/infrastructure/dto/emergency-contact';
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class Artist extends PersonDto {
	@Expose()
	fullNamesFather: string;

	@Expose()
	fullNamesMother: string;

	@Expose()
	nativeLanguage: number;

	@Expose()
	otherLanguage: number;

	@Expose()
	ipAddress: string;

	@Expose()
	active: boolean;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistBeneficiary)
	beneficiaries: ArtistBeneficiary[];

	@ValidateNested()
	@Expose()
	@Type(() => EmergencyContact)
	emergencyContact: EmergencyContact;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistSkill)
	skills: ArtistSkill[];

	@ValidateNested()
	@Expose()
	@Type(() => ArtistPassport)
	passport: ArtistPassport;
}
