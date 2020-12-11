// Dependencies
import 'reflect-metadata';

// Dto's
import { StudentItemDto } from "../item";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "./../../../../../../__mocks__/plain-class";

jest.mock('@utils/calculate-age', () => ({
  calculateAge: jest.fn()
}))

describe('StudentItemDto', () => {

  it('should get the model of StudentItemDto', () => {
    const model = transformerPlainToClass(StudentItemDto, mocks);
    expect(model).toBeInstanceOf(StudentItemDto)
  });
});
