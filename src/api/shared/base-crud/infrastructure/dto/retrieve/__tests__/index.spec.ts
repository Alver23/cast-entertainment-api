// Dependencies
import 'reflect-metadata';

// Dto's
import { RetrieveDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";
jest.unmock('@api/shared/base-crud/infrastructure/dto/retrieve');

describe('RetrieveDto', () => {

  it('should get the model of RetrieveDto', () => {
    const model = transformerPlainToClass(RetrieveDto, { id: 1});
    expect(model)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
        })
      )
  });
});
