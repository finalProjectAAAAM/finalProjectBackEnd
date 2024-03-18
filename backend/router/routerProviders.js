const routerProvider = require("express").Router();
const controlleurUserprovider = require("../controller/controlleurUserprovider");

routerProvider.get("/allproviders", controlleurUserprovider.AllProviders);
routerProvider.delete("/delete/:id", controlleurUserprovider.DeleteProviders);
module.exports = routerProvider;
