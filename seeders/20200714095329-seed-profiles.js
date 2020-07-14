"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          aboutMe: "I score things",
          linkedInUrl: "http://linkedIn.com/messi",
          dateOfBirth: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          aboutMe: "I code things",
          linkedInUrl: "http://linkedIn.com/dannyboy",
          dateOfBirth: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
