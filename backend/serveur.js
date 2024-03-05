const express = require("express");
const cors = require("cors");
const database = require('./database/database')
const port = 3001
const app = express();
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log("the server is lessting on ", port);
  });
  