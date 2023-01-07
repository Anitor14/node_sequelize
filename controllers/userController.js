const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { sequelize, User } = require("../models/");

const createUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "something went wrong" });
  }
};
const getSingleUser = async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findOne({ where: uuid, include: "posts" });
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "something went wrong" });
  }
};
const deleteUser = async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findOne({ where: { uuid } }); // finding the user where the user is equals to the uuid.
    await user.destroy();
    return res
      .status(StatusCodes.OK)
      .json({ message: "User has been deleted !" });
  } catch (error) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong " });
  }
};

const updateUser = async (req, res) => {
  const { uuid } = req.params;
  const { name, email, role } = req.body;
  try {
    const user = await user.findOne({ where: { uuid } });

    user.name = name;
    user.email = email;
    user.role = role;

    await user.save();
    return res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong " });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
