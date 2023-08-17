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
    allowNull: false,
  },
  numberOfInstructors: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  session : {
    type :DataTypes.STRING,
    allowNull:false
  },
   actuelPhase: {
    type: DataTypes.ENUM("Bootstrap", "Junior","Senior"),
    allowNull: false,
  }
});

Cohort.hasMany(Instructor,{foreignKey:'CohortId'})
Instructor.belongsTo(Cohort,{foreignKey:'CohortId'})



module.exports = Cohort;
