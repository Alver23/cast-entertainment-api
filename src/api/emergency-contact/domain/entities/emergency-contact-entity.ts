// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface IEmergencyContact extends IPersonEntity {
	personId?: number;
	relationshipId: number;
}
