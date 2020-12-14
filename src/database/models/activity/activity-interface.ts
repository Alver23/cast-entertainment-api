// Dependencies
import { Optional } from 'sequelize';

export interface ActivityModel {
	id: number;
	name: string;
	description: string;
	date: Date;
	startTime: string;
	endTime: string;
	ipAddress: string;
}

export type ActivityCreationAttributes = Optional<ActivityModel, 'id'>;
