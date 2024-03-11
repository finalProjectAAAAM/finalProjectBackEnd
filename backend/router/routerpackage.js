const RouterPackage = require('express').Router()
const controllerpackage = require('../controller/controllerpackage')

RouterPackage.post('/createpackage',controllerpackage.createPackage)
RouterPackage.delete('/deletepackage/:id',controllerpackage.deletePackage)
RouterPackage.get('/getpackage/:id',controllerpackage.getpackage)
RouterPackage.put('/updatepackage/:id',controllerpackage.updatepackage)

module.exports=RouterPackage