// Dependencies
import 'reflect-metadata';

// Dto's
import { ActivityCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ActivityCreatorDto', () => {

  it('should get the model of ActivityCreatorDto', () => {
    const model = transformerPlainToClass(ActivityCreatorDto, {});
    expect(model).toBeInstanceOf(ActivityCreatorDto)
  });
});
