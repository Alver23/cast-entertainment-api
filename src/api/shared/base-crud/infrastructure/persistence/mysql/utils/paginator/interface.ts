export interface IPagingData {
	totalItems: number;
	items: any;
	totalPages: number;
	currentPage: number;
}

export interface IPagination {
	limit: number;
	offset: number;
}
