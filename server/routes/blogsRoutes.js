const express = require("express");
const router = express.Router();
const {
  addBlog,
  getBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  updateVues,
  updateLikes
} = require("../controllers/blogsController.js");

router.post("/add", addBlog);
router.get("/getOne/:id", getBlog);
router.get("/getAll", getAllBlogs);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteOne/:id", deleteBlog);
router.put("/updateVue/:id", updateVues);
router.put("/updateLikes/:id", updateLikes);

module.exports = router;
