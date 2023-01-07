const express = require("express");

const router = express.Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
} = require("../controllers/userController");
router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getSingleUser);

module.exports = router;
