// Dependencies
import { Optional } from 'sequelize';

export interface ArtistHasBeneficiaryModel {
	id: number;
	artistId: number;
	personId: number;
	percentage: number;
	relationshipId: number;
	ipAddress: string;
}

export type ArtistHasBeneficiaryCreationAttributes = Optional<ArtistHasBeneficiaryModel, 'id'>;
