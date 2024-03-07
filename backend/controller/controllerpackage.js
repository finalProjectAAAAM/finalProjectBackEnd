const {createPackage,deletepackage,getpackage,updatepackage,  } = require('../function/packagefunction/packagefunction');
const {createcomboofpackage,updatecomboofpackage } =require('../function/packagefunction/package_has_offers')
const {package} = require('../database/models/package')
module.exports={
    createPackage : async (req , res)=>{
        const obj = {
          package :{ 
            name: req.body.name,
            location: req.body.location, 
            duration: req.body.duration,
            price: req.body.price,
            status: req.body.status,
            places: req.body.places,
            // rate: null, 
            // reservision: 0

            // ------------need to add the id of  the user who create this ------------
            // userProviderIduserProvider : req.params.id
            // adminIdadmin : req.params.id
          },
          offers:[
            { offer: req.body.offer1 },
            { offer: req.body.offer2 },
            { offer: req.body.offer3 },
            { offer: req.body.offer4 },
          ],
          }
          
        try{
            console.log(obj.offers,'sssssss');
            const packagecreated = await createPackage(obj.package)
            console.log(packagecreated, 'this is the package ');
            console.log(obj.offers);
           if ((obj.offers).length > 0) {
            await createcomboofpackage(obj.offers, packagecreated.dataValues.idpackage)
           }
            res.status(200).json(packagecreated)
        }
        catch(err){
            console.log(err,err);
        }
    },

    updatepackage:async (req,res)=>{
        const obj = {
            package :{ 
              name: req.body.name,
              location: req.body.location, 
              duration: req.body.duration,
              price: req.body.price,
              status: req.body.status,
              places: req.body.places,
              // rate: null, 
              // reservision: 0
  
              // ------------need to add the id of  the user who update this ------------
              // userProviderIduserProvider : req.params.id
              // adminIdadmin : req.params.id
            },
            offers:[
              { offer: req.body.offer1 },
              { offer: req.body.offer2 },
              { offer: req.body.offer3 },
              { offer: req.body.offer4 },
            ],
            }
            const idpackage = req.params.id
        try{
            const uppackage = await updatepackage(obj.package , idpackage)
            if ((obj.offers).length > 0) {
                 await updatecomboofpackage(obj.offers,idpackage)
            }
            
            res.status(201).json('updated ! ')
        }
        catch(err){
            console.log(err,"err in updating the package from the controller ! ");
        }
    },
    deletePackage :async (req,res)=>{
        try{
            const result = await deletepackage(req.params.id)
                res.status(204).send('deleted  package !')
        }
        catch(err){
            console.log(err,"err in deleting the package");
        }
    },
    getpackage : async (req,res)=>{
       try{
        const result = await getpackage(req.params.id)
        res.status(200).json(result)
       }
       catch(err){
        console.log(err,"err in geting the details ! ");
       }
    }

}