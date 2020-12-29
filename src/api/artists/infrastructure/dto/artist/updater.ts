// Dependencies
import { IsNumber, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// Dto's
import { PersonUpdaterDto } from '@api/persons/infrastructure/dto/person-updater';
import { ArtistBeneficiaryUpdaterDto } from '@api/artists/infrastructure/dto/artist-beneficiary/updater';
import { ArtistSkillUpdaterDto } from '@api/artists/infrastructure/dto/artist-skills/updater';
import { ArtistPassportUpdaterDto } from '@api/artists/infrastructure/dto/artist-passport/updater';
import { EmergencyContactUpdaterDto } from '@api/emergency-contact/infrastructure/dto/updater';

export class ArtistUpdaterDto extends PersonUpdaterDto {
	@IsNumber()
	@Expose()
	personId: number;

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
	@Type(() => ArtistBeneficiaryUpdaterDto)
	beneficiaries: ArtistBeneficiaryUpdaterDto[];

	@ValidateNested()
	@Expose()
	@Type(() => EmergencyContactUpdaterDto)
	emergencyContact: EmergencyContactUpdaterDto;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistSkillUpdaterDto)
	skills: ArtistSkillUpdaterDto;

	@ValidateNested()
	@Expose()
	@Type(() => ArtistPassportUpdaterDto)
	passport: ArtistPassportUpdaterDto;
}
