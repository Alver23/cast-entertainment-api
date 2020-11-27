// Dependencies
import { Optional } from 'sequelize';

interface Artist {
	fullNamesFather?: string;
	fullNamesMother?: string;
	nativeLanguage?: number;
	otherLanguage?: number;
}

export interface ArtistModel extends Artist {
	id: number;
	personId: number;
	ipAddress: string;
}

export type ArtistCreationAttributes = Optional<ArtistModel, 'id'>;
