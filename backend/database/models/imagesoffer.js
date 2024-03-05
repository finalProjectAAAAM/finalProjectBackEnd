const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const imagesoffer = sequelize.define('imagesOffer', {
    idimagesoffer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 
    
    // need to add forgien key
})
module.exports={imagesoffer}
    