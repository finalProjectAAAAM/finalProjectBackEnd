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
<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
  return offer.findAll({
    where: { idoffer: +id },
    include: [{ model: imagesoffer, attributes: ["image"]}, { model: maincategory , include: supcategory}],
    // ,include:[imagesoffer , {model : maincategory,include:supcategory}]
  });
};
const deleteoffer = async (id) => {
  return offer.destroy({ where: { idoffer: +id } });
};
<<<<<<< HEAD
=======

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
module.exports = {
  insertoffer,
  updateoffer,
  getoffer,
  deleteoffer,
};
