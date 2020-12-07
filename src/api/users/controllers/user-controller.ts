// Dependencies
import { CREATED, NOT_FOUND, OK } from 'http-status-codes';
import { NextFunction, Response, Request } from 'express';

// Interfaces
import { IUserService } from '@api/users/services/user-service-interface';

// Services
import { userServiceInstance } from '@api/users/services/user-service';

// Utils
import { HttpMessages, setResponse } from '@utils/index';

export class UserController {
	constructor(private readonly userService: IUserService) {}

	public async getUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const data = await this.userService.findAll();
			res.json(setResponse({ data, message: HttpMessages.LISTS }));
		} catch (error) {
			next(error);
		}
	}

	public async getUser(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				params: { id },
			} = req;
			const data = await this.userService.findOne({ query: { id } });
			const status = data ? OK : NOT_FOUND;
			res.status(status).json(setResponse({ data, status }));
		} catch (error) {
			next(error);
		}
	}

	public async createUser(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { body } = req;
			const data = await this.userService.create(body);
			res.status(CREATED).json(setResponse({ message: HttpMessages.CREATED, data }));
		} catch (error) {
			next(error);
		}
	}
}

export const userController = new UserController(userServiceInstance);
