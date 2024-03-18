const {packageuseredit}=require('../../database/models/packageuseredit');
const{package_edit}=require('../../database/models/package_edit');
const {offer}=require('../../database/models/offer');
const{imagesoffer}=require('../../database/models/imagesoffer');
const {maincategory}=require('../../database/models/maincategory');
const{supcategory}=require('../../database/models/supcategory'); 
const {getpackagedetails}=require('../packagefunction/packagefunction');
const {getcomboofpackage}=require('../packagefunction/package_has_offers');
const {createcombopcedit,updatecomboofpackage} = require('./pc_edit');

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

const getpcuser = async (idpackage, iduser) => {
    try {
        const result = await packageuseredit.findAll({
            where: { 
                idpackage: idpackage,
                userIduser: iduser 
            },
            include: [{
                model: offer,
                include: [
                    imagesoffer,
                    { model: maincategory, include: supcategory }
                ]
            }]
        });
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};
const updatepcuser = async function (data,idpackage) {
   

    try {
        const updatepackage = await updatecomboofpackage(data,idpackage);
        return updatepackage;
    } catch (err) {
        console.log(err, "Error in updating the package from function!");
        throw err; 
    }
}



module.exports ={
    createpackageuser,
    getpcuser,
    updatepcuser,
}