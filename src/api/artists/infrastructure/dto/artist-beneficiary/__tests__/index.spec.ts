// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistBeneficiary } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('ArtistBeneficiary', () => {

  it('should get the model of artist beneficiary', () => {
    const beneficiaryModel = transformerPlainToClass(ArtistBeneficiary, mocks);
    expect(beneficiaryModel)
      .toEqual(
        expect.objectContaining({
          percentage: expect.any(Number),
          relationshipId: expect.any(Number),
        })
      )
  });
});
