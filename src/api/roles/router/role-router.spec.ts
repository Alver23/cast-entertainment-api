// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { roleRouter } from "./role-router";

jest.mock('@api/roles/controllers/role-controller', () => require('@api/roles/controllers/role-controller-mock').roleControllerMock);

describe('Role router', () => {
  const path = '/roles';
  roleRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/ GET ONE', async () => {
    const response = await supertest(fakeServer).get(`${path}/1`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
