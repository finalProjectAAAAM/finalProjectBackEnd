const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const commentuseroffer = sequelize.define('commentuseroffer', {
    idcommentuseroffer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // need to add forgien key id offer
})
module.exports={commentuseroffer}