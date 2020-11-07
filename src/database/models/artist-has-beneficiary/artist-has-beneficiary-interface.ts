// Dependencies
import { Optional } from 'sequelize';

// Models
import { PersonCreationAttributes } from '@database/models/person/person-interface';

export interface ArtistHasBeneficiaryRequest extends PersonCreationAttributes {
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
