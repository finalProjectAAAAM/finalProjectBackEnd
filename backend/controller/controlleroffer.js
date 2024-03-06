const { insertoffer ,  updateoffer } = require("../function/offerfunction/offerfunction");
const { insertsupcategory ,updatesupcategory } = require("../function/offerfunction/supcategory");
const { insertcategory ,updatecategory } = require("../function/offerfunction/maincategory");
const { insertimagesoffer ,updateimages } = require("../function/offerfunction/imagesoffer");

module.exports = {
  createoffer: async (req, res) => {
    const obj = {
      offer: {
        title: req.body.offer.title,
        startday: req.body.offer.startday,
        duration: req.body.offer.duration,
        description: req.body.offer.description,
        location: req.body.offer.location,
        price: req.body.offer.price,
        lat: req.body.offer.lat,
        long: req.body.offer.long,
        places: req.body.offer.places,
        paipers: req.body.offer.paipers,
      },
      imagesOffer: [
        { image: req.body.image1 },
        { image: req.body.image2 },
        { image: req.body.image3 },
        { image: req.body.image4 },
      ],
      supcategory: [
        { supcategory: req.body.supcategory1 },
        { supcategory: req.body.supcategory2 },
        { supcategory: req.body.supcategory3 },
        { supcategory: req.body.supcategory4 },
      ],
      maincategory: req.body.maincategory, // !! number
    };
    try {
      const addoffer = await insertoffer(obj.offer);

      await insertimagesoffer(obj.imagesOffer, addoffer.idoffer);
      
      const addmain = await insertcategory(obj.maincategory, addoffer.idoffer);
      console.log(addmain);
      await insertsupcategory(obj.supcategory,addmain.dataValues.idmaincategory);
      res.status(200).json(addoffer);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // the offer that will be updated not allwed to update the main category ! 
  updateoffer : async (req , res)=>{
    const offerId = req.params.id;
    const obj = {
      offer: {
        title: req.body.offer.title,
        startday: req.body.offer.startday,
        duration: req.body.offer.duration,
        description: req.body.offer.description,
        location: req.body.offer.location,
        price: req.body.offer.price,
        lat: req.body.offer.lat,
        long: req.body.offer.long,
        places: req.body.offer.places,
        paipers: req.body.offer.paipers,
      },
      imagesOffer: [
        { image: req.body.image1 },
        { image: req.body.image2 },
        { image: req.body.image3 },
        { image: req.body.image4 },
      ],
      supcategory: [
        { supcategory: req.body.supcategory1 },
        { supcategory: req.body.supcategory2 },
        { supcategory: req.body.supcategory3 },
        { supcategory: req.body.supcategory4 },
      ],
      maincategory: req.body.maincategory, // !! number
    };
    try{
        const upoffer = await updateoffer(obj.offer , offerId)
          const updatemain = await updatecategory(obj.maincategory , offerId)
          console.log(updatemain ,'sdldsljdslsdjdls');
          await updateimages(obj.imagesOffer , offerId)
          // await updatesupcategory(obj.supcategory,updatemain.dataValues.idmaincategory)
        res.status(201).json(upoffer)
    }
    catch(err){
      console.log(err ,"err in updating the offer !");
    }
  }
};
