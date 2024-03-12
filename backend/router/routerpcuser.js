const Routerpcuser = require('express').Router();

const controllerpcuser = require('../controller/controllerpackageuser')

Routerpcuser.post('/createpcuser/:id/:iduser',controllerpcuser.createPcUser);
Routerpcuser.get('/getpcuser/:id/:iduser',controllerpcuser.getpcuser);
Routerpcuser.put('/updatepcuser/:id/',controllerpcuser.UpdatePcUser)
 
module.exports=Routerpcuser