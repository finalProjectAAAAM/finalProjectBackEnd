const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const admin = sequelize.define('admin', {
    idadmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    
  },{ freezeTableName: true, timestamps: false });
  module.exports={admin}