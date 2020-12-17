// Dependencies
import { Expose, Type, Transform } from 'class-transformer';

// Dto's
import { ArtistDto } from '../artist';
import { ItineraryDto } from '../itinerary';

export class GroupDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	@Type(() => ArtistDto)
	members: ArtistDto[];

	@Expose()
	@Transform((value, obj) => obj.members.length)
	membersNumber: number;

	@Expose()
	@Type(() => ItineraryDto)
	itineraries: ItineraryDto[];
}
