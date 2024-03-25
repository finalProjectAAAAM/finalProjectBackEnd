const {createPackage,deletepackage,getpackage,updatepackage, getpackageforuser ,getpackagepricefilter,getpackagepricecategories } = require('../function/packagefunction/packagefunction');
const {createcomboofpackage,updatecomboofpackage } =require('../function/packagefunction/package_has_offers')

const {package} = require('../database/models/package')
function convertToBoolean(value) {
    switch (value.toLowerCase()) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return value;
    }
}
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
            imagemain : req.body.imagemain,
            maincategory : req.body.maincategory,
            music : req.body.music,
            food : req.body.food,
            sport : req.body.sport,
            art :req.body.art,
            camp : req.body.camp,
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
              maincategory : req.body.maincategory,
              music : req.body.music,
              food : req.body.food,
              entertainment : req.body.entertainment,
              sport : req.body.sport,
              art :req.body.art,
              maincategory : req.body.maincategory,
              music : req.body.music,
              food : req.body.food,
              entertainment : req.body.entertainment,
              sport : req.body.sport,
              art :req.body.art,
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
    },
    GetPackgeofUser : async (req, res)=>{

        console.log(req.query);
        try{
            const result = await getpackageforuser(req.query.location,req.query.maincategory) ;
            res.status(200).json(result)
        }
        catch(err){
            console.log(err,"err in geting the details! ");

        }
    },
    GetPackagePriceFilter : async (req, res)=>{
        try{
           
            const result = await getpackagepricefilter( req.query.location ,req.query.maincategory ,req.query.price) ;
            res.status(200).json(result)
        }
        catch(err){
            console.log(err,"err in geting the details! ");     
    }
},
GetPackagePriceCategories: async (req, res) => {
    console.log(req.query);

    // Convert string representations of boolean values to actual booleans
    const queryParams = {
        location: req.query.location,
        maincategory: req.query.maincategory,
        price: parseInt(req.query.price), // Assuming price is numeric
        sport: convertToBoolean(req.query.sport),
        music: convertToBoolean(req.query.music),
        art: convertToBoolean(req.query.art),
        food: convertToBoolean(req.query.food),
        camp: convertToBoolean(req.query.camp)
    };

    try {
        const result = await getpackagepricecategories(
            queryParams.location,
            queryParams.maincategory,
            queryParams.price,
            queryParams.sport,
            queryParams.music,
            queryParams.art,
            queryParams.food,
            queryParams.camp
        );

        res.status(200).json(result);
    } catch (err) {
        console.log(err, "Error in getting the details!");
    }
}

// Function to convert string to boolean


}
