export interface PersonRequest {
	first_name: string;
	middle_name: string;
	last_name: string;
	email: string;
	date_of_birth?: Date;
	address?: string;
	city?: string;
	zip_code?: string;
	home_phone?: string;
	cell_phone?: string;
}

export interface PersonModel extends PersonRequest {
	id?: number;
	ip_address?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}
