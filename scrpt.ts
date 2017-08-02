function word(cons: Function) {
	console.log(cons)
}
 
@word
class Pers {
	constructor() {
		console.log('Hola')
	}
}

//Factory

// function lugg(val: boolean) {
// 	return val ? lugg : null
// }

// @lugg(true)
// class Veg {

// }

//Vnc

function printo(cons: Function) {
	cons.prototype.print = function() {
		console.log(this)
	}
}

@printo
class Veg {
	name = "Ferny"
}

const vegr = new Veg()
vegr.print()
