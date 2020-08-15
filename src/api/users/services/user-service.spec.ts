// Services
import { personServiceInstance } from "../../persons/services";
import { userServiceInstance } from './user-service';

// ORM
import { sequelize } from "../../../core/sequelize/sequelize";

// Models
import { User } from "../../../database/models/user";

// Mocks
import mocks from './../mocks.json';

jest.mock('../../../core/sequelize/sequelize', () => require('../../../core/sequelize/sequelize-mock').mockSequelize);
jest.mock('../../persons/services', () => require('./../../persons/services/person-service-mock').mockPersonService);
jest.mock('../../../database/models/user', () => require('./../../../database/models/user/user-mock').mockUser);

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('findAll method', () => {
    it('should get all users', () => {
      const userModel = jest.spyOn(User, 'findAll');
      const id = 1;
      return userServiceInstance
        .findAll()
        .then(() => {
          expect(userModel).toHaveBeenCalled();
        });
    });
  });

  describe('findOne method', () => {
    it('should get a user', () => {
      const userModel = jest.spyOn(User, 'findOne');
      const id = 1;
      return userServiceInstance
        .findOne({ query: { id }})
        .then(() => {
          expect(userModel).toHaveBeenCalled();
        });
    });
  });

  describe('create and findOrCreate method', () => {

    it('should get an new user when call create', () => {
      const spyPerson = jest.spyOn(personServiceInstance, 'create');
      return userServiceInstance
        .create(mocks)
        .then(() => {
          expect(spyPerson).toHaveBeenCalled();
        })
    });

    it('should get a user when call findOrCreate', () => {
      const spyPerson = jest.spyOn(personServiceInstance, 'findOrCreate');
      return userServiceInstance
        .findOrCreate(mocks)
        .then(() => {
          expect(spyPerson).toHaveBeenCalled();
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
