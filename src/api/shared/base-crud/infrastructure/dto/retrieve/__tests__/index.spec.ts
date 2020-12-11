// Dependencies
import 'reflect-metadata';

// Dto's
import { RetrieveDto } from "../index";

// Mocks
import { transformerPlainToClass } from "./../../../../../../__mocks__/plain-class";

describe('RhythmDto', () => {

  it('should get the model of RhythmDto', () => {
    const model = transformerPlainToClass(RetrieveDto, { id: 1});
    expect(model)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
        })
      )
  });
});
