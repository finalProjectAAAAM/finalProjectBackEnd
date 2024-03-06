const {maincategory} = require("../../database/models/maincategory");

const insertcategory = async(data,offerid)=>{
    try{
        if(data == 1 ){
            const insertmain = await maincategory.create({ namecategory: "solo" ,  offerIdoffer:offerid})
            console.log(insertmain , '0000000000000000');
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
module.exports={
    insertcategory
}