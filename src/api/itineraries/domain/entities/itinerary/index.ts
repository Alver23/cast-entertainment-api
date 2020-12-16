// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

export interface IItineraryEntity {
	id?: number;
	name: string;
	description: string;
	activities: IActivityEntity[];
}
