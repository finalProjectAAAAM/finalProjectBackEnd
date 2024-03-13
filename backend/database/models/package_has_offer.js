const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const package_has_offer = sequelize.define('package_has_offer', {
  offerIdoffer:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
  packageIdpackage:{
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false,
  }
    
  },{ freezeTableName: true, timestamps: false  });
  module.exports={package_has_offer}
