const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const offer = sequelize.define('offer', {
    idoffer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    startday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    location : {
        type : DataTypes.STRING,
        allowNull:false,
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull:false,
    },

    status : {
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue : 'panding'
    },
    rate : {
        type : DataTypes.INTEGER,
    },
    lat : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    long : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    places : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    reservision : {
        type : DataTypes.INTEGER,
        defaultValue : 0
    },
    

  });
  module.exports={offer}