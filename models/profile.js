"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile.init(
    {
      aboutMe: DataTypes.TEXT,
      linkedInUrl: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
