/*
 * Evolucionemos!
 *
 * Contamos con una api que nos permite consultar datos de pokémon: https://pokeapi.co/
 *
 * Dado el nombre de un pokémon (dado como parámetro) obtener sus datos de la api (usando request-promise)
 * y devolver un objeto que tenga 'id', 'name' y los tipos del pokémon (sólo el nombre)
 *
 * Por ejemplo, para el pokémon 'entei' devolver:
 * {
 *      id: 244,
 *      name: "entei",
 *      types: ["fire"]
 * }
 *
 * En caso de error que devuelva un Error con el mensaje "No existe"
 */

function getPokemon(pokemon) {
	const request = require("request-promise");

request.get({
	url: "https://pokeapi.co/",
	json: true
}).promise()
.then(({ name }) => { return { name , id } })
.then(pokemon => console.log(pokemon.name));
}

module.exports = getPokemon;
