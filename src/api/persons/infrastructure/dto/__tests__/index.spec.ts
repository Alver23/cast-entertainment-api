// Dependencies
import 'reflect-metadata';

// Mocks Utils
import { transformerPlainToClass } from "@mocks/plain-class";

// Entities
import { PersonDto } from "../person";

// Mocks
import mocks from './mocks.json';

describe('PersonDto', () => {

  const personMocks = {
    ...mocks,
    dateOfBirth: new Date(),
  }

  it('should get the model the person', () => {
    const personInstance = transformerPlainToClass(PersonDto, personMocks);
    expect(personInstance)
      .toEqual(
        expect.objectContaining({
          address: expect.any(String),
          cellPhone: expect.any(String),
          city: expect.any(String),
          documentNumber: expect.any(Number),
          documentType: expect.any(Number),
          email:  expect.any(String),
          firstName:  expect.any(String),
          gender: expect.any(Number),
          height: expect.any(Number),
          lastName:  expect.any(String),
          countryId:  expect.any(Number),
        }),
      );
  });
});
