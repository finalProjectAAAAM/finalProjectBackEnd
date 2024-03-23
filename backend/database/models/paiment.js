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
        allowNull: true,
        defaultValue :"images qr"
      },
      // need to add the forgeinkeys
  },{ freezeTableName: true, timestamps: true });
  module.exports={paiment}