const express = require("express");
const router = express.Router();
const { createPost, getAllPosts } = require("../controllers/postController");

router.route("/").post(createPost).get(getAllPosts);

module.exports = router;
