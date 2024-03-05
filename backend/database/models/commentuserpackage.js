const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const commentuserpackage = sequelize.define('commentuserpackage', {
    idcommentuserpackage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // need to add forgien key id package
})
module.exports={commentuserpackage}
    