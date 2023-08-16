const express = require("express");
const router = express.Router();
const {deleteComment,addComment,updateCommentText,updateCommentAccepted} = require("../controllers/commentsController");


router.post("/:blogId", addComment);
router.delete("/:commentId", deleteComment);
router.put("/comments/:commentId", updateCommentText);
router.put("/comments/:commentId/accepted", updateCommentAccepted);

module.exports = router;
