const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const paiment = sequelize.define('paiment', {
    idpaiment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    qrcode : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // need to add the forgeinkeys
  });
  module.exports={paiment}