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
password:{
    type:DataTypes.STRING,
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
isActive:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
},
activationCode:{
    type:DataTypes.STRING,
},
profilepic:{
    type:DataTypes.STRING,
    allowNull:false,
}
});

module.exports = User;