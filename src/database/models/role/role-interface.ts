// Dependencies
import { Optional } from 'sequelize';

export interface RoleModel {
	id: number;
	name: string;
	description: string;
	ipAddress: string;
}
export type RoleCreationAttributes = Optional<RoleModel, 'id'>;
