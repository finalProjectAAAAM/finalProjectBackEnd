const adminRoute=require('express').Router()
const Routercontact=require("../controller/contactAdmincontroller")




adminRoute.post('/admin/contactAdmin', Routercontact.contactAdmin)

module.exports=adminRoute