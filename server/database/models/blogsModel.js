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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    video:{
        type:DataTypes.TEXT,
        allowNull:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports =blogs;
