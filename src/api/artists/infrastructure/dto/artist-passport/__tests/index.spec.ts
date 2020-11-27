// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistPassport } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('ArtistPassport', () => {

  it('should get the model of artist passport', () => {
    const passportModel = transformerPlainToClass(ArtistPassport, mocks);
    expect(passportModel)
      .toEqual(
        expect.objectContaining({
          dateOfIssue: expect.any(Date),
          expirationDate: expect.any(Date),
          number: expect.any(String),
        })
      )
  });

});
