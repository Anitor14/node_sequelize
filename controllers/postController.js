const { StatusCodes } = require("http-status-codes");
const { model } = require("mongoose");
const CustomError = require("../errors");
const { sequelize, User, Post } = require("../models/");

const createPost = async (req, res) => {
  const { userUuid, body } = req.body; // we get the user id and the body of the post from the req.body.

  try {
    const user = await User.findOne({ where: { uuid: userUuid } }); // get the user where the uuid is equals to userUuid.
    const post = await Post.create({ body, userId: user.id });
    res.status(StatusCodes.OK).json({ post });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: "user", // include  the model User for this particular post and use it as user as an alias.
    });
    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
};

const getSinglePost = async (req, res) => {};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
};
