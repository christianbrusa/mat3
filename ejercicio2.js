/*
 * Ahora te pedimos que hagas una Promise que llame a reject con un Error con el string "Hola mundo!"
 *
 */

function helloWorldAsync() {
	const miPromesa = new Promise((resolve,reject) => {
		throw new Error ("Hola mundo!");
	});

	return miPromesa;
}

module.exports = helloWorldAsync;
