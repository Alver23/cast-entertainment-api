// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { TeacherUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('StudentUpdaterDto', () => {

  it('should get the model of StudentUpdaterDto', async () => {
    const model = transformerPlainToClass(TeacherUpdaterDto, {...mocks, personId: 1});
    await validateOrReject(model);
    expect(model).toBeInstanceOf(TeacherUpdaterDto)
  });
});
