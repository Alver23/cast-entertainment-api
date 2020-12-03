// Dependencies
import { Optional } from 'sequelize';

export interface TutorModel {
	address?: string;
	cellPhone?: string;
	city?: string;
	countryId: number;
	email: string;
	id: number;
	ipAddress: string;
	names: string;
	relationshipId: number;
	studentId: number;
}

export type TutorCreationAttributes = Optional<TutorModel, 'id'>;
