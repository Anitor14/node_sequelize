"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // the models contains all the various models and we can destructure from there the models we want.
      //userId
      const { User } = models;
      // stating that this post belongs to the User.
      this.belongsTo(User, { foreignKey: "userId", as: "user" }); // dedicating an alias for User as user.
    }

    toJSON() {
      return { ...this.get(), id: undefined, uuid: undefined };
    }
  }
  Post.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );
  return Post;
};
