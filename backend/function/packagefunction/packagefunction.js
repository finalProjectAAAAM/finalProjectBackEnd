const { offer } = require('../../database/models/offer');
const {package} = require('../../database/models/package')
const {package_has_offer}=require('../../database/models/package_has_offer')
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

module.exports={
    createPackage,
    deletepackage,
    getpackage,

    updatepackage,
    getpackagedetails,

}