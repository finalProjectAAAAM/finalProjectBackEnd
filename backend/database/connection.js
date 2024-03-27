const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("appfinal", "root", "mars", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize
