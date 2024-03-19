const express = require("express");
const cors = require("cors");
const database = require("./database/database");
const port = 3001;
const app = express();
const bodyparser = require("body-parser");
const RouterAuth = require('./router/routerAuth')
const RouterPackage = require('./router/routerpackage')
const RouterClient = require("./router/routerUser")
const Routeroffer = require('./router/routeroffer')
const Routerpcuser = require('./router/routerpcuser');
const routerUsers = require('./router/routerUsers')
const routerProvider = require('./router/routerProviders')
const RouterAuthMobile = require ("./router/routerAuthmobile")
app.use(cors());
app.use(express.json());
app.use('/auth',RouterAuth)
app.use('/userProvider',Routeroffer)
app.use('/cp',RouterPackage)
app.use('/user',Routerpcuser)
app.use("/", routerProvider);
app.use("/use", routerUsers);
app.use("/usermobile", RouterClient);
app.use("/authmobile",RouterAuthMobile)


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


 app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
  

