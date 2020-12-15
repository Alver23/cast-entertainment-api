// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryDto } from "../item";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryDto', () => {

  it('should get the model of ItineraryDto', () => {
    const model = transformerPlainToClass(ItineraryDto, {});
    expect(model).toBeInstanceOf(ItineraryDto)
  });
});
