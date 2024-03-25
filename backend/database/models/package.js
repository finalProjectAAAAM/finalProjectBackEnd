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
    startday :{
      type: DataTypes.DATE,
      allowNull:false,
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
    maincategory : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    sport:{
      type : DataTypes.BOOLEAN,
    },
    music:{
      type : DataTypes.BOOLEAN,
      
    },
    art:{
      type : DataTypes.BOOLEAN,
      
    },
    food:{
      type : DataTypes.BOOLEAN,
      
    },
    camp:{
      type : DataTypes.BOOLEAN,
      
    }

  },{ freezeTableName: true, timestamps: false });
  module.exports={package}