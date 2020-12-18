// Dependencies
import 'reflect-metadata';

// Dto's
import { UserCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('UserCreatorDto', () => {

  it('should get the model of UserCreatorDto', () => {
    const model = transformerPlainToClass(UserCreatorDto, {});
    expect(model).toBeInstanceOf(UserCreatorDto)
  });
});
