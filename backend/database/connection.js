const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("application", "root", "24072003", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize
