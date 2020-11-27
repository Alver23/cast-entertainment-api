// Dependencies
import { Optional } from 'sequelize';

export interface ArtistHasPassportRequest {
	number: string;
	dateOfIssue: Date;
	expirationDate: Date;
}

export interface ArtistHasPassportModel extends ArtistHasPassportRequest {
	id: number;
	artistId: number;
	ipAddress: string;
}

export type ArtistHasPassportCreationAttributes = Optional<ArtistHasPassportModel, 'id'>;
