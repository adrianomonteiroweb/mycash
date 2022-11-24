import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Account extends Model {
  id!: string;
  balance!: number;
}

export default Account.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    balance: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'accounts',
    timestamps: false,
  }
);
