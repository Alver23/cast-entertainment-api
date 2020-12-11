// Shared
import { IPersonEntity } from '@api/persons/domain/entities/person';
import { ITutorEntity } from '@api/students/domain/entities/tutor';
import { IRhythmEntity } from '@api/shared/rhythm/domain/entities/rhythm';

export interface IStudentEntity extends IPersonEntity {
	personId?: number;
	active?: boolean;
	tutor: ITutorEntity;
	rhythms: IRhythmEntity[];
}
