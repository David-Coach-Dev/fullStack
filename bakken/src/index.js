const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./database");

app.set("port", 4000);

// app.use(morgan('dev'))
// app.use(bobyParse.urlencoded({extended:true}))
// app.use(bobyParse.json())

//start server
app.listen(app.get("port"), () => {
  console.log("escuchando el puerto ", app.get("port"));
});
