// Services
import { userServiceInstance } from './user-service';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Mocks
import mocks from '@api/users/mocks.json';

jest.mock('@core/sequelize/sequelize', () => require('@core/sequelize/sequelize-mock').sequelizeMock);
jest.mock('@api/persons/services', () => require('@api/persons/services/person-service-mock').personServiceMock);
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
    middleName: expect.any(String),
    lastName: expect.any(String),
    email: expect.any(String),
    dateOfBirth: expect.any(String),
    address: expect.any(String),
    city: expect.any(String),
    zipCode: expect.any(String),
    homePhone: expect.any(String),
    cellPhone: expect.any(String),
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
        .then((response) => {
          expect(response)
            .toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  ...expectedUser(),
                  person: expect.objectContaining({
                    ...expectedPerson()
                  }),
                }),
              ]),
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
      return userServiceInstance
        .create(mocks)
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
        .findOrCreate(mocks)
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
        .create(mocks)
        .catch((error) => {
          expect(error).toEqual(fakeError)
        })
    });

    it('shouled get an error whe call findOrCreate', () => {
      const fakeMessage = 'fake error';
      const fakeError = new Error(fakeMessage);
      jest.spyOn(sequelize, 'transaction').mockRejectedValue(fakeMessage);
      return userServiceInstance
        .findOrCreate(mocks)
        .catch((error) => {
          expect(error).toEqual(fakeError)
        })
    });

  });

});
