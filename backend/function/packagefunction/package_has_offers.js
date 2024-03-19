const{package_has_offer}=require('../../database/models/package_has_offer');

const createcomboofpackage = async (data ,idpackage)=>{
   try{
    console.log(data,'data from the join table ');
    const combo = data.map(ele=>{
        return package_has_offer.create(
            {
                offerIdoffer : ele.offer,
                packageIdpackage : idpackage
            }
        )
    })
    return Promise.all(combo)
   }
   catch(err){
    console.log(err);
   }
}
const updatecomboofpackage = async (data,idpackage)=>{
    try{
        await package_has_offer.destroy({where:{packageIdpackage : idpackage}})
        const updatepackage = await createcomboofpackage(data,idpackage)
        return updatepackage
        }
    catch(err){
        console.log(err,"err in updating the package from function !");
    }
}

const getcomboofpackage = async (idpackage)=>{
    try{
        const combo = await package_has_offer.findAll({where:{packageIdpackage : idpackage}})
        return combo
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    createcomboofpackage,
    updatecomboofpackage,
    getcomboofpackage,

}