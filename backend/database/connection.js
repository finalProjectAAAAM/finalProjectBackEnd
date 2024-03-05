const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("testapp", "root", "21018965", {
    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize