const {user} = require("../../database/models/user.js")

const addToken = (token) => {
    return user.create(token)
  }
  
  const getToken = (id) => {
    return user.findOne({where: {iduser: id}})
  }


  module.exports={getToken,addToken}