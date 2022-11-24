const { v4 } = require('uuid');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: v4(),
          username: 'adriano1',
          password: 'adriano1',
          account_id: v4(),
        },
        {
          id: v4(),
          username: 'adriano2',
          password: 'adriano2',
          account_id: v4(),
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
