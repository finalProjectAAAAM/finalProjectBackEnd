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
   UpdateUser : async (req, res) => {
    const iduser = req.params.id;
    const { pwd, name, email } = req.body;

    try {
        let updateFields = {};

        if (name) {
            updateFields.name = name;
        }

        if (email) {
            updateFields.email = email;
        }

        if (pwd) {
          updateFields.pwd = pwd;

            
        }

        await user.update(updateFields, { where: { iduser: iduser } });

        const updatedUser = await user.findOne({ where: { iduser: iduser} });

        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.json({ message: 'No user was updated.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }

};