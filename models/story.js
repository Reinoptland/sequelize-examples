"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(models.user);
      story.belongsToMany(models.user, {
        through: "likes",
        foreignKey: "storyId",
      });
    }
  }
  story.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: DataTypes.TEXT,
      mediaUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
