const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const user = sequelize.define('user', {
    iduser: {
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
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    lat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    long: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },{ freezeTableName: true, timestamps: false });
  
  // need to enable the time stambe for the creation of the user ! 
  

module.exports={user}  