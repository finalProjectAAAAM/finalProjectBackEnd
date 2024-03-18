const { imagesoffer } = require("../../database/models/imagesoffer");
const { maincategory } = require("../../database/models/maincategory");
const { offer } = require("../../database/models/offer");
const { supcategory } = require("../../database/models/supcategory");

const insertoffer = async (data) => {
  try {
    const createoffer = await offer.create(data);
    return createoffer;
  } catch (err) {
    console.log(err);
  }
};
const updateoffer = async (data, id) => {
  try {
    const upoffer = await offer.update(data, { where: { idoffer: id } });
    return upoffer;
  } catch (err) {
    console.log(err, "err in updating the offer");
  }
};
const getoffer = async (id) => {
    return offer.findAll({
      where: { userProviderIduserProvider: +id } ,include:[imagesoffer , {model : maincategory,include:supcategory}]
    });
 
};
const deleteoffer = async(id)=>{
  return offer.destroy({where:{idoffer : +id}})
}
module.exports = {
  insertoffer,
  updateoffer,
  getoffer,
  deleteoffer,
};
