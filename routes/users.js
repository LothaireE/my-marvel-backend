const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

router.post("/users/signup", async (req, res) => {
  console.log(req.query);
  res.status(200).json({ message: "sign up route activated" });
});

router.post("/users/signin", async (req, res) => {
  console.log(req.query);
  res.status(200).json({ message: "sign in route activated" });
});

module.exports = router;
