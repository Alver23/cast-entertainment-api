// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryCreatorDto', () => {

  it('should get the model of ItineraryCreatorDto', () => {
    const model = transformerPlainToClass(ItineraryCreatorDto, {});
    expect(model).toBeInstanceOf(ItineraryCreatorDto)
  });
});
