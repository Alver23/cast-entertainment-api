// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { itineraryRouter } from "../index";

// Mocks
jest.mock('@api/itineraries/infrastructure/dto/itinerary', () => jest.fn());
jest.mock('@api/itineraries/infrastructure/dto/itinerary/itinerary-updater', () => jest.fn());
jest.mock('@api/shared/base-crud/infrastructure/dto/retrieve', () => jest.fn());

jest.mock('@api/itineraries/infrastructure/controllers/itinerary', () => ({
  ItineraryController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/itineraries/infrastructure/persistence/itinerary', () => ({
  ItineraryRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/itineraries/applications/itinerary-service', () => ({
  ItineraryService: require('@mocks/fake-service').default,
}));


describe('Itinerary routes', () => {
  const path = '/itineraries';
  itineraryRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
