const mongoose = require("mongoose");

URI = "mongodb://localhost/ensayo";

mongoose
  .connect(URI)
  .then((db) => console.log("base de datos conectada"))
  .catch((error) => console.log(error));

module.exports = mongoose;
