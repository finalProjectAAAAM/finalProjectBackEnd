const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const user_has_package = sequelize.define('user_has_package', {
    iduser_has_package: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // need to add forgien key of user and package
},{ freezeTableName: true, timestamps: false })
module.exports={user_has_package}