// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { userRouter } from "../index";

jest.mock('@api/users/infrastructure/dto/user', () => jest.fn());
jest.mock('@api/users/infrastructure/dto/user/updater', () => jest.fn());
jest.mock('@api/shared/base-crud/infrastructure/dto/retrieve', () => jest.fn());

jest.mock('@api/users/infrastructure/persistence/user', () => ({
  UserRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/users/infrastructure/controllers/user', () => ({
  UserController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/users/application/user-service', () => ({
  UserService: require('@mocks/fake-service').default,
}))


describe('User routes', () => {
  const path = '/users';
  userRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

});
