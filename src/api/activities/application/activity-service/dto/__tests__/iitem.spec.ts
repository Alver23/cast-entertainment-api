// Dependencies
import 'reflect-metadata';

// Dto's
import { ActivityDto } from "../item";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ActivityDto', () => {

  it('should get the model of ActivityDto', () => {
    const model = transformerPlainToClass(ActivityDto, {});
    expect(model).toBeInstanceOf(ActivityDto)
  });
});
