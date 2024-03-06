const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const maincategory = sequelize.define('maincategory', {
  idmaincategory: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement :true,
    allowNull : false,
  },
  namecategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{ freezeTableName: true, timestamps: false });
module.exports={maincategory}