// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { ItineraryActivityUpdaterDto } from "../itinerary-activity-updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ItineraryActivityUpdaterDto', () => {

  it('should get the model of ItineraryActivityUpdaterDto', async () => {
    const model = transformerPlainToClass(ItineraryActivityUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(ItineraryActivityUpdaterDto)
  });
});
