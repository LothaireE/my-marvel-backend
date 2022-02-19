const { default: axios } = require("axios");
const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

router.get("/characters", async (req, res) => {
  console.log("1 ======>", req.query.name);
  const name = req.query.name;
  //   const limit = req.query.limit;
  //   const page = req.query.page;
  //   const skip = limit * (page - 1);
  //   console.log(name);
  //   console.log(limit);
  //   console.log(skip);

  try {
    // `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MY_MARVEL_API_KEY}&name=${name}&limit=${limit}&page=${page}`

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MY_MARVEL_API_KEY}&name=${name}`
    );
    console.log("/characters");
    res.status(200).json(response.data);
  } catch (error) {}
  //   res.status(200).json({ message: "via characters routes" });
});

router.get("/character/:characterId", async (req, res) => {
  //   const limit = req.query.limit;
  //   console.log("======>", req.params.characterId);
  characterId = req.params.characterId;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MY_MARVEL_API_KEY}`
    );
    // console.log("/character/:characterId");
    res.status(200).json(response.data);
  } catch (error) {}
});

module.exports = router;
