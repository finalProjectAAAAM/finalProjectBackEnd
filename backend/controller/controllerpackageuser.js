const {createpackageuser , getpcuser , updatepcuser} = require('../function/functionpackageedit/functionpackageedit.js');
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
    },
    getpcuser : async(req, res)=>{
        try {
            const packageuser = await getpcuser(req.params.id , req.params.iduser);
            res.status(200).json(packageuser)
        }
        catch(err){
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    UpdatePcUser: async (req, res) => {
        try {
            const offersToUpdate = [];
            const promises = [];
    
            // Iterate over the properties of req.body
            for (const key in req.body) {
                if (req.body.hasOwnProperty(key) && key.startsWith("offer")) {
                    const offerId = req.body[key];
                    // Check if the offer ID is truthy (not null or undefined)
                    if (offerId) {
                        // Push the offer ID into the offersToUpdate array
                        offersToUpdate.push(offerId);
                    }
                }
            }
    
            console.log(offersToUpdate, 'updated offers to update');
    
            // Call the updatepcuser function with the populated offersToUpdate array
            const packageuser = await updatepcuser(offersToUpdate, req.params.id);
    
            res.status(200).json(packageuser);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    
}