"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@email.com",
          uuid: "72140a46-99fd-47d9-af36-59de8e761086",
          role: "admin",
          createdAt: "2023-01-07T17:37:18.943Z",
          updatedAt: "2023-01-07T17:37:18.943Z",
        },
        {
          name: "Jane Doe",
          email: "jane@email.com",
          uuid: "72140a46-99fd-47d9-af36-59df8e761086",
          role: "admin",
          createdAt: "2023-01-07T17:37:18.943Z",
          updatedAt: "2023-01-07T17:37:18.943Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
