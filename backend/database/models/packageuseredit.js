const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const packageuseredit = sequelize.define('packageuseredit', {
<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
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
  }
<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886

}, { freezeTableName: true, timestamps: false });

module.exports = { packageuseredit };