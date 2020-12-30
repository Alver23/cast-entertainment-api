// Dependencies
import 'reflect-metadata';

// Dto's
import { CatalogItemDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('CatalogItemDto', () => {
  it('should get the model', () => {
    const model = transformerPlainToClass(CatalogItemDto, {});
    expect(model).toBeInstanceOf(CatalogItemDto)
  });
});
