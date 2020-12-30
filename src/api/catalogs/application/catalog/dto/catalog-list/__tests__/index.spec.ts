// Dependencies
import 'reflect-metadata';

// Dto's
import { CatalogListDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('CatalogListDto', () => {
  it('should get the model', () => {
    const model = transformerPlainToClass(CatalogListDto, mocks);
    expect(model).toBeInstanceOf(CatalogListDto)
  });
});
