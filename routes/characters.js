const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

router.get("/characters", async (req, res) => {
  const limit = 100;

  if (req.query.limit) {
    limit = req.query.limit;
  }

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MY_MARVEL_API_KEY}&limit=${limit}`
    );
    console.log("/characters");
    res.status(200).json(response.data);
  } catch (error) {}
  //   res.status(200).json({ message: "via characters routes" });
});

router.get("/character/:characterId", async (req, res) => {
  const limit = 100;
  //   console.log("======>", req.params.characterId);
  characterId = req.params.characterId;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MY_MARVEL_API_KEY}&limit=${limit}`
    );
    console.log("/character/:characterId");
    res.status(200).json(response.data);
  } catch (error) {}
});

module.exports = router;
