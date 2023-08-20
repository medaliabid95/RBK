const { DataTypes } = require("sequelize");
const sequelize = require("../configdb");

const blogs = sequelize.define(
  "blogs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    vues: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    author:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    timestamps: true,
  }
);
const comments = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    accepted:{
      type:DataTypes.TINYINT,
      defaultValue:1
    }
  },
  {
    timestamps: true,
  }
);
blogs.hasMany(comments, {
  foreignKey: "blogId", 
  onDelete: "CASCADE", 
});
comments.belongsTo(blogs, {
  foreignKey: "blogId",
});
module.exports = { blogs, comments };
