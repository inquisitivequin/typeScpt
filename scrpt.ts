interface NamePers {
	firstName: string
	age?: number
	[porp: string]: any
	hols(lastName: string): void
}

function greet(person: NamePers) {
	console.log("Hola, " + person.firstName)
}

function upName(person: NamePers) {
	person.firstName = "poat"
}

const pers: NamePers = {
	firstName: 'shea',
	age: 23,
	hols(lastName: string) {
		console.log("Hols " + this.firstName + ' ' + lastName)
	}
}

//greet({firstName: 'jerd', age: 34})
upName(pers)
greet(pers)
pers.hols('burd')
pers.word = 'word'
console.log(pers.word)