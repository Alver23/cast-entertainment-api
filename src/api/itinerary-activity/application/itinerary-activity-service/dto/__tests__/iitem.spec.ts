// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryActivityDto } from "../item";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryActivityDto', () => {

  it('should get the model of ItineraryActivityDto', () => {
    const model = transformerPlainToClass(ItineraryActivityDto, {});
    expect(model).toBeInstanceOf(ItineraryActivityDto)
  });
});
