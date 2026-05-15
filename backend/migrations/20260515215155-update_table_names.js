"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    vk_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
    },

    coins: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },

    tapPower: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },

    lastTapAt: {
      type: Sequelize.BIGINT,
      defaultValue: 0,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable("users");
}