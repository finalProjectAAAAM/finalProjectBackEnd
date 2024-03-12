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
const updatecomboofpackage = async (data, idpackage) => {
    try {
        // Delete existing entries related to the package
        await package_edit.destroy({ where: { packageusereditIdpackage: idpackage } });

        // Create new entries for updated data
        const updateoffers = data.map(ele => {
            return package_edit.create({
                offerIdoffer: ele,
                packageusereditIdpackage: idpackage
            });
        });

        
        await Promise.all(updateoffers);
    } catch (err) {
        console.log(err, "Error in updating the package from function!");
        throw err; 
    }
};

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