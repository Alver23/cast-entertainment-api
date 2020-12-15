// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { itineraryActivityRouter } from "../index";

// Mocks
jest.mock('@api/itineraries/infrastructure/dto/itinerary-activity', () => jest.fn());
jest.mock('@api/itineraries/infrastructure/dto/itinerary-activity/itinerary-activity-updater', () => jest.fn());
jest.mock('@api/shared/base-crud/infrastructure/dto/retrieve', () => jest.fn());

jest.mock('@api/itineraries/infrastructure/controllers/itinerary-activity', () => ({
  ItineraryActivityController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/itineraries/applications/itinerary-activity-service', () => ({
  ItineraryActivityService: require('@mocks/fake-service').default,
}));

jest.mock('@api/itineraries/infrastructure/persistence/itinerary-activity', () => ({
  ItineraryActivityRepository: require('@mocks/fake-repository').default,
}));


describe('Itinerary activity routes', () => {
  const path = '/itineraries/activities';
  itineraryActivityRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
