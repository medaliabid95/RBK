const express = require("express");
const router = express.Router();
const {deleteComment,addComment,updateCommentText,updateCommentAccepted,getComments} = require("../controllers/commentsController");

router.get("/getAll/:blogId",getComments)
router.post("/:blogId/:userId", addComment);
router.delete("/:commentId", deleteComment);
router.put("/comments/:commentId", updateCommentText);
router.put("/comments/:commentId/accepted", updateCommentAccepted);

module.exports = router;
