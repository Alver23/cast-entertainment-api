// Dependencies
import { Optional } from 'sequelize';

export interface EmergencyContactModel {
	id: number;
	personId: number;
	relationshipId: number;
	ipAddress: string;
}

export type EmergencyContactCreationAttributes = Optional<EmergencyContactModel, 'id'>;
