<<<<<<< HEAD
const router = require('express').Router()
const controller = require('../controller/controllerauth')

router.get('/get/:id', controller.checkToken)

router.post('/add/:id', controller.saveToken)
=======
const express = require('express');
const router = express.Router();
const authController=require('../controller/controllerauth');

router.post('/signup', authController.signUpUser);
router.post('/login',authController.loginUser)
>>>>>>> f0ac5c9dcd74230ffc52e6ab6cf10401e9427a17


module.exports = router