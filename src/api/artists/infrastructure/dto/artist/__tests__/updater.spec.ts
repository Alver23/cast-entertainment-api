// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('ArtistUpdaterDto', () => {

  it('should get the model', () => {
    const model = transformerPlainToClass(ArtistUpdaterDto, mocks);
    expect(model).toBeInstanceOf(ArtistUpdaterDto)
  });
});
