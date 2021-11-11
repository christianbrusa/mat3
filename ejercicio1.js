/*
 * Empecemos con lo básico.
 * Te pedimos que hagas una Promise que resuelva al string "Hola mundo!"
 *
 */

function helloWorldAsync() {
	const miPromesa = new Promise((resolve,reject) => {
		resolve ("Hola mundo!");
	});

	return miPromesa;
}

module.exports = helloWorldAsync;
