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