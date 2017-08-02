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

// @lugg
@printo
class Veg {
	name = "Ferny"
}

const vegr = new Veg()
vegr.print()


//ting

function ed(val: boolean) {
	return function(targ: any, propNom: string, 
		desc: PropertyDescriptor) {
		desc.writable = val
	}
}


function oved(val: boolean) {
	return function(targ: any, propNom: string) {
		const newDes: PropertyDescriptor = {
			writable: val
		}
		return newDes
	}
}

class Proj {
	@oved(false)
	projNam: string

	constructor(name: string) {
		this.projNam = name
	}

	@ed(false)
	calcBud() {
		console.log(202020)
	}
	
}

const prj = new Proj('Poat')
prj.calcBud()
prj.calcBud = function() {
	console.log(2349234)
}
prj.calcBud()
console.log(prj)


//paramDec

function printInd(targ: any, meth: string, param: number) {
	console.log('Targ', targ)
	console.log('Meth', meth)
	console.log('Param', param)
}

class Puppy{
	name: string

	constructor(name: string) {
		this.name
	}

	printPup(mode: string, @printInd printYall: boolean) {
		if (printYall) {
			console.log('Shea')
		} else {
			console.log('Dap')
		}
	}
}

const pups = new Puppy()

pups.printPup("pota", true)
