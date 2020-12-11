// Dependencies
import 'reflect-metadata';

// Dto's
import { RhythmUpdaterDto } from "../index";

// Mocks
import { transformerPlainToClass } from "./../../../../../../__mocks__/plain-class";

describe('RhythmDto', () => {

  it('should get the model of RhythmDto', () => {
    const model = transformerPlainToClass(RhythmUpdaterDto, { id: 1, name: 'fake'});
    expect(model)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
        })
      )
  });
});
