"use strict";
const themes = require("../themes");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = themes.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Themes', arr,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null,{})
  }
};
