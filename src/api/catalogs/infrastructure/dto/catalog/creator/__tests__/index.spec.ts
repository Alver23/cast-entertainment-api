// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { CatalogCreatorDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('CatalogCreatorDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(CatalogCreatorDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(CatalogCreatorDto)
  });
});
