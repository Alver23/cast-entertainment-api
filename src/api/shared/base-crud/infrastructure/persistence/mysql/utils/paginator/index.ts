// Interfaces
import { config } from '@config/index';
import { IPagingData, IPagination } from './interface';

// Config

const paginationConfig = config.paginator;
const { limit: defaultLimit, offset: defaultOffset } = paginationConfig;

export class Paginator {
	getPagination(page: number | string, size: number | string): IPagination {
		const limit = size ? +size : defaultLimit;
		const offset = page ? (+page - 1) * limit : defaultOffset;
		return { limit, offset };
	}

	getPagingData(data: any, page: number, limit: number): IPagingData {
		const { count: totalItems, rows: items } = data;
		const currentPage = page ?? 1;
		const totalPages = Math.ceil(totalItems / limit);

		return { totalItems, items, totalPages, currentPage };
	}
}

export const paginator = new Paginator();
