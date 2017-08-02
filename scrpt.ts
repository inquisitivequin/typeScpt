function word(cons: function) {
	console.log(cons)
}
 
@word
class Pers {
	constructor() {
		console.log('Hola')
	}
}