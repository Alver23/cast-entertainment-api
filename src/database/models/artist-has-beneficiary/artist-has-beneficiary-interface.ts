// Dependencies
import { Optional } from 'sequelize';

export interface ArtistHasBeneficiaryRequest {
	percentage: number;
	relationshipId: number;
}

export interface ArtistHasBeneficiaryModel extends ArtistHasBeneficiaryRequest {
	id: number;
	artistId: number;
	personId: number;
	ipAddress: string;
}

export type ArtistHasBeneficiaryCreationAttributes = Optional<ArtistHasBeneficiaryModel, 'id'>;
