const RouterPackage = require('express').Router()
const controllerpackage = require('../controller/controllerpackage')
RouterPackage.post('/createpackage',controllerpackage.createPackage)
RouterPackage.delete('/deletepackage/:id',controllerpackage.deletePackage)
// RouterPackage.get('/getpackage/:id',controllerpackage.getpackage)
// RouterPackage.get('/getpc/:id',controllerpackage.Getpcdetails)
RouterPackage.put('/updatepackage/:id',controllerpackage.updatepackage)
RouterPackage.get('/getpackages',controllerpackage.GetPackgeofUser) 
RouterPackage.get('/getpackagesprice',controllerpackage.GetPackagePriceFilter)
RouterPackage.get('/getpackagespriceandcategory',controllerpackage.GetPackagePriceCategories)
RouterPackage.get('/getAllcity',controllerpackage.allCity)
RouterPackage.get('/getAllpackges',controllerpackage.allPackges)

RouterPackage.get('/getPackagesByDate/:date',controllerpackage.getPackagesByDate)
RouterPackage.get('/getPackagesByDateAndAfter/:date',controllerpackage.getPackagesByDateAndAfter)

module.exports=RouterPackage