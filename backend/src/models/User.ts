import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export class User extends Model {
  declare id: number;
  declare vk_id: number;

  declare coins: number;
  declare tapPower: number;
  declare lastTapAt: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    vk_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },

    coins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    tapPower: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },

    lastTapAt: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);