// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { emergencyContactRouter } from "../emergency-contact-routes";

// Mocks
jest.mock('@api/emergency-contact/infrastructure/dto/emergency-contact', () => jest.fn());
jest.mock('@api/emergency-contact/infrastructure/persistence/emergency-contact-repository', () => ({
  EmergencyContactRepository: require('@mocks/fake-service').default,
}));
jest.mock('@api/emergency-contact/infrastructure/controllers/emergency-contact-controller', () => ({
  EmergencyContactController: require('@mocks/fake-controller').default,
}));


describe('Emergency contact routes', () => {
  const path = '/emergency-contacts';
  emergencyContactRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
