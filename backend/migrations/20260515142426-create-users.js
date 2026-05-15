'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    vkId: {
      type: Sequelize.STRING,
      unique: true,
    },

    firstName: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    photo: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    },

    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    coins: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable('Users');
}