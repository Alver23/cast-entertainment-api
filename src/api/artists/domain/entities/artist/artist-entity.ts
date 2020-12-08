// Entities
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface IArtist extends IPersonEntity {
	fullNamesFather?: string;
	fullNamesMother?: string;
	nativeLanguage?: number;
	otherLanguage?: number;
	beneficiaries?: IArtistBeneficiary[];
	emergencyContact?: IArtistEmergencyContact;
	passport?: IArtistPassport;
	skills?: IArtistSkill[];

	personId?: number;
}
