const getPokemon = require("./ejercicio3");
const { charmander, greninja } = require("./fixture3");
require("should");

describe("Test", function () {
	this.timeout(5000);
	context("getPokemon", () => {
		it("charmander", () => {
			return getPokemon("charmander").should.eventually.eql(charmander);
		});
		it("greninja", () => {
			return getPokemon("greninja").should.eventually.eql(greninja);
		});
		it("ash", () => {
			return getPokemon("ash").should.be.rejectedWith("No existe");
		});
	});
});
