export interface IGroupEntity {
	id?: number;
	name: string;
	description: string;
	state: boolean;
	members: number[];
	removeMembers?: number[];
	removeItineraries?: number[];
	itineraries: number[];
	ipAddress: string;
}
