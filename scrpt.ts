type bunkMonk = { money: number, deposit: (val: number) => number }

let bankAccount: bunkMonk = {
	money: 2000,
	deposit: function (val: number): number{
		return this.money
	}
}

let myseld: {name: string, bankAccnt: bunkMonk, hobs: string[]} = {
	name: "Poat",
	bankAccnt: bankAccount,
	hobs: ['food', 'more food']
}

myseld.bankAccnt.deposit(2)

console.log(myseld)

//functions

function ply(val1: number, val2: number): number {
	return val1 * val2
}

console.log(ply(12,7))