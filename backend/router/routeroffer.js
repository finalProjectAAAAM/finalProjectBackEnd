const RouterOffer = require('express').Router()
const controllerOffer = require('../controller/controlleroffer')
//create offer !
RouterOffer.post('/createoffer',controllerOffer.createoffer)
RouterOffer.put('/updateoffer/:id',controllerOffer.updateoffer)
module.exports=RouterOffer