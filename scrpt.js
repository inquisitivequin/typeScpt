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
//# sourceMappingURL=scrpt.js.map