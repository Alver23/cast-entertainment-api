// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';
import { IRhythmEntity } from '@api/shared/rhythm/domain/entities/rhythm';

export interface ITeacherEntity extends IPersonEntity {
	nativeLanguage?: number;
	otherLanguage?: number;
	personId?: number;
	rhythms: IRhythmEntity[];
}
