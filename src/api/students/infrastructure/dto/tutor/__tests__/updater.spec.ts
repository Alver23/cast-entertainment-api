// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// DTO's
import { TutorUpdaterDto } from "../updater";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('TutorUpdaterDto', () => {

  it('should get the model of TutorUpdaterDto', async () => {
    const model = transformerPlainToClass(TutorUpdaterDto, { id: 1});
    await validateOrReject(model);
    expect(model).toBeInstanceOf(TutorUpdaterDto)
  });
});

