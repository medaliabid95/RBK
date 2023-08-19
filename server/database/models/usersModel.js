const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 

const User = sequelize.define("Users",{
username:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
},
firstName:{
    type:DataTypes.STRING,
    allowNull:false
},
lastName:{
    type:DataTypes.STRING,
    allowNull:false
},
});

module.exports = User;