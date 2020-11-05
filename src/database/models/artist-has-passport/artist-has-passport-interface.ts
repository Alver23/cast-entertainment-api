// Dependencies
import { Optional } from 'sequelize';

export interface ArtistHasPassportRequest {
	number: string;
	dateOfIssue: string;
	expirationDate: string;
}

export interface ArtistHasPassportModel extends ArtistHasPassportRequest {
	id: number;
	artistId: number;
	ipAddress: string;
}

export type ArtistHasPassportCreationAttributes = Optional<ArtistHasPassportModel, 'id'>;
