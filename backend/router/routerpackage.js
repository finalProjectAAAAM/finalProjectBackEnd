const RouterPackage = require('express').Router()
const controllerpackage = require('../controller/controllerpackage')

RouterPackage.post('/createpackage',controllerpackage.createPackage)
RouterPackage.delete('/deletepackage/:id',controllerpackage.deletePackage)
RouterPackage.get('/getpackage/:id',controllerpackage.getpackage)
<<<<<<< HEAD
RouterPackage.get('/getpc/:id',controllerpackage.Getpcdetails)
=======

RouterPackage.get('/getpc/:id',controllerpackage.Getpcdetails)

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
RouterPackage.put('/updatepackage/:id',controllerpackage.updatepackage)

module.exports=RouterPackage