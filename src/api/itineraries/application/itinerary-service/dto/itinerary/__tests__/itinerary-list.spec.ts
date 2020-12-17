// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryListDto } from "./../itinerary-list";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryListDto', () => {

  it('should get the model of ItineraryListDto', () => {
    const model = transformerPlainToClass(ItineraryListDto, mocks.caseOne);
    expect(model).toBeInstanceOf(ItineraryListDto)
  });
});
