// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { CatalogUpdaterDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('CatalogUpdaterDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(CatalogUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(CatalogUpdaterDto)
  });
});
