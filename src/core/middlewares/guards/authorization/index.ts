// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

// Middlewares
import { UnauthorizedException } from '@api/auth/domain/exceptions/unauthorized';

export class Authorization {
	isAllowed(role: string, rolesAllowed: string[]): boolean {
		return rolesAllowed.includes(role);
	}

	handler(...rolesAllowed: string[]): RequestHandler {
		return (req: Request, res: Response, next: NextFunction): void => {
			const user: IAuthUserEntity = req.user as IAuthUserEntity;
			const canAccess = user.roles.some((role) => this.isAllowed(role, rolesAllowed));
			if (!canAccess) {
				return next(new UnauthorizedException());
			}
			next();
		};
	}
}

export const authorization = new Authorization();
