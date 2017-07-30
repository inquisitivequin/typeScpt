function greet(person) {
    console.log("Hola, " + person.firstName);
}
function upName(person) {
    person.firstName = "poat";
}
var pers = {
    firstName: 'shea',
    age: 23
};
greet({ firstName: 'jerd', age: 34 });
upName(pers);
greet(pers);
//# sourceMappingURL=scrpt.js.map