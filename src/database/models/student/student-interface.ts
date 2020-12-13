// Dependencies
import { Optional } from 'sequelize';

export interface StudentModel {
	id: number;
	active?: boolean;
	personId: number;
	ipAddress: string;
}

export type StudentCreationAttributes = Optional<StudentModel, 'id'>;
