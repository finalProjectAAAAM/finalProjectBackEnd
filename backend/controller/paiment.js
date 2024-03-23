const { createorder} = require("../function/paimentuser/createorder")

module.exports ={
    CreateOrde : async (req , res)=>{
        const obj  = {
            
                user_id: req.body.user_id,
                package_id: req.body.package_id,
                status: req.body.status,
                amount: req.body.amount,
                qrcode : req.body.qrcode,
        }
        try{
            const result  = await  createorder(obj.user_id, obj.package_id,obj)
            res.status(200).json('success paiment order')
        }
        catch(error){
            res.send(error)
        }
    }
}