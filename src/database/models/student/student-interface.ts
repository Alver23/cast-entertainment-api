// Dependencies
import { Optional } from 'sequelize';

export interface StudentModel {
	id: number;
	personId: number;
	ipAddress: string;
}

export type StudentCreationAttributes = Optional<StudentModel, 'id'>;
