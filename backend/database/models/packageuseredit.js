const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const packageuseredit = sequelize.define('packageuseredit', {
    idpackageuser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    status : {
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue : 'panding'
    },
    rate : {
        type : DataTypes.INTEGER,
    },
    places : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    reservision : {
        type : DataTypes.INTEGER,
        defaultValue : 0
    },
    

  },{ freezeTableName: true, timestamps: false });
  module.exports={packageuseredit}