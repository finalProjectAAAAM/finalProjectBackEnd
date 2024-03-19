const router = require('express').Router()
const controller = require("../controller/controlleruser.js")

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)



module.exports = router