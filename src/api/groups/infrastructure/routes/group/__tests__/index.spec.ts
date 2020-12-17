// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { groupRouter } from "../index";

// Mocks
jest.mock('@api/groups/infrastructure/dto/group', () => jest.fn());
jest.mock('@api/groups/infrastructure/dto/group/updater', () => jest.fn());
jest.mock('@api/shared/base-crud/infrastructure/dto/retrieve', () => jest.fn());

jest.mock('@api/groups/infrastructure/controllers/group', () => ({
  GroupController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/groups/infrastructure/persistence/group', () => ({
  GroupRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/groups/application/group-service', () => ({
  GroupService: require('@mocks/fake-service').default,
}));


describe('Group routes', () => {
  const path = '/groups';
  groupRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
