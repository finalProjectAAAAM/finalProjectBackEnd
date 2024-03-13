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
const updateimages = async (data, offerId) => {
    try {
        //  Delete Existing Images
        await imagesoffer.destroy({ where: { offerIdoffer: offerId } });

        //  Insert New Images
        const createImagesPromise = data.map(async ele => {
            await imagesoffer.create({
                image: ele.image,
                offerIdoffer: offerId,
            });
        });

        // Wait for all inserts to complete
        await Promise.all(createImagesPromise);

        console.log('Images updated successfully');
    } catch (error) {
       
        console.error('Error updating images:', error);
    }
};






  module.exports={
  insertimagesoffer,
  updateimages
  }