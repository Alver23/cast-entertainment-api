// Dependencies
import { Optional } from 'sequelize';

export interface TeacherModel {
	id: number;
	nativeLanguage?: number;
	otherLanguage?: number;
	personId: number;
	ipAddress: string;
}

export type TeacherCreationAttributes = Optional<TeacherModel, 'id'>;
