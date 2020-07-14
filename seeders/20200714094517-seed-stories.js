"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          title: "Story number 1",
          content: "lorem ipsum",
          mediaUrl: "http://google/images/cat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Story number 2",
          content: "lorem ipsum orem",
          mediaUrl: "http://google/images/dog.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Story number 1",
          content: "lorem ipsum hello world",
          mediaUrl: "http://google/images/banana.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
