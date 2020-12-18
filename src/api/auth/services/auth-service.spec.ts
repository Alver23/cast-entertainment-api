// Services
import { AuthService } from "./auth-service";
import { PersonRepository } from "@api/persons/infrastructure/persistence/person-repository";

// Database Models
import { Token } from "@database/models/token";

// Mocks
import mocks from '../mocks.json';
import userMocks from '@database/models/user/mocks.json';
import personMocks from '@database/models/person/mocks.json';

jest.mock('@config/index', () => ({
  config: {
    jwt: {
      secret: 'fake secret',
      expires: '1m',
    },
  }
}));
jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@api/persons/infrastructure/persistence/person-repository-mock').default
}));
jest.mock('@database/models/token', () => require('@database/models/token/token-mock').tokenMock);

describe('AuthService', () => {

  let personRepository: PersonRepository;
  let authServiceInstance: AuthService;

  beforeAll(() => {
    personRepository = new PersonRepository();
    authServiceInstance = new AuthService(personRepository);
  });

  const expectedProperties = () => ({
    id: expect.any(Number),
    firstName: expect.any(String),
    lastName: expect.any(String),
    dateOfBirth: expect.any(Date),
    address: expect.any(String),
    password: expect.any(String),
    email: expect.any(String),
  });

  describe('getUser method', () => {
    it('should get an user data', () => {
      return authServiceInstance
        .getUser('fake@fake.com')
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expectedProperties(),
                roles: expect.arrayContaining([
                  expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    description: expect.any(String),
                  }),
                ]),
              }),
            );
        });
    });

    it('should get null', () => {
      jest.spyOn(personRepository, 'findOne').mockResolvedValue({} as any);
      return authServiceInstance
        .getUser('fake')
        .then((response) => {
          expect(response).toBeFalsy();
        });
    });

    it('should get an user data when the roles is empty', () => {
      const findOneMock = {
        ...personMocks,
        dateOfBirth: new Date(),
        getUser: () => ({
          ...userMocks,
          password: '123',
          getRoles: () => null,
        }),
      }
      jest.spyOn(personRepository, 'findOne').mockResolvedValue(findOneMock);
      return authServiceInstance
        .getUser('fake')
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expectedProperties(),
                roles: expect.any(Array),
              }),
            );
        });
    });
  });

  describe('createToken method', () => {
    it('should get an token', () => {
      expect(
        authServiceInstance.createToken(mocks)
      ).toEqual(expect.any(String));
    });
  });

  describe('generateRefreshToken method', () => {
    it('should get an refresh token', () => {
      return authServiceInstance
        .generateRefreshToken(mocks)
        .then((response: string) => {
          expect(response).toEqual(expect.any(String));
        });
    });
  });

  describe('refreshToken method', () => {
    it('should get an new token', () => {
      const properties = expectedProperties();
      delete properties.password;
      return authServiceInstance
        .refreshToken('123')
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                user: expect.objectContaining({
                  ...properties,
                  roles: expect.any(Array),
                }),
                token: expect.any(String),
                refreshToken: expect.any(String)
              }),
            )
        });
    });

    it('should get an error', () => {
      jest.spyOn(Token, 'findOne').mockResolvedValue(null);
      return authServiceInstance
        .refreshToken('123')
        .catch((error) => expect(error).toBeInstanceOf(Error))
    });
  });
});
