const RouterOffer = require('express').Router()
const controllerOffer = require('../controller/controlleroffer')
//create offer !
RouterOffer.post('/createoffer',controllerOffer.createoffer)

module.exports=RouterOffer