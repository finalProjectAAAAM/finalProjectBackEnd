const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const userProvider = sequelize.define('userProvider', {
    iduserProvider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cin: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },{ freezeTableName: true, timestamps: false });
  //need to enable the time stambe for then i get the notification for that creation
  module.exports={userProvider}