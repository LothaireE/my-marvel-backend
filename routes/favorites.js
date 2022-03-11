const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

const User = require("../models/User");

router.post("/favorites", async (req, res) => {
  //   console.log("req.fields.userId", req.fields.userId);
  //   console.log("req.fields.characters._id", req.fields.characters._id);

  try {
    const isUserExist = await User.findOne({ _id: req.fields.userId });
    if (isUserExist === null) {
      res.status(400).json({ message: "userId invalid" });
    } else {
      const charactersToFind = isUserExist.favCharacters.find(
        (element) => element._id === req.fields.characters._id
      );
      if (charactersToFind) {
        res.json({ message: "already a favorite" });
      } else {
        isUserExist.favCharacters.push(req.fields.characters);
        await isUserExist.save();
      }
    }
  } catch (error) {}
});

router.get("/favorites", async (req, res) => {
  try {
    const isUserExist = await User.findOne({ _id: req.query.id });
    // console.log("isUserExist==>", isUserExist.favCharacters);
    if (isUserExist === null) {
      res.status(400).json({ message: "userId invalid" });
    } else {
      res.status(200).json(isUserExist.favCharacters);
      console.log();
    }
  } catch (error) {}
});

router.delete("/favorites", async (req, res) => {
  console.log(req.fields);
  console.log(req.fields.userId);
  console.log(req.fields.favCharacterId);

  const isUserExist = await User.findOne({ _id: req.fields.userId });
  if (isUserExist === null) {
    res.status(400).json({ message: "userId invalid" });
  } else {
    isUserExist.favCharacters = isUserExist.favCharacters.filter(
      (element) => element._id !== req.fields.favCharacterId
    );

    await isUserExist.save();
    res.json({ message: "Character removed" });
  }
});
module.exports = router;
