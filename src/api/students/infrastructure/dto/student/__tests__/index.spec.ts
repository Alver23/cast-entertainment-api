// Dependencies
import 'reflect-metadata';

// Dto's
import { StudentCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('StudentCreatorDto', () => {

  it('should get the model of StudentCreatorDto', () => {
    const model = transformerPlainToClass(StudentCreatorDto, { id: 1, name: 'fake'});
    expect(model).toBeInstanceOf(StudentCreatorDto)
  });
});
