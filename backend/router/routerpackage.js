const RouterPackage = require('express').Router()
const controllerpackage = require('../controller/controllerpackage')

RouterPackage.post('/createpackage',controllerpackage.createPackage)
RouterPackage.delete('/deletepackage/:id',controllerpackage.deletePackage)
RouterPackage.get('/getpackage/:id',controllerpackage.getpackage)

RouterPackage.get('/getpc/:id',controllerpackage.Getpcdetails)

RouterPackage.put('/updatepackage/:id',controllerpackage.updatepackage)
RouterPackage.get('/getpackages',controllerpackage.GetPackgeofUser) 


module.exports=RouterPackage