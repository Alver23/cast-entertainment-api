// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { personRouter } from "../person";

// Mocks
jest.mock('@api/persons/infrastructure/dto/person', () => jest.fn());
jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/persons/infrastructure/controllers/person', () => ({
  PersonController: require('@mocks/fake-controller').default,
}));


describe('Emergency contact routes', () => {
  const path = '/persons';
  personRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
