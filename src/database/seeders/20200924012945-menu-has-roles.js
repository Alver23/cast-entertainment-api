'use strict';

const register = (roleId, menuId) => ({
  role_id: roleId,
  menu_id: menuId,
  ip_address: '127.0.0.1',
  created_at: new Date(),
  updated_at: new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('menu_has_roles', [
      {
        ...register(1, 1),
      },
      {
        ...register(1, 2),
      },
      {
        ...register(1, 3),
      },
      {
        ...register(1, 4),
      },
      {
        ...register(1, 5),
      },
      {
        ...register(1, 6),
      },
      {
        ...register(2, 1),
      },
      {
        ...register(2, 2),
      },
      {
        ...register(2, 3),
      },
      {
        ...register(2, 4),
      },
      {
        ...register(2, 5),
      },
      {
        ...register(2, 6),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu_has_roles', null);
  }
};
