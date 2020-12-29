// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { EmergencyContactUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('EmergencyContactUpdaterDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(EmergencyContactUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(EmergencyContactUpdaterDto)
  });
});
