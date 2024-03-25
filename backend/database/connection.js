const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("appfinal", "root", "21018965", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize
