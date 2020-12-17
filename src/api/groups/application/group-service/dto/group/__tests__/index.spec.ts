// Dependencies
import 'reflect-metadata';

// Dto's
import { GroupDto } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('GroupDto', () => {
  it('should get the model of GroupDto', () => {
    const model = transformerPlainToClass(GroupDto, mocks);
    expect(model).toBeInstanceOf(GroupDto)
  });
});
