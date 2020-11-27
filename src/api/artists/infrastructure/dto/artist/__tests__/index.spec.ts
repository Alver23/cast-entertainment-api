// Dependencies
import 'reflect-metadata';

// Dto's
import { Artist } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('Artist', () => {

  it('should get the model of artist', () => {
    const artistModel = transformerPlainToClass(Artist, mocks);
    expect(artistModel)
      .toEqual(
        expect.objectContaining({
          fullNamesFather: expect.any(String),
          fullNamesMother: expect.any(String),
          nativeLanguage: expect.any(Number),
          otherLanguage: expect.any(Number),
        })
      )
  });
});
