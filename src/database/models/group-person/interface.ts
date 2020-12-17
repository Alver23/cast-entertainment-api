// Dependencies
import { Optional } from 'sequelize';

export interface GroupPersonModel {
	id: number;
	groupId: number;
	personId: number;
	ipAddress: string;
}

export type GroupPersonCreationAttributes = Optional<GroupPersonModel, 'id'>;
