const Routerpcuser = require('express').Router();

const controllerpcuser = require('../controller/controllerpackageuser')

Routerpcuser.post('/createpcuser/:id/:iduser',controllerpcuser.createPcUser)
 
module.exports=Routerpcuser