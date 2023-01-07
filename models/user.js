"use strict";
const {
  Model, // importing the model from sequelize.
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Post } = models; // destructure Post from models.
      this.hasMany(Post, { foreignKey: "userId", as: "posts" }); // this user has many posts , establishing a one to many relationship.
    }

    toJSON() {
      return { ...this.get(), id: undefined, uuid: undefined }; // this overwrites the user model by adding everything to the json and removing the id.
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
