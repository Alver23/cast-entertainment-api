// Entities
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';
import { IArtistPerson } from '@api/artists/domain/entities/artist-person/artist-person-entity';
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';

export interface IArtist extends IArtistPerson {
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
