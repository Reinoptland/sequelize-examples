"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
        "users",
        [
          {
            name: "Leo Messi",
            email: "leo@messi.com",
            phone: 1234567,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Dan Abramov",
            email: "dan@redux.com",
            phone: 1234567,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.log("SOMETHING WENT WRONG");
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
