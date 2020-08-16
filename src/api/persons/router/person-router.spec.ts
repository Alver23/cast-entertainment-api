// Dependencies
import supertest from 'supertest';

// Server
import { fakeServer } from "@mocks/fake-server";

// Router
import { personRouter } from "./person-router";

jest.mock('@api/persons/controllers/person-controller', () => require('@api/persons/controllers/person-controller-mock').personControllerMock);

describe('Person router', () => {
  const path = '/persons';
  personRouter(fakeServer);

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
