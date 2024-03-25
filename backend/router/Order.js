const RouterOrder = require("express").Router();
const controllerOrder = require("../controller/paiment");

RouterOrder.post('/create', controllerOrder.CreateOrde);

module.exports = RouterOrder;