const express = require("express");
const cors = require("cors");
const database = require("./database/database");
const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

const RouterPackage = require("./router/routerpackage");
const Routeroffer = require("./router/routeroffer");
const RouterAdmin = require("./router/routerAdmin");
const routerProvider = require("./router/routerProviders");
const routerUsers = require("./router/routerUsers");
app.use("/userProvider", Routeroffer);
app.use("/cp", RouterPackage);
app.use("/api", RouterAdmin);
app.use("/", routerProvider);
app.use("/", routerUsers);
// app.use('/package',)
app.listen(port, () => {
  console.log("the server is lessting on ", port);
});
