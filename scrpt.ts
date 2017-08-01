function exho(data: any) {
	return data
}

console.log(exho('potato').length)
console.log(exho('poat'))
console.log(exho({name: string = "shea"}))

//BetGen

function bexo<T>(dat: T) {
	return dat
}

console.log(bexo('potato').length)
console.log(bexo<number>(231))
console.log(bexo({name: "shea"}))

//Built in Gens

const turs: Array<number> = [1.234, 345.34, 53425.4323]
