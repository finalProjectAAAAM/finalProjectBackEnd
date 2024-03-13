const {maincategory} = require("../../database/models/maincategory");
const { supcategory } = require("../../database/models/supcategory");

const insertcategory = async(data,offerid)=>{
    try{
        if(data == 1 ){
            const insertmain = await maincategory.create({ namecategory: "solo" ,  offerIdoffer:offerid})
            return  insertmain
        }else if( data == 2){
            const insertmain = await  maincategory.create({ namecategory: "duo" ,  offerIdoffer:offerid})
            return  insertmain
        }
        else if(data == 3){
            const insertmain = await maincategory.create({ namecategory: "group" ,  offerIdoffer:offerid})
            return  insertmain
        }
        else{
            return "err in insert main catrogry"
        }
    }
    catch(err){
        console.log(err);
    }
}
const updatecategory = async (data , offerid)=>{


    try{
        
        await  maincategory.destroy({where:{offerIdoffer:offerid}})
            if(data == 1 ){
                const updatemain = await maincategory.create({ namecategory: "solo" ,offerIdoffer:offerid})
                return  updatemain
            }else if( data == 2){
                const updatemain = await  maincategory.create({ namecategory: "duo" ,offerIdoffer:offerid})
                return  updatemain
            }
            else if(data == 3){
                const updatemain = await maincategory.create({ namecategory: "group" ,offerIdoffer:offerid})
                return  updatemain
            }
            else{
                return "err in insert main catrogry"
            }
        }
    catch(err){
        console.log('err in updating the main category ',err);
    }
}
module.exports={
    insertcategory,
    updatecategory
}