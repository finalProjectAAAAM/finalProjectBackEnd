const express = require("express");
const cors = require("cors");
const database = require('./database/database')
const port = 3001
const app = express();
const RouterPackage = require('./router/routerpackage')
const Routeroffer = require('./router/routeroffer')
const Routeruser = require("./router/routerUser")
const Routerauth = require("./router/routerAuth")
app.use(cors());
app.use(express.json());


app.use('/userProvider',Routeroffer)
app.use("/user",Routeruser)
app.use("/auth",Routerauth)
// app.use('/package',)
app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
  