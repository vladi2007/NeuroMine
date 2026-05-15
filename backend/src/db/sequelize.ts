import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mydb",
  "root",
  "password",
  {
    host: "mysql",
    port: 3306,
    dialect: "mysql",
    logging: false,
  }
);