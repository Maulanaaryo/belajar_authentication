"use strict";
const { encryptPwd } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item);
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username must not be empty!",
          },
        },
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPwd(user.password);
          user.age = user.age || 0;
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
