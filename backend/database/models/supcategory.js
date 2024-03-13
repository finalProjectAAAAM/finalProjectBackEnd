const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const supcategory = sequelize.define('supcategory', {
    idsupcategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    namesub: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    // need to add forgien key of maincategory
},{ freezeTableName: true, timestamps: false })
module.exports={supcategory}