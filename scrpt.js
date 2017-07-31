function greet(person) {
    console.log("Hola, " + person.firstName);
}
function upName(person) {
    person.firstName = "poat";
}
var pers = {
    firstName: 'shea',
    age: 23,
    hols: function (lastName) {
        console.log("Hols " + this.firstName + ' ' + lastName);
    }
};
upName(pers);
greet(pers);
pers.hols('burd');
pers.word = 'word';
console.log(pers.word);
var myDoubFunc;
myDoubFunc = function (val1, val2) {
    return val1 * val2;
};
console.log(myDoubFunc(234, 54));
//# sourceMappingURL=scrpt.js.map