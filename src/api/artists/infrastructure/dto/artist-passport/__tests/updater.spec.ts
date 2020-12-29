// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistPassportUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ArtistPassportUpdaterDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(ArtistPassportUpdaterDto, mocks);
    expect(model).toBeInstanceOf(ArtistPassportUpdaterDto)
  });
});
