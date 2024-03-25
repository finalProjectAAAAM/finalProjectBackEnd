const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const userProvider = sequelize.define('userProvider', {
    iduserProvider: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: false,
=======

      allowNull: false,

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
<<<<<<< HEAD
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cin: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
=======

      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cin: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING(255),
<<<<<<< HEAD
      allowNull: true,
    },
  },{ freezeTableName: true, timestamps: false });
  //need to enable the time stambe for then i get the notification for that creation
=======

      allowNull: false,
    },
  },{ freezeTableName: true, timestamps: false });
  //need to enable the time stambe for then i get the notification for that creation

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
  module.exports={userProvider}