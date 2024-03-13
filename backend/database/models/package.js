const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const package = sequelize.define('package', {
    idpackage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
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
    imagemain : {
      type :DataTypes.STRING,
      allowNull:true
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
  module.exports={package}