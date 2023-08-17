const { DataTypes } = require("sequelize");
const sequelize = require("../configdb");


const Instructor = sequelize.define("Instructor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  speciality: {
    type: DataTypes.ENUM("developper", "classe cordinator"),
    allowNull: false,
  },
  disponibility: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});



module.exports = Instructor;
