// Dependencies
import 'reflect-metadata';

// Dto's
import { TeacherCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('StudentCreatorDto', () => {

  it('should get the model of StudentCreatorDto', () => {
    const model = transformerPlainToClass(TeacherCreatorDto, {});
    expect(model).toBeInstanceOf(TeacherCreatorDto)
  });
});
