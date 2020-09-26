// Dependencies
import { Optional } from 'sequelize';

export interface MenuModel {
	id: number;
	name: string;
	description: string;
	orden: number;
	ipAddress: string;
}

export type MenuCreationAttributes = Optional<MenuModel, 'id'>;
