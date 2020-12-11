// Dependencies
import 'reflect-metadata';
import { validateOrReject } from 'class-validator';

// Mocks Utils
import { transformerPlainToClass } from "../../../../__mocks__/plain-class";

// Entities
import { PersonUpdaterDto } from "../person-updater";

// Mocks
import mocks from './mocks.json';

describe('PersonUpdaterDto', () => {

  const personMocks = {
    ...mocks,
    dateOfBirth: new Date(),
  }

  it('should get the model the person', async () => {
    const model = transformerPlainToClass(PersonUpdaterDto, {});
    await validateOrReject(model);
    expect(model).toBeInstanceOf(PersonUpdaterDto)
  });
});
