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
    // console.log(response)
    // let pokemonArr = response
    res.render("pokemon/list.hbs", {
      pokemonArr: response
    })

  })
  .catch((err) => {
    next(err)
  })


})

router.get("/pokemon/:pokeId", (req, res, next) => {

  console.log(req.params) // { pokeId: '62da949e56f8745411ffe1fb' }
  const {pokeId} = req.params
  console.log(pokeId)

  // necesiamos los detalles de 1 pokemon (del seleccionado)
  // Pokemon.find()
  Pokemon.findById(pokeId)
  .then((onePokemon) => {

    res.render("pokemon/details.hbs", {
      onePokemon
    })

  })
  .catch((err) => {
    next(err)
  })

  


})

module.exports = router;
