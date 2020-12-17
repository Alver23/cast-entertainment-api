// Dependencies
import 'reflect-metadata';

// Dto's
import { GroupCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('GroupCreatorDto', () => {

  it('should get the model of ItineraryCreatorDto', () => {
    const model = transformerPlainToClass(GroupCreatorDto, {});
    expect(model).toBeInstanceOf(GroupCreatorDto)
  });
});
