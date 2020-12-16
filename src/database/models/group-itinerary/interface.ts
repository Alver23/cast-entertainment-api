// Dependencies
import { Optional } from 'sequelize';

export interface GroupItineraryModel {
	id: number;
	itineraryId: number;
	groupId: number;
	ipAddress: string;
}

export type GroupItineraryCreationAttributes = Optional<GroupItineraryModel, 'id'>;
