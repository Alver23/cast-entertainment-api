// Services
import { userServiceInstance } from './user-service';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Services
import { PersonRepository } from "../../persons/infrastructure/persistence/person-repository";

// Mocks
import mocks from '@api/users/mocks.json';

jest.mock('@core/sequelize/sequelize', () => require('@core/sequelize/sequelize-mock').sequelizeMock);
jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@api/persons/infrastructure/persistence/person-repository-mock').default
}));
jest.mock('@database/models/user', () => require('@database/models/user/user-mock').userMock);

describe('UserService', () => {

  const expectedUser = () => ({
    id: expect.any(Number),
    personId: expect.any(Number),
    ipAddress: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  });

  const expectedPerson = () => ({
    id: expect.any(Number),
    firstName: expect.any(String),
    lastName: expect.any(String),
    email: expect.any(String),
    dateOfBirth: expect.any(Date),
    address: expect.any(String),
    city: expect.any(String),
    cellPhone: expect.any(String),
    ipAddress: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll method', () => {
    it('should get all users', () => {
      return userServiceInstance
        .findAll()
        .then((response: any) => {
          expect(response)
            .toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  ...expectedUser(),
                  person: expect.objectContaining({
                    ...expectedPerson()
                  }),
                }),
              ])
            );
        });
    });
  });

  describe('findOne method', () => {
    it('should get a user', () => {
      const id = 1;
      return userServiceInstance
        .findOne({ query: { id }})
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expectedUser(),
                person: expect.objectContaining({
                  ...expectedPerson()
                }),
              }),
            );
        });
    });
  });

  describe('create and findOrCreate method', () => {

    it('should get an new user when call create', () => {
      jest
        .spyOn(new PersonRepository(), 'create')
        .mockResolvedValue({createUser: jest.fn(), toJSON: () => ({id: 1})} as any)
      return userServiceInstance
        .create(mocks as any)
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expectedUser(),
                person: expect.objectContaining({
                  ...expectedPerson()
                }),
              }),
            );
        });
    });

    it('should get a user when call findOrCreate', () => {
      return userServiceInstance
        .findOrCreate(mocks as any)
        .then((response: any) => {
          expect(response.dataValues)
            .toEqual(
              expect.objectContaining({
                ...expectedUser(),
                person: expect.objectContaining({
                  ...expectedPerson()
                }),
              }),
            );
        })
    });

    it('shouled get an error whe call create', () => {
      const fakeMessage = 'fake error';
      const fakeError = new Error(fakeMessage);
      jest.spyOn(sequelize, 'transaction').mockRejectedValue(fakeMessage);
      return userServiceInstance
        .create(mocks as any)
        .catch((error) => {
          expect(error).toEqual(fakeError)
        })
    });

    it('shouled get an error whe call findOrCreate', () => {
      const fakeMessage = 'fake error';
      const fakeError = new Error(fakeMessage);
      jest.spyOn(sequelize, 'transaction').mockRejectedValue(fakeMessage);
      return userServiceInstance
        .findOrCreate(mocks as any)
        .catch((error) => {
          expect(error).toEqual(fakeError)
        })
    });

  });

});
