let nom = 'Poat'

let age = 32

let hobs = ['food', 'moreFood']

enum Veg {
	'tomato',
	'onion',
	'potato'
}

let myVeg: Veg = Veg.onion

console.log(myVeg)

let car: any = "audi"

console.log(car)

car = { brand: 'audi', year: 2001}

console.log(car.year)

//funcs

function returnMe(): string {
	return nom
}

console.log(returnMe())

function muli(val2: number, val1: number): number {
	return val2 * val1
}

console.log(muli(12,12))

let mo;

mo = returnMe

console.log(mo(10,10))