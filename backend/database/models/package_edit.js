const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const package_edit = sequelize.define('package_edit', {
    // idpackage_edit: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    offerIdoffer:{
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    packageusereditIdpackage:{
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    }

  },{ freezeTableName: true, timestamps: false });
  module.exports={package_edit}