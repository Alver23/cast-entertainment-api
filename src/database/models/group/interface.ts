// Dependencies
import { Optional } from 'sequelize';

export interface GroupModel {
	id: number;
	name: string;
	description: string;
	state: boolean;
	ipAddress: string;
}

export type GroupCreationAttributes = Optional<GroupModel, 'id'>;
