const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  email: String,
  token: String,
  hash: String,
  salt: String,
  favComics: [],
  favCharacters: [],
});

module.exports = User;
