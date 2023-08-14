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
      likes:{
      type:DataTypes.INTEGER,
      defaultValue: 0
    },
    vues:{
      type:DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    timestamps: true,
  }
);

module.exports =blogs;
