const {addToken,getToken} = require("../function/log In-Out/auth.js")

const saveToken = (req, res) => {
    const id = req.params.id
    const token = req.body.token
    addToken({token: token, iduser: id})
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(401).send(err)
    })
}

const checkToken = (req, res) => {
    const id = req.params.id
    getToken(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(403).status(err)
    })
}

module.exports = {saveToken,checkToken}