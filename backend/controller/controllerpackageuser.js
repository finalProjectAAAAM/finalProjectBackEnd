const {createpackageuser} = require('../function/functionpackageedit/functionpackageedit.js');
module.exports ={
    createPcUser :async(req,res)=>{
       try {
        const packageuser = await createpackageuser(req.params.id,req.params.iduser);
        res.status(200).json(packageuser)
       }
       catch(err){
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
       }
    }
}