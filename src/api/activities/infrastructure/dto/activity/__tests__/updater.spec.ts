// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { ActivityUpdaterDto } from "../acitvity-updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ActivityUpdaterDto', () => {

  it('should get the model of ActivityUpdaterDto', async () => {
    const model = transformerPlainToClass(ActivityUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(ActivityUpdaterDto)
  });
});
