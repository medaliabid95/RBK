const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 

const admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image :{
    type: DataTypes.TEXT,
    allowNull: true,
  },
  compus:{
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = admin;
