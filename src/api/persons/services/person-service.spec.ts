// Services
import { personServiceInstance } from "./person-service";

// Models
import { Person } from "../../../database/models/person";

// Mocks
import mocks from '../controller/mocks.json';

jest.mock('../../../database/models/person', () => require('./../../../database/models/person/person-mock').mockPerson);

describe('PersonService', () => {

  describe('create method', () => {
    it('should get an new person', () => {
      const personModel = jest.spyOn(Person, 'create');
      return personServiceInstance
        .create(mocks)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith(mocks, { transaction : undefined})
        });
    });
  });

  describe('update method', () => {
    it('should updated person', () => {
      const personModel = jest.spyOn(Person, 'update');
      const id = 1;
      return personServiceInstance
        .update(id, mocks)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith(mocks, { where: { id } })
        });
    });
  });

  describe('findAll method', () => {
    it('should get all persons', () => {
      const personModel = jest.spyOn(Person, 'findAll');
      return personServiceInstance
        .findAll()
        .then(() => {
          expect(personModel).toHaveBeenCalled();
        });
    });
  });

  describe('findOne method', () => {
    it('should get a person', () => {
      const personModel = jest.spyOn(Person, 'findOne');
      const id = 1;
      return personServiceInstance
        .findOne({ query: { id }})
        .then(() => {
          expect(personModel).toHaveBeenCalled();
        });
    });
  });

  describe('deleteOne method', () => {
    it('should removed a person', () => {
      const personModel = jest.spyOn(Person, 'destroy');
      const id = 1;
      return personServiceInstance
        .deleteOne(id)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith({ where: { id }})
        });
    });
  });

  describe('findOrCreate method', () => {
    it('should get a new user', () => {
      const personModel = jest.spyOn(Person, 'findOrCreate');
      const id = 1;
      return personServiceInstance
        .findOrCreate({ query: { id }, data: mocks})
        .then(() => {
          expect(personModel).toHaveBeenCalledTimes(id);
        });
    });
  });
});
