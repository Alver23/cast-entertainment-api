// Dependencies
import 'reflect-metadata';
import 'es6-shim';
import { plainToClass } from "class-transformer";

export const transformerPlainToClass = (model, data) => {
  return plainToClass(model, data, { excludeExtraneousValues: true });
}
