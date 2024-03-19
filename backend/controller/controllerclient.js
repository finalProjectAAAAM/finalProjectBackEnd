require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const {getOneUser, addUser} = require("../function/log In-Out User/signin+signup")
const secretKey = 'aziz10'
console.log(secretKey)

const signUp = async (req, res) => {
    const {name, email, pwd, location} = req.body
    try{
        const pswHashed = await bcrypt.hash(pwd, 10)
        const result = addUser({
            name: name,
            email: email,
            pwd: pswHashed,
            location: location
        })
        res.status(201).json(result)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const signIn = async (req, res) => {
    const {email, pwd} = req.body
    try{
        getOneUser(email)
        .then(async (result)=>{
            if(!!result){
                try{
                    const isMatch = await bcrypt.compare(pwd, result.pwd)
                    if(isMatch){
                        const token = jwt.sign({email: email}, secretKey)
                        res.status(200).json({msg: 'user found' ,iduser: result.iduser,token})
                    }
                    else{
                        res.status(401).json("wrong email or password")
                    }
                } 
                catch(err){
                    res.status(500).json(err)
                }
            }
            else {
                res.status(404).json('User not found')
              }
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {signIn,signUp}