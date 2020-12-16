// Dependencies
import 'reflect-metadata';

// Dto's
import { ItineraryDto } from "../item";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryDto', () => {

  it('should get the model of ItineraryDto when activities is empty', () => {
    const model = transformerPlainToClass(ItineraryDto, mocks.caseOne);
    expect(model).toBeInstanceOf(ItineraryDto)
  });

  it('should get the model of ItineraryDto with activities', () => {
    const model = transformerPlainToClass(ItineraryDto, mocks.caseTwo);
    expect(model).toBeInstanceOf(ItineraryDto)
  });
});
