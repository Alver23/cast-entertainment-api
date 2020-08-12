export interface PersonRequest {
	firstName: string;
	middleName: string;
	lastName: string;
	email: string;
	dateOfBirth?: string;
	address?: string;
	city?: string;
	zipCode?: string;
	homePhone?: string;
	cellPhone?: string;
}

export interface PersonModel extends PersonRequest {
	id?: number;
	ipAddress?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
