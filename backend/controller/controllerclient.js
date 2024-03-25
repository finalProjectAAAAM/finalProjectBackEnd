require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const {getOneUser, addUser} = require("../function/log In-Out User/signin+signup")
const secretkey = 'aziz10'


function generateToken(client) {
    const expire = 60 * 60 * 24;
      return jwt.sign({client}, secretkey, { expiresIn: expire });
  }

const signUp = async (req, res) => {
    const {name, email, password, location} = req.body

    
    try{
        const pswHashed = await bcrypt.hash(password, 10)

       if(pswHashed)
       { const result = await addUser({
            name: name,
            email: email,
            pwd: pswHashed,
            location: location
        })
        
         const token = generateToken({user:result});
        res.status(201).json({ message: 'User created successfully', token,result: result });
       }
    else{
        res.status(400).json({ message: "Error hashing password" });
    }
}
       catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

const signIn = async (req, res) => {
    const {email, pwd} = req.body
    console.log(req.body);
    try{
        getOneUser(email)
        .then(async (result)=>{
            console.log(result);
            if(!!result){
                try{
                    const isMatch = await bcrypt.compare(pwd, result.pwd)
                    if(isMatch){
                        const token = jwt.sign({email: email}, secretkey)
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