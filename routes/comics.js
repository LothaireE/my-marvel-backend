const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
const cors = require("cors");

router.get("/comics", async (req, res) => {
  console.log("çaaaa", req.query.title);
  const limit = 100;
  //   &limit=${limit}
  const title = req.query.title;
  // const limit = req.query.limit;
  // &limit=${limit}
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MY_MARVEL_API_KEY}&title=${title}&limit=${limit}`
    );
    res.status(200).json(response.data);
  } catch (error) {}
});

router.get("/comics/:characterId", async (req, res) => {
  characterId = req.params.characterId;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MY_MARVEL_API_KEY}`
    );
    console.log("/comics/:characterId");
    res.status(200).json(response.data);
  } catch (error) {}
});

module.exports = router;
