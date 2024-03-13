const express = require('express');
const router = express.Router();
const authController=require('../controller/controllerauth');

router.post('/signup', authController.signUpUser);
router.post('/login',authController.loginUser)


module.exports = router