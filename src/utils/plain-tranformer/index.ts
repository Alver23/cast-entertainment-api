// Dependencies
import { plainToClass } from 'class-transformer';

export const objectToClass = <S, D>(schema: any, data: D): S => {
	return plainToClass(schema, data, { excludeExtraneousValues: true });
};
