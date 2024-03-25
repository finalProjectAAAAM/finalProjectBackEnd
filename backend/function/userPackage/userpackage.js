const {user_has_package} = require ("../../database/models/user_has_package")

const insertpackage = async(iduser,idpackage)=>{
    try{
        const result = await user_has_package.create({
            userIduser : iduser,
            packageIdpackage : idpackage
        })
    return result
    }
    catch(err){
        console.log(err,"err in create a package!")
    }
}



module.exports = {
    insertpackage
}