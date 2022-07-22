

// 1 conectarnos a la BD
require("../db") // reutiliza la connection de la DB de nuestro server

// 2 buscar los documentos a agregar
const pokemonArr = require("./pokemon.json")

// 3 agregar los documentos a la DB
// ... tener un Modelo