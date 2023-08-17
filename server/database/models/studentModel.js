const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 
const Cohort = require("./CohortModel")


const Student = sequelize.define("Student", {
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  accept: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  formule: {
    type: DataTypes.ENUM("Temps plein (19 semaines)", "Temps partiel (40 semaines)"),
    allowNull: false,
  },
  session: {
    type: DataTypes.ENUM("Session 1", "Session 2"),
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  compus: {
    type: DataTypes.ENUM("Tunis", "El Kef", "Sousse"),
    allowNull: false,
  },

  Status: {
    type: DataTypes.ENUM("En Cours", "Accepté", "Refusé"),
    defaultValue:"En Cours"
  }

});
  
Cohort.hasMany(Student,{foreignKey:'CohortId'})
Student.belongsTo(Cohort,{foreignKey:'CohortId'})

module.exports = Student;
