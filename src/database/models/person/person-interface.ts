// Dependencies
import { Optional } from 'sequelize';

export interface PersonRequest {
	firstName: string;
	lastName: string;
	email: string;
	dateOfBirth?: Date;
	address?: string;
	city?: string;
	cellPhone?: string;
	gender?: number;
	documentType?: number;
	documentNumber?: number;
	height?: number;
	countryId: number;
	ipAddress: string;
}

export interface PersonModel extends PersonRequest {
	id: number;
}

export type PersonCreationAttributes = Optional<PersonModel, 'id'>;
