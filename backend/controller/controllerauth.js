const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "my_secret_key_2023$#@!";
const {
    inserUserProvider,
    getUserProviderByEmail,
} = require("../function/authoffer");

function generateToken(user) {
  const expire = 60 * 60 * 24;
    return jwt.sign({ user }, secretKey, { expiresIn: expire });
}

const signUpUser = async (req, res) => {
    const { name, email, pwd, location, cin, status, credit } = req.body;
    try {
    console.log(pwd, "testtesttest");
    // let salt = await bcrypt.genSalt(10)
    const hasshpass = await bcrypt.hash("passworddddd", 5);
    console.log(hasshpass);
    if (hasshpass) {
        const newuser = await inserUserProvider( {
        name: name,
        email: email,
        pwd: hasshpass,
        location: location,
        cin: cin,
        status: status,
        credit: credit,
        });
        
        const token = generateToken({user:newuser});
        console.log(token);
        console.log(newuser);
        res.status(201).json({ message: 'User created successfully', token,newuser });
    } else {
        res.status(400).json({ message: "Error hashing password" });
    }
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
};

const loginUser = async (req, res) => {
    const { email, pwd } = req.body;
    try {
        const user = await getUserProviderByEmail(email);
        if (!!user) {
            try {
                const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
                if (isPasswordValid) {
                    const token = jwt.sign({ email: email }, secretKey);
                    res.status(200).json({ msg: 'Login successful', email: user.email, token });
                } else {
                    res.status(401).json({ error: 'Invalid password' });
                }
            } catch (err) {
                res.status(500).json({ error: 'Internal server error' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};






module.exports = { signUpUser, loginUser };
