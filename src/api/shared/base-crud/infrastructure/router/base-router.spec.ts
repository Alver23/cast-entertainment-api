// Dependencies
import supertest from 'supertest';

// Server
import { fakeServer } from "../../../../__mocks__/fake-server";

// Router
import { baseRouter } from "./base-router";

// Mocks
import { baseControllerMock } from "../controllers/base-controller-mock";

describe('baseRouter', () => {
  const path = '/fake-path';

  const router = baseRouter(path, baseControllerMock)
  router(fakeServer);

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

  it('/ PUT', async () => {
    const response = await supertest(fakeServer).put(`${path}/1`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/ DELETE', async () => {
    const response = await supertest(fakeServer).delete(`${path}/1`).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
