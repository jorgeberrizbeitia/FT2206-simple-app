const express = require("express")
const router = express.Router();
const Pokemon = require("../models/Pokemon.model.js")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/pokemons", (req, res, next) => {

  // .find()
  // Model
  Pokemon.find()
  .then((response) => {
    console.log(response)
    // let pokemonArr = response
    res.render("pokemon/list.hbs", {
      pokemonArr: response
    })

  })
  .catch((err) => {
    next(err)
  })


})

module.exports = router;
