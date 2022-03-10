const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

const User = require("../models/User");

router.post("/users/signup", async (req, res) => {
  //   console.log(req.fields);
  //   res.status(200).json({ message: "sign up route activated" });

  try {
    const isUserExist = await User.findOne({ email: req.fields.email });
    if (isUserExist !== null) {
      res.status(400).json({ message: "This email already has an account" });
    } else {
      console.log(req.fields);

      const salt = uid2(64);
      const hash = SHA256(req.fields.password + salt).toString(encBase64);
      const token = uid2(64);

      const newUser = new User({
        username: req.fields.username,
        email: req.fields.email,
        password: req.fields.password,
        token: token,
        hash: hash,
        salt: salt,
      });
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        username: newUser.username,
        token: newUser.token,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

router.post("/users/signin", async (req, res) => {
  console.log(req.fields);
  //   res.status(200).json({ message: "sign in route activated" });
  try {
    const user = await User.findOne({ email: req.fields.email });
    if (user === null) {
      res.status(401).json({ message: "Unauthorized ! 1" });
    } else {
      console.log(user.hash, "hash à comparer");
      const newHash = SHA256(req.fields.password + user.salt).toString(
        encBase64
      );
      console.log("mon nouveau hash", newHash);
      if (user.hash === newHash) {
        res.json({
          _id: user._id,
          username: user.username,
          token: user.token,
        });
      } else {
        res.status(401).json({ message: "Unauthorized ! 2" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
});

module.exports = router;
