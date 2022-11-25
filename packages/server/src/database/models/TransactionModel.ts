import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import AccountModel from './AccountModel';

class Transaction extends Model {
  id!: string;
  debitedAccountId!: string;
  creditedAccountId!: string;
  value!: number;
}

Transaction.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    debitedAccountId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'debited_account_id',
    },
    creditedAccountId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'credited_account_id',
    },
    value: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
  },
  {
    sequelize: sequelize,
    modelName: 'transactions',
    underscored: true,
    timestamps: false,
  }
);

Transaction.belongsTo(AccountModel, {
  foreignKey: 'creditedAccountId',
  as: 'creditedAccount',
});

Transaction.belongsTo(AccountModel, {
  foreignKey: 'debitedAccountId',
  as: 'debitedAccount',
});

AccountModel.hasMany(Transaction, {
  foreignKey: 'creditedAccountId',
  as: 'creditedTransactions',
});

AccountModel.hasMany(Transaction, {
  foreignKey: 'debitedAccountId',
  as: 'debitedTransactions',
});

export default Transaction;
