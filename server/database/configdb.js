const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rbk", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
