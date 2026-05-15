import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  vkId: {
    type: DataTypes.STRING,
    unique: true,
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  coins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});