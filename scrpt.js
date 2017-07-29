var double = function (val) { return val * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = 'shea'; }
    if (name === undefined) { }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log.apply(console, numbers);
var newArray = [55, 20].concat(numbers);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var _a = testResults;
console.log.apply(console, testResults);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
//# sourceMappingURL=scrpt.js.map