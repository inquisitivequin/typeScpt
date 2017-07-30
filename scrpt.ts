interface NamePers {
	firstName: string
	age?: number
}

function greet(person: NamePers) {
	console.log("Hola, " + person.firstName)
}

function upName(person: NamePers) {
	person.firstName = "poat"
}

const pers = {
	firstName: 'shea',
	age: 23
}

greet({firstName: 'jerd', age: 34})
upName(pers)
greet(pers)