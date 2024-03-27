const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const state = sequelize.define('state', {
    idstate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    namestate : {
        type : DataTypes.STRING,
        allowNull : false,
        
    }
    ,
    images : {
      type : DataTypes.STRING,
      allowNull : false,
  }
},{ freezeTableName: true, timestamps: false })
module.exports={state}