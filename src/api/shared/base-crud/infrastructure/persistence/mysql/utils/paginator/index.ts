// Interfaces
import { IPagingData } from './interface';

export class Paginator {
	getPagingData(data: any, page: number, limit: number): IPagingData {
		const { count: totalItems, rows: items } = data;
		const currentPage = page ? page + 1 : 1;
		const totalPages = Math.ceil(totalItems / limit);

		return { totalItems, items, totalPages, currentPage };
	}
}

export const paginator = new Paginator();
