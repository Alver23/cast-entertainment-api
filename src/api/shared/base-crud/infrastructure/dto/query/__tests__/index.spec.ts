// Dependencies
import 'reflect-metadata';

// Dto's
import { QueryParamsDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";
jest.unmock('@api/shared/base-crud/infrastructure/dto/pagination');
jest.unmock('@api/shared/base-crud/infrastructure/dto/query');

describe('PaginationParamsDto', () => {

  it('should get the model of PaginationParamsDto', () => {
    const model = transformerPlainToClass(QueryParamsDto, { name: 'alver' });
    expect(model)
      .toEqual(
        expect.objectContaining({
          name: expect.any(String),
        })
      )
  });
});
