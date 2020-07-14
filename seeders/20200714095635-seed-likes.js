"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "likes",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          storyId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          storyId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          storyId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          storyId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("likes", null, {});
  },
};
