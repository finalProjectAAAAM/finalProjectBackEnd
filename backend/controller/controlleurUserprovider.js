const { userProvider } = require("../database/models/userProvider");
const { offer } = require("../database/models/offer");

module.exports = {
  AllProviders: async (req, res) => {
    try {
      const result = await userProvider.findAll({ include: offer });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  },
  OneProviders: async (req, res) => {
    console.log(req.params);
    try {
      const result = await userProvider.findOne({
        where: { id: req.params.id },
        include: offer,
      });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  },

  DeleteProviders: async (req, res) => {
    try {
      const result = await userProvider.destroy({
        where: { iduserProvider: req.params.id },
      });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  },
};

// module.exports={AllProviders,OneProviders,DeleteProviders}
