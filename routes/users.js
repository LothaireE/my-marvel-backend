const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

router.post("/users", async (req, res) => {
  console.log(req.fields.name);
  res.status(200).json({ message: "user's route activated" });
});

module.exports = router;
