const express = require("express");
const { validatePost } = require("../middlewares/share.middleware");
const ShareController = require("../controllers/share.controller");
const router = express.Router();

// Route to create a new post
router.post("/", validatePost, ShareController.createPost);

// Route to get all posts
router.get("/", ShareController.getAllPosts);

module.exports = router;
