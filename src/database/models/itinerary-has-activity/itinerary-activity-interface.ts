// Dependencies
import { Optional } from 'sequelize';

export interface ItineraryActivityModel {
	id: number;
	itineraryId: number;
	activityId: number;
	ipAddress: string;
}

export type ItineraryActivityCreationAttributes = Optional<ItineraryActivityModel, 'id'>;
