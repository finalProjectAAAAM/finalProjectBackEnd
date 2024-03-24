const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const package_edit = sequelize.define('package_edit', {
<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
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

<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
  },{ freezeTableName: true, timestamps: false });
  module.exports={package_edit}