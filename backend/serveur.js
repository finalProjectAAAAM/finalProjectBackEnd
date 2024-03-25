const express = require("express");
const cors = require("cors");
const database = require("./database/database");
const port = 3001;
const app = express();
const {createComments}=require ("./controller/controllercomment")
app.use(express.json());
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const RouterAuth = require('./router/routerAuth')
const RouterPackage = require('./router/routerpackage')
const RouterComment = require('./router/routerComment')
const Routeroffer = require('./router/routeroffer');
const Routerpcuser = require('./router/routerpcuser');
const routerUsers = require('./router/routerUsers');
const routerProvider = require('./router/routerProviders');
const RouterPayment = require('./router/payment');
const routerOrder = require('./router/Order');
app.use('/auth',RouterAuth)
app.use('/userProvider',Routeroffer)
app.use('/cp',RouterPackage)
app.use('/user',Routerpcuser)
app.use("/", routerProvider);
app.use("/", routerUsers);
app.use("/Paiment", RouterPayment);
app.use('/Order',routerOrder);
app.post('/createComment',createComments)
app.use('/userProvider',Routeroffer)
app.use('/cp',RouterPackage)
app.use("/",RouterComment)
 app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
  