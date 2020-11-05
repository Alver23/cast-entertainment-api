// Dependencies
import { Optional } from 'sequelize';

// Models
import { PersonCreationAttributes } from '../person/person-interface';

interface Artist {
	nativeLanguage?: number;
	otherLanguage?: number;
	fullNamesFather?: string;
	fullNamesMother?: string;
}
export interface ArtistRequest extends Artist, PersonCreationAttributes {}

export interface ArtistModel extends Artist {
	id: number;
	personId: number;
	ipAddress: string;
}

export type ArtistCreationAttributes = Optional<ArtistModel, 'id' & 'personId'>;
