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

//Arrays
function printAl<T>(arg: T[]) {
	arg.forEach((el) => console.log(el))
}

printAl(['pota', 'poat', 'poatot'])

const exo: <T>(dat: T) => T = bexo

console.log(exo<string>('frato'))

class SimMat<T extends number> {
	baseVal: T
	multVal: T

	calc(): number {
		return +this.baseVal * +this.multVal
	}
}

const simM = new SimMat<number>()
simM.baseVal = 23
simM.multVal = 32923
console.log(simM.calc())

