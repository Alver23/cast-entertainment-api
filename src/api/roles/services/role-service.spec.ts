// Services
import { roleServiceInstance } from './role-service';

// Mocks
jest.mock('@database/models/role', () => require('@database/models/role/role-mock').roleMock);

describe('RoleService', () => {
  const expected = () => ({
    id: expect.any(Number),
    name: expect.any(String),
    description: expect.any(String),
    ipAddress: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  })

  describe('findAll method', () => {
    it('should get all roles', () => {
      return roleServiceInstance
        .findAll()
        .then((response) => {
          expect(response)
            .toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  ...expected(),
                }),
              ]),
            )
        });
    });
  });

  describe('findOne method', () => {
    it('should get a role', () => {
      return roleServiceInstance
        .findOne({ query: { id: 1 }})
        .then((response) => {
          expect(response)
            .toEqual(
              expect.objectContaining({
                ...expected(),
              }),
            )
        });
    });
  });
  
})
