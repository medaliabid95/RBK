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
    about:{ //! A propos
        type: DataTypes.TEXT,
        allowNull:false
      },
      likes:{
        type:DataTypes.INTEGER,
        defaultValue: 0,
        allowNull:false
      },
      views:{
        type:DataTypes.INTEGER,
        defaultValue: 0,
        allowNull:false
      }
});

module.exports= Project