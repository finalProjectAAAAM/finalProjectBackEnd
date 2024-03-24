const express = require("express");
const cors = require("cors");
const {database} = require('./database/database')
const port = 3001
const app = express();
app.use(express.json());
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const RouterAuth = require('./router/routerAuth')

app.use('/auth',RouterAuth)
const RouterPackage = require('./router/routerpackage')
const Routeroffer = require('./router/routeroffer')
const RouterComment = require('./router/routerComment')
const {createComments}=require ("./controller/controllercomment")
app.post('/createComment',createComments)
app.use('/userProvider',Routeroffer)
app.use('/cp',RouterPackage)
// app.use('/package',)
app.use("/",RouterComment)
app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
<<<<<<< HEAD
=======

const RouterPackage = require('./router/routerpackage')
const Routeroffer = require('./router/routeroffer')
const Routerpcuser = require('./router/routerpcuser');
app.use('/userProvider',Routeroffer)
app.use('/cp',RouterPackage)
app.use('/user',Routerpcuser)
// app.use('/package',)
app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
  

>>>>>>> 66862f43492dec151ff9c505151183a45fadd886
