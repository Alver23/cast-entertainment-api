// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface IArtistBeneficiary extends IPersonEntity {
	id?: number;
	personId?: number;
	percentage: number;
	relationshipId: number;
}
