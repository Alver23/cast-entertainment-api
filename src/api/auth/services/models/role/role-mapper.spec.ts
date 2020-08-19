// Models
import { RoleMapper } from "./role-mapper";

// Mocks
import mocks from '@database/models/role/mocks.json';

describe('RoleMapper', () => {
  it('should get all roles only the properties id, name and description', () => {
    expect(
      new RoleMapper([mocks]).roles
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
        })
      ]),
    )
  });
});
