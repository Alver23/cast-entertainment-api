// Dependencies
import supertest from 'supertest';

// Server
import { fakeServer } from "@mocks/fake-server";

// Router
import { authRouter } from "./auth-router";

// Mocks
jest.mock('@api/auth/controllers/auth-controller', () => require('@api/auth/controllers/auth-controller-mock').authControllerMock);

describe('AuthRouter', () => {
  const path = `/auth`;
  authRouter(fakeServer);
  it('/login (POST)', async () => {
    const response = await supertest(fakeServer).post(`${path}/login`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/token POST', async () => {
    const response = await supertest(fakeServer).post(`${path}/token`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

});
