'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("Users", "tapPower", {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  });

  await queryInterface.addColumn("Users", "lastTapAt", {
    type: Sequelize.BIGINT,
    defaultValue: 0,
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("Users", "tapPower");
  await queryInterface.removeColumn("Users", "lastTapAt");
}