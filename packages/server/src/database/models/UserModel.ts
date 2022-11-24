import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import AccountModel from './AccountModel';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
      type: DataTypes.INTEGER,
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

User.hasOne(AccountModel, { foreignKey: 'accountId', as: 'account' });
AccountModel.belongsTo(User, { foreignKey: 'accountId', as: 'user' });

export default User;
