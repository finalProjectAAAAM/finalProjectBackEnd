const {packageuseredit}=require('../../database/models/packageuseredit');
const{package_edit}=require('../../database/models/package_edit');
const {getpackagedetails}=require('../packagefunction/packagefunction');
const {getcomboofpackage}=require('../packagefunction/package_has_offers');
const {createcombopcedit} = require('./pc_edit');

const createpackageuser = async (idpackage , iduser)=>{
    try{
        const package = await getpackagedetails(idpackage);
        // console.log(package[0].dataValues ,'package of edit package'); 
        package[0].dataValues.userIduser = iduser
        const createedit = await packageuseredit.create(package[0].dataValues);
        const combo = await getcomboofpackage(idpackage);
        console.log(combo,'combo of edit package'); 
        await createcombopcedit(combo,idpackage)
        return createedit;
    }
    catch(err){
        console.log(err,"err in create a package!");
    }
}

module.exports ={
    createpackageuser,
}