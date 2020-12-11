// Dependencies
import 'reflect-metadata';

// Dto's
import { StudentItemsDto } from "../items";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "./../../../../../../__mocks__/plain-class";

describe('StudentItemsDto', () => {

  it('should get the model of StudentItemsDto', () => {
    const model = transformerPlainToClass(StudentItemsDto, mocks);
    expect(model).toBeInstanceOf(StudentItemsDto)
  });
});
