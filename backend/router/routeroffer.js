const RouterOffer = require('express').Router()
const controllerOffer = require('../controller/controlleroffer')
//create offer !
RouterOffer.post('/createoffer',controllerOffer.createoffer)
RouterOffer.put('/updateoffer/:id',controllerOffer.updateoffer)
RouterOffer.get('/getoffer/:id',controllerOffer.getoffer)
RouterOffer.delete('/deleteoffer/:id',controllerOffer.deleteoffer)
module.exports=RouterOffer
