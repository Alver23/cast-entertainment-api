// Dependencies
import 'reflect-metadata';

// Dto's
import { RhythmDto } from "../rhythm";

// Mocks
import { transformerPlainToClass } from "./../../../../../__mocks__/plain-class";

describe('RhythmDto', () => {

  it('should get the model of RhythmDto', () => {
    const model = transformerPlainToClass(RhythmDto, { id: 1, title: 'fake'});
    expect(model)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        })
      )
  });
});
