// Dependencies
import { Request } from 'express';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

// Services
import { ICatalogService } from '@api/catalogs/application/catalog/interface';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';

export class CatalogController extends BaseController<ICatalogEntity, ICatalogEntity, ICatalogService> {
	constructor(service: ICatalogService) {
		super(service);
	}

	public async getByParentId(req: Request, res: ICustomResponse) {
		const {
			params: { id },
		} = req;
		const { page, limit, otherFilters } = this.getQueryParams(req);

		const response = await this.baseService.getByParentId(+id, page, +limit, otherFilters);
		res.responseJson({ data: response, message: HttpMessages.LISTS });
	}
}
