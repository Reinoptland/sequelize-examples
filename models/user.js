"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.story);
      user.belongsToMany(models.story, {
        through: "likes",
        foreignKey: "userId",
      });
      user.hasOne(models.profile);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
