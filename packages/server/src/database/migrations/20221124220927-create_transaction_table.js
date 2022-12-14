'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      debitedAccountId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'debited_account_id',
      },
      creditedAccountId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'credited_account_id',
      },
      value: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('transactions');
  },
};
