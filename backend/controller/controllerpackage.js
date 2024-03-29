
const {createPackage,deletepackage,getpackage,updatepackage,getpackagedetails,getpackageforuser,getpackagepricefilter,getpackagepricecategories,AllCities,Allpackage } = require('../function/packagefunction/packagefunction');
const {createcomboofpackage,updatecomboofpackage } =require('../function/packagefunction/package_has_offers')
const { Op } = require('sequelize');
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
            startday:req.body.startday, 
            duration: req.body.duration,
            price: req.body.price,
            status: req.body.status,
            places: req.body.places,
            imagemain : req.body.imagemain,
            startday : req.body.startday,
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
              startday:req.body.startday,
              duration: req.body.duration,
              price: req.body.price,
              status: req.body.status,
              startday : req.body.startday,
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
},
getPackagesByDate: async (req, res) => {
    try {
        const { date } = req.params;

        // Parse the date string and convert it to UTC
        const startDate = new Date(`${date} UTC`);
        
        // Find all packages for the specified date
        const packages = await package.findAll({
            where: {
                startday: startDate
            }
        });

        res.status(200).json(packages);
    } catch (error) {
        console.error('Error fetching packages by date:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
},
getPackagesByDateAndAfter: async (req, res) => {
    try {
        const { date } = req.params;

        // Parse the date string and convert it to UTC
        const startDate = new Date(`${date} UTC`);
        
        // Set the start date to the beginning of the specified day
        startDate.setUTCHours(0, 0, 0, 0);
        
        // Calculate the end date (7 days after the start date)
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);

        // Find all packages that start after the specified date and continue for 7 days
        const packages = await package.findAll({
            where: {
                startday: {
                    [Op.gte]: startDate, // Packages starting on or after startDate
                    [Op.lt]: endDate      // Packages starting before endDate
                }
            }
        });

        res.status(200).json(packages);
    } catch (error) {
        console.error('Error fetching packages by date:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
},
allCity : async (req, res)=>{
    try{
        const result = await AllCities() ;
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        console.log(err,"err in geting the details! ");

    }
},
allPackges : async (req, res)=>{
    try{
        const result = await Allpackage() ;
        console.log("it work")
        res.status(200).json(result)
    }
    catch(err){
        console.log(err,"err in geting the details! ");

    }


}}

