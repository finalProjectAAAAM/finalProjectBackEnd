const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const wishlist = sequelize.define('wishlist', {
    idwishlist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }})
    module.exports ={wishlist}