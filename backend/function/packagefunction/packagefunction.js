const { offer } = require('../../database/models/offer');
const {package} = require('../../database/models/package')
const {package_has_offer}=require('../../database/models/package_has_offer')
const { Op ,literal } = require('sequelize');
const { imagesoffer } = require("../../database/models/imagesoffer");
const { maincategory } = require("../../database/models/maincategory");
const { supcategory } = require("../../database/models/supcategory");

const createPackage =  async (data)=>{
    try{
        return package.create(data)
    } 
    catch(err){
        console.log(err,"err in create a package !");
    }
}
const deletepackage = (id)=>{
   return  package.destroy({where:{idpackage : id}})   
}
const getpackage= async (id)=>{
   try{
    const  detailtspackage = await package.findByPk(id,{
        include:[
            {
                model : offer,include:[
                    imagesoffer,
                    {model:maincategory,include:supcategory}
                ]
            }
        ]
    }
    )
    return detailtspackage
   }
   catch(err){
    console.log(err);
   }
    
}

const getpackagedetails= async (id)=>{
    try{
        const  detailtspackage = await package.findAll({where: {idpackage:id}}
        )
        return detailtspackage
    }
    catch(err){
        console.log(err);
    }
}


const updatepackage = async(data,idpackage)=>{

    try{
        const updatepackage = await package.update(data,{where:{idpackage : idpackage}})
        return updatepackage
    }
    catch(err){
        console.log(err,"err in updating the package ! ");
    }
}



const getpackageforuser = async(location , maincate)=>{

    try{
        const result = await package.findAll({where:{location : location , maincategory : maincate}})
        return result
    }
        catch(err){
            console.log(err);
        }
}
const getpackagepricefilter = async (location, maincategory, price) => {
    try {
        const result = await package.findAll({
            where: {
                location: location,
                maincategory: maincategory,
                price: { [Op.lte]: price } 
            }
        }); 
        return result;
    } catch (err) {
        console.log(err);
        throw err; // Re-throw the error to propagate it to the caller
    }
}

const getpackagepricecategories = async (location, maincategory, price, sport, music, art, food, camp) => {
    try {
        const whereClause = {
            location: location,
            maincategory: maincategory,
            price: { [Op.lte]: price }
        };

        const selectedCategoryConditions = [];
        if (typeof sport === 'boolean') selectedCategoryConditions.push(literal('`sport` = ' + sport));
        if (typeof music === 'boolean') selectedCategoryConditions.push(literal('`music` = ' + music));
        if (typeof art === 'boolean') selectedCategoryConditions.push(literal('`art` = ' + art));
        if (typeof food === 'boolean') selectedCategoryConditions.push(literal('`food` = ' + food));
        if (typeof camp === 'boolean') selectedCategoryConditions.push(literal('`camp` = ' + camp));

        if (selectedCategoryConditions.length > 0) {
            whereClause[Op.and] = selectedCategoryConditions;
        }

        const result = await package.findAll({
            where: whereClause
        });

        return result;
    } catch (err) {
        console.log(err);
        throw err; 
    }
};



 








module.exports={
    createPackage,
    deletepackage,
    getpackage,
    updatepackage,
    getpackagedetails,
    updatepackage,
    getpackageforuser,
    getpackagepricefilter,
    getpackagepricecategories,

}