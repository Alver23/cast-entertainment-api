// Models
import { RoleMapper } from "./role-mapper";

// Mocks
import roleMocks from '@database/models/role/mocks.json';
import menuMocks from '@database/models/menu/mocks.json';

describe('RoleMapper', () => {

  const roles = [
    {
      ...roleMocks,
      getMenus: async () => {
        return [
          {
            ...menuMocks
          },
          {
            ...menuMocks,
            id: 2,
          }
        ]
      },
    },
    {
      ...roleMocks,
      id: 1000,
      getMenus: async () => {
        return [
          {
            ...menuMocks,
            id: 3,
          },
          {
            ...menuMocks,
          }
        ]
      },
    }
  ]

  it('should get all roles and menus', async () => {
    const roleMapper = new RoleMapper(roles);
    const userRoles = await roleMapper.getRoles();
    const userMenus = roleMapper.getMenus();
    expect(
      userRoles
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
        }),
      ]),
    );
    expect(userMenus)
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            orden: expect.any(Number),
          })
        ]),
      )
  });
});
