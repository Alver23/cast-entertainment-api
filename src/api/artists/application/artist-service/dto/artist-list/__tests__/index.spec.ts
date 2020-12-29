// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistListDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

jest.mock('@utils/calculate-age', () => ({
  calculateAge: jest.fn()
}))

describe('ArtistResponse', () => {

  it('should get the model of artistResponse', () => {
    const artistModel = transformerPlainToClass(ArtistListDto, mocks);
    expect(artistModel).toBeInstanceOf(ArtistListDto)
  });
});
