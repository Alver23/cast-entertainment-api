// Dependencies
import 'reflect-metadata';

// Dto's
import { QueryDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";
jest.unmock('@api/shared/base-crud/infrastructure/dto/pagination');
jest.unmock('@api/shared/base-crud/infrastructure/dto/query');

describe('PaginationParamsDto', () => {

  it('should get the model of PaginationParamsDto', () => {
    const model = transformerPlainToClass(QueryDto, { groupId: ['1', '2'] });
    expect(model)
      .toEqual(
        expect.objectContaining({
          groupId: expect.any(Array),
        })
      )
  });
});
