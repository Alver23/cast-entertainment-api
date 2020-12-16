// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { ItineraryUpdaterDto } from "../itinerary-updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryUpdaterDto', () => {

  it('should get the model of ItineraryUpdaterDto', async () => {
    const model = transformerPlainToClass(ItineraryUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(ItineraryUpdaterDto)
  });
});
