const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("application", "root", "root", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize