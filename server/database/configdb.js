const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rbk", "mohamedali", "borjelamri2014", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = sequelize;
