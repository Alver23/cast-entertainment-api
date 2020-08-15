// Dependencies
import { Optional } from 'sequelize';

export interface PersonRequest {
	firstName: string;
	middleName: string;
	lastName: string;
	email: string;
	dateOfBirth?: string;
	address?: string;
	city?: string;
	zipCode?: string;
	homePhone?: string;
	cellPhone?: string;
	ipAddress: string;
}

export interface PersonModel extends PersonRequest {
	id: number;
}

export type PersonCreationAttributes = Optional<PersonModel, 'id'>;
