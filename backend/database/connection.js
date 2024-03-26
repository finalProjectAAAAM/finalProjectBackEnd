const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("appfinal", "root", "Hammaboy10@", {

    host: "localhost",
    dialect: "mysql",
  });
  module.exports = sequelize
