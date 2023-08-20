const { DataTypes } = require("sequelize");
const sequelize = require("../configdb");
const Instructor = require("./InstructorModel")
const Student = require("./studentModel")

const Cohort = sequelize.define("Cohort", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfStudents: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue:0
  },
  numberOfInstructors: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue:0
  },
  session : {
    type :DataTypes.STRING,
    allowNull:false
  },
   actuelPhase: {
    type: DataTypes.ENUM("Bootstrap", "Junior","Senior"),
    allowNull: false,
  },
  campus:{
      type:DataTypes.STRING,
      allowNull:false
  },
  start:{
    type:DataTypes.DATE,
    allowNull:true,
  }
});

Cohort.hasMany(Instructor,{foreignKey:'CohortId'})
Instructor.belongsTo(Cohort,{foreignKey:'CohortId'})



module.exports = Cohort;
