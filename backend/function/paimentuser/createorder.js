const {paiment} = require ("../../database/models/paiment")
const {insertpackage} = require("../../function/userPackage/userpackage");
const createorder = async( iduser,idpackage, data)=>{
    console.log(data,'data');
    try{
        const record = await insertpackage(iduser ,idpackage)
        console.log(record , "record ");
        if (record) {
            const result = await paiment.create({
                amount : data.amount,
                status : data.status,
                qrcode : data.qrcode,
                userHasPackageIduserHasPackage : record.dataValues.iduser_has_package,
            })
            return result
        }
        
    }
    catch(err){
        console.log(err,"err in create a package!")
    }
}

module.exports = {
    createorder
}