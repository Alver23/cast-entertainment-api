// Dependencies
import 'reflect-metadata';

// Dto's
import { TeacherItemDto } from "../item";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

jest.mock('@utils/calculate-age', () => ({
  calculateAge: jest.fn()
}))

describe('TeacherItemDto', () => {

  it('should get the model of TeacherItemDto', () => {
    const model = transformerPlainToClass(TeacherItemDto, mocks);
    expect(model).toBeInstanceOf(TeacherItemDto)
  });
});
