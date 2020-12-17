// Dependencies
import 'reflect-metadata';

// Dto's
import { GroupListDto } from "../group-list";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('GroupListDto', () => {
  it('should get the model of GroupListDto', () => {
    const model = transformerPlainToClass(GroupListDto, mocks);
    expect(model).toBeInstanceOf(GroupListDto)
  });
});
