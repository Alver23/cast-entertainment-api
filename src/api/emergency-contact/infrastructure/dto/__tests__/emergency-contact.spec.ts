// Dependencies
import 'reflect-metadata';

// Dto's
import { EmergencyContact } from "../emergency-contact";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "../../../../__mocks__/plain-class";

describe('EmergencyContact', () => {

  it('should get the model', () => {
    const emergencyContactModel = transformerPlainToClass(EmergencyContact, mocks);
    expect(emergencyContactModel)
      .toEqual(
        expect.objectContaining({
          address: expect.any(String),
          cellPhone: expect.any(String),
          city: expect.any(String),
          dateOfBirth: expect.any(Date),
          documentNumber: expect.any(String),
          email: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          documentType: expect.any(Number),
          gender: expect.any(Number),
          height: expect.any(Number),
          relationshipId: expect.any(Number),
        })
      )
  });
});
