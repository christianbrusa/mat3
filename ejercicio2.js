/*
 * Ahora te pedimos que hagas una Promise que llame a reject con un Error con el string "Hola mundo!"
 *
 */

function helloWorldAsync() {
	const miPromesa = new Promise((resolve,reject) => {
		reject ("Hola mundo!");
	});

	return miPromesa;
}

module.exports = helloWorldAsync;
