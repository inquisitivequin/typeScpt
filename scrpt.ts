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