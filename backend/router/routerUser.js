const router = require('express').Router()
const controller = require("../controller/controllerclient.js")

router.post('/signupUser', controller.signUp)

router.post('/signinUser', controller.signIn)



module.exports = router