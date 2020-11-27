// Dependencies
import { NOT_FOUND, OK } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

// Services
import { roleServiceInstance } from '@api/roles/services/role-service';

// Interfaces
import { IRoleService } from '@api/roles/services/role-service-interface';

// Utils
import { HttpMessages, setResponse } from '@utils/index';

export class RoleController {
	constructor(private readonly roleService: IRoleService) {}

	public async getRoles(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const data = await this.roleService.findAll();
			res.json(setResponse({ data, message: HttpMessages.LISTS }));
		} catch (error) {
			next(error);
		}
	}

	public async getRole(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				params: { id },
			} = req;
			const data = await this.roleService.findOne({ query: { id } });
			const status = data ? OK : NOT_FOUND;
			res.status(status).json(setResponse({ data, status }));
		} catch (error) {
			next(error);
		}
	}
}

export const roleController = new RoleController(roleServiceInstance);
