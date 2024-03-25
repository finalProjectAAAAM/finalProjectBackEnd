const {user} = require("../../database/models/user.js")


const getOneUser = (email) => {
    return user.findOne({where: {email: email}})
  }
  
  const addUser = (data) => {
    return user.create(data)
  }

  const deleteUser = (id) =>{
    return user.destroy({where:{iduser:id}})
  }

  module.exports={getOneUser,addUser,deleteUser}