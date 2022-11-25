import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import AccountModel from './AccountModel';

class User extends Model {
  id!: string;
  username!: string;
  password!: string;
  accountId!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    accountId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'account_id',
      unique: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'users',
    timestamps: false,
  }
);

User.belongsTo(AccountModel, { foreignKey: 'accountId', as: 'account' });
AccountModel.hasOne(User, { foreignKey: 'accountId', as: 'user' });

export default User;
