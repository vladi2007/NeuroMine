'use strict';

export async function up(queryInterface) {
  await queryInterface.bulkInsert('Users', [
    {
      vkId: '1',
      firstName: 'A2lex',
      lastName: 'Ko2nev',
      photo: null,
      email: 'alex2@test.com',
      phone: null,
      coins: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Users', null, {});
}