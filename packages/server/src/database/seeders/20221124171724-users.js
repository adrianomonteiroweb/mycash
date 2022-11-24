module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          username: 'adriano1',
          password: 'adriano1',
          account_id: 1,
        },
        {
          id: 2,
          username: 'adriano2',
          password: 'adriano2',
          account_id: 2,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
