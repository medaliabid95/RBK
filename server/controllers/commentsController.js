const { DataTypes } = require("sequelize");
const {blogs,comments} = require("../database/models/blogsModel.js");


const addComment = async (req, res) => {
  console.log(req.body.content)
  try {
    const blog = await blogs.findByPk(req.params.blogId);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    const comment = await comments.create({
      content:req.body.content,
      blogId: req.params.blogId,
      
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await comments.findByPk(req.params.commentId);
    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    await comment.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCommentText = async (req, res) => {
  try {
    const comment = await comments.findByPk(req.params.commentId);
    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    await comment.update({ content: req.body.content });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCommentAccepted = async (req, res) => {
  try {
    const comment = await comments.findByPk(req.params.commentId);
    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    await comment.update({ accepted: req.body.accepted });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addComment,
  deleteComment,
  updateCommentText,
  updateCommentAccepted,
};