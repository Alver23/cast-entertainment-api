// Dependencies
import { Optional } from 'sequelize';

export interface CountryModel {
	id: number;
	name: string;
	description?: string;
	ipAddress: string;
}

export type CountryCreationAttributes = Optional<CountryModel, 'id'>;
