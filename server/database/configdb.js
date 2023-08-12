const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rbk", "root", "firemanfireman@@", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .query('CREATE DATABASE IF NOT EXISTS `rbk`;') 
  .then(() => {console.log("db connected")})
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });


module.exports = sequelize;
