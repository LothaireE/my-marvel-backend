const express = require("express");
const formidable = require("express-formidable");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(formidable());

// app.get("/", (req, res)=>{
//   res.status(200).json({message:"welcome to marvel api"})
// })
// Comics
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/marvelusers");

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

//Characters
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const usersRoutes = require("./routes/users");
app.use(usersRoutes);

const favoritesRoutes = require("./routes/favorites");
app.use(favoritesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
