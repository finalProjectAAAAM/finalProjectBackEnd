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
  });
  
  // Define Associations if any
  // For example, if user has associations with other tables, define them here
  

module.exports={user}  