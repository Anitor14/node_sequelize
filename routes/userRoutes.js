const express = require("express");

const router = express.Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;
