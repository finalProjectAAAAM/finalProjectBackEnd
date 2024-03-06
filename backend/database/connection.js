const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("application", "root", "21018965", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize