class Person {
	name: string
	//only accessible within block scope
	private type: string
	//only accessible within block scope as well as any class or 
	//objects that inherit from this class
	protected color: string

	constructor(name: string, public usrname: string = 'shea') {
		this.name = name
	}
}

console.log(new Person('poat', 'jurd'))