const adminRoute=require('express').Router()
const {contactAdmin}=require("../controller/contactAdmincontroller")




adminRoute.post('/admin/contactAdmin', contactAdmin)

module.exports=adminRoute