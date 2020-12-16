// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryActivityCreatorDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryActivityCreatorDto', () => {

  it('should get the model of ItineraryActivityCreatorDto', () => {
    const model = transformerPlainToClass(ItineraryActivityCreatorDto, {});
    expect(model).toBeInstanceOf(ItineraryActivityCreatorDto)
  });
});
