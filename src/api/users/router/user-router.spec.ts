// Dependencies
import supertest = require('supertest');

// Server
import { fakeServer } from "../../__mocks__/fake-server";

// Router
import { userRouter } from "./user-router";

jest.mock('../controller/user-controller', () => require('./../controller/user-controller-mock').mockUserController);

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
