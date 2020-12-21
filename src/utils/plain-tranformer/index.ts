// Dependencies
import { plainToClass } from 'class-transformer';

export const objectToClass = <S, D>(schema: any, data: D, options = {}): S => {
	return plainToClass(schema, data, { excludeExtraneousValues: true, ...options });
};
