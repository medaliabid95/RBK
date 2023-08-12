const { DataTypes } = require("sequelize");
const sequelize = require("../configdb"); 

const Project = sequelize.define("Projects",{
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    team:{ //! team that worked on the project
      type: DataTypes.STRING,
      allowNull:false
    },
    demo:{ //! cloudinary video link
        type: DataTypes.STRING,
        allowNull:false
      },
      url:{ //!github url
        type: DataTypes.STRING,
        allowNull:false
      },
});

module.exports= Project