// Services
import { personServiceInstance } from "./person-service";

// Database Models
import { Person } from "@database/models/person";

// Mocks
import mocks from '@api/persons/mocks.json';

jest.mock('@database/models/person', () => require('@database/models/person/person-mock').personMock);

describe('PersonService', () => {

  const expectedAttributes = () => ({
    id: expect.any(Number),
    firstName: expect.any(String),
    lastName: expect.any(String),
    email: expect.any(String),
    dateOfBirth: expect.any(String),
    address: expect.any(String),
    city: expect.any(String),
    cellPhone: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('create method', () => {
    it('should get an new person', () => {
      const personModel = jest.spyOn(Person, 'create');
      return personServiceInstance
        .create(mocks)
        .then(() => {
          expect(personModel).toHaveBeenCalledWith(mocks, { transaction: undefined });
        });
    });
  });

  describe('update method', () => {
    it('should updated person', () => {
      const id = 1;
      return personServiceInstance
        .update(id, mocks)
        .then((response) => {
          expect(response).toEqual([1]);
        });
    });
  });

  describe('findAll method', () => {
    it('should get all persons', () => {
      return personServiceInstance
        .findAll()
        .then((response) => {
          expect(response)
            .toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  ...expectedAttributes(),
                }),
              ]),
            );
        });
    });
  });

  describe('findOne method', () => {
    it('should get a person', () => {
      const id = 1;
      return personServiceInstance
        .findOne({ query: { id }})
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expectedAttributes(),
              }),
            );
        });
    });
  });

  describe('deleteOne method', () => {
    it('should removed a person', () => {
      const id = 4;
      return personServiceInstance
        .deleteOne(id)
        .then((response) => {
          expect(response).toBe(1);
        });
    });
  });

  describe('findOrCreate method', () => {
    it('should get a new user', () => {
      const id = 1;
      return personServiceInstance
        .findOrCreate({ query: { id }, data: mocks} as any)
        .then((response) => {
          expect(response)
            .toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  ...expectedAttributes(),
                }),
              ]),
            );
        });
    });
  });
});
