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

  module.exports={
  insertimagesoffer
  }