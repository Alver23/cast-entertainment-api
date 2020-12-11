// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { StudentUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('StudentUpdaterDto', () => {

  it('should get the model of StudentUpdaterDto', async () => {
    const model = transformerPlainToClass(StudentUpdaterDto, {...mocks, personId: 1});
    await validateOrReject(model);
    expect(model).toBeInstanceOf(StudentUpdaterDto)
  });
});
