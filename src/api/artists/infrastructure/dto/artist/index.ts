// Dependencies
import { ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// DTO's
import { ArtistPerson } from '@api/artists/infrastructure/dto/artist-person';
import { ArtistBeneficiary } from '@api/artists/infrastructure/dto/artist-beneficiary';
import { ArtistEmergencyContact } from '@api/artists/infrastructure/dto/artist-emergency-contact';
import { ArtistSkill } from '@api/artists/infrastructure/dto/artist-skills';
import { ArtistPassport } from '@api/artists/infrastructure/dto/artist-passport';

export class Artist extends ArtistPerson {
	@Expose()
	personId?: number;

	@Expose()
	fullNamesFather?: string;

	@Expose()
	fullNamesMother?: string;

	@Expose()
	nativeLanguage?: number;

	@Expose()
	otherLanguage?: number;

	@Expose()
	ipAddress: string;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistBeneficiary)
	beneficiaries: ArtistBeneficiary[];

	@ValidateNested()
	@Expose()
	@Type(() => ArtistEmergencyContact)
	emergencyContact: ArtistEmergencyContact;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistSkill)
	skills: ArtistSkill;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistPassport)
	passport: ArtistPassport;
}
