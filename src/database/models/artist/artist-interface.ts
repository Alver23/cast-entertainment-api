// Dependencies
import { Optional } from 'sequelize';

export interface ArtistModel {
	id: number;
	fullNamesFather?: string;
	fullNamesMother?: string;
	nativeLanguage?: number;
	otherLanguage?: number;
	active?: boolean;
	personId: number;
	ipAddress: string;
}

export type ArtistCreationAttributes = Optional<ArtistModel, 'id'>;
