const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const maincategory = sequelize.define('maincategory', {
  idmaincategory: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  namecategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports={maincategory}