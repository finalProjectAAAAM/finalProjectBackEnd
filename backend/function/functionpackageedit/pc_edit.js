const {package_edit}=require('../../database/models/package_edit');

const createcombopcedit = async (data ,idpackage)=>{
   try{
    console.log(data,'data from the join table ');
    const combo = data.map(ele=>{
        return package_edit.create(
            {
                offerIdoffer : ele.dataValues.offerIdoffer,
                packageusereditIdpackage : idpackage
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
        await package_edit.destroy({where:{packageIdpackage : idpackage}})
        const updatepackage = await createcombopcedit(data,idpackage)
        return updatepackage
        }
    catch(err){
        console.log(err,"err in updating the package from function !");
    }
}
const getcomboofpackage = async (idpackage)=>{
    try{
        const combo = await package_edit.findAll({where:{packageIdpackage : idpackage}})
        return combo
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    createcombopcedit,
    updatecomboofpackage,
    getcomboofpackage,
}