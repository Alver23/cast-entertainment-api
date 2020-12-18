// Dependencies
import 'reflect-metadata';

// Dto's
import { UserDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('UserDto', () => {

  it('should get the model of UserDto', () => {
    const model = transformerPlainToClass(UserDto, mocks);
    expect(model).toBeInstanceOf(UserDto)
  });
});
