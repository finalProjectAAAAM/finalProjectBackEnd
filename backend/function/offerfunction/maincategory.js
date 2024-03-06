const {maincategory} = require("../../database/models/maincategory");

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
        const perviousmain = await maincategory.findOne({where :{offerIdoffer :offerid}})
        console.log(perviousmain.dataValues.namecategory , "presvous one ");
        let check = perviousmain.dataValues.namecategory
        switch (check) {
            case check = "solo":
                check = 1
                break;
            case check ="duo":
                check = 2
            case check = "group" :
                check = 3
            default:
                break;
        }
        if (data == check ) {
            return 'the same main category'
        }
        else{
            // switch (data) {
            //     case 1:
            //     let updatemain = await maincategory.update({ namecategory: "solo" ,  offerIdoffer:offerid})
            //     return updatemain
            //     case 2 : 
            //     let  updatemain = maincategory.update({ namecategory: "duo" ,  offerIdoffer:offerid})
            //     return update
            //      case 3 : 
            //      updatemain = maincategory.update({ namecategory: "group" ,  offerIdoffer:offerid})
                    
            //     default:
            //         break;
            // }
            if(data == 1 ){
                const updatemain = await maincategory.update({ namecategory: "solo" ,  offerIdoffer:offerid},{where :{offerIdoffer:offerid}})
                return  updatemain
            }else if( data == 2){
                const updatemain = await  maincategory.update({ namecategory: "duo" ,  offerIdoffer:offerid},{where :{offerIdoffer:offerid}})
                return  updatemain
            }
            else if(data == 3){
                const updatemain = await maincategory.update({ namecategory: "group" ,  offerIdoffer:offerid},{where :{offerIdoffer:offerid}})
                return  updatemain
            }
            else{
                return "err in insert main catrogry"
            }
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