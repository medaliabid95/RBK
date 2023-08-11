const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 

const Event = sequelize.define("Event", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  heure: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lieu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image :{
    type:DataTypes.TEXT,
    allowNull:false,
  }
});

module.exports = Event;
