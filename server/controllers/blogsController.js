const {Sequelize, where}=require("sequelize")
const {blogs} = require("../database/models/blogsModel.js");

const addBlog = async (req, res) => {
    console.log(req.body)
    try {
        const blog = await blogs.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await blogs.findByPk(req.params.id);
        if (!blog) {
            res.status(404).json({ message: "Blog not found" });
        } else {
            res.status(200).json(blog);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await blogs.findAll();
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateBlog = async (req, res) => {
    try {
        const blog = await blogs.findByPk(req.params.id);
        if (!blog) {
            res.status(404).json({ message: "Blog not found" });
        } else {
            await blog.update(req.body);
            res.status(200).json(blog);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await blogs.findByPk(req.params.id);
        if (!blog) {
            res.status(404).json({ message: "Blog not found" });
        } else {
            await blog.destroy();
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
const updateVues = async (req, res) => {
   
    try {
        const blog = await blogs.findByPk(req.params.id);

        if (!blog) {
            res.status(404).json({ message: "Blog not found" });
            return;
        }

        await blog.update({ vues: Sequelize.literal('vues + 1') });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
};
const updateLikes= async (req, res) => {
    console.log(req.body.like)
   
    try {
        const blog = await blogs.findByPk(req.params.id);

        if (!blog) {
            res.status(404).json({ message: "Blog not found" });
            return;
        }

        await blog.update({ likes: Sequelize.literal(`likes ${req.body.like}`) });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    addBlog,
    getBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
    updateVues,
    updateLikes
};
