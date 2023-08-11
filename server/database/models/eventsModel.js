const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 

const Event = sequelize.define("Event", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  heure: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lieu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image :{
    type:DataTypes.STRING,
    allowNull:false,
  }
});

module.exports = Event;
