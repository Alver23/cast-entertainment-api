// Dependencies
import 'reflect-metadata';

// Dto's
import { TeacherItemsDto } from "../items";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('TeacherItemsDto', () => {

  it('should get the model of TeacherItemsDto', () => {
    const model = transformerPlainToClass(TeacherItemsDto, mocks);
    expect(model).toBeInstanceOf(TeacherItemsDto)
  });
});
