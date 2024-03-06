const {imagesoffer} = require('../../database/models/imagesoffer')

const insertimagesoffer = (data, offerId) => {
    const imagePromises = data.map(imageData => {
        return imagesoffer.create({
            image: imageData.image,
            offerIdoffer: offerId
        });
    });
    return Promise.all(imagePromises);
};
const updateimages = (data , Id)=>{
    const upimagesPromise = data.map(ele=>{
        return imagesoffer.update(
            { image: ele.image },
            { where: { offerIdoffer: Id } }
        );
    })
    return Promise.all(upimagesPromise)
}

  module.exports={
  insertimagesoffer,
  updateimages
  }