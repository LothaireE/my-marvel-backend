const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

const User = require("../models/User");

router.post("/favorites", async (req, res) => {
  console.log(req.fields.characters);
  // console.log("isUserExist==>", isUserExist);

  try {
    const isUserExist = await User.findOne({ _id: req.fields.userId });
    // console.log("mon user enregistré en bdd", isUserExist);
    if (isUserExist === null) {
      //   console.log("s'affiche si mon isUserExist est invalide");
      res.status(400).json({ message: "userId invalid" });
    } else {
      //   console.log("s'affiche si mon isUserExist est valide");
      //   console.log("isUserExist.favCharacters==>", isUserExist.favCharacters);
      const favCharactersArray = isUserExist.favCharacters;
      console.log(favCharactersArray);
      //   console.log("before", favCharactersArray);
      favCharactersArray.push(req.fields.characters);
      console.log("after ===>", favCharactersArray);
      //   console.log("à push dans mon user fav tab", req.fields);
    }
  } catch (error) {}
});

module.exports = router;
