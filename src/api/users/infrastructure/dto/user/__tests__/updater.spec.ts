// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { UserUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('UserUpdaterDto', () => {

  it('should get the model of UserUpdaterDto', async () => {
    const model = transformerPlainToClass(UserUpdaterDto, {...mocks, personId: 1});
    await validateOrReject(model);
    expect(model).toBeInstanceOf(UserUpdaterDto)
  });
});
