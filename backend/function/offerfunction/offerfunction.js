const {offer} = require('../../database/models/offer');

const insertoffer = async(data)=>{
   try{
    const createoffer = await offer.create(data)
        return createoffer 
   }    
   catch(err){
    console.log(err);
   }
}
const updateoffer = async (data , id)=>{
     try{
          const upoffer = await offer.update(data,{where : {idoffer : id}})
          return upoffer
     }
     catch(err){
          console.log(err , 'err in updating the offer');
     }
}


module.exports = {
     insertoffer,
     updateoffer
}