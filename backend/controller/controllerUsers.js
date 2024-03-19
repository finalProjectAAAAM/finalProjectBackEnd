const { user } = require("../database/models/user");

module.exports = {
  AllUser: async (req, res) => {
    try {
      const result = await user.findAll();
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  },

  DeleteUser: async (req, res) => {
    try {
      const result = await user.destroy({ where: { iduser: req.params.id } });
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  },
};
