// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistEmergencyContact } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('ArtistEmergencyContact', () => {

  it('should get the model of artist emergency contact', () => {
    const emergencyContactModel = transformerPlainToClass(ArtistEmergencyContact, mocks);
    expect(emergencyContactModel)
      .toEqual(
        expect.objectContaining({
          relationshipId: expect.any(Number),
        })
      )
  });
});
