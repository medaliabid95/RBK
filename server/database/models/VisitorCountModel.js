const { DataTypes } = require('sequelize');
const sequelize = require('../configdb'); 

const VisitorCount = sequelize.define('VisitorCount', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = VisitorCount;
