'use strict';
const bcrypt = require('bcrypt');
const { STATUS_ACTIVE, ROLE_ADMIN } = require('../helpers/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
       name: 'superadmin',
       email: 'superadmin@gmail.com',
       phone_number: '2132131233123',
       password: await bcrypt.hash('rahasia', 10),
       status_id: STATUS_ACTIVE,
       role_id: ROLE_ADMIN,
       created_at: '2024-01-18 17:36:37',
       updated_at: '2024-01-18 17:36:37',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
