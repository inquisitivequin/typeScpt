var Person = (function () {
    function Person(name, usrname) {
        if (usrname === void 0) { usrname = 'shea'; }
        this.usrname = usrname;
        this.color = 'brown';
        this.name = name;
    }
    Person.prototype.getColor = function () {
        console.log(this.color);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var poat = new Person('Shea', 'Poat');
console.log(poat.name, poat.usrname);
poat.getColor();
poat.setType('Puppy');
//# sourceMappingURL=scrpt.js.map