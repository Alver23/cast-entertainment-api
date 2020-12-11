// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistResponse } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "./../../../../../../__mocks__/plain-class";

jest.mock('@utils/calculate-age', () => ({
  calculateAge: jest.fn()
}))

describe('ArtistResponse', () => {

  it('should get the model of artistResponse', () => {
    const artistModel = transformerPlainToClass(ArtistResponse, mocks);
    expect(artistModel)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          fullNamesFather: expect.any(String),
          fullNamesMother: expect.any(String),
          nativeLanguage: expect.any(Number),
          otherLanguage: expect.any(Number),
        })
      )
  });
});
