// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "../../../../../__mocks__/fake-server";

// Router
import { itineraryActivityRouter } from "../index";

// Mocks
jest.mock('@api/itinerary-activity/infrastructure/dto/itinerary-activity', () => jest.fn());
jest.mock('@api/itinerary-activity/infrastructure/dto/itinerary-activity/itinerary-activity-updater', () => jest.fn());

jest.mock('@api/itinerary-activity/infrastructure/controllers/itinerary-activity', () => ({
  ItineraryActivityController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/itinerary-activity/application/itinerary-activity-service', () => ({
  ItineraryActivityService: require('@mocks/fake-service').default,
}));

jest.mock('@api/itinerary-activity/infrastructure/persistence/itinerary-activity', () => ({
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
