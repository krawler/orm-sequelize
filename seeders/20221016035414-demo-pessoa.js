'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Joao da Silva',
        ativo: true,
        email: 'john_dee@gmail.com',
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      nome: 'Jane da Silva',
      ativo: true,  
      email: 'jane_dee@gmail.com',
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
