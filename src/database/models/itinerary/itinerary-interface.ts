// Dependencies
import { Optional } from 'sequelize';

export interface ItineraryModel {
	id: number;
	name: string;
	description: string;
	ipAddress: string;
}

export type ItineraryCreationAttributes = Optional<ItineraryModel, 'id'>;
