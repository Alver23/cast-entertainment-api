// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { userRouter } from "./user-router";

jest.mock('@api/users/controllers/user-controller', () => require('@api/users/controllers/user-controller-mock').userControllerMock);

describe('User router', () => {
  const path = '/users';
  userRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/ GET ONE', async () => {
    const response = await supertest(fakeServer).get(`${path}/1`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/ POST', async () => {
    const response = await supertest(fakeServer).post(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
