// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { GroupUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('GroupUpdaterDto', () => {

  it('should get the model of GroupUpdaterDto', async () => {
    const model = transformerPlainToClass(GroupUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(GroupUpdaterDto)
  });
});
