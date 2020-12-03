// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistPassportResponse } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../../__mocks__/plain-class";

describe('ArtistPassport', () => {

  it('should get the model of artist passport', () => {
    const passportModel = transformerPlainToClass(ArtistPassportResponse, mocks);
    expect(passportModel)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          dateOfIssue: expect.any(Date),
          expirationDate: expect.any(Date),
          number: expect.any(String),
        })
      )
  });

});
