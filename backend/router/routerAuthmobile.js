const router = require('express').Router()
const controller = require('../controller/controllerauthUser.js')

router.get('/get/:id', controller.checkToken)

router.post('/add/:id', controller.saveToken)


module.exports = router