// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { activityRouter } from "../index";

// Mocks
jest.mock('@api/activities/infrastructure/dto/activity', () => jest.fn());
jest.mock('@api/activities/infrastructure/dto/activity/acitvity-updater', () => jest.fn());

jest.mock('@api/activities/infrastructure/controllers/activity', () => ({
  ActivityController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/activities/infrastructure/persistence/activity', () => ({
  ActivityRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/activities/application/activity-service', () => ({
  ActivityService: require('@mocks/fake-service').default,
}));


describe('Activity routes', () => {
  const path = '/activities';
  activityRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
