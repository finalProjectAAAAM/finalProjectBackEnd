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
    cin: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },{ freezeTableName: true, timestamps: false });
  //need to enable the time stambe for then i get the notification for that creation
  module.exports={userProvider}