var bankAccount = {
    money: 2000,
    deposit: function (val) {
        return this.money;
    }
};
var myseld = {
    name: "Poat",
    bankAccnt: bankAccount,
    hobs: ['food', 'more food']
};
myseld.bankAccnt.deposit(2);
console.log(myseld);
function ply(val1, val2) {
    return val1 * val2;
}
console.log(ply(12, 7));
