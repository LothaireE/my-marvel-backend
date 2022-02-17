const express = require("express");
const formidable = require("express-formidable");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
// Comics
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

//Characters
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.listen(3001, () => {
  console.log("Server started");
});
