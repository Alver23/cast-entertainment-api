// Dependencies
import { plainToClass } from 'class-transformer';
import { NextFunction, Request, RequestHandler, Response } from 'express';

export class SchemaTransformer {
	private readonly listCheckTransformer: string[] = ['body', 'params', 'query'];

	handler(schema: any): RequestHandler {
		return (req: Request, res: Response, next: NextFunction) => {
			if (Object.keys(schema).length === 0) {
				return next();
			}

			this.listCheckTransformer.forEach((item) => {
				if (Object.prototype.hasOwnProperty.call(schema, item)) {
					const schemaModel = plainToClass(schema[item], req[item], { excludeExtraneousValues: true });
					req[item] = schemaModel;
				}
			});
			next();
		};
	}
}

export const schemaTransformer = new SchemaTransformer();
