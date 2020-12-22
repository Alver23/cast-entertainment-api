// Dependencies
import supertest from 'supertest';

// Server
import { fakeServer } from "@mocks/fake-server";

// Router
import { authRouter } from "../index";

// Mocks
jest.mock('@api/auth/infrastructure/persistence/auth', () => ({
  AuthRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/auth/infrastructure/persistence/token', () => ({
  TokenRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/auth/application/auth-service', () => ({
  AuthService: require('@mocks/fake-service').default,
}));

jest.mock('@api/auth/application/token-service', () => ({
  TokenService: require('@mocks/fake-service').default,
}));

jest.mock('@api/auth/infrastructure/controllers/auth', () => {
  const fakeResponse = require('@mocks/fake-response').fakeResponse;
  return {
    AuthController: class Fake {
      login(req, res, next) {
        return fakeResponse(res);
      }

      refreshToken(req, res, next) {
        return fakeResponse(res);
      }
    }
  }
});

import { fakeResponse } from "@mocks/fake-response";

describe('Auth routes', () => {
  const path = `/auth`;
  authRouter(fakeServer);
  it('/login (POST)', async () => {
    const response = await supertest(fakeServer).post(`${path}/login`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/token POST', async () => {
    const response = await supertest(fakeServer).post(`${path}/refresh-token`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

});
