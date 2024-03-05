const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const package_edit = sequelize.define('package_edit', {
    idpackage_edit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  module.exports={package_edit}