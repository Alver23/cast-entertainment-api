// Dependencies
import { Optional } from 'sequelize';

// Models
import { PersonCreationAttributes } from '../person/person-interface';

export interface EmergencyContactRequest extends PersonCreationAttributes {
	relationshipId: string;
}

export interface EmergencyContactModel {
	id: number;
	personId: number;
	relationshipId: number;
	ipAddress: string;
}

export type EmergencyContactCreationAttributes = Optional<EmergencyContactModel, 'id'>;
