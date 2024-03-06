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

module.exports = {
     insertoffer
}