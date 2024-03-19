const express = require('express');
const routermob = express.Router();
const authController=require('../controller/controllerauth');

routermob.post('/signup', authController.signUpUser);

routermob.post('/login',authController.loginUser)


module.exports = routermob