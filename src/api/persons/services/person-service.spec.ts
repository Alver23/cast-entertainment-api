// Services
import { PersonService } from "./person-service";

// Models
import { IPersonService } from "./person-service-interface";
import { Person } from "../../../database/models/person";

// Mocks
import mocks from './mocks.json';

jest.mock('../../../database/models/person', () => ({
  Person: {
    findAll: () => [{ ...mocks}],
    create: () => ({ ...mocks }),
    findOne: () => ({ ...mocks, id: 1 }),
    update: () => [1],
    destroy: () => 1,
  }
}));

describe('PersonService', () => {
  let personService: IPersonService;
  const mockData = {...mocks, date_of_birth: new Date()};

  beforeEach(() => {
    personService = new PersonService();
  });

  describe('create method', () => {
    it('should get an new person', () => {
      const personModel = jest.spyOn(Person, 'create');
      return personService
        .create(mockData)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith(mockData)
        });
    });
  });

  describe('update method', () => {
    it('should updated person', () => {
      const personModel = jest.spyOn(Person, 'update');
      const id = 1;
      return personService
        .update(id, mockData)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith(mockData, { where: { id } })
        });
    });
  });

  describe('findAll method', () => {
    it('should get all persons', () => {
      const personModel = jest.spyOn(Person, 'findAll');
      const id = 1;
      return personService
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
      return personService
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
      return personService
        .deleteOne(id)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith({ where: { id }})
        });
    });
  });
});
