let bankAccount: {money: number, deposit: (val:number) => val} = {
	money: 2000,
	depsoit: (val:number) => {
		return this.money += val
	}
}

let myseld = {
	name: "Poat",
	bankAccnt: bankAccount,
	hobs: ['food', 'more food']
}

myseld.bankAccnt.depsoit(2)

console.log(myseld)