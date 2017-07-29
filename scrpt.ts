class Person {
	name: string
	//only accessible within block scope
	private type: string
	//only accessible within block scope as well as any class or 
	//objects that inherit from this class
	protected color: string = 'brown'

	constructor(name: string, public usrname: string = 'shea') {
		this.name = name
	}

	getColor() {
		console.log(this.color)
	}

	setType(type: string) {
		this.type = type
		console.log(this.type)
	}
}

const poat = new Person('Shea', 'Poat')
console.log(poat.name, poat.usrname)
poat.getColor()
poat.setType('Puppy')

//Inheritance

class Puppy extends Person {

	constructor(usrName: string) {
		super('Lry', usrName)
	}
    setColor(color: string) {
    	this.color = color
    	console.log(this.color)
    }
}

let pup = new Puppy('Jerd')

console.log(pup)

pup.setColor('blue')

console.log(pup)

//Get & Set

class Plant {
	private _species: string = 'plant'

	get species() {
		return this._species
	}

	set species(val: string) {
		if (val.length > 3) {
			this._species = val
		} else {
			this._species = "potato"
		}
	}

	
	
}

let plt = new Plant()
console.log(plt.species)
plt.species = 'qw'
console.log(plt.species)
plt.species = 'shrub'
console.log(plt.species)

//Statics
class Helpers {
	static PI: number = 3.14;
	static calcCrcnf(dia: number) {
		return this.PI * dia
	}
}

console.log(2 * Helpers.PI)
console.log(Helpers.calcCrcnf(12))

//Abstract

abstract class Proj {
	projName: string = "Project 1",
	budget: number

	abstract changeName(name: string): void

	calcBudg(){
		return this.budget * 2
	}
}

class ITProj extends Proj {
	changeName(name: string) {
		this.projName = name
	}
}

let prj1 = new ITProj()

console.log(prj1)

prj1.changeName('Super Project')

console.log(prj1)

//exercises

class Car {
	name: string
	acceleration: number = 0

	constructor(name: string) {
		this.name = name
	}

	honk() {
		console.log('Toooooooot!')
	}

	accelerate(speed: number) {
		this.acceleration = 
		this.acceleration + speed
	}
}

let car = new Car('Audi')
car.honk()
console.log(car.acceleration)
car.accelerate(320)
console.log(car.acceleration)

class baseObject {
	width: number = 0
	length: number = 0

	setWidth(num: number) {
		this.width = num
	}

	setLength(num: number) {
		this.length = num
	}
}

class Rectangle extends baseObject {
	calcSize() {
		return this.width * this.length
	}
}

let rect = new Rectangle
rect.setWidth(5)
rect.setLength(2)
console.log(rect.calcSize())

class Pers extends Person {
	private _firstName: string = ""

	get firstName () {
		return this._firstName
	}

	set firstName(name: string) {
		if (name.length > 3) {
			this._firstName = name
		} else {
			this._firstName = ""
		}
	}
}

let poj = new Pers('ryan', 'dwon')

console.log(poj.firstName)
poj.firstName = "te"
console.log(poj.firstName)
poj.firstName = 'RyanDwon'
console.log(poj.firstName)
console.log(poj.usrname)
