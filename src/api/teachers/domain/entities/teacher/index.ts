// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface ITeacherEntity extends IPersonEntity {
	nativeLanguage?: number;
	otherLanguage?: number;
	personId?: number;
}
