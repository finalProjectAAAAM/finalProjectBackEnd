const routerUsers = require("express").Router();
const controllerUsers = require("../controller/controllerUsers");

routerUsers.get("/allUsers", controllerUsers.AllUser);
routerUsers.delete("/deleteuser/:id", controllerUsers.DeleteUser);
module.exports = routerUsers;
