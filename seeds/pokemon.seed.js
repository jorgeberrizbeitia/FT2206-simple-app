

// 1 conectarnos a la BD
require("../db") // reutiliza la connection de la DB de nuestro server

// 2 obtener los documentos a agregar a la DB
const pokemonArr = require("./pokemon.json")

// 3 agregar los documentos a la DB
// ... tener un Modelo inserMAny
const Pokemon = require("../models/Pokemon.model.js")

async function storePokemon() {
  try {
    await Pokemon.insertMany(pokemonArr)
    console.log("todo bien, los pokemon fueron agregados a la BD")
    
  } catch(err) {
    console.log(err)
  }
}

storePokemon()